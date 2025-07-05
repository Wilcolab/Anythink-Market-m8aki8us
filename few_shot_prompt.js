/**
 * Convert strings to camelCase format
 * 
 * Examples:
 * first name → firstName
 * user_id → userId
 * SCREEN_NAME → screenName
 * mobile-number → mobileNumber
 */

function toCamelCase(str) {
    if (!str || typeof str !== 'string') {
        return '';
    }
    
    // Split the string by spaces, underscores, hyphens, and other non-alphanumeric characters
    const words = str
        .toLowerCase()
        .split(/[\s_-]+/)
        .filter(word => word.length > 0);
    
    if (words.length === 0) {
        return '';
    }
    
    // First word stays lowercase, capitalize first letter of subsequent words
    return words
        .map((word, index) => {
            if (index === 0) {
                return word;
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

// Test cases based on the provided examples
console.log(toCamelCase("first name"));      // Output: "firstName"
console.log(toCamelCase("user_id"));         // Output: "userId"
console.log(toCamelCase("SCREEN_NAME"));     // Output: "screenName"
console.log(toCamelCase("mobile-number"));   // Output: "mobileNumber"

// Additional test cases
console.log(toCamelCase("hello world test")); // Output: "helloWorldTest"
console.log(toCamelCase("API_KEY_VALUE"));    // Output: "apiKeyValue"
console.log(toCamelCase(""));                 // Output: ""
console.log(toCamelCase("singleword"));       // Output: "singleword"