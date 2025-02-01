// Toggle semesters visibility
function toggleSemesters(yearId) {
    const year = document.getElementById(yearId);
    if (year.style.display === "none") {
      year.style.display = "block";
    } else {
      year.style.display = "none";
    }
  }
  
  // Filter subjects in the main archive page
  function filterSubjects() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const subjects = document.querySelectorAll('.semester h3 a');
    const searchResultsContainer = document.querySelector('.search-results');
    const searchResultsList = document.querySelector('.search-results ul');
  
    // Clear previous results
    searchResultsList.innerHTML = '';
  
    let hasMatches = false;
  
    // Filter subjects based on input
    subjects.forEach(subject => {
      const text = subject.textContent.toLowerCase();
      if (text.includes(input)) {
        hasMatches = true;
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = subject.getAttribute('href');
        link.textContent = subject.textContent;
        listItem.appendChild(link);
        searchResultsList.appendChild(listItem);
      }
    });
  
    // Show or hide the search results container
    if (input && hasMatches) {
      searchResultsContainer.style.display = 'block';
    } else {
      searchResultsContainer.style.display = 'none';
    }
  }
  
  // Filter files in the subject-specific page
  function filterFiles() {
    const input = document.getElementById('fileSearchInput').value.toLowerCase();
    const files = document.querySelectorAll('.file-item');
    const fileSearchResultsContainer = document.querySelector('.file-search-results');
    const fileSearchResultsList = document.querySelector('.file-search-results ul');
  
    // Clear previous results
    fileSearchResultsList.innerHTML = '';
  
    let hasMatches = false;
  
    // Filter files based on input
    files.forEach(file => {
      const title = file.getAttribute('data-title').toLowerCase();
      if (title.includes(input)) {
        hasMatches = true;
        file.style.display = 'block';
  
        // Add to search results
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${file.querySelector('h3').textContent.toLowerCase().replace(/\s+/g, '-')}`;
        link.textContent = file.querySelector('h3').textContent;
        listItem.appendChild(link);
        fileSearchResultsList.appendChild(listItem);
      } else {
        file.style.display = 'none';
      }
    });
  
    // Show or hide the file search results container
    if (input && hasMatches) {
      fileSearchResultsContainer.style.display = 'block';
    } else {
      fileSearchResultsContainer.style.display = 'none';
    }
  }