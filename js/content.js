// Runs the onLoad function every time a page is loaded
getStatus(onLoad);

function onLoad(localStatus) {
  // List of words to replace - TODO: Should probably be in a data file
  var wordsToReplace = [
    ["the ", "el "],
    ["The ", "El "]
  ];
    
  // Only replace words if status is 1
  if (localStatus == 1) {
    // Goes through the list of words to replace and replaces them on the page
    for (var i = 0; i < wordsToReplace.length; i++) {
      replaceWord(wordsToReplace[i][0], wordsToReplace[i][1]);
    } 
  }
}

// Function for replacing given words (word1 is the word to be replaced)
function replaceWord(word1, word2) {
  document.body.innerHTML = document.body.innerHTML.replace(new RegExp(word1, "g"), word2);
}

function getStatus( callback ) {  
  chrome.runtime.sendMessage({method: "getStatus"}, function(response) {
    callback(response.status);
  });
}