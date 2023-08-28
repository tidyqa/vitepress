---
layout: doc
title: Animations and Transitions - CSS Snippets
description: 20 captivating CSS code snippets for animations and transitions. From elegant fade-ins to playful bounces, these snippets empower you to infuse life into your web elements.
head:
  - ['meta', {property: 'og:title', content:  'Animations and Transitions - CSS Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/snippets/css/animations-and-transitions/' }] 
  - ['meta', {name: 'twitter:title', content: 'Animations and Transitions - CSS Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/snippets/css/animations-and-transitions/'}]
---

# Animations and Transitions

From graceful fade-ins to playful bounces, these snippets encompass a spectrum of animations and transitions that can transform your website's visual appeal. By integrating these customizable solutions, you can enrich your site's design with eye-catching effects that captivate your audience and convey messages with impact.

## Fade-in Animation

Apply a fade-in animation to elements when they appear on the screen.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="fade-in">
    <h2>Welcome to Our Website</h2>
    <p>Discover the world of creativity and innovation.</p>
  </div>
</body>
</html>
```

```css
/* styles.css */
.fade-in {
  opacity: 0;
  animation: fadeIn 1s forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
```

## Slide-in from Left Animation

Make elements slide in from the left when they appear on the screen.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="slide-in-left">
    <h2>Discover Our Latest Collection</h2>
    <p>Explore the trendiest fashion items for the season.</p>
  </div>
</body>
</html>
```

```css
/* styles.css */
.slide-in-left {
  transform: translateX(-100%);
  animation: slideLeft 1s forwards;
}

@keyframes slideLeft {
  to {
    transform: translateX(0);
  }
}
```

## Bounce Animation

Add a playful bounce animation to elements.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="bounce">
    <h2>Join Our Fun-Filled Event</h2>
    <p>Experience a day of excitement and joy for all ages.</p>
  </div>
</body>
</html>
```

```css
/* styles.css */
.bounce {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
```

## Rotate Animation

Make elements rotate smoothly for attention-grabbing effects.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="rotate">
    <h2>Unleash Your Creativity</h2>
    <p>Discover a world of endless possibilities.</p>
  </div>
</body>
</html>
```

```css
/* styles.css */
.rotate {
  animation: rotate 2s infinite linear;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

## Pulse Animation

Add a subtle pulsating animation to elements.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="pulse">
    <h2>Stay Connected</h2>
    <p>Join our community for updates and inspiration.</p>
  </div>
</body>
</html>
```

```css
/* styles.css */
.pulse {
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
```

## Fade-out Animation

Apply a fade-out animation to elements when they disappear from the screen.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="fade-out">
    <h2>Thank You for Visiting</h2>
    <p>We hope to see you again soon!</p>
  </div>
</body>
</html>
```

```css
/* styles.css */
.fade-out {
  animation: fadeOut 1s forwards;
}

@keyframes fadeOut {
  to {
    opacity: 0;
  }
}
```

## Slide-in from Bottom Animation

Make elements slide in from the bottom when they appear on the screen.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="slide-in-bottom">
    <h2>Step into Adventure</h2>
    <p>Embark on a journey to new horizons.</p>
  </div>
</body>
</html>
```

```css
/* styles.css */
.slide-in-bottom {
  transform: translateY(100%);
  animation: slideBottom 1s forwards;
}

@keyframes slideBottom {
  to {
    transform: translateY(0);
  }
}
```

## Grow Animation

Apply a gradual growth animation to elements.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
 

 <div class="grow">
    <h2>Unlock Your Potential</h2>
    <p>Discover talents you never knew you had.</p>
  </div>
</body>
</html>
```

```css
/* styles.css */
.grow {
  animation: grow 1s forwards;
}

@keyframes grow {
  to {
    transform: scale(1.1);
  }
}
```

## Slide-in from Right Animation

Make elements slide in from the right when they appear on the screen.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="slide-in-right">
    <h2>Discover Culinary Delights</h2>
    <p>Experience a world of flavors in every dish.</p>
  </div>
</body>
</html>
```

```css
/* styles.css */
.slide-in-right {
  transform: translateX(100%);
  animation: slideRight 1s forwards;
}

@keyframes slideRight {
  to {
    transform: translateX(0);
  }
}
```

## Shake Animation

Add a playful shaking animation to elements.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="shake">
    <h2>Join the Party</h2>
    <p>Celebrate moments that last a lifetime.</p>
  </div>
</body>
</html>
```

```css
/* styles.css */
.shake {
  animation: shake 0.5s infinite;
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-5px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(5px);
  }
}
```

## Spin Animation

Make elements spin around their center.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="spin">
    <h2>Uncover Hidden Treasures</h2>
    <p>Embark on a quest for knowledge and adventure.</p>
  </div>
</body>
</html>
```

```css
/* styles.css */
.spin {
  animation: spin 2s infinite linear;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

## Color Change Animation

Apply a smooth color change animation to elements.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="color-change">
    <h2>Experience the Rainbow</h2>
    <p>Immerse yourself in a spectrum of emotions.</p>
  </div>
</body>
</html>
```

```css
/* styles.css */
.color-change {
  animation: colorChange 2s infinite alternate;
}

@keyframes colorChange {
  from {
    color: #007bff;
  }
  to {
    color: #00bcd4;
  }
}
```

## Slide-in from Top Animation

Make elements slide in from the top when they appear on the screen.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="slide-in-top">
    <h2>Get Ready for an Adventure</h2>
    <p>Embark on a journey to breathtaking destinations.</p>
  </div>
</body>
</html>
```

```css
/* styles.css */
.slide-in-top {
  transform: translateY(-100%);
  animation: slideTop 1s forwards;
}

@keyframes slideTop {
  to {
    transform: translateY(0);
  }
}
```

## Float Animation

Create a gentle floating animation effect for elements.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="float">
    <h2>Relax and Unwind</h2>
    <p>Indulge in tranquility and serenity.</p>
  </div>
</body>
</html>
```

```css
/* styles.css */
.float {
  animation: float 3s infinite ease-in-out;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
```

## Swing Animation

Add a subtle swinging animation effect to elements.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="swing">
    <h2>Unlock New Horizons</h2>
    <p>Open the door to boundless opportunities.</p>
  </div>
</body>
</html>
```

```css
/* styles.css */
.swing {
  transform-origin: top center;
  animation: swing 2s infinite alternate;
}

@keyframes swing {
  from {
    transform: rotate(3deg);
  }
  to {
    transform: rotate(-3deg);
  }
}
```

## Blur Transition

Apply a smooth blur transition effect to elements.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="blur">
    <h2>Enter a World of Mystery</h2>
    <p>Uncover secrets that lie beyond the ordinary.</p>
  </div>
</body>
</html>
```

```css
/* styles.css */
.blur {
  transition: filter 0.5s;
}

.blur:hover {
  filter: blur(5px);
}
```

## Fade-in Slide Animation

Combine fade-in and slide-in animations for elements.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="fade-in-slide">
    <h2>Welcome to Our

 Community</h2>
    <p>Connect with like-minded individuals from around the world.</p>
  </div>
</body>
</html>
```

```css
/* styles.css */
.fade-in-slide {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInSlide 1s forwards;
}

@keyframes fadeInSlide {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Size Change Animation

Apply a smooth size change animation to elements.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="size-change">
    <h2>Transform Your Experience</h2>
    <p>Witness a revolution in innovation and technology.</p>
  </div>
</body>
</html>
```

```css
/* styles.css */
.size-change {
  transition: transform 0.5s;
}

.size-change:hover {
  transform: scale(1.1);
}
```

## Text Color Change Animation

Apply a dynamic color change animation to text.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="text-color-change">
    <h2>Illuminate Your Path</h2>
    <p>Let knowledge guide you to success.</p>
  </div>
</body>
</html>
```

```css
/* styles.css */
.text-color-change h2 {
  transition: color 0.5s;
}

.text-color-change h2:hover {
  color: #007bff;
}
```

## Background Color Change Animation

Apply a dynamic background color change animation to elements.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="bg-color-change">
    <h2>Immerse Yourself in Color</h2>
    <p>Experience emotions through a spectrum of shades.</p>
  </div>
</body>
</html>
```

```css
/* styles.css */
.bg-color-change {
  transition: background-color 0.5s;
  padding: 20px;
  text-align: center;
  cursor: pointer;
}

.bg-color-change:hover {
  background-color: #007bff;
  color: #fff;
}
```