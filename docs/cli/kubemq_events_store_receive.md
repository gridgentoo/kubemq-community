## kubemq events_store receive

Events-Store receive a messages from an 'events store'

### Synopsis

Events-Store receive (Subscribe) command allows to consume messages from an 'events store' with options to set offset
parameters

```
kubemq events_store receive [flags]
```

### Examples

```

	# Receive messages from an 'events store' channel (blocks until next body)
	kubemq events_store receive some-channel

	# Receive messages from an 'events channel' with group(blocks until next body)
	kubemq events_store receive some-channel -g G1

```

### Options

```
  -g, --group string            set 'events_store' channel consumer group (load balancing)
  -h, --help                    help for receive
      --start-duration string   start from time duration i.e. 1h
      --start-first             start from first body in the channel
      --start-last              start from last body in the channel
      --start-new               start from new body only
      --start-sequence int      start from body sequence
      --start-time string       start from timestamp format 2006-01-02 15:04:05
```

### SEE ALSO

* [kubemq events_store](kubemq_events_store.md)     - Execute Kubemq 'Events-Store' Pub/Sub commands

###### Auto generated by spf13/cobra on 21-Aug-2021
