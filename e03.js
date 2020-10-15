function Marsos(str) {

    var sos = 'SOS'.split('');
    var marsos = [];

    let count = 0;

    for (var char of str) {

        if (sos.includes(char) && !marsos.includes(char)) {
            
        } else {
            count++;
        }

    }

    if (marsos.sort().toString() == sos.toString()) {
        return 'Hello Efrei'
    } else {
        return count;
    }

};

console.log(Marsos('SOFSOSSISSOW'));

/* CORRECTION

function marsos(str) {
    const sosCount = str.length / 3
    const messages = "SOS".repeat(sosCount)
  
    let errorCount = 0
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== messages[i]) {
        errorCount++
      }
    }
  
    return errorCount
  }
  */