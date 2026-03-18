function validateStatus(status){
if (status >= 200 && status <= 300){
    console.log("Pass")
}
}

validateStatus(200);