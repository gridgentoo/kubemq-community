## kubemq events_store

Execute Kubemq 'Events-Store' Pub/Sub commands

### Synopsis

Execute Kubemq 'Events-Store' Pub/Sub commands

```
kubemq events_store [flags]
```

### Examples

```

	# Execute send 'events store' command 
	kubemq events_store send

	# Execute receive 'events store' command
	kubemq events_store receive

	# Execute attach to 'events store' command
	 kubemq events_store attach

	# Execute list of 'events store' channels command
 	kubemq events_store list

```

### Options

```
  -h, --help   help for events_store
```

### SEE ALSO

* [kubemq](kubemq.md)     -
* [kubemq events_store attach](kubemq_events_store_attach.md)     - Events-Store attach to events store channels command
* [kubemq events_store list](kubemq_events_store_list.md)     - Events-Store list of 'events store' channels
* [kubemq events_store receive](kubemq_events_store_receive.md)     - Events-Store receive a messages from an 'events
  store'
* [kubemq events_store send](kubemq_events_store_send.md)     - Events-Store send messages to an 'events store' channel
  command

###### Auto generated by spf13/cobra on 21-Aug-2021
