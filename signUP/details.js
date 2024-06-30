// import{set, onValue, ref, database,} from "./Firebase-config/firebase-config.js";
// import { User } from "./UserDataModel.js";
// import { Reply } from "./Replies.js";
// import { Movies } from "./Movies.js";




document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
  
    // Create container div
    const container = document.createElement('div');
    container.className = 'container';
  
    // Navbar
    const navbar = document.createElement('nav');
    navbar.className = 'navbar';
  
    const navbarBrand = document.createElement('div');
    navbarBrand.className = 'navbar-brand';
    navbarBrand.innerText = 'MyBrand';
  
    const navbarMenu = document.createElement('ul');
    navbarMenu.className = 'navbar-menu';
  
    const navItems = ['Home', 'About', 'Contact'];
    navItems.forEach(item => {
      const li = document.createElement('li');
      li.className = 'navbar-item';
  
      const a = document.createElement('a');
      a.href = '#';
      a.innerText = item;
  
      li.appendChild(a);
      navbarMenu.appendChild(li);
    });
  
    navbar.appendChild(navbarBrand);
    navbar.appendChild(navbarMenu);
    container.appendChild(navbar);
  
    // Movie Details Section
    const movieDetailsSection = document.createElement('section');
    movieDetailsSection.className = 'movie-details';
  
    const mDetailsImage = document.createElement('div');
    mDetailsImage.className = 'm-details-image';
  
    const img = document.createElement('img');
    img.src = 'https://i.pinimg.com/564x/d6/f8/6d/d6f86da3007ad7cb211e8e9507e0a0ca.jpg';
    img.style.width = '1400px';
    img.style.height = '780px';
  
    mDetailsImage.appendChild(img);
  
    const mContainer = document.createElement('div');
    mContainer.className = 'm-container';
  
    const titleContainer = document.createElement('div');
    titleContainer.className = 'title-container';
  
    const titleTop = document.createElement('div');
    titleTop.className = 'title-top';
  
    const movieTitle = document.createElement('div');
    movieTitle.className = 'movie-title';
  
    const h1 = document.createElement('h1');
    h1.innerText = "Steve Jobs Inspirational Story: Apple's beginning";
    movieTitle.appendChild(h1);
  
    const moreAboutMovie = document.createElement('div');
    moreAboutMovie.className = 'more-about-movie';
  
    const quality = document.createElement('span');
    quality.className = 'quality';
    quality.innerText = 'FULL HD';
  
    const rating = document.createElement('div');
    rating.className = 'rating';
    rating.innerHTML = `8.2 <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/171_Imdb_logo_logos-512.png" style="width: 25px; height: 21px;" alt="imdb">
                        <span>24 August 2000</span>
                        <span>78min</span>`;
  
    moreAboutMovie.appendChild(quality);
    moreAboutMovie.appendChild(rating);
  
    const language = document.createElement('div');
    language.className = 'language';
  
    const languageSpan = document.createElement('span');
    languageSpan.innerText = 'English';
  
    language.appendChild(languageSpan);
  
    titleTop.appendChild(movieTitle);
    titleTop.appendChild(moreAboutMovie);
    titleTop.appendChild(language);
  
    const titleBottom = document.createElement('div');
    titleBottom.className = 'title-bottom';
  
    const category = document.createElement('div');
    category.className = 'category';
    category.innerHTML = '<strong>Category</strong><br/><a href="#">Business</a>';
  
    const watchBtn = document.createElement('a');
    watchBtn.href = 'https://www.youtube.com/watch?v=aEr6K1bwIVs';
    watchBtn.target = '_blank';
    watchBtn.className = 'watch-btn';
    watchBtn.innerText = 'Watch Trailer';
  
    titleBottom.appendChild(category);
    titleBottom.appendChild(watchBtn);
  
    titleContainer.appendChild(titleTop);
    titleContainer.appendChild(titleBottom);
  
    const playBtnContainer = document.createElement('div');
    playBtnContainer.className = 'play-btn-container';
  
    const playBtn = document.createElement('div');
    playBtn.className = 'play-btn';
  
    const playBtnLink = document.createElement('a');
    playBtnLink.href = '#';
    playBtnLink.innerHTML = '<i class="fa fa-play"></i>';
  
    playBtn.appendChild(playBtnLink);
    playBtnContainer.appendChild(playBtn);
  
    mContainer.appendChild(titleContainer);
    mContainer.appendChild(playBtnContainer);
  
    movieDetailsSection.appendChild(mDetailsImage);
    movieDetailsSection.appendChild(mContainer);
  
    container.appendChild(movieDetailsSection);
  
    // Reviews Section
    const reviewsSection = document.createElement('section');
    reviewsSection.className = 'reviews-content';
  
    const rContent = document.createElement('div');
    rContent.className = 'r-content';
  
    reviewsSection.appendChild(rContent);
  
    container.appendChild(reviewsSection);
  
    body.appendChild(container);
  
    // Sticky Navbar Script
    window.onscroll = function() { myFunction(); };
  
    const navbarSticky = document.getElementById('navbar_sticky');
    const sticky = navbarSticky ? navbarSticky.offsetTop : 0;
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
  
    function myFunction() {
      if (window.pageYOffset >= sticky + navbarHeight) {
        navbarSticky.classList.add('sticky');
        document.body.style.paddingTop = navbarHeight + 'px';
      } else {
        navbarSticky.classList.remove('sticky');
        document.body.style.paddingTop = '0';
      }
    }
  
    // Load additional script
    const script = document.createElement('script');
    script.src = '/JS/details.js';
    script.defer = true;
    body.appendChild(script);
});
const firebaseConfig = {
    apiKey: "AIzaSyC_YpfJibbkrYiKtfpodbhCdF1KyF2Lbd0",
    authDomain: "movies-1eeb9.firebaseapp.com",
    databaseURL: "https://movies-1eeb9-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "movies-1eeb9",
    storageBucket: "movies-1eeb9.appspot.com",
    messagingSenderId: "265328814791",
    appId: "1:265328814791:web:7bbcf5af8448ffd5b66ce2",
    measurementId: "G-RRKSY9TQNR"
  };
  const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const commentsRef = database.ref('comments');

// function submitComment(comment) {
//     const newCommentRef = commentsRef.push();
//     newCommentRef.set({
//       text: comment,
//       timestamp: firebase.database.ServerValue.TIMESTAMP
//     }, (error) => {
//       if (error) {
//         console.error("Error writing new comment to Firebase Database:", error);
//       } else {
//         console.log("New comment added to Firebase Database successfully.");
//       }
//     });
//   }
  
//   // Event listener for form submission
//   document.getElementById('commentForm').addEventListener('submit', function(e) {
//     e.preventDefault();
  
//     const commentInput = document.getElementById('commentInput');
//     const comment = commentInput.value;
  
//     if (comment) {
//       submitComment(comment);
//       commentInput.value = ''; // Clear the input field
//     }
//   });
  
//   // Function to display comments
//   function displayComment(commentData) {
//     const commentsList = document.getElementById('commentsList');
  
//     const commentElement = document.createElement('div');
//     commentElement.className = 'comment';
//     commentElement.innerText = commentData.text;
  
//     commentsList.appendChild(commentElement);
//   }
  
//   // Fetch and display comments
//   commentsRef.on('child_added', (data) => {
//     displayComment(data.val());
//   });
  
// ----------------------------------
function submitComment(comment) {
    const newCommentRef = commentsRef.push();
    newCommentRef.set({
      text: comment,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    }, (error) => {
      if (error) {
        console.error("Error writing new comment to Firebase Database:", error);
      } else {
        console.log("New comment added to Firebase Database successfully.");
      }
    });
  }
  
//   Event listener for form submission
  document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const commentInput = document.getElementById('commentInput');
    const comment = commentInput.value;
  
    if (comment) {
      submitComment(comment);
      commentInput.value = ''; // Clear the input field
    }
  });
  
  // Function to display comments
  function displayComment(commentData, commentKey) {
    const commentsList = document.getElementById('commentsList');
  
    const commentElement = document.createElement('div');
    commentElement.className = 'comment';
    commentElement.setAttribute('data-key', commentKey);
  
    const commentText = document.createElement('span');
    commentText.innerText = commentData.text;
  
    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', () => editComment(commentKey, commentData.text));
  
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => deleteComment(commentKey));
  
    commentElement.appendChild(commentText);
    commentElement.appendChild(editButton);
    commentElement.appendChild(deleteButton);
  
    commentsList.appendChild(commentElement);
  }
  
//   Function to edit comment
  function editComment(commentKey, currentText) {
    const newText = prompt("Edit your comment:", currentText);
    if (newText) {
      const commentRef = database.ref('comments/' + commentKey);
      commentRef.update({ text: newText }, (error) => {
        if (error) {
          console.error("Error updating comment:", error);
        } else {
          console.log("Comment updated successfully.");
          document.querySelector(`div[data-key="${commentKey}"] span`).innerText = newText;
        }
      });
    }
  }
  
//   Function to delete comment
  function deleteComment(commentKey) {
    const commentRef = database.ref('comments/' + commentKey);
    commentRef.remove((error) => {
      if (error) {
        console.error("Error deleting comment:", error);
      } else {
        console.log("Comment deleted successfully.");
        const commentElement = document.querySelector(`div[data-key="${commentKey}"]`);
        commentElement.remove();
      }
    });
  }
  
//   Fetch and display comments
  commentsRef.on('child_added', (data) => {
    displayComment(data.val(), data.key);
  });
  
  commentsRef.on('child_changed', (data) => {
    const commentElement = document.querySelector(`div[data-key="${data.key}"] span`);
    if (commentElement) {
      commentElement.innerText = data.val().text;
    }
  });
  
  commentsRef.on('child_removed', (data) => {
    const commentElement = document.querySelector(`div[data-key="${data.key}"]`);
    if (commentElement) {
      commentElement.remove();
    }
  });
// -----------------------------------------

// function editReply(replyKey, currentText) {
//     const newText = prompt("Edit your reply:", currentText);
//     if (newText) {
//       const replyRef = database.ref('comments/' + commentKey + '/replies/' + replyKey);
//       replyRef.update({ text: newText }, (error) => {
//         if (error) {
//           console.error("Error updating reply:", error);
//         } else {
//           console.log("Reply updated successfully.");
//           document.querySelector(`div[data-key="${replyKey}"] span`).innerText = newText;
//         }
//       });
//     }
//   }
  
  // Function to delete reply
//   function deleteReply(replyKey) {
//     const replyRef = database.ref('comments/' + commentKey + '/replies/' + replyKey);
//     replyRef.remove((error) => {
//       if (error) {
//         console.error("Error deleting reply:", error);
//       } else {
//         console.log("Reply deleted successfully.");
//         const replyElement = document.querySelector(`div[data-key="${replyKey}"]`);
//         replyElement.remove();
//       }
//     });
//   }
  
  // Fetch and display comments
//   commentsRef.on('child_added', (data) => {
//     displayComment(data.val(), data.key);
//   });
  
//   commentsRef.on('child_changed', (data) => {
//     const commentElement = document.querySelector(`div[data-key="${data.key}"] span`);
//     if (commentElement) {
//       commentElement.innerText = data.val().text;
//     }
//   });
  
//   commentsRef.on('child_removed', (data) => {
//     const commentElement = document.querySelector(`div[data-key="${data.key}"]`);
//     if (commentElement) {
//       commentElement.remove();
//     }
//   });

      