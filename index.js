const {print} = require(`./stars`);

const num = process.argv[2]; 

if(isNaN(num)) {
return console.log('U beta gimme a numer');
}

const string = process.argv[3];                     
print(num, string);

/*
man könnte auch schreiben:
const irgendeinName = require ..., dann unten irgendeinName.print(stars, string) --> greift auf alles in stars.js zu
oben nur auf module.export wegen {}
*/


// if(num == `--help`) {
//     console.log('Give me a number and a string')
//     console.log('And I will print out stuff');
//     return
// }