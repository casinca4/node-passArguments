
module.exports.print = (stars, string) => {
    if (stars === undefined || string === undefined) {
        console.log('**********');
        console.log('hi');
        console.log('**********');
    }

    else {
        console.log(`*`.repeat(stars));
        console.log(string);
        console.log(`*`.repeat(stars));
    }
}