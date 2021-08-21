## kubemq commands attach

Command attach to 'commands' channels command

### Synopsis

Command attach command allows to display 'commands' channel content for debugging proposes

```
kubemq commands attach [flags]
```

### Examples

```

	# attach to all commands channels and output running messages
	kubemq commands attach *
	
	# attach to some-commands 'commands' channel and output running messages
	kubemq commands attach some-commands

	# attach to some-commands1 and some-commands2 'commands' channels and output running messages
	kubemq commands attach some-commands1 some-commands2 

	# attach to some-commands 'commands' channel and output running messages filter by include regex (some*)
	kubemq commands attach some-commands -i some*

	# attach to some-commands 'commands' channel and output running messages filter by exclude regex (not-some*)
	kubemq commands attach some-commands -e not-some*

```

### Options

```
  -e, --exclude stringArray   Set (regex) strings to exclude
  -h, --help                  help for attach
  -i, --include stringArray   Set (regex) strings to include
```

### SEE ALSO

* [kubemq commands](kubemq_commands.md)	 - Execute Kubemq 'commands'

###### Auto generated by spf13/cobra on 21-Aug-2021