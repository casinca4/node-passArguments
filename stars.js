
// module.exports.print = (num, string) => {
//     if (num === undefined || string === undefined) {
//         console.log('**********');
//         console.log('hi');
//         console.log('**********');
//     }

//     else {
//         console.log(`*`.repeat(num));
//         console.log(string);
//         console.log(`*`.repeat(num));
//     }
// }


module.exports.print = (num = 15, string = 'hi') => {
    console.log(`*`.repeat(num));
        console.log(string);
        console.log(`*`.repeat(num));
    }
