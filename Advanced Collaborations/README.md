### Advanced Collaboration Tutorial

Enhance the Service created in the [Introduction to Collaboration Tutorial](/docs/system/tutorials/introcollaboration/index.html)
by utilizing more Collaboration features to create a real-world use case.

This project contains the patient.monitoringHeartRate Service which defines the MonitorReading Event Handler. 
This Event Handler detects when a patient has an unusual and dangerous heart rate. First, the patient is asked whether 
they are okay or require assistance. If the patient replies that they require assistance or does not reply within 90 seconds,
then an array of nearby first responders is computed. The closest responder is notified. If the responder does not reply
within 1 minute, the notification is retracted and the next nearest first responder is notified. When a first responder
replies, they are tracked until they reach the patient's location and the collaboration completes. If none of the first 
responders reply to the notification, the collaboration fails.

To run this locally, first navigate to Show -> Find Records
and search for all instances of the FirstResponder Type. Update each instances username property with your username.
You can find your username by clicking the "user" icon (next to the Namespace name) in the banner at the top of the 
browser. Next, update the patient.monitoring.HeartRate.generateHeartRate Procedure with the coordinates for your
current location. You can find your exact latitude and longitude here: https://www.latlong.net/.


For more information on the Advanced Collaboration Tutorial, check out the documentation [here](/docs/system/tutorials/advancedcollaborations/index.html).
