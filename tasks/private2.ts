import { APIClient } from "./private";

const client = new APIClient(
    "https://api.test.com",
    "abc123",
    5000
);

console.log(client.baseURL); // ✅ Works

console.log(client.timeout); // ❌ ERROR
client.sentRequest("/users"); // ❌ ERROR