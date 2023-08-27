---
layout: doc
title: Forms - CSS Snippets
description: From animated input fields and floating action buttons to gradient button hover effects, each snippet offers a unique approach to form design.
head:
  - ['meta', {property: 'og:title', content:  'Forms - CSS Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/snippets/css/forms/' }] 
  - ['meta', {name: 'twitter:title', content: 'Forms - CSS Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/snippets/css/forms/'}]
---

# Forms

Dynamic CSS form snippets designed to elevate the aesthetics and functionality of your web forms. Each snippet offers a distinctive take on form elements, from animated labels that elegantly move on focus to split-screen layouts that provide visual separation.

## Elegant Basic Form

Design an elegant and minimalistic form with vertically aligned input fields and a stylish submit button. The form radiates professionalism and simplicity.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="form-container">
    <form class="elegant-basic-form">
      <label for="username">Username</label>
      <input type="text" id="username" name="username" class="input-field">
      <label for="password">Password</label>
      <input type="password" id="password" name="password" class="input-field">
      <input type="submit" value="Submit" class="submit-button">
    </form>
  </div>
</body>
</html>
```

```css
/* styles.css */
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.elegant-basic-form {
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.input-field {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

.submit-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
}
```

## Modern Gradient Form

Craft a modern form with a gradient background, rounded input fields, and a contrasting submit button. The gradient adds depth and a sense of visual engagement.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="form-container">
    <form class="modern-gradient-form">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" class="input-field">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" class="input-field">
      <input type="submit" value="Submit" class="submit-button">
    </form>
  </div>
</body>
</html>
```

```css
/* styles.css */
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.modern-gradient-form {
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  background: linear-gradient(45deg, #00bcd4, #3f51b5);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #fff;
}

.input-field {
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.1);
  margin-bottom: 10px;
}

.submit-button {
  background-color: #ff5722;
  color: #fff;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
}
```

## Sleek Material Design Form

Create a sleek material design form with floating labels and vibrant highlight colors. The form's interactive elements enhance the user experience.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="form-container">
    <form class="material-form">
      <div class="material-input-group">
        <input type="text" id="md-name" name="md-name" class="material-input">
        <label for="md-name">Name</label>
      </div>
      <div class="material-input-group">
        <input type="email" id="md-email" name="md-email" class="material-input">
        <label for="md-email">Email</label>
      </div>
      <input type="submit" value="Submit" class="material-button">
    </form>
  </div>
</body>
</html>
```

```css
/* styles.css */
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.material-form {
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.material-input-group {
  position: relative;
  margin-bottom: 20px;
}

.material-input {
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  background-color: transparent;
}

.material-input:focus {
  outline: none;
  border-color: #2196f3;
}

.material-input:focus + label {
  top: -20px;
  font-size: 12px;
  color: #2196f3;
}

.material-input-group label {
  position: absolute;
  top: 10px;
  left: 0;
  font-size: 16px;
  color: #555;
  transition: 0.2s ease all;
}

.material-button {
  background-color: #2196f3;
  color: #fff;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
}
```

## Interactive Checkbox and Radio Styles

Style checkboxes and radio buttons with interactive labels. The labels change color when selected, providing clear feedback to users.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="form-container">
    <form class="interactive-checkbox-radio-form">
      <div class="checkbox-group">
        <input type="checkbox" id="checkbox1" name="checkbox1" class="custom-checkbox">
        <label for="checkbox1">Option 1</label>
      </div>
      <div class="checkbox-group">
        <input type="checkbox" id="checkbox2" name="checkbox2" class="custom-checkbox">
        <label for="checkbox2">Option 2</label>
      </div>
      <div class="radio-group">
        <input type="radio" id="radio1" name="radio" class="custom-radio">
        <label for="radio1">Radio 1</label>
      </div>
      <div class="radio-group">
        <input type="radio" id="radio2" name="radio" class="custom-radio">
        <label for="radio2">Radio 2</label>
      </div>
      <input type="submit" value="Submit" class="form-button">
    </form>
  </div>
</body>
</html>
```

```css
/* styles.css */
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.interactive-checkbox-radio-form {
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.checkbox-group,
.radio-group {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.custom-checkbox,
.custom-radio {
  display: none;
}

.custom-checkbox + label,
.custom-radio + label {
  margin-left: 10px;
  cursor: pointer;
}

.custom-checkbox + label:before,
.custom-radio + label:before {
  content: "\f0c8";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  color: #ccc;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 18px;
}

.custom-checkbox:checked + label:before,
.custom-radio:checked + label:before {
  content: "\f14a";
  color: #007bff;
  border-color: #007bff;
}

.form-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
}
```

## Transparent Border Input Fields

Create input fields with a transparent border that appears on focus, providing a sleek and subtle visual effect.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="form-container">
    <form class="transparent-border-form">
      <label for="transparent-name">Name</label>
      <input type="text" id="transparent-name" name="transparent-name" class="transparent-border-input">
      <label for="transparent-email">Email</label>
      <input type="email" id="transparent-email" name="transparent-email" class="transparent-border-input">
      <input type="submit" value="Submit" class="form-button">
    </form>
  </div>
</body>
</html>
```

```css
/* styles.css */
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.transparent-border-form {
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.transparent-border-input {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: transparent;
  margin-bottom: 10px;
  transition: border-color 0.3s ease;
}

.transparent-border-input:focus {
  border-color: #007bff;
}

.form-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
}
```

## Rounded Input Fields with Icons

Enhance input fields with rounded corners and icons that provide visual cues for user interaction.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>
  <div class="form-container">
    <form class="rounded-icons-form">
      <div class="icon-input-group">
        <i class="fas fa-user"></i>
        <input type="text" id="username" name="username" class="rounded-input" placeholder="Username">
      </div>
      <div class="icon-input-group">
        <i class="fas fa-envelope"></i>
        <input type="email" id="email" name="email" class="rounded-input" placeholder="Email">
      </div>
      <input type="submit" value="Submit" class="form-button">
    </form>
  </div>
</body>
</html>
```

```css
/* styles.css */
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.rounded-icons-form {
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.icon-input-group {
  position: relative;
  margin-bottom: 20px;
}

.rounded-input {
  display: block;
  width: 100%;
  padding: 10px 40px 10px 30px;
  border: none;
  border-radius: 25px;
  background-color: #f7f7f7;
}

.icon-input-group i {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #ccc;
}

.form-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
}
```

## Hover Effects

Add hover effects to input fields and the submit button to create an interactive and engaging form experience.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="form-container">
    <form class="hover-form">
      <label for="hover-name">Name</label>
      <input type="text" id="hover-name" name="hover-name" class="hover-input">
      <label for="hover-email">Email</label>
      <input type="email" id="hover-email" name="hover-email" class="hover-input">
      <input type="submit" value="Submit" class="hover-button">
    </form>
  </div>
</body>
</html>
```

```css
/* styles.css */
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.hover-form {
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.hover-input {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  transition: border-color 0.3s ease;
}

.hover-input:hover {
  border-color: #007bff;
}

.hover-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.hover-button:hover {
  background-color: #0056b3;
}
```

## Animated Placeholder Labels

Create input fields with animated placeholder labels that float above the input when focused, improving user experience.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="form-container">
    <form class="animated-placeholder-form">
      <div class="animated-input-group">
        <input type="text" id="animated-name" name="animated-name" class="animated-input">
        <label for="animated-name">Name</label>
      </div>
      <div class="animated-input-group">
        <input type="email" id="animated-email" name="animated-email" class="animated-input">
        <label for="animated-email">Email</label>
      </div>
      <input type="submit" value="Submit" class="form-button">
    </form>
  </div>
</body>
</html>
```

```css
/* styles.css */
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.animated-placeholder-form {
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.animated-input-group {
  position: relative;
  margin-bottom: 20px;
}

.animated-input {
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  background-color: transparent;
}

.animated-input:focus {
  outline: none;
  border-color: #2196f3;
}

.animated-input:focus + label {
  top: -20px;
  font-size: 12px;
  color: #2196f3;
}

.animated-input-group label {
  position: absolute;
  top: 10px;
  left: 0;
  font-size: 16px;
  color: #555;
  transition: 0.2s ease all;
}

.form-button {
  background-color: #2196f3;
  color: #fff;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
}
```

## Multi-Column Form

Create a multi-column form layout with evenly spaced input fields and a styled submit button, providing an organized appearance.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="form-container">
    <form class="multi-column-form">
      <div class="column">
        <label for="column-name">Name</label>
        <input type="text" id="column-name" name="column-name" class="input-field">
      </div>
      <div class="column">
        <label for="column-email">Email</label>
        <input type="email" id="column-email" name="column-email" class="input-field">
      </div>
      <input type="submit" value="Submit" class="form-button">
    </form>
  </div>
</body>
</html>
```

```css
/* styles.css */
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.multi-column-form {
  width: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.column {
  display: flex;
  flex-direction: column;
}

.input-field {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

.form-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
}
```

## Dark Mode Toggle

Design a form with a dark mode toggle switch, providing users with the option to switch between light and dark modes.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="form-container">
    <form class="dark-mode-form">
      <div class="dark-mode-toggle">
        <label class="toggle-label">
          <input type="checkbox" id="dark-mode-toggle" class="dark-mode-checkbox">
          <span class="slider"></span>
        </label>
      </div>
      <input type="submit" value="Submit" class="form-button">
    </form>
  </div>
</body>
</html>
```

```css
/* styles.css */
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.dark-mode-form {
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.dark-mode-toggle {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.toggle-label {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
}

.dark-mode-checkbox {
  display: none;
}

.slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 2px;
  bottom: 2px;
  background-color: #fff;
  border-radius: 50%;
  transition: 0.4s;
}

.dark-mode-checkbox:checked + .slider {
  background-color: #2196f3;
}

.dark-mode-checkbox:checked + .slider:before {
  transform: translateX(30px);
}
.form-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
}
```

## Stepper Form

Design a stepper form with a progress indicator and stylish navigation buttons for a guided user experience.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>
  <div class="form-container">
    <form class="stepper-form">
      <div class="step-container">
        <div class="step">
          <i class="fas fa-user"></i>
          <span class="step-number">1</span>
        </div>
        <div class="step">
          <i class="fas fa-envelope"></i>
          <span class="step-number">2</span>
        </div>
        <div class="step">
          <i class="fas fa-check"></i>
          <span class="step-number">3</span>
        </div>
      </div>
      <div class="step-content">
        <div class="step-panel">
          <label for="step-name">Name</label>
          <input type="text" id="step-name" name="step-name" class="input-field">
        </div>
        <div class="step-panel">
          <label for="step-email">Email</label>
          <input type="email" id="step-email" name="step-email" class="input-field">
        </div>
        <div class="step-panel">
          <h2>Success!</h2>
        </div>
      </div>
      <button type="button" class="prev-button">Previous</button>
      <button type="button" class="next-button">Next</button>
    </form>
  </div>
</body>
</html>
```

```css
/* styles.css */
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.stepper-form {
  width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.step-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-number {
  margin-top: 5px;
}

.step-panel {
  display: none;
}

.step-panel.active {
  display: block;
}

.input-field {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

.prev-button,
.next-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}

.prev-button {
  background-color: #ccc;
  margin-right: 10px;
}

.next-button {
  background-color: #007bff;
}
```

## Custom Checkbox and Radio Styles

Style checkboxes and radio buttons with custom graphics for a unique visual appearance.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>
  <div class="form-container">
    <form class="custom-checkbox-radio-form">
      <div class="custom-checkbox-group">
        <input type="checkbox" id="custom-checkbox1" name="custom-checkbox1" class="custom-checkbox">
        <label for="custom-checkbox1">Option 1</label>
      </div>
      <div class="custom-checkbox-group">
        <input type="checkbox" id="custom-checkbox2" name="custom-checkbox2" class="custom-checkbox">
        <label for="custom-checkbox2">Option 2</label>
      </div>
      <div class="custom-radio-group">
        <input type="radio" id="custom-radio1" name="custom-radio" class="custom-radio">
        <label for="custom-radio1">Radio 1</label>
      </div>
      <div class="custom-radio-group">
        <input type="radio" id="custom-radio2" name="custom-radio" class="custom-radio">
        <label for="custom-radio2">Radio 2</label>
      </div>
      <input type="submit" value="Submit" class="form-button">
    </form>
  </div>
</body>
</html>
```

```css
/* styles.css */
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.custom-checkbox-radio-form {
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.custom-checkbox-group,
.custom-radio-group {
  display:

 flex;
  align-items: center;
  margin-bottom: 15px;
}

.custom-checkbox,
.custom-radio {
  display: none;
}

.custom-checkbox + label,
.custom-radio + label {
  margin-left: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.custom-checkbox + label:before,
.custom-radio + label:before {
  content: "";
  width: 18px;
  height: 18px;
  border: 2px solid #ccc;
  border-radius: 3px;
  margin-right: 8px;
  display: inline-block;
}

.custom-checkbox:checked + label:before,
.custom-radio:checked + label:before {
  content: "\f00c";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  color: #007bff;
}

.form-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
}
```

## Gradient Button Hover Effect

Style the submit button with a gradient background that transforms into a solid color on hover, enhancing the interactivity of the form.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="form-container">
    <form class="gradient-button-form">
      <label for="gradient-name">Name</label>
      <input type="text" id="gradient-name" name="gradient-name" class="input-field">
      <label for="gradient-email">Email</label>
      <input type="email" id="gradient-email" name="gradient-email" class="input-field">
      <input type="submit" value="Submit" class="gradient-button">
    </form>
  </div>
</body>
</html>
```

```css
/* styles.css */
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.gradient-button-form {
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.input-field {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

.gradient-button {
  background-image: linear-gradient(to right, #007bff, #00bcd4);
  background-size: 200% auto;
  color: #fff;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-position 0.3s ease;
}

.gradient-button:hover {
  background-position: right center;
}
```

## Transparent Input Fields with Border Focus

Design input fields with a transparent background that gains a border on focus, providing subtle feedback to users.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="form-container">
    <form class="transparent-input-form">
      <label for="transparent-border-name">Name</label>
      <input type="text" id="transparent-border-name" name="transparent-border-name" class="transparent-input">
      <label for="transparent-border-email">Email</label>
      <input type="email" id="transparent-border-email" name="transparent-border-email" class="transparent-input">
      <input type="submit" value="Submit" class="form-button">
    </form>
  </div>
</body>
</html>
```

```css
/* styles.css */
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.transparent-input-form {
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.transparent-input {
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid #ccc;
  border-radius: 0;
  margin-bottom: 10px;
  transition: border-color 0.3s ease;
}

.transparent-input:focus {
  outline: none;
  border-color: #007bff;
}

.form-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
}
```

## Form with Icon Background

Add a background image with icons to the form, giving it an artistic and creative flair.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>
  <div class="form-container">
    <form class="icon-background-form">
      <div class="form-icon">
        <i class="fas fa-user"></i>
      </div>
      <label for="icon-name">Name</label>
      <input type="text" id="icon-name" name="icon-name" class="input-field">
      <label for="icon-email">Email</label>
      <input type="email" id="icon-email" name="icon-email" class="input-field">
      <input type="submit" value="Submit" class="form-button">
    </form>
  </div>
</body>
</html>
```

```css
/* styles.css */
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.icon-background-form {
  width: 300px;
  padding: 20px;
  background-color: #fff;
  background-image: url('background.png');
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}

.form-icon {
  position: absolute;
  top: -40px;
  left: calc(50% - 20px);
  background-color: #007bff;
  color: #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.input-field {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

.form-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
}
```

## Floating Action Button Form

Design a form with a floating action button that expands into input fields on click.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>
  <div class="form-container">
    <form class="fab-form">
      <div class="fab" id="fab">
        <i class="fas fa-plus"></i>
      </div>
      <div class="fab-content">
        <label for="fab-name">Name</label>
        <input type="text" id="fab-name" name="fab-name" class="input-field">
        <label for="fab-email">Email</label>
        <input type="email" id="fab-email" name="fab-email" class="input-field">
      </div>
      <input type="submit" value="Submit" class="form-button">
    </form>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

```css
/* styles.css */
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.fab-form {
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}

.fab {
  position: absolute;
  bottom: -20px;
  right: -20px;
  background-color: #007bff;
  color: #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.fab:hover {
  background-color: #0056b3;
}

.fab-content {
  display: none;
  margin-top: 20px;
}

.fab-content.active {
  display: block;
}

.input-field {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

.form-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 

15px;
  cursor: pointer;
  border-radius: 5px;
}
```

```javascript
// script.js
const fab = document.getElementById('fab');
const fabContent = document.querySelector('.fab-content');

fab.addEventListener('click', () => {
  fabContent.classList.toggle('active');
});
```

## Animated Form Fields

Create input fields with animated labels that move up on focus, improving the visual feedback for users.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="form-container">
    <form class="animated-form">
      <div class="animated-input-group">
        <input type="text" id="animated-name" name="animated-name" class="animated-input">
        <label for="animated-name">Name</label>
      </div>
      <div class="animated-input-group">
        <input type="email" id="animated-email" name="animated-email" class="animated-input">
        <label for="animated-email">Email</label>
      </div>
      <input type="submit" value="Submit" class="form-button">
    </form>
  </div>
</body>
</html>
```

```css
/* styles.css */
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.animated-form {
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.animated-input-group {
  position: relative;
  margin-bottom: 20px;
}

.animated-input {
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  background-color: transparent;
}

.animated-input:focus {
  outline: none;
  border-color: #2196f3;
}

.animated-input:focus + label {
  top: -20px;
  font-size: 12px;
  color: #2196f3;
  transition: 0.2s ease all;
}

.animated-input-group label {
  position: absolute;
  top: 10px;
  left: 0;
  font-size: 16px;
  color: #555;
}

.form-button {
  background-color: #2196f3;
  color: #fff;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
}
```

## Accordion Form

Create an accordion-style form that expands and collapses sections when clicked, offering an organized user experience.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>
  <div class="form-container">
    <form class="accordion-form">
      <div class="accordion-section">
        <div class="accordion-title">
          <i class="fas fa-user"></i>
          <span>Name</span>
          <i class="fas fa-chevron-down"></i>
        </div>
        <div class="accordion-content">
          <input type="text" id="accordion-name" name="accordion-name" class="input-field">
        </div>
      </div>
      <div class="accordion-section">
        <div class="accordion-title">
          <i class="fas fa-envelope"></i>
          <span>Email</span>
          <i class="fas fa-chevron-down"></i>
        </div>
        <div class="accordion-content">
          <input type="email" id="accordion-email" name="accordion-email" class="input-field">
        </div>
      </div>
      <input type="submit" value="Submit" class="form-button">
    </form>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

```css
/* styles.css */
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.accordion-form {
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.accordion-section {
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.accordion-title {
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.accordion-title span {
  margin-left: 10px;
}

.accordion-content {
  padding: 10px;
  display: none;
}

.accordion-content.active {
  display: block;
}

.input-field {
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #f7f7f7;
  border-radius: 5px;
  margin-bottom: 10px;
}

.form-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
}
```

```javascript
// script.js
const accordionTitles = document.querySelectorAll('.accordion-title');
const accordionContents = document.querySelectorAll('.accordion-content');

accordionTitles.forEach((title, index) => {
  title.addEventListener('click', () => {
    accordionContents[index].classList.toggle('active');
  });
});
```

## Split Screen Form

Design a split-screen form with two input sections that provide a distinct visual separation.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="form-container">
    <form class="split-screen-form">
      <div class="split-left">
        <label for="split-name">Name</label>
        <input type="text" id="split-name" name="split-name" class="input-field">
      </div>
      <div class="split-right">
        <label for="split-email">Email</label>
        <input type="email" id="split-email" name="split-email" class="input-field">
      </div>
      <input type="submit" value="Submit" class="form-button">
    </form>
  </div>
</body>
</html>
```

```css
/* styles.css */
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.split-screen-form {
  width: 500px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
}

.split-left,
.split-right {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.split-left {
  background-color: #007bff;
  color: #fff;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.split-right {
  background-color: #f7f7f7;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.input-field {
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
}

.form-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
}
```

## Form with Background Image

Create a form with a background image that adds visual interest to the design.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="form-container">
    <form class="background-image-form">
      <label for="bg-name">Name</label>
      <input type="text" id="bg-name" name="bg-name" class="input-field">
      <label for="bg-email">Email</label>
      <input type="email" id="bg-email" name="bg-email" class="input-field">
      <input type="submit" value="Submit" class="form-button">
    </form>
  </div>
</body>
</html>
```

```css
/* styles.css */
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.background-image-form {
  width: 300px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  background-image: url('background.jpg');
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.input-field {
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
}

.form-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
}
```