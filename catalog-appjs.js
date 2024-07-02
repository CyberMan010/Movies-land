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

function createCard(data) {
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
    
      <a href="${data.detailslink}" class="bn6">More details</a>
    </div>

  `;
  card.appendChild(details);

  return card;
}

async function fetchMovies() {
  const storiesRef = firebase.database().ref("successStories");
  const snapshot = await storiesRef.once("value");
  return snapshot.val();
}

function renderMovies(movies) {
  const stream = document.getElementById("stream");
  stream.innerHTML = "";
  movies.forEach(movie => {
    const card = createCard(movie);
    stream.appendChild(card);
  });
}

// Event listener for search form
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', async function(event) {
  event.preventDefault();
  const searchTerm = searchInput.value.toLowerCase().trim();

  const movies = await fetchMovies();

  const filteredMovies = Object.values(movies).filter(movie =>
    movie.title.toLowerCase().includes(searchTerm)
  );

  renderMovies(filteredMovies);
});

fetchMovies().then(movies => {
  allMovies = Object.values(movies);
  console.log('All movies:', allMovies); // Debug: log all movies
  renderMovies(allMovies);
});

// Function to filter movies by category
fetchMovies().then(movies => {
  allMovies = Object.values(movies);
  console.log('All movies:', allMovies); // Debug: log all movies
  renderMovies(allMovies);
});

// Function to filter movies by catalog2
function filterMoviesByCatalog2(category) {
  console.log(`Filtering by catalog2: ${category}`); // Debug: log category
  const filteredMovies = allMovies.filter(movie => {
      console.log(`Checking movie: ${movie.title}, catalog2: ${movie.catalog2}`); // Debug: log each movie's catalog2
      return movie.catalog2 && movie.catalog2.toLowerCase() === category.toLowerCase();
  });
  console.log('Filtered movies by catalog2:', filteredMovies); // Debug: log filtered movies
  renderMovies(filteredMovies);
}

// Function to filter movies by catalog
function filterMoviesByCatalog(category) {
  console.log(`Filtering by catalog: ${category}`); // Debug: log category
  const filteredMovies = allMovies.filter(movie => {
      console.log(`Checking movie: ${movie.title}, catalog: ${movie.catalog}`); // Debug: log each movie's catalog
      return movie.catalog && movie.catalog.toLowerCase() === category.toLowerCase();
  });
  console.log('Filtered movies by catalog:', filteredMovies); // Debug: log filtered movies
  renderMovies(filteredMovies);
}
const buttonOnlyInXYZ = document.getElementById('only-in-xyz');


buttonOnlyInXYZ.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'  // Optional: smooth scrolling
  });
});
const backButton = document.getElementById('view-all');

// Add click event listener to fetch and render all movies
backButton.addEventListener('click', async () => {
  const movies = await fetchMovies();
  renderMovies(Object.values(movies));
});

// Event listeners for filtering movies
document.getElementById('top-3').addEventListener('click', () => filterMoviesByCatalog2('3'));
document.getElementById('most-viewed').addEventListener('click', () => filterMoviesByCatalog2('1'));
document.getElementById('sports').addEventListener('click', () => filterMoviesByCatalog('sports'));
document.getElementById('historical').addEventListener('click', () => filterMoviesByCatalog('history'));
document.getElementById('business').addEventListener('click', () => filterMoviesByCatalog('business'));