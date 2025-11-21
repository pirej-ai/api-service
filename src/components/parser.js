// api-service/parser.js

/**
 * Parses a JSON string and handles potential errors gracefully.
 *
 * @param {string} jsonString The JSON string to parse.
 * @returns {object|null} The parsed JSON object, or null if parsing fails.
 */
function parseJson(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    // Log the error for debugging purposes.
    console.error("Error parsing JSON:", error.message);
    return null;
  }
}

/**
 * Parses a query string into a JavaScript object.
 *
 * @param {string} queryString The query string to parse (e.g., "key1=value1&key2=value2").
 * @returns {object} An object representing the parsed query parameters.
 */
function parseQueryString(queryString) {
  const params = {};
  if (!queryString) {
    return params;
  }

  const keyValuePairs = queryString.split('&');

  for (const keyValuePair of keyValuePairs) {
    const [key, value] = keyValuePair.split('=').map(decodeURIComponent);
    if (key) {
      params[key] = value || ''; // Handle cases where the value is missing
    }
  }

  return params;
}

/**
 * Validates if the input is a valid email address.
 *
 * @param {string} email The email address to validate.
 * @returns {boolean} True if the email is valid, false otherwise.
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

module.exports = {
  parseJson,
  parseQueryString,
  isValidEmail,
};