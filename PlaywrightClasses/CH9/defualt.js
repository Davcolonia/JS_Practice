function retry(testName, maxRetries=3, delay=1000){
    console.log(`Retruing ${testName}: up to ${maxRetries} times, ${delay} apart`)
}
retry("login")
retry("checkout", 5)
retry("API TEST", 2, 500)