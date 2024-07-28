const apiKey = 'gTNsRSZTyBOuk5aLFFjIqNV3r91kU3Y2QiWSsxqG'; // Replace with your NASA API key

// Fetch Astronomy Picture of the Day
fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('apod-title').textContent = data.title;
        document.getElementById('apod-image').src = data.url;
        document.getElementById('apod-description').textContent = data.explanation;
    })
    .catch(error => console.log('Error fetching APOD:', error));

const slogans = [
    "Exploring the cosmos, one star at a time.",
    "Reach for the stars, and beyond.",
    "The universe is a big place. Explore it.",
    "Discovering the secrets of the night sky.",
    "To infinity and beyond!",
    "Stars are the light of the universe.",
    "Every star has a story to tell.",
    "Look up! The cosmos is calling.",
    "In the depths of space, we find ourselves.",
    "The night sky is a canvas of dreams.",
    "Chasing starlight, embracing the unknown.",
    "Cosmic wonders await the curious mind.",
    "Journey through the galaxies of imagination.",
    "The universe is vast; let’s explore together.",
    "Where science meets the beauty of the cosmos.",
    "Your passion for astronomy fuels discovery."
];

const randomSlogan = slogans[Math.floor(Math.random() * slogans.length)];
console.log(randomSlogan);
document.getElementById('slogan-text').textContent = randomSlogan;


