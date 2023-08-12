---
title: CSS File - Simple Bug Tracker
description: CSS rules that define the visual appearance and layout of the popup page of your Chrome extension.
head:
  - ['meta', {property: 'og:title', content:  'CSS File - Simple Bug Tracker' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/simple-bug-tracker/css-file/' }] 
  - ['meta', {name: 'twitter:title', content: 'CSS File - Simple Bug Tracker'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/simple-bug-tracker/css-file/'}]
---

# CSS File

The `popup.css` file contains Cascading Style Sheets (CSS) rules that define the visual appearance and layout of the popup page of your Chrome extension. Let's break down each section and explain its purpose:

## Reset Default Styles

This section resets some default styles for all elements on the page, ensuring consistent box sizing and zeroing out margins and paddings.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

## Bug Input

This styles the input area for bug descriptions. It sets the display to flex, adds a border, border-radius, and overflow properties for a neat appearance, and adds margins for spacing.

```css
.bug-input {
  display: flex;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
}
```

## Body Styling

This styles the body of the popup. It sets the width and height of the popup, the font family, and adds padding at the top for spacing around the content.

```css
body {
  width: 300px;
  height: 100%;
  font-family: Arial, sans-serif;
  padding-top: 10px;
}
```

## Columns Width

This styles the first columns of the table header `th` and table data `td` cells, setting their width and allowing text to break if it's too long.

```css
th:first-child,
td:first-child {
  width: 90%;
  word-break: break-all;
}
```

## Input Field

This styles the input fields for bug descriptions. It uses flex to expand the input, sets padding, removes borders and outlines, and defines a placeholder color.

```css
input[type="text"] {
  flex: 1;
  padding: 8px;
  border: none;
  outline: none;
}

input[type="text"]::placeholder {
  color: #999;
}
```

## Button Styling

This styles buttons used in the extension, setting background color, text color, padding, and hover behavior.

```css
button {
  margin: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
}

button:hover {
  background-color: #0056b3;
}
```

## URLs and Error Message

This section styles links `a` elements, error messages, and messages for when no bugs are found.

```css
a {
  color: #007bff;
  font-weight: bold;
}

#error-message {
  color: red;
  margin-bottom: 10px;
  font-size: 14px;
}

.no-bugs {
  color: red;
  font-style: italic;
  margin: 10px;
}
```

## Table Styling

This section styles the tables and table cells `td`, collapsing borders, adding padding, and applying a border to specific rows for a visual effect.

```css
table {
  border-collapse: collapse;
}

td {
  padding: 10px 15px;
}

tbody tr.border-row {
  border-top: 1px solid #ddd!important;
}
```

## Scrollbar Styling

This styles the scrollbar appearance for Webkit-based browsers (like Chrome), adjusting its width, track background color, thumb appearance, and hover effect.

```css
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background-color: #f0f0f0;
}

::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
```
