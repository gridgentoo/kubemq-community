## kubemq queues receive

Queues receive a messages from a queue channel command

### Synopsis

Queues receive command allows to receive one or many messages from a queue channel

```
kubemq queues receive [flags]
```

### Examples

```

	# Receive 1 messages from a queue channel q1 and wait for 2 seconds (default)
	kubemq queue receive q1

	# Receive 3 messages from a queue channel and wait for 5 seconds
	kubemq queue receive q1 -m 3 -t 5

	# Watching 'queues' channel messages
	kubemq queue receive q1 -w

```

### Options

```
  -h, --help               help for receive
  -m, --messages int       set how many messages we want to get from a queue (default 1)
  -t, --wait-timeout int   set how many seconds to wait for 'queues' messages (default 2)
  -w, --watch              set watch on 'queues' channel
```

### SEE ALSO

* [kubemq queues](kubemq_queues.md)     - Execute Kubemq 'queues' commands

###### Auto generated by spf13/cobra on 21-Aug-2021
