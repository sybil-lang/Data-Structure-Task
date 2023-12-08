function firstNonRepeatingCharacter(str: string): string | null {
  const charCount: Map<string, number> = new Map();

  // Count the occurrences of each alphabetic character
  for (const char of str) {
      if (/[a-zA-Z]/.test(char)) {
          charCount.set(char, (charCount.get(char) || 0) + 1);
      }
  }

  // Find the first character with a count of 1
  for (const char of str) {
      if (/[a-zA-Z]/.test(char) && charCount.get(char) === 1) {
          return char;
      }
  }

  // If no non-repeating character is found
  return null;
}

// Example usage:
const inputString: string = "aabbccdefg";
const result: string | null = firstNonRepeatingCharacter(inputString);

if (result !== null) {
  console.log(`The first non-repeating character is: ${result}`);
} else {
  console.log("No non-repeating character found in the input string.");
}
