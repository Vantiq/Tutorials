function varDefined(v){ return (v !== null && v !== undefined);}
if(!varDefined(com)) { var com = {}; }
if(!varDefined(com.vantiq)) { com.vantiq = {}; }
if(!varDefined(com.vantiq.engines)) { com.vantiq.engines = {}; }
if(!varDefined(com.vantiq.engines.EngineMonitor)) { com.vantiq.engines.EngineMonitor = {}; }
com.vantiq.engines.EngineMonitor.DetectMalfunction_UpdateTempAndSpeedStateGet = function (partitionKey, successCallback, failureCallback) {
    var procedureName = "com.vantiq.engines.EngineMonitor.DetectMalfunction_UpdateTempAndSpeedStateGet";
    //
    //  Create an instance of the Http class to execute our server request
    //
    var http = new Http();

    //
    //  Build the URL needed to do an "execute" of a Procedure
    //
    http.setVantiqUrlForSystemResource("procedures");

    //
    //  Add the Authorization header to the request
    //
    http.setVantiqHeaders();

    //
    //  Set the Procedure arguments by name. (You may also specify 'args' as an array where the
    //  parameters are given in the same order as in the Procedure definition (e.g. 'args = [10,20];').
    //  'args' must not be null.
    //
    var args = {partitionKey:partitionKey};

    //
    //  Execute the asynchronous server request. This expects 4 parameters:
    //
    //  procedureArguments: The procedure arguments.
    //  procedureName:      The fully-qualified name of the Procedure.
    //  successCallback:    A callback function that will be driven when the request completes
    //                      successfully (i.e. a status code of 2XX)
    //  failureCallback:    A callback function that will be driven when the request does not complete
    //                      successfully.
    //
    http.execute(args, procedureName ,function(response)
        {
            //
            //  At this point "response" is results of the Procedure call
            //
            if (successCallback) {
                successCallback(response);
            }
        },
        function(errors)
        {
            if (failureCallback) {
                failureCallback(errors)
            } else {
                var errorMsg = "Procedure "+procedureName+" returned error: ";
                var myClient = new Client();
                if (errors.data && (errors.data.length>0)) {
                    myClient.errorDialog(errorMsg+errors.data[0].message);
                } else {
                    myClient.errorDialog(errorMsg+JSON.stringify(errors));
                }
            }
        });
};

com.vantiq.engines.EngineMonitor.DetectMalfunction_UpdateTempAndSpeedStateReset = function (partitionKey, successCallback, failureCallback) {
    var procedureName = "com.vantiq.engines.EngineMonitor.DetectMalfunction_UpdateTempAndSpeedStateReset";
    //
    //  Create an instance of the Http class to execute our server request
    //
    var http = new Http();

    //
    //  Build the URL needed to do an "execute" of a Procedure
    //
    http.setVantiqUrlForSystemResource("procedures");

    //
    //  Add the Authorization header to the request
    //
    http.setVantiqHeaders();

    //
    //  Set the Procedure arguments by name. (You may also specify 'args' as an array where the
    //  parameters are given in the same order as in the Procedure definition (e.g. 'args = [10,20];').
    //  'args' must not be null.
    //
    var args = {partitionKey:partitionKey};

    //
    //  Execute the asynchronous server request. This expects 4 parameters:
    //
    //  procedureArguments: The procedure arguments.
    //  procedureName:      The fully-qualified name of the Procedure.
    //  successCallback:    A callback function that will be driven when the request completes
    //                      successfully (i.e. a status code of 2XX)
    //  failureCallback:    A callback function that will be driven when the request does not complete
    //                      successfully.
    //
    http.execute(args, procedureName ,function(response)
        {
            //
            //  At this point "response" is results of the Procedure call
            //
            if (successCallback) {
                successCallback(response);
            }
        },
        function(errors)
        {
            if (failureCallback) {
                failureCallback(errors)
            } else {
                var errorMsg = "Procedure "+procedureName+" returned error: ";
                var myClient = new Client();
                if (errors.data && (errors.data.length>0)) {
                    myClient.errorDialog(errorMsg+errors.data[0].message);
                } else {
                    myClient.errorDialog(errorMsg+JSON.stringify(errors));
                }
            }
        });
};

com.vantiq.engines.EngineMonitor.DetectMalfunction_UpdateTempAndSpeedStateUpdate = function (partitionKey, event, successCallback, failureCallback) {
    var procedureName = "com.vantiq.engines.EngineMonitor.DetectMalfunction_UpdateTempAndSpeedStateUpdate";
    //
    //  Create an instance of the Http class to execute our server request
    //
    var http = new Http();

    //
    //  Build the URL needed to do an "execute" of a Procedure
    //
    http.setVantiqUrlForSystemResource("procedures");

    //
    //  Add the Authorization header to the request
    //
    http.setVantiqHeaders();

    //
    //  Set the Procedure arguments by name. (You may also specify 'args' as an array where the
    //  parameters are given in the same order as in the Procedure definition (e.g. 'args = [10,20];').
    //  'args' must not be null.
    //
    var args = {partitionKey:partitionKey, event:event};

    //
    //  Execute the asynchronous server request. This expects 4 parameters:
    //
    //  procedureArguments: The procedure arguments.
    //  procedureName:      The fully-qualified name of the Procedure.
    //  successCallback:    A callback function that will be driven when the request completes
    //                      successfully (i.e. a status code of 2XX)
    //  failureCallback:    A callback function that will be driven when the request does not complete
    //                      successfully.
    //
    http.execute(args, procedureName ,function(response)
        {
            //
            //  At this point "response" is results of the Procedure call
            //
            if (successCallback) {
                successCallback(response);
            }
        },
        function(errors)
        {
            if (failureCallback) {
                failureCallback(errors)
            } else {
                var errorMsg = "Procedure "+procedureName+" returned error: ";
                var myClient = new Client();
                if (errors.data && (errors.data.length>0)) {
                    myClient.errorDialog(errorMsg+errors.data[0].message);
                } else {
                    myClient.errorDialog(errorMsg+JSON.stringify(errors));
                }
            }
        });
};

com.vantiq.engines.EngineMonitor.generateAlertMessage = function (systemId, sensorEvent, maxSpeed, maxTemp, successCallback, failureCallback) {
    var procedureName = "com.vantiq.engines.EngineMonitor.generateAlertMessage";
    //
    //  Create an instance of the Http class to execute our server request
    //
    var http = new Http();

    //
    //  Build the URL needed to do an "execute" of a Procedure
    //
    http.setVantiqUrlForSystemResource("procedures");

    //
    //  Add the Authorization header to the request
    //
    http.setVantiqHeaders();

    //
    //  Set the Procedure arguments by name. (You may also specify 'args' as an array where the
    //  parameters are given in the same order as in the Procedure definition (e.g. 'args = [10,20];').
    //  'args' must not be null.
    //
    var args = {systemId:systemId, sensorEvent:sensorEvent, maxSpeed:maxSpeed, maxTemp:maxTemp};

    //
    //  Execute the asynchronous server request. This expects 4 parameters:
    //
    //  procedureArguments: The procedure arguments.
    //  procedureName:      The fully-qualified name of the Procedure.
    //  successCallback:    A callback function that will be driven when the request completes
    //                      successfully (i.e. a status code of 2XX)
    //  failureCallback:    A callback function that will be driven when the request does not complete
    //                      successfully.
    //
    http.execute(args, procedureName ,function(response)
        {
            //
            //  At this point "response" is results of the Procedure call
            //
            if (successCallback) {
                successCallback(response);
            }
        },
        function(errors)
        {
            if (failureCallback) {
                failureCallback(errors)
            } else {
                var errorMsg = "Procedure "+procedureName+" returned error: ";
                var myClient = new Client();
                if (errors.data && (errors.data.length>0)) {
                    myClient.errorDialog(errorMsg+errors.data[0].message);
                } else {
                    myClient.errorDialog(errorMsg+JSON.stringify(errors));
                }
            }
        });
};

com.vantiq.engines.EngineMonitor.writeEngineStatus = function (successCallback, failureCallback) {
    var procedureName = "com.vantiq.engines.EngineMonitor.writeEngineStatus";
    //
    //  Create an instance of the Http class to execute our server request
    //
    var http = new Http();

    //
    //  Build the URL needed to do an "execute" of a Procedure
    //
    http.setVantiqUrlForSystemResource("procedures");

    //
    //  Add the Authorization header to the request
    //
    http.setVantiqHeaders();

    //
    //  Set the Procedure arguments by name. (You may also specify 'args' as an array where the
    //  parameters are given in the same order as in the Procedure definition (e.g. 'args = [10,20];').
    //  'args' must not be null.
    //
    var args = {};

    //
    //  Execute the asynchronous server request. This expects 4 parameters:
    //
    //  procedureArguments: The procedure arguments.
    //  procedureName:      The fully-qualified name of the Procedure.
    //  successCallback:    A callback function that will be driven when the request completes
    //                      successfully (i.e. a status code of 2XX)
    //  failureCallback:    A callback function that will be driven when the request does not complete
    //                      successfully.
    //
    http.execute(args, procedureName ,function(response)
        {
            //
            //  At this point "response" is results of the Procedure call
            //
            if (successCallback) {
                successCallback(response);
            }
        },
        function(errors)
        {
            if (failureCallback) {
                failureCallback(errors)
            } else {
                var errorMsg = "Procedure "+procedureName+" returned error: ";
                var myClient = new Client();
                if (errors.data && (errors.data.length>0)) {
                    myClient.errorDialog(errorMsg+errors.data[0].message);
                } else {
                    myClient.errorDialog(errorMsg+JSON.stringify(errors));
                }
            }
        });
};

