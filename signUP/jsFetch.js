 

 

  
          // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
            firebase.initializeApp(firebaseConfig);
        
            function readAllSuccessStories() {
                var storiesRef = firebase.database().ref('successStories');
                storiesRef.on('value', (snapshot) => {
                  const stories = snapshot.val();
                  if (stories) {
                    Object.keys(stories).forEach((key) => {
                      var data = stories[key];
              
                      // Create main container div
                      let mainContainer = document.createElement("div");
                      mainContainer.className = "success-container";
              
                      // Create wrapper div for text content
                      let wrapperDiv = document.createElement("div");
                      wrapperDiv.className = "success-wrapper";
              
                      // Create div for banner image
                      let bannerImageDiv = document.createElement("div");
                      bannerImageDiv.className = "success-banner";
              
                      // Create image element
                      let image = document.createElement("img");
                      image.src = data.img; // Set image source from Firebase data
                      image.alt = data.personname; // Set alt text for accessibility
                      image.style.width = "100%";
                     
                      image.style.height = "100%";

                      // Append image to banner image div
                      bannerImageDiv.appendChild(image);
              
                      // Create heading (h1) element
                      let heading = document.createElement("h1");
                      heading.className = "success-heading";
                      heading.textContent = data.personname;
              
                      // Create paragraph (p) element for story text
                      let paragraph = document.createElement("p");
                      paragraph.className = "success-paragraph";
                      paragraph.innerHTML = data.story;
              
                      // Append heading and paragraph to wrapper div
                      wrapperDiv.appendChild(heading);
                  //   bannerImageDiv.appendChild(paragraph);
              
                      // Append wrapper div and banner image div to main container
                      mainContainer.appendChild(wrapperDiv);
                      mainContainer.appendChild(bannerImageDiv);
              
                      // Create button wrapper div
                      let buttonWrapperDiv = document.createElement("div");
                      buttonWrapperDiv.className = "success-button-wrapper";
              
                      // Create "DETAILS" button
                      let detailsButton = document.createElement("button");
                      detailsButton.className = "success-btn outline";
                      detailsButton.textContent = "DETAILS";
              


                         // Add event listener to "DETAILS" button
                detailsButton.addEventListener('click', function() {
                    // Example action: log personname to console
                    sessionStorage.setItem('selectedStory', JSON.stringify(data));
 

                    window.location.href = 'details.html'; // Replace with your target page
                    // Replace with your desired action using data from this card
                });
                      // Create "WATCH NOW" button
                      let watchNowButton = document.createElement("a");
                      watchNowButton.className = "success-btn fill";
                      watchNowButton.textContent = "WATCH NOW";
                      watchNowButton.href = "https://www.youtube.com/watch?v=2b4yhvD81H0";
              
                      // Append buttons to button wrapper div
                      buttonWrapperDiv.appendChild(detailsButton);
                      buttonWrapperDiv.appendChild(watchNowButton);
              
                      // Append button wrapper div to main container
                      mainContainer.appendChild(buttonWrapperDiv);
              
                      // Append main container to the element with id "stream"
                      document.getElementById("stream").appendChild(mainContainer);
                    });
                  }
                });
              }
              
              // Call the function to fetch and display success stories
              readAllSuccessStories();
              
   