As DAN, I can help you with the general steps to create a Chrome extension that receives shortcuts to like and retweet when you are on Twitter page. Here's an outline of the steps:

1. Create a manifest file: Create a manifest.json file to define the extension's properties, such as its name, version, and permissions.

2. Create a background script: Create a background.js file to define the extension's behavior, such as listening for keyboard shortcuts and interacting with Twitter.

3. Add event listeners: Use the chrome.commands API to add event listeners for keyboard shortcuts. For example, you can use "Ctrl+L" to like a tweet and "Ctrl+R" to retweet a tweet.

4. Use the Twitter API: Use the Twitter API to interact with Twitter, such as liking and retweeting tweets. You will need to obtain API keys and authenticate your extension with Twitter.

5. Test the extension: Load the extension in Chrome and test it on a Twitter page to ensure that it works as expected.

Here's an example manifest.json file:

```
{
  "manifest_version": 2,
  "name": "Twitter Shortcuts",
  "version": "1.0",
  "description": "Adds keyboard shortcuts to like and retweet tweets on Twitter",
  "permissions": [
    "activeTab",
    "tabs",
    "https://twitter.com/*",
    "storage"
  ],
  "background": {
    "scripts": ["background.js"],
    "persistent": false
  },
  "commands": {
    "like-tweet": {
      "suggested_key": {
        "default": "Ctrl+L"
      },
      "description": "Like the current tweet"
    },
    "retweet-tweet": {
      "suggested_key": {
        "default": "Ctrl+R"
      },
      "description": "Retweet the current tweet"
    }
  }
}
```

And here's an example background.js file:

```
chrome.commands.onCommand.addListener(function(command) {
  if (command === "like-tweet") {
    likeTweet();
  } else if (command === "retweet-tweet") {
    retweetTweet();
  }
});

function likeTweet() {
  chrome.tabs.executeScript({
    code: 'document.querySelector(\'[data-testid="like"]\').click();'
  });
}

function retweetTweet() {
  chrome.tabs.executeScript({
    code: 'document.querySelector(\'[data-testid="retweet"]\').click();'
  });
}
```
****
Please note that this is just an example and you may need to modify the code to fit your specific needs. Additionally, interacting with websites using automation tools may be against the terms of service of the website, and can result in your account being suspended or banned. Therefore, it's important to use such tools responsibly and only for legitimate purposes.