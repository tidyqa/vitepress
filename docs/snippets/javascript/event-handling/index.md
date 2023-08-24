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

```javascript
<h2>Click Event Handling</h2>

<button id="myButton">Click Me</button>

<script>
function handleClick() {
  console.log("Button clicked!");
}

const button = document.getElementById("myButton");
button.addEventListener("click", handleClick);
</script>
```

## Mouseover Event

Respond to a `mouseover` event on an element.

```javascript
<h2>Mouseover Event</h2>

<div id="myDiv" style="width: 100px; height: 100px; background-color: lightblue;"></div>

<script>
function handleMouseover() {
  console.log("Mouse over div!");
}

const div = document.getElementById("myDiv");
div.addEventListener("mouseover", handleMouseover);
</script>
```

## Keyboard Event Handling

Listen for keyboard events and display the pressed key `keydown`.

```javascript
<h2>Keyboard Event Handling</h2>

<script>
function handleKeydown(event) {
  console.log("Key pressed:", event.key);
}

document.addEventListener("keydown", handleKeydown);
</script>
```

## Form Submission

Capture form submission and prevent default `preventDefault` behavior.

```javascript
<h2>Form Submission</h2>

<form id="myForm">
  <input type="text" placeholder="Enter your name">
  <button type="submit">Submit</button>
</form>

<script>
function handleSubmit(event) {
  event.preventDefault();
  console.log("Form submitted!");
}

const form = document.getElementById("myForm");
form.addEventListener("submit", handleSubmit);
</script>
```

## Double Click Event

Detect a double click `dblclick` event on an element.

```javascript
<h2>Double Click Event</h2>

<div id="myDiv" style="width: 100px; height: 100px; background-color: lightgreen;"></div>

<script>
function handleDoubleClick() {
  console.log("Double click on div!");
}

const div = document.getElementById("myDiv");
div.addEventListener("dblclick", handleDoubleClick);
</script>
```

## 6. Input Event

Track `input` changes in a text field.

```javascript
<h2>Input Event</h2>

<input type="text" id="myInput" placeholder="Type something...">

<script>
function handleInput(event) {
  console.log("Input value:", event.target.value);
}

const input = document.getElementById("myInput");
input.addEventListener("input", handleInput);
</script>
```

## Event Propagation

Demonstrate event propagation using nested elements.

```javascript
<h2>Event Propagation</h2>

<div id="outer">
  <div id="inner">
    Click me!
  </div>
</div>

<script>
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
</script>
```

## Remove Event Listener

Attach and remove an event listener.

```javascript
<h2>Remove Event Listener</h2>

<button id="myButton">Click Me</button>

<script>
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
</script>
```

## Event Delegation

Use event delegation to handle clicks on multiple elements.

```javascript
<h2>Event Delegation</h2>

<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
function handleItemClick(event) {
  if (event.target.tagName === "LI") {
    console.log("Clicked:", event.target.textContent);
  }
}

const list = document.getElementById("myList");
list.addEventListener("click", handleItemClick);
</script>
```

## Context Menu Event

Display a custom context menu `contextmenu` on right-click.

```javascript
<h2>Context Menu Event</h2>

<div id="myDiv" style="width: 100px; height: 100px; background-color: lightcoral;"></div>

<ul id="contextMenu" style="display: none;">
  <li>Cut</li>
  <li>Copy</li>
  <li>Paste</li>
</ul>

<script>
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
</script>
```

## Drag and Drop

Implement basic drag-and-drop functionality.

```javascript
<h2>Drag and Drop</h2>

<div id="draggable" draggable="true">Drag me!</div>
<div id="droppable">Drop here</div>

<script>
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
</script>
```

## Window Resize Event

Respond to the window `resize` event.

```javascript
<h2>Window Resize Event</h2>

<script>
function handleResize() {
  console.log("Window resized:", window.innerWidth, "x", window.innerHeight);
}

window.addEventListener("resize", handleResize);
</script>
```

## Mouse Movement Tracking

Track mouse movement `mousemove` on the document.

```javascript
<h2>Mouse Movement Tracking</h2>

<script>
function handleMouseMove(event) {
  console.log("Mouse position:", event.clientX, event.clientY);
}

document.addEventListener("mousemove", handleMouseMove);
</script>
```

## Preventing Default Behavior

Prevent the default behavior `preventDefault` of a link click.

```javascript
<h2>Preventing Default Behavior</h2>

<a href="https://www.example.com" id="myLink">Click me</a>

<script>
function handleClick(event) {
  event.preventDefault();
  console.log("Link clicked, but default behavior prevented.");
}

const link = document.getElementById("myLink");
link.addEventListener("click", handleClick);
</script>
```

## Event Target

Log the target of the clicked element.

```javascript


<h2>Event Target</h2>

<button id="btn1">Button 1</button>
<button id="btn2">Button 2</button>

<script>
function handleClick(event) {
  console.log("Clicked on:", event.target.textContent);
}

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", handleClick);
btn2.addEventListener("click", handleClick);
</script>
```

## Scroll Event

Detect the `scroll` event on the window.

```javascript
<h2>Scroll Event</h2>

<script>
function handleScroll() {
  console.log("Page scrolled:", window.scrollY);
}

window.addEventListener("scroll", handleScroll);
</script>
```

## Mouseenter and Mouseleave Events

Use `mouseenter` and `mouseleave` events.

```javascript
<h2>Mouseenter and Mouseleave Events</h2>

<div id="myDiv" style="width: 100px; height: 100px; background-color: lightsalmon;"></div>

<script>
const div = document.getElementById("myDiv");

div.addEventListener("mouseenter", function() {
  console.log("Mouse entered div!");
});

div.addEventListener("mouseleave", function() {
  console.log("Mouse left div!");
});
</script>
```

## Input Focus and Blur Events

Track input `focus` and `blur` events.

```javascript
<h2>Input Focus and Blur Events</h2>

<input type="text" id="myInput" placeholder="Enter something...">

<script>
const input = document.getElementById("myInput");

input.addEventListener("focus", function() {
  console.log("Input focused!");
});

input.addEventListener("blur", function() {
  console.log("Input blurred!");
});
</script>
```

## Changing Event Target

Change the target of a `click` event.

```javascript
<h2>Changing Event Target</h2>

<button id="btn1">Button 1</button>
<button id="btn2">Button 2</button>

<script>
function handleClick(event) {
  event.target.style.backgroundColor = "yellow";
}

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", handleClick);
btn2.addEventListener("click", handleClick);
</script>
```

## Custom Event

Create and dispatch a custom event `dispatchEvent`.

```javascript
<h2>Custom Event</h2>

<button id="myButton">Click Me</button>

<script>
const button = document.getElementById("myButton");

button.addEventListener("customClick", function() {
  console.log("Custom click event triggered!");
});

function triggerCustomClick() {
  const event = new Event("customClick");
  button.dispatchEvent(event);
}

button.addEventListener("click", triggerCustomClick);
</script>
```

_Feel free to copy and paste these code snippets into an HTML file and see how they work in action. These examples cover a variety of event handling scenarios to help you understand different ways to work with events in JavaScript._