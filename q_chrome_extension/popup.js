document.getElementById('runScript').addEventListener('click', () => {
  console.log('FIRE!');
  chrome.runtime.sendMessage({ action: 'runScript' }, response => {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
    } else {
      console.log(response.result);
    }
    console.log('FINISHED');
  });
});
