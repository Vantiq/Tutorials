if ( data.productCount > client.data.productCount) {
    alert((data.productCount - client.data.productCount)+" more products have arrived.");
}
client.data.productCount = data.productCount;