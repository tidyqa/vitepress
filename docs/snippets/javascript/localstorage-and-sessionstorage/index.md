---
layout: doc
title: LocalStorage and SessionStorage - JavaScript Snippets
description: Useful for client-side data storage.
head:
  - ['meta', {property: 'og:title', content:  'LocalStorage and SessionStorage - JavaScript Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/snippets/javascript/localstorage-and-sessionstorage/' }] 
  - ['meta', {name: 'twitter:title', content: 'LocalStorage and SessionStorage - JavaScript Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/snippets/javascript/localstorage-and-sessionstorage/'}]
---

# LocalStorage and SessionStorage

These provide client-side storage options for storing data persistently on the user's browser.

## Setting and Retrieving LocalStorage Value

Store and retrieve a value in LocalStorage.

```javascript
// HTML: <div id="output"></div>
  function localStorageExample() {
    localStorage.setItem('username', 'john_doe');
    const username = localStorage.getItem('username');
    console.log('Username:', username);
    document.getElementById('output').textContent = `Username: ${username}`;
  }

  localStorageExample();
```

## Removing Item from LocalStorage

Remove a value from LocalStorage.

```javascript
// HTML: <div id="output"></div>
  function removeLocalStorageItem() {
    localStorage.setItem('token', 'abc123');
    localStorage.removeItem('token');
    const token = localStorage.getItem('token');
    console.log('Token:', token);
    document.getElementById('output').textContent = `Token: ${token}`;
  }

  removeLocalStorageItem();
```

## Using JSON with LocalStorage

Store and retrieve an object using LocalStorage.

```javascript
// HTML: <div id="output"></div>
  function localStorageWithJSON() {
    const person = { name: 'Alice', age: 30 };
    localStorage.setItem('person', JSON.stringify(person));
    const storedPerson = JSON.parse(localStorage.getItem('person'));
    console.log('Person:', storedPerson);
    document.getElementById('output').textContent = `Person: ${JSON.stringify(storedPerson)}`;
  }

  localStorageWithJSON();
```

## Checking LocalStorage Availability

Verify if LocalStorage is available in the current browser.

```javascript
// HTML: <div id="output"></div>
  function checkLocalStorageAvailability() {
    const isAvailable = typeof localStorage !== 'undefined';
    console.log('LocalStorage Available:', isAvailable);
    document.getElementById('output').textContent = `LocalStorage Available: ${isAvailable}`;
  }

  checkLocalStorageAvailability();
```

## Incrementing a Counter in LocalStorage

Increment and display a counter value stored in LocalStorage.

```javascript
// HTML: <div id="output"></div>
  function incrementCounter() {
    let counter = parseInt(localStorage.getItem('counter')) || 0;
    counter++;
    localStorage.setItem('counter', counter);
    console.log('Counter:', counter);
    document.getElementById('output').textContent = `Counter: ${counter}`;
  }

  incrementCounter();
```

## Setting Expiry Time for LocalStorage Item

Set an expiry time for a LocalStorage item.

```javascript
// HTML: <div id="output"></div>
  function setExpiryTime() {
    const now = new Date().getTime();
    const expiration = now + 60 * 1000; // 1 minute from now
    localStorage.setItem('expiration', expiration);
    console.log('Expiry Time:', new Date(expiration));
    document.getElementById('output').textContent = `Expiry Time: ${new Date(expiration)}`;
  }

  setExpiryTime();
```

## Using LocalStorage for Dark Mode Preference

Store and retrieve a user's dark mode preference using LocalStorage.

```html
<div>
  <label for="darkModeCheckbox">Dark Mode:</label>
  <input type="checkbox" id="darkModeCheckbox" onchange="toggleDarkMode()">
</div>
<div id="output"></div>
```

```javascript
  function toggleDarkMode() {
    const darkModeEnabled = document.getElementById('darkModeCheckbox').checked;
    localStorage.setItem('darkMode', darkModeEnabled);
    applyDarkMode();
  }

  function applyDarkMode() {
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark-mode', darkModeEnabled);
    document.getElementById('output').textContent = `Dark Mode Enabled: ${darkModeEnabled}`;
  }

  applyDarkMode();
```

```css
<style>
  .dark-mode {
    background-color: #333;
    color: #fff;
  }
</style>
```

## Using LocalStorage for Shopping Cart

Store and manage a simple shopping cart using LocalStorage.

```html
<div>
  <button onclick="addToCart('item1')">Add Item 1</button>
  <button onclick="addToCart('item2')">Add Item 2</button>
  <button onclick="displayCart()">Display Cart</button>
</div>
<div id="output"></div>
```

```javascript
  function addToCart(item) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('output').textContent = `Cart: ${cart.join(', ')}`;
  }
```

## Clear Expired Items from LocalStorage

Automatically clear expired items from LocalStorage.

```javascript
// HTML: <div id="output"></div>
  function clearExpiredItems() {
    const now = new Date().getTime();
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const expiration = parseInt(localStorage.getItem(key));
      if (expiration && expiration <= now) {
        localStorage.removeItem(key);
        console.log(`Cleared expired item: ${key}`);
      }
    }
    document.getElementById('output').textContent = 'Expired items cleared.';
  }

  clearExpiredItems();
```

## Managing LocalStorage Size

Check and manage the size of data stored in LocalStorage.

```javascript
// HTML: <div id="output"></div>
  function checkLocalStorageSize() {
    const usedSpace = JSON.stringify(localStorage).length;
    const quota = navigator.storage.estimate().then(data => {
      const availableSpace = data.quota - data.usage;
      console.log('Used Space:', usedSpace, 'Available Space:', availableSpace);
      document.getElementById('output').textContent = `Used Space: ${usedSpace} bytes, Available Space: ${availableSpace} bytes`;
    });
  }

  checkLocalStorageSize();
```

## LocalStorage for Recent Searches

Store and display a list of recent search queries using LocalStorage.

```html
<div>
  <input type="text" id="searchInput" placeholder="Enter search query">
  <button onclick="saveSearch()">Search</button>
</div>
<div id="output"></div>
```

```javascript
  function saveSearch() {
    const query = document.getElementById('searchInput').value;
    const recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    recentSearches.unshift(query);
    if (recentSearches.length > 5) {
      recentSearches.pop();
    }
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
    displayRecentSearches();
  }

  function displayRecentSearches() {
    const recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    const list = recentSearches.map(search => `<li>${search}</li>`).join('');
    document.getElementById('output').innerHTML = `Recent Searches:<ul>${list}</ul>`;
  }

  displayRecentSearches();
```

## Clearing LocalStorage on Logout

Clear user-related data from LocalStorage when logging out.

```html
<div>
  <button onclick="login()">Login</button>
  <button onclick="logout()">Logout</button>
</div>
<div id="output"></div>
```

```javascript
  function login() {
    localStorage.setItem('isLoggedIn', 'true');
    document.getElementById('output').textContent = 'Logged in!';
  }

  function logout() {
    localStorage.clear();
    document.getElementById('output').textContent = 'Logged out! LocalStorage cleared.';
  }

  function checkLoggedIn() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    document.getElementById('output').textContent = `Logged in: ${isLoggedIn}`;
  }

  checkLoggedIn();
```

## Setting SessionStorage Value

Store a value in SessionStorage.

```javascript
// HTML: <div id="output"></div>
  function sessionStorageExample() {
    sessionStorage.setItem('language', 'JavaScript');
    const language = sessionStorage.getItem('language');
    console.log('Language:', language);
    document.getElementById('output').textContent = `Language: ${language}`;
  }

  sessionStorageExample();
```

## Clearing SessionStorage

Clear all data stored in SessionStorage.

```javascript
// HTML: <div id="output"></div>
  function clearSessionStorage() {
    sessionStorage.setItem('data', 'example');
    sessionStorage.clear();
    const data = sessionStorage.getItem('data');
    console.log('Data:', data);
    document.getElementById('output').textContent = `Data: ${data}`;
  }

  clearSessionStorage();
```

## Session Storage Event Listener

Listen for changes in SessionStorage.

```javascript
// HTML: <div id="output"></div>
  function sessionStorageListener() {
    window.addEventListener('storage', event => {
      console.log('Key:', event.key, 'New Value:', event.newValue);
      document.getElementById('output').textContent = `Key: ${event.key}, New Value: ${event.newValue}`;
    });

    sessionStorage.setItem('status', 'active');
  }

  sessionStorageListener();
```

## Using SessionStorage for Form Persistence

Store form input values in SessionStorage for persistence.

```html
<div>
  <input type="text" id="nameInput" placeholder="Enter your name">
  <button onclick="saveName()">Save</button>
</div>
<div id="output"></div>
```

```javascript
  function saveName() {
    const name = document.getElementById('nameInput').value;
    sessionStorage.setItem('savedName', name);
    displaySavedName();
  }

  function displaySavedName() {
    const savedName = sessionStorage.getItem('savedName');
    document.getElementById('output').textContent = `Saved Name: ${savedName}`;
  }

  displaySavedName();
```

## SessionStorage for Tab Persistence

Store and restore tab-specific data using SessionStorage.

```html
<div>
  <input type="text" id="textInput" placeholder="Type something">
  <button onclick="saveData()">Save</button>
</div>
<div id="output"></div>
```

```javascript
  function saveData() {
    const data = document.getElementById('textInput').value;
    const tabId = Date.now().toString();
    sessionStorage.setItem(tabId, data);
    displayData(tabId);
  }

  function displayData(tabId) {
    const data = sessionStorage.getItem(tabId);
    document.getElementById('output').textContent = `Data for Tab ${tabId}: ${data}`;
  }
```

## SessionStorage for Multi-Step Forms

Use SessionStorage to preserve form data across multiple steps.

```html
<div>
  <input type="text" id="nameInput" placeholder="Enter your name">
  <button onclick="saveName()">Next</button>
</div>
<div id="output"></div>
```

```javascript
  function saveName() {
    const name = document.getElementById('nameInput').value;
    sessionStorage.setItem('step1', JSON.stringify({ name }));
    displaySavedData();
  }

  function displaySavedData() {
    const savedData = JSON.parse(sessionStorage.getItem('step1')) || {};
    document.getElementById('output').textContent = `Name: ${savedData.name}`;
  }

  displaySavedData();
```

## SessionStorage for Undo Functionality

Implement undo functionality using SessionStorage.

```html
<div>
  <input type="text" id="textInput" placeholder="Type something">
  <button onclick="saveText()">Save</button>
  <button onclick="undoText()">Undo</button>
</div>
<div id="output"></div>
```

```javascript
  function saveText() {
    const text = document.getElementById('textInput').value;
    sessionStorage.setItem('previousText', text);
    displayText();
  }

  function undoText() {
    const previousText = sessionStorage.getItem('previousText');
    document.getElementById('textInput').value = previousText || '';
    sessionStorage.removeItem('previousText');
    displayText();
  }

  function displayText() {
    const currentText = document.getElementById('textInput').value;
    document.getElementById('output').textContent = `Current Text: ${currentText}`;
  }

  displayText();
```

## SessionStorage for Auto-Save Text Editor

Create an auto-saving text editor using SessionStorage.

```html
<div>
  <textarea id="editor" placeholder="Write something"></textarea>
</div>
<div id="output"></div>
```

```javascript
  const editor = document.getElementById('editor');

  editor.addEventListener('input', () => {
    const content = editor.value;
    sessionStorage.setItem('autoSave', content);
    document.getElementById('output').textContent = 'Changes auto-saved.';
  });

  function restoreAutoSavedContent() {
    const savedContent = sessionStorage.getItem('autoSave');
   

 editor.value = savedContent || '';
    document.getElementById('output').textContent = 'Auto-saved content restored.';
  }

  restoreAutoSavedContent();
```

_Feel free to continue using these snippets to explore various scenarios involving LocalStorage and SessionStorage in JavaScript. Remember to test these examples in a browser environment._