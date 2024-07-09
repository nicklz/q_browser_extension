chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Message received in background script:', request);
  if (request.action === 'runScript') {
    console.log('inside runScript handler');

    chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
      if (chrome.runtime.lastError) {
        console.error('Error querying tabs:', chrome.runtime.lastError.message);
        sendResponse({ result: 'Failed to query tabs' });
        return;
      }

      if (!tabs || tabs.length === 0) {
        console.error('No active tab found');
        sendResponse({ result: 'No active tab found' });
        return;
      }

      const activeTab = tabs[0];
      if (!activeTab || !activeTab.id) {
        console.error('Active tab has no id');
        sendResponse({ result: 'Active tab has no id' });
        return;
      }

      console.log('Injecting content script into tab:', activeTab.id);
      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        files: ['content.js']
      }, () => {
        if (chrome.runtime.lastError) {
          console.error('Error injecting script:', chrome.runtime.lastError.message);
          sendResponse({ result: 'Script injection failed' });
        } else {
          sendResponse({ result: 'Script executed' });
        }
      });
    });

    // Ensure the response is sent asynchronously
    return true;
  }
});
