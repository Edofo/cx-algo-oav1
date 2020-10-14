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

console.log(Marsos('SOFSOSSISSOWAOSSOSSOF'));