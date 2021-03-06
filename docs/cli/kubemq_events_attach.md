## kubemq events attach

Events attach to 'events' channels command

### Synopsis

Events attach command allows to display 'events' channel content for debugging proposes

```
kubemq events attach [flags]
```

### Examples

```

	# attach to all 'events' channels and output running messages
	kubemq events attach *
	
	# attach to some-events 'events' channel and output running messages
	kubemq events attach some-events

	# attach to some-events1 and some-events2 'events' channels and output running messages
	kubemq events attach some-events1 some-events2 

	# attach to some-events 'events' channel and output running messages filter by include regex (some*)
	kubemq events attach some-events -i some*

	# attach to some-events 'events' channel and output running messages filter by exclude regex (not-some*)
	kubemq events attach some-events -e not-some*

```

### Options

```
  -e, --exclude stringArray   set (regex) strings to exclude
  -h, --help                  help for attach
  -i, --include stringArray   set (regex) strings to include
```

### SEE ALSO

* [kubemq events](kubemq_events.md)     - Execute Kubemq 'events' Pub/Sub commands

###### Auto generated by spf13/cobra on 21-Aug-2021
