/**
 * STEP 1: Basic Validation Function
 */
function validateStringInput(input) {
    if (input === null) {
        return { isValid: false, message: "Input cannot be null" };
    }
    if (input === undefined) {
        return { isValid: false, message: "Input cannot be undefined" };
    }
    if (typeof input !== "string") {
        return { isValid: false, message: `Input must be a string, received ${typeof input}` };
    }
    return { isValid: true, message: "" };
}

/**
 * STEP 2: Word Splitting Function
 */
function splitIntoWords(input) {
    const validation = validateStringInput(input);
    if (!validation.isValid) {
        throw new Error(validation.message);
    }
    if (input.trim() === "") {
        return [];
    }
    // Insert space before uppercase letters (for camelCase/PascalCase)
    let spaced = input.replace(/([a-z])([A-Z])/g, "$1 $2");
    // Split by spaces, underscores, hyphens
    let words = spaced
        .split(/[\s_-]+/)
        .map(word => word.toLowerCase())
        .filter(word => word.length > 0);
    return words;
}

/**
 * STEP 3: Main Conversion Function
 */
function toKebabCase(input) {
    const validation = validateStringInput(input);
    if (!validation.isValid) {
        throw new Error(validation.message);
    }
    if (input.trim() === "") {
        return "";
    }
    const words = splitIntoWords(input);
    return words.join("-");
}

/**
 * STEP 4: Wrapper Function - Chain all steps
 */
function validateSplitKebab(input) {
    const validation = validateStringInput(input);
    if (!validation.isValid) {
        throw new Error(validation.message);
    }
    const words = splitIntoWords(input);
    const kebab = words.join("-");
    return kebab;
}

// Example usage
// console.log(validateStringInput("hello")); // {isValid: true, message: ""}
// console.log(validateStringInput(null));    // {isValid: false, message: "Input cannot be null"}
// console.log(splitIntoWords("firstName"));  // ["first", "name"]
// console.log(toKebabCase("SCREEN NAME"));   // "screen-name"
// console.log(validateSplitKebab("SCREEN NAME")); // "screen-name"