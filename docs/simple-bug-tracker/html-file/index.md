---
title: HTML File - Simple Bug Tracker
description: Foundation for the user interface of the Simple Bug Tracker.
head:
  - ['meta', {property: 'og:title', content:  'HTML File - Simple Bug Tracker' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/simple-bug-tracker/html-file/' }] 
  - ['meta', {name: 'twitter:title', content: 'HTML File - Simple Bug Tracker'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/simple-bug-tracker/html-file/'}]
---

# HTML File

The `popup.html` file serves as the foundation for the user interface of the TidyQA Simple Bug Tracker Chrome extension. It encapsulates the layout, form elements, and script references necessary to facilitate bug reporting and tracking within the extension's popup window.

## Head Section

The `<title>` tag sets the title of the web page to "TidyQA Simple Bug Tracker" which is displayed in the browser's title bar or tab. Additionally, an external stylesheet is linked using the `<link>` tag with the `rel` attribute set to "stylesheet" and the `href` attribute pointing to a file named "popup.css."

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Set the title of the web page -->
  <title>TidyQA Simple Bug Tracker</title> // [!code focus]
  <!-- Link an external stylesheet for styling -->
  <link rel="stylesheet" href="popup.css">
</head>
```

## Bug Reporting

The `<body>` section contains the main content of the web page. It begins with a `<form>` element designated for bug reporting. The form has an `id` attribute set to "bugReportForm," allowing for targeted interaction through JavaScript. The `autocomplete` attribute is set to "off" to prevent the browser from suggesting previously entered data.

```html
<body>
  <!-- Create a form for bug reporting -->
  <form autocomplete="off" id="bugReportForm">
    <!-- Container for bug input -->
    <div class="bug-input">
      <!-- Input field for bug description with a placeholder -->
      <input type="text" id="bugDescription" placeholder="Enter bug description...">
      <!-- Submit button to submit the bug report -->
      <button type="submit">+</button>
    </div>
  </form>
```

## Displaying Bugs

Following the form, there is a `<div>` element with the `id` "bugs-list." This element is designated as a container to hold the list of reported bugs. Currently, this container is empty, as bug entries will be dynamically added through JavaScript interactions.

```html
  <!-- Container to display the list of bugs -->
  <div id="bugs-list"></div>
```

## External JavaScript

The final portion of the `<body>` section includes a `<script>` tag that references an external JavaScript file named "popup.js." This file is responsible for adding interactivity and functionality to the bug tracker web page. It enables actions such as handling form submissions, dynamically updating the list of reported bugs, and responding to user interactions. By incorporating JavaScript, the web page can become more dynamic and responsive to user inputs.

```html
  <!-- Include an external JavaScript file for interactivity -->
  <script src="popup.js"></script>
</body>
</html>
```
