let stringInput = prompt("Enter a string:");
let letterFind = prompt("Enter a letter to find:");

let result = findLetter(stringInput, letterFind);


function findLetter(str, letterFind) {
    letterFind = letterFind.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === letterFind) {
            return `"${letterFind}"hərfi stringdə ${i + 1} yerdədir.`;
        }
    }
    return `"${letterFind}"hərfi stringdə tapılmadı.`;
}

console.log(result);
