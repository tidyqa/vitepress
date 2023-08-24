---
layout: doc
title: Event Handling - JavaScript Snippets
description: Crucial for responding to user interactions.
head:
  - ['meta', {property: 'og:title', content:  'Event Handling - JavaScript Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/snippets/javascript/event-handling/' }] 
  - ['meta', {name: 'twitter:title', content: 'Event Handling - JavaScript Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/snippets/javascript/event-handling/'}]
---

# Event Handling

Events are user actions or browser-generated occurrences. Handling events lets you respond to user interactions like clicks, keyboard inputs, and more.

## Click Event Handling

Attach a `click` event listener to a button element.

```html
<button id="myButton">Click Me</button>
```

```javascript
function handleClick() {
  console.log("Button clicked!");
}

const button = document.getElementById("myButton");
button.addEventListener("click", handleClick);
```

## Mouseover Event

Respond to a `mouseover` event on an element.

```html
<div id="myDiv" style="width: 100px; height: 100px; background-color: lightblue;"></div>
```

```javascript
function handleMouseover() {
  console.log("Mouse over div!");
}

const div = document.getElementById("myDiv");
div.addEventListener("mouseover", handleMouseover);
```

## Keyboard Event Handling

Listen for keyboard events and display the pressed key `keydown`.

```javascript
function handleKeydown(event) {
  console.log("Key pressed:", event.key);
}

document.addEventListener("keydown", handleKeydown);
```

## Form Submission

Capture form submission and prevent default `preventDefault` behavior.

```html
<form id="myForm">
  <input type="text" placeholder="Enter your name">
  <button type="submit">Submit</button>
</form>
```

```javascript
function handleSubmit(event) {
  event.preventDefault();
  console.log("Form submitted!");
}

const form = document.getElementById("myForm");
form.addEventListener("submit", handleSubmit);
```

## Double Click Event

Detect a double click `dblclick` event on an element.

```html
<div id="myDiv" style="width: 100px; height: 100px; background-color: lightgreen;"></div>
```

```javascript
function handleDoubleClick() {
  console.log("Double click on div!");
}

const div = document.getElementById("myDiv");
div.addEventListener("dblclick", handleDoubleClick);
```

## 6. Input Event

Track `input` changes in a text field.

```html
<input type="text" id="myInput" placeholder="Type something...">
```

```javascript
function handleInput(event) {
  console.log("Input value:", event.target.value);
}

const input = document.getElementById("myInput");
input.addEventListener("input", handleInput);
```

## Event Propagation

Demonstrate event propagation using nested elements.

```html
<div id="outer">
  <div id="inner">
    Click me!
  </div>
</div>
```

```javascript
function handleInnerClick() {
  console.log("Inner div clicked!");
}

function handleOuterClick() {
  console.log("Outer div clicked!");
}

const innerDiv = document.getElementById("inner");
const outerDiv = document.getElementById("outer");

innerDiv.addEventListener("click", handleInnerClick);
outerDiv.addEventListener("click", handleOuterClick);
```

## Remove Event Listener

Attach and remove an event listener.

```html
<button id="myButton">Click Me</button>
```

```javascript
function handleClick() {
  console.log("Button clicked!");
}

const button = document.getElementById("myButton");
button.addEventListener("click", handleClick);

// Remove the event listener after the first click
button.addEventListener("click", function() {
  console.log("Listener removed.");
  button.removeEventListener("click", handleClick);
});
```

## Event Delegation

Use event delegation to handle clicks on multiple elements.

```html
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

```javascript
function handleItemClick(event) {
  if (event.target.tagName === "LI") {
    console.log("Clicked:", event.target.textContent);
  }
}

const list = document.getElementById("myList");
list.addEventListener("click", handleItemClick);
```

## Context Menu Event

Display a custom context menu `contextmenu` on right-click.

```html
<div id="myDiv" style="width: 100px; height: 100px; background-color: lightcoral;"></div>

<ul id="contextMenu" style="display: none;">
  <li>Cut</li>
  <li>Copy</li>
  <li>Paste</li>
</ul>
```

```javascript
const div = document.getElementById("myDiv");
const contextMenu = document.getElementById("contextMenu");

div.addEventListener("contextmenu", function(event) {
  event.preventDefault();
  contextMenu.style.display = "block";
  contextMenu.style.left = `${event.clientX}px`;
  contextMenu.style.top = `${event.clientY}px`;
});

window.addEventListener("click", function() {
  contextMenu.style.display = "none";
});
```

## Drag and Drop

Implement basic drag-and-drop functionality.

```html
<div id="draggable" draggable="true">Drag me!</div>
<div id="droppable">Drop here</div>
```

```javascript
const draggable = document.getElementById("draggable");
const droppable = document.getElementById("droppable");

draggable.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("text/plain", "Drag me!");
});

droppable.addEventListener("dragover", function(event) {
  event.preventDefault();
});

droppable.addEventListener("drop", function(event) {
  event.preventDefault();
  console.log("Dropped!");
});
```

## Window Resize Event

Respond to the window `resize` event.

```javascript
function handleResize() {
  console.log("Window resized:", window.innerWidth, "x", window.innerHeight);
}

window.addEventListener("resize", handleResize);
```

## Mouse Movement Tracking

Track mouse movement `mousemove` on the document.

```javascript
function handleMouseMove(event) {
  console.log("Mouse position:", event.clientX, event.clientY);
}

document.addEventListener("mousemove", handleMouseMove);
```

## Preventing Default Behavior

Prevent the default behavior `preventDefault` of a link click.

```html
<a href="https://www.example.com" id="myLink">Click me</a>
```

```javascript
function handleClick(event) {
  event.preventDefault();
  console.log("Link clicked, but default behavior prevented.");
}

const link = document.getElementById("myLink");
link.addEventListener("click", handleClick);
```

## Event Target

Log the target of the clicked element.

```html
<button id="btn1">Button 1</button>
<button id="btn2">Button 2</button>
```

```javascript
function handleClick(event) {
  console.log("Clicked on:", event.target.textContent);
}

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", handleClick);
btn2.addEventListener("click", handleClick);
```

## Scroll Event

Detect the `scroll` event on the window.

```javascript
function handleScroll() {
  console.log("Page scrolled:", window.scrollY);
}

window.addEventListener("scroll", handleScroll);
```

## Mouseenter and Mouseleave Events

Use `mouseenter` and `mouseleave` events.

```html
<div id="myDiv" style="width: 100px; height: 100px; background-color: lightsalmon;"></div>
```

```javascript
const div = document.getElementById("myDiv");

div.addEventListener("mouseenter", function() {
  console.log("Mouse entered div!");
});

div.addEventListener("mouseleave", function() {
  console.log("Mouse left div!");
});
```

## Input Focus and Blur Events

Track input `focus` and `blur` events.

```html
<input type="text" id="myInput" placeholder="Enter something...">
```

```javascript
const input = document.getElementById("myInput");

input.addEventListener("focus", function() {
  console.log("Input focused!");
});

input.addEventListener("blur", function() {
  console.log("Input blurred!");
});
```

## Changing Event Target

Change the target of a `click` event.

```html
<button id="btn1">Button 1</button>
<button id="btn2">Button 2</button>
```

```javascript
function handleClick(event) {
  event.target.style.backgroundColor = "yellow";
}

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", handleClick);
btn2.addEventListener("click", handleClick);
```

## Custom Event

Create and dispatch a custom event `dispatchEvent`.

```html
<button id="myButton">Click Me</button>
```

```javascript
const button = document.getElementById("myButton");

button.addEventListener("customClick", function() {
  console.log("Custom click event triggered!");
});

function triggerCustomClick() {
  const event = new Event("customClick");
  button.dispatchEvent(event);
}

button.addEventListener("click", triggerCustomClick);
```

_Feel free to copy and paste these code snippets into an HTML file and see how they work in action. These examples cover a variety of event handling scenarios to help you understand different ways to work with events in JavaScript._