### Introduction to VANTIQ Development
The Engine Monitor tutorial walks through developing and testing a Vantiq Service to monitor the speed and temperature of an engine. 
The SpeedEvent and TempEvent Inbound Event Types are implemented with Visual Event Handlers to process the stream of sensor readings and 
detect malfunction conditions in the engine. Outbound EngineMalfunction Events are produced if a malfunction is detected. A Client is used
to visualize the data and display any alerts as they occur.
Use the Event Generator to simulate sensor events.

For more information on the Engine Monitor Tutorial, check out the documentation [here](/docs/system/tutorials/tutorial.md).
