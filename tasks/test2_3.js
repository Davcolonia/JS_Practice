function general(message){
let normal = message.trim();
let trimmed = normal.toLowerCase();
let category = "GENERAL"

if(trimmed.includes("timeout")) {
category = "TIMEOUT"; 
} else if(trimmed.includes("locator")){
category = "LOCATOR"
    }

return "Normalized: "+ trimmed + " | " + "Category: "+category;
   
}



