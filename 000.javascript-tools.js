//GENERATE RANDOM PASSWORD
const generateRandomPassword = (length) => Array.from({length}, () => Math.random().toString(36).charAt(2)).join("");

console.log(generateRandomPassword(10));

//CHECK VALID URL
const isValidUrl = (url) => {
    try{
        new URL(url);
        return true;
    }
    catch{
        return false;
    }
}
console.log(isValidUrl("https://www.flipkart.com/"));

//CHECK VALID EMAIL
const isValidEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)

console.log(isValidEmail("abc@gmail.com"));

