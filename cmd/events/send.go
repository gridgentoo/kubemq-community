package events

import (
	"context"
	"fmt"
	"github.com/kubemq-io/kubemq-community/pkg/utils"
	"github.com/kubemq-io/kubemq-community/pkg/uuid"

	"github.com/kubemq-io/kubemq-community/config"
	"github.com/spf13/cobra"
)

type SendOptions struct {
	cfg      *config.Config
	channel  string
	body     string
	metadata string
	messages int
}

var eventsSendExamples = `
	# Send (Publish) body to a 'events' channel
	kubemq events send some-channel some-body
	
	# Send (Publish) body to a 'events' channel with metadata
	kubemq events send some-channel some-body --metadata some-metadata
	
	# Send (Publish) batch of 10 messages to a 'events' channel
	kubemq events send some-channel some-body -m 10

	# Send (Publish) batch of 100 messages to a 'events' channel in stream mode
	kubemq events send some-channel some-body -m 100 -s
`
var eventsSendLong = `Events send command allows to send (publish) one or many messages to an 'events' channel`
var eventsSendShort = `Events send messages to an 'events' channel command`

func NewCmdEventsSend(ctx context.Context, cfg *config.Config) *cobra.Command {
	o := &SendOptions{
		cfg: cfg,
	}
	cmd := &cobra.Command{

		Use:     "send",
		Aliases: []string{"s"},
		Short:   eventsSendShort,
		Long:    eventsSendLong,
		Example: eventsSendExamples,
		Run: func(cmd *cobra.Command, args []string) {
			ctx, cancel := context.WithCancel(ctx)
			defer cancel()
			utils.CheckErr(o.Complete(args), cmd)
			utils.CheckErr(o.Validate())
			utils.CheckErr(o.Run(ctx))
		},
	}
	cmd.PersistentFlags().StringVarP(&o.metadata, "metadata", "", "", "set body metadata field")
	cmd.PersistentFlags().IntVarP(&o.messages, "messages", "m", 1, "set how many 'events' messages to send")

	return cmd
}

func (o *SendOptions) Complete(args []string) error {
	if len(args) >= 1 {
		o.channel = args[0]

	} else {
		return fmt.Errorf("missing channel argument")
	}
	if len(args) >= 2 {
		o.body = args[1]
	} else {
		return fmt.Errorf("missing body argument")
	}
	return nil
}

func (o *SendOptions) Validate() error {
	return nil
}

func (o *SendOptions) Run(ctx context.Context) error {
	client, err := utils.GetKubeMQClient(ctx, o.cfg)
	if err != nil {
		return fmt.Errorf("create kubemq client, %s", err.Error())
	}

	defer func() {
		_ = client.Close()
	}()

	fmt.Println("Sending Events:")
	for i := 1; i <= o.messages; i++ {
		msg := client.E().
			SetChannel(o.channel).
			SetId(uuid.New()).
			SetBody([]byte(o.body)).
			SetMetadata(o.metadata)
		err = msg.Send(ctx)
		if err != nil {
			return fmt.Errorf("sending 'events' body, %s", err.Error())
		}
		printEvent(msg)
	}

	return nil
}
