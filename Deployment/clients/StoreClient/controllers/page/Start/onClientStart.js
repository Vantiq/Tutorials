//find storeId from BurgerStore type
//

    //  Create an instance of the Http class to execute our server request
    //
    var http = new Http();

    //
    //  Build the URL needed to do a "select" on our Type
    //
    http.setVantiqUrlForResource("com.vantiq.ims.Store");

    //
    //  Add the Authorization header to the request
    //
    http.setVantiqHeaders();

    //
    //  Specify the (optional) query parameters
    //
    var parameters2 = {
       
    };

    //
    //  Execute the asynchronous server request. This expects 3 parameters:
    //
    //  parameters: "null" or an object containing the parameters for this request
    //  successCallback: A callback function that will be driven when the request completes
    //                   successfully (i.e. a status code of 2XX)
    //  failureCallback: A callback function that will be driven when the request does not complete
    //                   successfully.
    //
    http.select(parameters2,function(response)
    {
        if (response.length > 0) {
            client.data.storeId = response[0].storeId;
            client.data.productCount = response[0].productCount;
        } else {
            client.infoDialog("Please create a record of com.vantiq.ims.Store before running this client.");
        }
    },
    function(errors)
    {
        //
        //  This call will format the error into a popup dialog
        //
        client.showHttpErrors(errors,"Doing a select on 'com.vantiq.ims.Store'");
    });