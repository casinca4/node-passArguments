

module.exports.printStars = (type) => {               
    if(type == 'hi') {
        giveMeAJoke.getRandomDadJoke (function(joke) {
            console.log(joke);
        });
    }
   
    else if(type == 'hola') {
        giveMeAJoke.getRandomCNJoke (function(joke) {
            console.log(joke);
        });
    }
}