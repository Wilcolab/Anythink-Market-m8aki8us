/**
 * Converts a given string to camelCase format.
 *
 * Handles various input formats such as space-separated, snake_case, kebab-case, and SCREAMING_SNAKE_CASE.
 * Throws descriptive errors for invalid inputs, such as strings without alphabetic characters, null, undefined, or non-string types.
 *
 * @function
 * @param {string} str - The input string to convert to camelCase.
 * @returns {string} The camelCase formatted string.
 * @throws {Error} If the input is null, undefined, not a string, or contains no alphabetic characters.
 *
 * @example
 * toCamelCase("first name");      // returns "firstName"
 * toCamelCase("user_id");         // returns "userId"
 * toCamelCase("SCREEN_NAME");     // returns "screenName"
 * toCamelCase("mobile-number");   // returns "mobileNumber"
 * toCamelCase("");                // returns ""
 * toCamelCase("hello123world");   // returns "hello123world"
 *
 * @example <caption>Invalid input</caption>
 * toCamelCase("03");              // throws Error
 * toCamelCase(null);              // throws Error
 * toCamelCase(42);                // throws Error
 */

/**
 * Converts a given string to dot.case format.
 *
 * Handles various input formats such as space-separated, snake_case, kebab-case, camelCase, PascalCase, and SCREAMING_SNAKE_CASE.
 * Throws descriptive errors for invalid inputs, such as strings without alphabetic characters, null, undefined, or non-string types.
 *
 * @function
 * @param {string} str - The input string to convert to dot.case.
 * @returns {string} The dot.case formatted string.
 * @throws {Error} If the input is null, undefined, not a string, or contains no alphabetic characters.
 *
 * @example
 * toDotCase("first name");        // returns "first.name"
 * toDotCase("user_id");           // returns "user.id"
 * toDotCase("SCREEN_NAME");       // returns "screen.name"
 * toDotCase("mobile-number");     // returns "mobile.number"
 * toDotCase("camelCaseText");     // returns "camel.case.text"
 * toDotCase("PascalCaseText");    // returns "pascal.case.text"
 * toDotCase("");                  // returns ""
 * toDotCase("hello123world");     // returns "hello123world"
 *
 * @example <caption>Invalid input</caption>
 * toDotCase("03");                // throws Error
 * toDotCase(null);                // throws Error
 * toDotCase([]);                  // throws Error
 */
 
/* Convert strings to camelCase format with comprehensive error handling
 * 
 * Valid examples:
 * first name → firstName
 * user_id → userId
 * SCREEN_NAME → screenName
 * mobile-number → mobileNumber
 * 
 * Invalid inputs like "03" will throw descriptive errors
 */

function toCamelCase(str) {
    // Handle null, undefined, and non-string inputs
    if (str === null || str === undefined) {
        throw new Error('Input cannot be null or undefined');
    }
    
    if (typeof str !== 'string') {
        throw new Error(`Input must be a string, received ${typeof str}`);
    }
    
    // Handle empty string
    if (str.trim() === '') {
        return '';
    }
    
    // Check if string contains only non-alphabetic characters (like numbers, symbols)
    const hasAlphabeticChars = /[a-zA-Z]/.test(str);
    if (!hasAlphabeticChars) {
        throw new Error(`Invalid input: "${str}" contains no alphabetic characters. camelCase conversion requires at least one letter.`);
    }
    
    // Split the string by spaces, underscores, hyphens, and other non-alphanumeric characters
    // Keep only words that contain at least one letter
    const words = str
        .toLowerCase()
        .split(/[\s_-]+/)
        .filter(word => word.length > 0 && /[a-zA-Z]/.test(word));
    
    if (words.length === 0) {
        throw new Error(`Invalid input: "${str}" does not contain any valid words for camelCase conversion`);
    }
    
    // First word stays lowercase, capitalize first letter of subsequent words
    return words
        .map((word, index) => {
            // Remove any remaining non-alphanumeric characters and keep only letters and numbers
            const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
            
            if (cleanWord.length === 0) {
                return '';
            }
            
            if (index === 0) {
                return cleanWord;
            }
            return cleanWord.charAt(0).toUpperCase() + cleanWord.slice(1);
        })
        .filter(word => word.length > 0)
        .join('');
}

/**
 * Convert strings to dot.case format with comprehensive error handling
 * 
 * Valid examples:
 * first name → first.name
 * user_id → user.id
 * SCREEN_NAME → screen.name
 * mobile-number → mobile.number
 * camelCaseText → camel.case.text
 * 
 * Invalid inputs like "03" will throw descriptive errors
 */

function toDotCase(str) {
    // Handle null, undefined, and non-string inputs
    if (str === null || str === undefined) {
        throw new Error('Input cannot be null or undefined');
    }
    
    if (typeof str !== 'string') {
        throw new Error(`Input must be a string, received ${typeof str}`);
    }
    
    // Handle empty string
    if (str.trim() === '') {
        return '';
    }
    
    // Check if string contains only non-alphabetic characters (like numbers, symbols)
    const hasAlphabeticChars = /[a-zA-Z]/.test(str);
    if (!hasAlphabeticChars) {
        throw new Error(`Invalid input: "${str}" contains no alphabetic characters. dot.case conversion requires at least one letter.`);
    }
    
    // First handle camelCase/PascalCase by inserting dots before uppercase letters
    let result = str.replace(/([a-z])([A-Z])/g, '$1.$2');
    
    // Split by spaces, underscores, hyphens, and other non-alphanumeric characters
    const words = result
        .toLowerCase()
        .split(/[\s_.-]+/)
        .filter(word => word.length > 0 && /[a-zA-Z]/.test(word))
        .map(word => word.replace(/[^a-zA-Z0-9]/g, ''))
        .filter(word => word.length > 0);
    
    if (words.length === 0) {
        throw new Error(`Invalid input: "${str}" does not contain any valid words for dot.case conversion`);
    }
    
    return words.join('.');
}


// Test cases with valid inputs
try {
    console.log(toCamelCase("first name"));      // Output: "firstName"
    console.log(toCamelCase("user_id"));         // Output: "userId"
    console.log(toCamelCase("SCREEN_NAME"));     // Output: "screenName"
    console.log(toCamelCase("mobile-number"));   // Output: "mobileNumber"
    console.log(toCamelCase(""));                // Output: ""
    console.log(toCamelCase("hello123world"));   // Output: "hello123world"
} catch (error) {
    console.error('Unexpected error:', error.message);
}

// Test cases with invalid inputs that should throw errors
const invalidInputs = ["03", "123", "!@#", null, undefined, 42, [], {}];

invalidInputs.forEach(input => {
    try {
        console.log(`Testing invalid input: ${input}`);
        toCamelCase(input);
        console.log('ERROR: Should have thrown an error!');
    } catch (error) {
        console.log(`✓ Correctly threw error: ${error.message}`);
    }
});

// Test cases with valid inputs for dot.case
console.log('\n--- Dot Case Function Tests ---');
try {
    console.log(toDotCase("first name"));        // Output: "first.name"
    console.log(toDotCase("user_id"));           // Output: "user.id"
    console.log(toDotCase("SCREEN_NAME"));       // Output: "screen.name"
    console.log(toDotCase("mobile-number"));     // Output: "mobile.number"
    console.log(toDotCase("camelCaseText"));     // Output: "camel.case.text"
    console.log(toDotCase("PascalCaseText"));    // Output: "pascal.case.text"
    console.log(toDotCase(""));                  // Output: ""
    console.log(toDotCase("hello123world"));     // Output: "hello123world"
} catch (error) {
    console.error('Unexpected error:', error.message);
}

// Test cases with invalid inputs for dot.case
console.log('\n--- Dot Case Error Handling Tests ---');
invalidInputs.forEach(input => {
    try {
        console.log(`Testing invalid input: ${input}`);
        toDotCase(input);
        console.log('ERROR: Should have thrown an error!');
    } catch (error) {
        console.log(`✓ Correctly threw error: ${error.message}`);
    }
});