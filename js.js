const firebaseConfig = {
  apiKey: "AIzaSyC_YpfJibbkrYiKtfpodbhCdF1KyF2Lbd0",
  authDomain: "movies-1eeb9.firebaseapp.com",
  databaseURL: "https://movies-1eeb9-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "movies-1eeb9",
  storageBucket: "movies-1eeb9.appspot.com",
  messagingSenderId: "265328814791",
  appId: "1:265328814791:web:7bbcf5af8448ffd5b66ce2",
  measurementId: "G-RRKSY9TQNR"
};

firebase.initializeApp(firebaseConfig);

function createCard(data, key) {
  const card = document.createElement('div');
  card.className = 'card';

  // Poster with image
  const poster = document.createElement('div');
  poster.className = 'poster';
  poster.innerHTML = `<img src="${data.img}" alt="${data.title}">`;
  card.appendChild(poster);

  // Details section
  const details = document.createElement('div');
  details.className = 'details';
  details.innerHTML = `
    <h2>${data.title} <br><span>${data.personname}</span></h2>
    <div class="tags">
      <a href="details.html" class="buttonDetails" onclick='storeData(${JSON.stringify(data)})'>MORE DETAILS</a>
    </div>
    <div class="info">
      <p>${data.story}</p>
    </div>
  `;
  card.appendChild(details);

  return card;
}

function storeData(data) {
  localStorage.setItem('storyData', JSON.stringify(data));
  window.location.href = 'details.html';
}

function readAllSuccessStories() {
  const storiesRef = firebase.database().ref("successStories");
  storiesRef.on("value", (snapshot) => {
    const stories = snapshot.val();
    if (stories) {
      // Clear existing content in #stream before appending new cards
      document.getElementById("stream").innerHTML = "";
      
      Object.keys(stories).forEach((key) => {
        const data = stories[key];
        const card = createCard(data, key);
        document.getElementById("stream").appendChild(card);
      });
    }
  });
}

readAllSuccessStories();
