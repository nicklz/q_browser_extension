function executeWithDelay(commands, index = 0) {
  if (index < commands.length) {
    commands[index]();
    setTimeout(() => executeWithDelay(commands, index + 1), 1000);
  }
}

let playlistPageExists = document.querySelector('.react-aria-GridList');
let distrokidExists = document.querySelector('.everythingButNavNoTopMargin');

console.log('playlistPageExists', playlistPageExists)
console.log('distrokidExists', distrokidExists)

let button = document.createElement('button');
button.style.position = 'fixed';
button.style.top = '10px';
button.style.right = '10px';
button.style.zIndex = '1000';
button.style.padding = '10px';
button.style.backgroundColor = '#007bff';
button.style.color = 'white';
button.style.border = '20px solid red';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';

//TODO: fix this nonsense - the website has several JS errors and inconsistencies that required this but i do believe there is a loop that can do this instead of hardcoded
if (playlistPageExists) {
  button.textContent = 'Download MP3 files';
  button.onclick = () => {
    console.log('Download MP3 files button clicked');
    const commands = [
      () => document.querySelectorAll('.react-aria-GridList button[aria-label="More Actions"].chakra-button')[0]?.click() ?? console.log('hit at line 2'),
      () => document.querySelectorAll('.chakra-menu__group')[2]?.querySelector('button:nth-child(2)')?.click() ?? console.log('hit at line 3'),
      () => document.querySelectorAll('.react-aria-GridList button[aria-label="More Actions"].chakra-button')[0]?.click() ?? console.log('hit at line 4'),
      () => document.querySelectorAll('button[aria-label="Close"]')[0]?.click() ?? console.log('hit at line 5'),
      () => document.querySelectorAll('.react-aria-GridList button[aria-label="More Actions"].chakra-button')[0]?.click() ?? console.log('hit at line 6'),
      () => document.querySelectorAll('button[aria-label="Close"]')[0]?.click() ?? console.log('hit at line 7'),
      () => document.querySelectorAll('.react-aria-GridList button[aria-label="More Actions"].chakra-button')[1]?.click() ?? console.log('hit at line 8'),
      () => document.querySelectorAll('.react-aria-GridList button[aria-label="More Actions"].chakra-button')[0]?.click() ?? console.log('hit at line 9'),
      () => document.querySelectorAll('.react-aria-GridList button[aria-label="More Actions"].chakra-button')[1]?.click() ?? console.log('hit at line 10'),
      () => document.querySelectorAll('.chakra-menu__group')[2]?.querySelector('button:nth-child(2)')?.click() ?? console.log('hit at line 11'),
      () => document.querySelectorAll('.react-aria-GridList button[aria-label="More Actions"].chakra-button')[2]?.click() ?? console.log('hit at line 12'),
      () => document.querySelectorAll('.chakra-menu__group')[2]?.querySelector('button:nth-child(2)')?.click() ?? console.log('hit at line 13'),
      () => document.querySelectorAll('.react-aria-GridList button[aria-label="More Actions"].chakra-button')[0]?.click() ?? console.log('hit at line 14'),
      () => document.querySelectorAll('button[aria-label="Close"]')[0]?.click() ?? console.log('hit at line 15'),
      () => document.querySelectorAll('.react-aria-GridList button[aria-label="More Actions"].chakra-button')[3]?.click() ?? console.log('hit at line 16'),
      () => document.querySelectorAll('.chakra-menu__group')[2]?.querySelector('button:nth-child(2)')?.click() ?? console.log('hit at line 17'),
      () => document.querySelectorAll('.react-aria-GridList button[aria-label="More Actions"].chakra-button')[0]?.click() ?? console.log('hit at line 18'),
      () => document.querySelectorAll('.react-aria-GridList button[aria-label="More Actions"].chakra-button')[4]?.click() ?? console.log('hit at line 19'),
      () => document.querySelectorAll('.chakra-menu__group')[2]?.querySelector('button:nth-child(2)')?.click() ?? console.log('hit at line 20'),
      () => document.querySelectorAll('.react-aria-GridList button[aria-label="More Actions"].chakra-button')[0]?.click() ?? console.log('hit at line 21'),
      () => document.querySelectorAll('.react-aria-GridList button[aria-label="More Actions"].chakra-button')[5]?.click() ?? console.log('hit at line 22'),
      () => document.querySelectorAll('.chakra-menu__group')[2]?.querySelector('button:nth-child(2)')?.click() ?? console.log('hit at line 23'),
      () => document.querySelectorAll('.react-aria-GridList button[aria-label="More Actions"].chakra-button')[0]?.click() ?? console.log('hit at line 24'),
      () => document.querySelectorAll('.react-aria-GridList button[aria-label="More Actions"].chakra-button')[6]?.click() ?? console.log('hit at line 25'),
      () => document.querySelectorAll('.chakra-menu__group')[2]?.querySelector('button:nth-child(2)')?.click() ?? console.log('hit at line 26'),
      () => document.querySelectorAll('.react-aria-GridList button[aria-label="More Actions"].chakra-button')[0]?.click() ?? console.log('hit at line 27'),
      () => document.querySelectorAll('.react-aria-GridList button[aria-label="More Actions"].chakra-button')[7]?.click() ?? console.log('hit at line 28'),
      () => document.querySelectorAll('.chakra-menu__group')[2]?.querySelector('button:nth-child(2)')?.click() ?? console.log('hit at line 29'),
      () => document.querySelectorAll('.react-aria-GridList button[aria-label="More Actions"].chakra-button')[0]?.click() ?? console.log('hit at line 30'),
      () => document.querySelectorAll('.react-aria-GridList button[aria-label="More Actions"].chakra-button')[8]?.click() ?? console.log('hit at line 31'),
      () => document.querySelectorAll('.chakra-menu__group')[2]?.querySelector('button:nth-child(2)')?.click() ?? console.log('hit at line 32'),
      () => document.querySelectorAll('.react-aria-GridList button[aria-label="More Actions"].chakra-button')[0]?.click() ?? console.log('hit at line 33'),
      () => document.querySelectorAll('.react-aria-GridList button[aria-label="More Actions"].chakra-button')[9]?.click() ?? console.log('hit at line 34'),
      () => document.querySelectorAll('.chakra-menu__group')[2]?.querySelector('button:nth-child(2)')?.click() ?? console.log('hit at line 35'),
      () => document.querySelectorAll('.react-aria-GridList button[aria-label="More Actions"].chakra-button')[0]?.click() ?? console.log('hit at line 36'),
      () => document.querySelectorAll('.react-aria-GridList button[aria-label="More Actions"].chakra-button')[10]?.click() ?? console.log('hit at line 37'),
      () => document.querySelectorAll('.chakra-menu__group')[2]?.querySelector('button:nth-child(2)')?.click() ?? console.log('hit at line 38')
    ];

    executeWithDelay(commands);
  };


  document.body.appendChild(button);
}

if (distrokidExists) {
  console.log('Apply Distrokid Data');
  button.textContent = 'Apply Distrokid Data';
  button.onclick = () => {
    console.log('Apply Distrokid Data button clicked');
    // Execute the original distrokid logic
    document.querySelectorAll('select.uploadFilePrice').forEach(select => {
      if (select.options.length > 0) {
        select.selectedIndex = 0;
      }
    });

    document.querySelectorAll('input.songwriter_real_name_first').forEach(input => {
      input.value = 'Nick';
    });

    document.querySelectorAll('input.songwriter_real_name_last').forEach(input => {
      input.value = 'Kuhn';
    });

    document.querySelectorAll('.upload-mobile-important-checkboxes input[type="checkbox"]').forEach(checkbox => {
      checkbox.checked = true;
    });

    // Prompt user to select multiple files
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.multiple = true;
    fileInput.style.display = 'none';
    document.body.appendChild(fileInput);

    fileInput.onchange = (event) => {
      const files = Array.from(event.target.files);
      const titles = files.map(file => file.name);

      const songTitleInputs = document.querySelectorAll('input[data-field-name="song title"]');
      if (titles.length !== songTitleInputs.length) {
        console.log('song number mix match');
        console.log(`Total number of items uploaded: ${files.length}`);
      }

      titles.forEach((title, index) => {
        if (songTitleInputs[index]) {
          songTitleInputs[index].value = title;
        }
      });
    };

    fileInput.click();
  };


  document.body.appendChild(button);
}



console.log('CUSTOM SCRIPTS FINISHED');
