    if (!client.data.storeId) {
        client.infoDialog("Please create a record of com.vantiq.ims.Store before running this client.");
        return;
    }

    //client.data.productCount = client.data.productCount -1;

    //  Publish to inbound event 'orderProduct' of Service 'com.vantiq.ims.StoreService'
    //
    //  input event for ordering products from the DeplymentClient UI.
    //
    var args = {
        "orderAmount": 1,       // Integer
        "storeId": client.data.storeId  // String
    };
    client.publishToServiceEvent(args, "com.vantiq.ims.StoreService", "orderProduct", 
    function(response){});


