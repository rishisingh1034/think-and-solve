// reverse a string question

function reverseString(str) {
    let reverseStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    return reverseStr;
}

console.log(reverseString("Rishi"))

function reverseString(str) {
    let revString = '';
    for (let i = revString.length - 1; i >= 0; i--) {
        revString += str[i]
    }
    return revString
}

// Write a function isPalindrome(str) that checks if a string is the same forwards and backwards same(ignoring case).

function isPalindrome(str) {
    str = str.toLowerCase();

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome("dad"));

//Write a function countVowels(str) that returns how many vowels (a, e, i, o, u) are present in the given string.

function countVowels(str) {
    str.split();
    let count = 0;

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i <= str.length - 1; i++) {
        let compareStr = str[i];

        if (vowels.includes(compareStr)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Rishi"))

//Write a function reverseWords(sentence) that takes a sentence and reverses the order of words, but does not reverse the words themselves.

function reverseWords(sentence) {
    let words = sentence.split(' ');
    let revWords = []
    for (let i = words.length - 1; i >= 0; i--) {
        revWords.push(words[i])
    }
    return revWords.join(" ")
}

console.log(reverseWords("Rishi Singh"))