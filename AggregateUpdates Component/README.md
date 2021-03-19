### AggregateUpdates Component Tutorial
The Component Tutorial demonstrates how to create a Component from scratch. The AggregateUpdates Component is a general
rate limitter. For a given Type, inbound events are split using the Type's natural key. The most recent value for each key
is cached and then written to the database at a maximum frequency provided by the user.

The AggregateUpdates Component is used to replace the UpdateSystemStatus task in the EngineMonitor App created in the
[Introductory Tutorial](/docs/system/tutorials/tutorial/index.html) to increase its efficiency.

For more information on the Component Tutorial, check out the documentation [here](/docs/system/tutorials/components/index.html).

For more information on Components, check out the documentation [here](/docs/system/apps.md/index.html#components)
