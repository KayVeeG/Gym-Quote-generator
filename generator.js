const gymWords = [["You are", "You are not"], ["a", "not a"], ["gym", "workout", "fitness", "calisthenics"], ["rat", "enthusiast", "workaholic", "bodybuilder", "tryharder", "beast", "girl", "lifter"]];

// extra: add "dedicated" with 50% chance as second last word

const gymQuote = quoteList => {
    const message = [];

    for(const wordArray of quoteList){
        message.push(wordArray[Math.floor(Math.random() * (wordArray.length - 1))])
    }
    if(Math.floor(Math.random() * 2) === 1){
        message[message.length - 3] += " dedicated";
    }
    return message.join(' ');
}

console.log(gymQuote(gymWords));