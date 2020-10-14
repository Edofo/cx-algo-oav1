function IsAPangrams (str) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var pangram = [];

    for (var char of str) {
        char = char.toLowerCase();
        
        if (alphabet.includes(char) && !pangram.includes(char)) {
        pangram.push(char);
        }
    }

    return pangram.sort().toString() == alphabet.toString();
};

console.log(IsAPangrams('The quick brown fox jumps over the lazy dog'));
console.log(IsAPangrams('The brown fox jumps over the lazy dog'));