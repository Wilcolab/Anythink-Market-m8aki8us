/**
 * PROMPT: Create a function that converts strings to camelCase format
 * 
 * Write a JavaScript function called `toCamelCase` that takes a string as input
 * and converts it to camelCase format. The function should:
 * 
 * - Remove spaces, hyphens, underscores, and other non-alphanumeric characters
 * - Convert the first letter to lowercase
 * - Capitalize the first letter of each subsequent word
 * - Return the converted string
 * 
 * The function should handle various input formats including:
 * - Space-separated words: "hello world" → "helloWorld"
 * - Hyphen-separated words: "hello-world" → "helloWorld"  
 * - Underscore-separated words: "hello_world" → "helloWorld"
 * - Mixed formats: "Hello World-test_case" → "helloWorldTestCase"
 * - Already camelCase: "helloWorld" → "helloWorld"
 * - PascalCase: "HelloWorld" → "helloWorld"
 * 
 * Example usage:
 * console.log(toCamelCase("user name")); // Output: "userName"
 * console.log(toCamelCase("first-name")); // Output: "firstName"
 * console.log(toCamelCase("email_address")); // Output: "emailAddress"
 * 
 * Your function should be robust and handle edge cases like empty strings,
 * strings with multiple consecutive separators, and strings that start or end
 * with separators.
 */