// Function to search success stories by personname with partial match
function searchSuccessStoryByPersonname(partialName) {
    console.log('Searching for:', partialName); // Debugging: log the search query
  
    var storiesRef = firebase.database().ref('successStories');
    storiesRef.once('value', function(snapshot) {
        var results = []; // Array to store search results
        var foundResults = false; // Flag to track if any results were found
  
        if (snapshot.exists()) {
            snapshot.forEach(function(childSnapshot) {
                var story = childSnapshot.val();
                if (story.personname && story.personname.toLowerCase().includes(partialName.toLowerCase())) {
                    results.push({
                        id: childSnapshot.key,
                        title: story.title,
                        personname: story.personname,
                        story: story.story,
                        catalog: story.catalog,
                        img: story.img
                    });
                    foundResults = true; // Set flag to true if at least one result is found
                }
            });
        }
  
        if (foundResults) {
            // Redirect to results page with search results as URL parameters
            var redirectURL = 'results.html?search=' + encodeURIComponent(partialName) + '&results=' + encodeURIComponent(JSON.stringify(results));
            window.location.href = redirectURL;
            



           
        } else {
            // No results found message
            console.log('No results found for:', partialName);
            alert("No success stories found for '" + partialName + "'. Please try another search term.");
            // Optionally, you could handle the UI to display a message or clear previous results here
        }
    });
}

// Function to handle search button click
function handleSearch() {
    var searchInput = document.getElementById('searchInput').value;
    if (searchInput) {
        searchSuccessStoryByPersonname(searchInput);
    } else {
        alert("Please enter a person name to search.");
    }
}
