function placeOrder(item, callback){
    console.log("Placing Order");
    callback();
}

function print(){
    console.log("callback - Done with the order");
}

placeOrder("Burger", print);



