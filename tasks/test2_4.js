function browser(all_browser, blocked_browser){
let runned = []
let blocked = []
const statement = {
    runnable: [runned],
    blocked: [blocked],

};

for(browser in all_browser){
    if(blocked.includes(browser)){
        blocked.push(browser);
    } else {
        runned.push(browser);
    }
    
}
return statement;

}