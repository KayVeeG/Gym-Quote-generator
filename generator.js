const gymWords = [["You are", "You are not"], ["a", "not a"], ["gym", "workout", "fitness", "calisthenics"], ["rat", "enthusiast", "workaholic", "bodybuilder", "tryharder", "beast", "girl", "lifter"]];

// extra: add "dedicated" with 50% chance as second last word

const gymQuote = quoteList => {
    const message = [];

    for(const wordArray of quoteList){ //assemble random words
        message.push(wordArray[Math.floor(Math.random() * (wordArray.length - 1))])
    }
    if(Math.floor(Math.random() * 2) === 1){ //50% dedicated
        message[message.length - 3] += " dedicated";
    }
    message.push('!'); // add extra !
    return message.join(' ');
}

console.log(gymQuote(gymWords));

/* -> improve code by ChatGPT

const gymWords = [["You are", "You are not"], ["a", "not a"], ["gym", "workout", "fitness", "calisthenics"], ["rat", "enthusiast", "workaholic", "bodybuilder", "tryharder", "beast", "girl", "lifter"]];

const getRandomElement = array => array[Math.floor(Math.random() * array.length)];

const gymQuote = () => {
    const message = gymWords.map(getRandomElement);
    
    if(Math.random() < 0.5){
        message.splice(message.length - 1, 0, "dedicated");
    }

    return [...message, '!'].join(' ');
}

const logQuote = () => console.log(gymQuote());

logQuote();
*/