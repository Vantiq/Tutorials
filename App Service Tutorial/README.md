### App Service Tutorial

The Using App Services Tutorial walks through the creation of a simple app shown below.

The app starts from the EngineMonitor app built as part of the Introductory Tutorial.  From there we demonstrate how the use of service event types can decouple the Client from the App and then we update the App to the form shown here.

To test the app out, start the event generator. When the event generator starts, you should see badges appear over each task indicating the execution count for each task.

As data flows through the app, you'll notice events show up in real time in the EngineStatus subscription to the right of the app. This shows the event data sent to the HUD in real time. To view the raw output of any task in the app, right click on any of the tasks and select "View Task Events", which will open a subscription pane that shows each event as it flows out of the task.

Below the app you should see a client which visualizes different pieces of the simulation. When the event generator, app and client are all running you should see line charts in the client showing the independently changing speed and temperature readings, as well as gauges showing the most recent values and a pie chart showing the ratios of the different alert messages.

Pause the client using the pause button in the title bar and click on any of the widgets or view the Data Streams to learn more about the client implementation.

For more information on the App Service Tutorial, check out the documentation [here](/docs/system/tutorials/appservices.md).
