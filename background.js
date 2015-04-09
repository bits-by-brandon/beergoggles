//Background page

chrome.browserAction.setBadgeText({text:"Beer"});

chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' red!');
  var hello = "hello world";
  chrome.tabs.executeScript({
    file: 'main.js'
  });
});