function findOddOccurringElements(arr: number[]): void {
    if (arr.length < 2) {
        console.log("Insufficient elements in the array.");
        return;
    }

    let xorResult = arr.reduce((acc, num) => acc ^ num, 0);

    // Find the rightmost set bit
    let rightmostSetBit = xorResult & -xorResult;

    let firstOddElement = 0;
    let secondOddElement = 0;

    // XOR elements in different groups
    for (let num of arr) {
        if ((num & rightmostSetBit) === 0) {
            firstOddElement ^= num;
        } else {
            secondOddElement ^= num;
        }
    }

    console.log(`The odd occurring elements are ${firstOddElement} and ${secondOddElement}`);
}

// Example usage:
const arr: number[] = [4, 3, 6, 2, 4, 2, 3, 4, 3, 3];
findOddOccurringElements(arr);
