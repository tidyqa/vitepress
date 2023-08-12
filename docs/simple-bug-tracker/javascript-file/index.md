---
title: JavaScript File - Simple Bug Tracker
description: Ensures a smooth bug reporting experience while facilitating the organized presentation of bug data to users.
head:
  - ['meta', {property: 'og:title', content:  'JavaScript File  - Simple Bug Tracker' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/simple-bug-tracker/javascript-file/' }] 
  - ['meta', {name: 'twitter:title', content: 'JavaScript File  - Simple Bug Tracker'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/simple-bug-tracker/javascript-file/'}]
---

# JavaScript File

The `popup.js` file is a critical component of the TidyQA Simple Bug Tracker Chrome extension, providing the necessary functionality to manage and display reported bugs within the extension's popup window. This script ensures a smooth bug reporting experience while facilitating the organized presentation of bug data to users.

## DOM Content Loaded Event

This step ensures that your JavaScript code is executed only when the DOM is fully loaded, preventing any potential issues when trying to manipulate elements that haven't been rendered yet.

```js
document.addEventListener('DOMContentLoaded', function () {
  // Code will execute once the DOM (HTML) content is fully loaded and ready for manipulation.
  // This ensures that the JavaScript code doesn't run before the HTML elements are available.
  // The provided function will be called when the DOM is ready.
  const bugsList = document.getElementById('bugs-list');
```

## Add Bug

This function is responsible for adding a bug to the local storage. It maintains a structure where bugs are categorized based on a given URL (category).

```js
  function addBug(category, bug) {
    // Retrieve bugs stored in local storage, or create an empty object if none exist
    let bugsByCategory = JSON.parse(localStorage.getItem('bugsByCategory')) || {};

    // Ensure that the category has an array to store bugs
    bugsByCategory[category] = bugsByCategory[category] || [];

    // Add the new bug to the specified category
    bugsByCategory[category].push(bug);

    // Update local storage with the new bug data
    localStorage.setItem('bugsByCategory', JSON.stringify(bugsByCategory));
  }
```

## Delete Bug

This function allows you to delete a bug from the local storage based on the category and the index of the bug within that category.

```js
  function deleteBug(category, bugIndex) {
    // Retrieve bugs stored in local storage, or create an empty object if none exist
    let bugsByCategory = JSON.parse(localStorage.getItem('bugsByCategory')) || {};

    // Ensure that the category has an array to store bugs
    bugsByCategory[category] = bugsByCategory[category] || [];

    // Remove the specified bug from the category's bug list
    bugsByCategory[category].splice(bugIndex, 1);

    // Update local storage with the modified bug data
    localStorage.setItem('bugsByCategory', JSON.stringify(bugsByCategory));
  }
```

## Display Bugs

This function populates the popup with a table listing bugs categorized by URLs. It iterates through the categories, creates table rows and cells to display the bugs, and provides a delete button for each bug.

```js
   function displayBugs() {
    bugsList.innerHTML = ''; // Clear the current list

    const bugsByCategory = JSON.parse(localStorage.getItem('bugsByCategory')) || {};

    // Loop through each category and display bugs in a table format
    for (const category in bugsByCategory) {
      const bugs = bugsByCategory[category];
      if (bugs.length > 0) {
        // Create table elements for each category and bug
        const table = document.createElement('table');
        const tableBody = document.createElement('tbody');
        table.appendChild(tableBody);

        // Create a row for the URL/category
        const urlRow = document.createElement('tr');
        const tdURL = document.createElement('td');
        tdURL.colSpan = 2; // Span two columns for the URL cell
        urlRow.style.backgroundColor = '#F8F8F8';

        // Create a hyperlink for the URL
        const urlLink = document.createElement('a');
        urlLink.href = category;
        urlLink.textContent = category;
        urlLink.target = '_blank'; // Open URL in a new tab

        // Add click event to open the URL when clicked
        urlLink.addEventListener('click', function (event) {
          event.preventDefault();
          chrome.tabs.create({ url: category });
        });

        tdURL.appendChild(urlLink);
        urlRow.appendChild(tdURL);
        tableBody.appendChild(urlRow);

        // Create table header for bug description
        const tableHeaderRow = document.createElement('tr');
        const thBugDescription = document.createElement('th');
        thBugDescription.textContent = 'Bug';
        tableHeaderRow.appendChild(thBugDescription);
        tableBody.appendChild(tableHeaderRow);

        // Loop through bugs within the category and display them
        bugs.forEach((bug, index) => {
          const tableDataRow = document.createElement('tr');
          const tdBugDescription = document.createElement('td');
          tdBugDescription.textContent = bug;
          tableDataRow.classList.add('border-row');

          // Create delete button for each bug
          const tdDeleteButton = document.createElement('td');
          tdDeleteButton.innerHTML = '&#10006;'; // Unicode symbol for delete (✖)
          tdDeleteButton.style.cursor = 'pointer';
          tdDeleteButton.style.textAlign = 'center';
          tdDeleteButton.style.color = 'red';

          // Add click event to delete the bug and refresh the list
          tdDeleteButton.addEventListener('click', function () {
            deleteBug(category, index);
            displayBugs(); // Refresh the list after deletion
          });

          tableDataRow.appendChild(tdBugDescription);
          tableDataRow.appendChild(tdDeleteButton);
          tableBody.appendChild(tableDataRow);
        });

        // Append the table to the popup
        bugsList.appendChild(table);
      }
    }

    // Display message if no bugs found
    if (bugsList.innerHTML.trim() === '') {
      const noBugsMessage = document.createElement('p');
      noBugsMessage.textContent = 'No bugs found.';
      noBugsMessage.classList.add('no-bugs');
      bugsList.appendChild(noBugsMessage);
    }
  }
```

## Get Current Tab's URL

This function uses the Chrome API to get the URL of the currently active tab and passes it to the provided callback function.

```js
  function getCurrentTabURL(callback) {
    // Use the Chrome API to get information about the currently active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // Retrieve the URL of the active tab (or an empty string if no active tab)
      const url = tabs[0]?.url || '';
      callback(url); // Execute the provided callback function with the URL
    });
  }
```

## Validate Bug Description

This simple function checks whether a bug description is valid by ensuring it has at least three non-whitespace characters.

```js
  function isValidDescription(description) {
    // Check if the bug description has at least three non-whitespace characters
    return description.trim().length >= 3;
  }
```

## Initial Display of Bugs

This line ensures that the list of bugs is displayed in the popup when it is first opened.

```js
  displayBugs(); // Display bugs when the popup is opened
```

## Bug Report Form Submission

This section handles the form submission when a bug report is entered. It validates the bug description, gets the current tab's URL, adds the bug to the local storage, clears the input field, and updates the bugs list displayed in the popup.

```js
  const bugReportForm = document.getElementById('bugReportForm');

  bugReportForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const bugDescription = document.getElementById('bugDescription').value;

    if (!isValidDescription(bugDescription)) {
      // Validate bug description length (at least 3 characters)
      return; // Exit the function if the description is not valid
    }

    // Get the URL of the currently active tab
    getCurrentTabURL(function (url) {
      // Add the bug description to the local storage under the current URL/category
      addBug(url, bugDescription);

      // Clear the input field after adding the bug
      document.getElementById('bugDescription').value = '';

      // Update the bugs list in the popup
      displayBugs();
    });
  });
});
```
