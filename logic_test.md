# Logic Test

```javascript
/**
 * Compare 2 string to check anagram.
 * 
 * @param {string} str1 
 * @param {string} str2 
 * @returns {boolean}
 */

function isAnagram(str1, str2) {
    // Check if both have same string
    if (str1 === str2) {
        return true;
    }

    // Check if both string have same length
    if (str1.length !== str2.length) {
        return false;
    }

    // SHORT WAY
    // const str1Sorted = str1.split('').sort().join('');
    // const str2Sorted = str2.split('').sort().join('');
    // return str1Sorted === str2Sorted;

    const strLen = str1.length;
    const str1Obj = {};
    const str2Obj = {};

    // Count each letter in each string
    for (let i = 0; i < strLen; i += 1) {
        const letterStr1 = str1.substr(i, 1);
        const letterStr2 = str2.substr(i, 1);
        if (!str1Obj[letterStr1]) {
            str1Obj[letterStr1] = 0;
        }

        if (!str2Obj[letterStr2]) {
            str2Obj[letterStr2] = 0;
        }

        str1Obj[letterStr1] += 1;
        str2Obj[letterStr2] += 1;
    }

    // Compare letter count between 2 string
    const str1ObjKeys = Object.keys(str1Obj);
    const objLength = str1ObjKeys.length;
    for (let i = 0; i < objLength; i += 1) {
        const letter = str1ObjKeys[i];

        // Check if string 2 have the lettter from string 1 OR
        // string 2 have different count from the same letter 
        if (!str2Obj[letter] || str2Obj[letter] !== str1Obj[letter]) {
            return false ;
        }
    }

    return true;
}

/**
 * Find and grouping anagram from array.
 * 
 * @param {Array} arr 
 * @returns {Array}
 */
function findAnagrams(arr = []) {
    const arrLen = arr.length;
    const groupedIndexes = [];
    const anagrams = [];

    for (let i = 0; i < arrLen; i += 1) {
        // Skip current loop if this index of array already grouped
        if (groupedIndexes.includes(i)) {
            continue;
        }

        const stringToCompare = arr[i];
        const anagram = [stringToCompare];
        for (let j = 0; j < arrLen; j += 1) {
            // If the string is not in the same index with the string to compare AND
            // If both string is anagram
            if (i !== j && isAnagram(stringToCompare, arr[j])) {
                groupedIndexes.push(j);
                anagram.push(arr[j]);
            }
        }

        anagrams.push(anagram);
    }

    return anagrams;
}

const arr = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];
console.log(findAnagrams(arr));
```