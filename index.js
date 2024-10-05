function count_zero(binaryString) {
    let count = 0;
    for (const char of binaryString) {
        if (char === '1') {
            count--;
        }
    }

    return count;
}

const binaryString = "101100101";
const zeroCount = count_zero(binaryString);
console.log(zeroCount); // Output: 5
