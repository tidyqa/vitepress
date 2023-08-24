---
layout: doc
title: DOM Manipulation - JavaScript Snippets
description: Key for interacting with web page elements.
head:
  - ['meta', {property: 'og:title', content:  'DOM Manipulation - JavaScript Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/snippets/javascript/dom-manipulation/' }] 
  - ['meta', {name: 'twitter:title', content: 'DOM Manipulation - JavaScript Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/snippets/javascript/dom-manipulation/'}]
---

# DOM Manipulation

In web development, the Document Object Model (DOM) represents the structure of a web page. Manipulating the DOM allows you to dynamically update and interact with page elements.

Sure, here are 20 functional JavaScript code snippets related to DOM Manipulation:

## Change Text Content

Change the text content of an element with the ID `myElement`.

```html
<p id="myElement">Original Text</p>
```

```javascript
function changeText() {
  const element = document.getElementById("myElement");
  element.textContent = "New Text";
  console.log("Text changed");
}
changeText();
```

## Toggle Class

Toggle a CSS class on a button element.

```html
<button id="myButton">Toggle Class</button>
```

```javascript
function toggleClass() {
  const button = document.getElementById("myButton");
  button.classList.toggle("active");
  console.log("Class toggled");
}
toggleClass();
```

## Create Element

Create a new paragraph element and append it to a div.

```html
<div id="container"></div>
```

```javascript
function createParagraph() {
  const container = document.getElementById("container");
  const paragraph = document.createElement("p");
  paragraph.textContent = "New Paragraph";
  container.appendChild(paragraph);
  console.log("Paragraph created");
}
createParagraph();
```

## Remove Element

Remove an element with the ID `elementToRemove`.

```html
<div id="elementToRemove">Content</div>
```

```javascript
function removeElement() {
  const element = document.getElementById("elementToRemove");
  element.remove();
  console.log("Element removed");
}
removeElement();
```

## Change Attribute

Change the source attribute of an image element.

```html
<img id="myImage" src="old-image.jpg">
```

```javascript
function changeImageSrc() {
  const image = document.getElementById("myImage");
  image.setAttribute("src", "new-image.jpg");
  console.log("Image source changed");
}
changeImageSrc();
```

## Event Listener

Add a click event listener to a button.

```html
<button id="myButton">Click Me</button>
```

```javascript
function addButtonListener() {
  const button = document.getElementById("myButton");
  button.addEventListener("click", function() {
    console.log("Button clicked");
  });
}
addButtonListener();
```

## Input Value

Get the value of an input element.

```html
<input id="myInput" type="text">
```

```javascript
function getInputValue() {
  const input = document.getElementById("myInput");
  console.log("Input value:", input.value);
}
getInputValue();
```

## Scroll to Top

Scroll the page to the top when a button is clicked.

```html
<button id="scrollButton">Scroll to Top</button>
```

```javascript
function scrollToTop() {
  const button = document.getElementById("scrollButton");
  button.addEventListener("click", function() {
    window.scrollTo(0, 0);
    console.log("Scrolled to top");
  });
}
scrollToTop();
```

## Hide Element

Hide an element with the class `hidden-element`.

```html
<div class="hidden-element">Content</div>
```

```javascript
function hideElement() {
  const element = document.querySelector(".hidden-element");
  element.style.display = "none";
  console.log("Element hidden");
}
hideElement();
```

## Form Submit

Log a message when a form is submitted.

```html
<form id="myForm"></form>
```

```javascript
function handleFormSubmit() {
  const form = document.getElementById("myForm");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submitted");
  });
}
handleFormSubmit();
```

## Change Background Color

Change the background color of a div.

```html
<div id="colorDiv">Content</div>
```

```javascript
  function changeBackgroundColor() {
    const div = document.getElementById("colorDiv");
    div.style.backgroundColor = "blue";
    console.log("Background color changed");
  }
 changeBackgroundColor();
```

## Hover Effect

Add a hover effect to a link.

```html
<a id="hoverLink" href="#">Hover me</a>
```

```javascript
function addHoverEffect() {
  const link = document.getElementById("hoverLink");
   link.addEventListener("mouseenter", function() {
   link.style.color = "red";
   console.log("Hover effect added");
   });
   link.addEventListener("mouseleave", function() {
   link.style.color = "black";
   console.log("Hover effect removed");
   });
}
addHoverEffect();
```

## Change Inner HTML

Change the inner HTML of a div.

```html
<div id="htmlDiv"><p>Old content</p></div>
```

```javascript
function changeInnerHTML() {
  const div = document.getElementById("htmlDiv");
  div.innerHTML = "<p>New content</p>";
  console.log("Inner HTML changed");
}
changeInnerHTML();
```

## Disable Button

 Disable a button after clicking.

 ```html
<button id="disableButton">Click me</button>
```

```javascript
function disableButton() {
  const button = document.getElementById("disableButton");
  button.addEventListener("click", function() {
    button.disabled = true;
    console.log("Button disabled");
  });
}
disableButton();
```

### Count Elements

Count the number of elements with a specific class.

```html
<div class="countable">Item 1</div><div class="countable">Item 2</div>
```

```javascript
function countElements() {
  const countableElements = document.querySelectorAll(".countable");
  console.log("Number of elements:", countableElements.length);
}
countElements();
```

## Append Child

Append a new list item to an unordered list.

```html
<ul id="myList"></ul>
```

```javascript
function appendListItem() {
  const list = document.getElementById("myList");
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";
  list.appendChild(newItem);
  console.log("List item appended");
}
appendListItem();
```

## Prevent Default

Prevent a link from navigating to its default URL.

```html
<a id="preventLink" href="https://www.example.com">Click me</a>
```

```javascript
function preventDefaultNavigation() {
  const link = document.getElementById("preventLink");
  link.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Link clicked, but navigation prevented");
  });
}
preventDefaultNavigation();
```

## Change Font Size

Change the font size of a paragraph when a button is clicked.

```html
<button id="fontSizeButton">Increase Font Size</button><p id="fontChange">Text</p>
```

```javascript
function changeFontSize() {
  const fontSizeButton = document.getElementById("fontSizeButton");
  const fontChange = document.getElementById("fontChange");

  let fontSize = 16;
  fontSizeButton.addEventListener("click", function() {
    fontSize += 2;
    fontChange.style.fontSize = fontSize + "px";
    console.log("Font size increased");
  });
}
changeFontSize();
```

## Drag and Drop

Implement drag-and-drop functionality for an element.

```html
<div id="dragElement" draggable="true">Drag me</div>
```

```javascript
function implementDragAndDrop() {
  const dragElement = document.getElementById("dragElement");

  dragElement.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("text/plain", "Dragged element");
    console.log("Element started dragging");
  });

  dragElement.addEventListener("dragend", function() {
    console.log("Element dragged and dropped");
  });
}
implementDragAndDrop();
```

## Change Link Target

Change the target attribute of a link to open in a new tab.

```html
<a id="externalLink" href="https://www.example.com">Visit Example</a>
```

```javascript
function changeLinkTarget() {
  const externalLink = document.getElementById("externalLink");
  externalLink.setAttribute("target", "_blank");
  console.log("Link target changed");
}
changeLinkTarget();
```

_These snippets cover a variety of DOM manipulation scenarios, from changing styles and attributes to handling events and dynamic content creation. Remember that these examples are just basic demonstrations, and you can build upon them to create more complex interactions and user experiences in your web applications._
