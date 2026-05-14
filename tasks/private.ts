export class APIClient { 
    public baseURL: string;
    private apikey: string;
    protected timeout: number;

    constructor(baseURL: string, apiKey: string, timeout: number){
        this.baseURL = baseURL;
        this.apikey = apiKey;
        this.timeout = timeout;
    } 

    private getAuthHeader(): string{
        return "Bearer: " + this.apikey;
    }

    protected sentRequest(path: string): void{
        console.log("Get: " + this.baseURL + path)
        console.log("Auth: " + this.getAuthHeader())
        console.log("Timeout: " + this.timeout + "ms")
    }
}

// import { APIClient } from "./private.js";

// const client = new APIClient(
//     "https://api.test.com",
//     "abc123",
//     5000
// );

// console.log(client.baseURL); 

// console.log(client.timeout); 
// client.sentRequest("/users"); 

           
// TSError: ⨯ Unable to compile TypeScript:
// private2.ts:11:20 - error TS2445: Property 'timeout' is protected and only accessible within class 'APIClient' and its subclasses.

// 11 console.log(client.timeout); // ❌ ERROR
//                       ~~~~~~~
// private2.ts:12:8 - error TS2445: Property 'sentRequest' is protected and only accessible within class 'APIClient' and its subclasses.

// 12 client.sentRequest("/users"); // ❌ ERROR
//           ~~~~~~~~~~~
