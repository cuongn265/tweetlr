// @ts-ignore
chrome.commands.onCommand.addListener((command) => {
  if (command === 'like-tweet') {
    likeTweet()
  } else if (command === 'retweet-tweet') {
    retweetTweet()
  } else if (command === 'like-retweet-tweet') {
    likeTweet()
    retweetTweet()
  } else if (command === 'unlike-unretweet-tweet') {
    unlikeTweet()
    unretweetTweet()
  }
})

function likeTweet() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: () => {
        const unlike = document.querySelector('[data-testid="unlike"]')
        if (unlike) {
          return
        }
        document.querySelector('[data-testid="like"]').click()
      },
    })
  })
}

function retweetTweet() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        function: () => {
          const unRetweetButton = document.querySelector('[data-testid="unretweet"]')
          if (unRetweetButton) {
            return
          }
          const retweetButton = document.querySelector('[data-testid="retweet"]')
          if (retweetButton) {
            retweetButton.click()

            // Wait for the popup to appear
            setTimeout(() => {
              const confirmRetweetButton = document.querySelector(
                'div[role="menuitem"][data-testid="retweetConfirm"]',
              )
              if (confirmRetweetButton) {
                confirmRetweetButton.click()
              }
            }, 500)
          }
        },
      },
      () => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message)
        }
      },
    )
  })
}
function unlikeTweet() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        function: () => {
          const unlikeButton = document.querySelector('[data-testid="unlike"]');
          if (unlikeButton) {
            unlikeButton.click();
          }
        },
      },
      () => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message);
        }
      }
    );
  });
}

function unretweetTweet() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        function: () => {
          const unretweetButton = document.querySelector('[data-testid="unretweet"]');
          if (unretweetButton) {
            unretweetButton.click();

            // Wait for the popup to appear
            setTimeout(() => {
              const confirmUnretweetButton = document.querySelector(
                'div[role="menuitem"][data-testid="unretweetConfirm"]'
              );
              if (confirmUnretweetButton) {
                confirmUnretweetButton.click();
              }
            }, 500);
          }
        },
      },
      () => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message);
        }
      }
    );
  });
}
