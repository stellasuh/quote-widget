window.onload = function() {
    const quotes = [
        {
            text: "“Many people are afraid to take challenge because they don’t know what they can do but i want to tell them that a new door can be open if they want to to try it. \nI’m always cheering for you” ",
            author: "Wonwoo",
            image: "https://i.pinimg.com/564x/66/e1/dc/66e1dcec354631ed6caff4df655f52cd.jpg"
        },
        {
            text: "“Life will always be filled with stressful moments, but you can always choose to see something positive through it all. \nIt’ll be okay. You’ll be okay.”",
            author: "Joshua",
            image: "https://i.pinimg.com/564x/a9/46/52/a946522413b9c17490ee686a6c4034dc.jpg"
        },
        {
            text: "“Reality is more cruel than our imagination. But we are stronger than the person we imagine ourselves to be.”",
            author: "The8",
            image: "https://i.pinimg.com/564x/90/31/33/90313320612bb6c417e601e629f6c6c9.jpg"
        },
        {
            text: "“I wanted to say that we are all doing a great job.”",
            author: "Seungkwan",
            image: "https://i.pinimg.com/564x/cf/a2/f9/cfa2f9cf0768d8a4ac0e56ddffc65d8e.jpg"
        },
        {
            text: "“It is tiring, right? Even so, you did well. I hope you will gain more strength tomorrow.”",
            author: "Dk",
            image: "https://i.pinimg.com/564x/3a/43/94/3a4394498ca9c61e80e82babda846441.jpg"
        }
    ];

    const colors = ["#e66a8e", "#ecadc8", "#e98dad", "#ffbdd0"];
    let lastIndex = -1;  // To track the last shown quote

    // Function to get a random index, making sure it's not the same as the last index
    function getRandomIndex(arrLength, currentIndex) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * arrLength);
        } while (randomIndex === currentIndex); // Avoid repeating the same quote
        return randomIndex;
    }

    // Function to update the quote, author, image, and background color
    function updateQuote() {
        const randomIndex = getRandomIndex(quotes.length, lastIndex);
        lastIndex = randomIndex;

        const randomQuote = quotes[randomIndex];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        // Update quote, author, image, and background color
        document.getElementById('quoteDisplay').innerText = randomQuote.text;
        document.getElementById('authorDisplay').innerText = "- " + randomQuote.author;
        document.getElementById('quoteImage').src = randomQuote.image;
        document.getElementById('quoteContainer').style.backgroundColor = randomColor;
    }

    // Change quote every 5 seconds (5000 ms)
    setInterval(updateQuote, 5000);

    // Initial quote display
    updateQuote();
};
