---
layout: doc
title: Images and Icons - CSS Snippets
description: From image zoom and flip animations to gradient icon backgrounds, these snippets offer a range of creative possibilities for enhancing user engagement and aesthetics.
head:
  - ['meta', {property: 'og:title', content:  'Images and Icons - CSS Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/snippets/css/images-and-icons/' }] 
  - ['meta', {name: 'twitter:title', content: 'Images and Icons - CSS Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/snippets/css/images-and-icons/'}]
---

# Images and Icons

Discover captivating effects like smooth image zooms, overlay captions for context, and interactive icon animations. Whether it's crafting circular image borders, building responsive image grids, or designing pulsating icon interactions, these snippets empower you to craft visually appealing and engaging user experiences.

## Image Zoom on Hover

Enhance user experience by applying a smooth zoom effect to images when hovered upon.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="image-container">
    <img src="image.jpg" alt="Image" class="zoom-image">
  </div>
</body>
</html>
```

```css
/* styles.css */
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.zoom-image {
  transition: transform 0.3s ease;
}

.zoom-image:hover {
  transform: scale(1.1);
}
```

## Image Overlay with Text

Create an appealing overlay on images that displays a title and description upon hover.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="image-container">
    <div class="image-overlay">
      <img src="image.jpg" alt="Image" class="overlay-image">
      <div class="overlay-text">
        <h2>Beautiful Sunset</h2>
        <p>Enjoy the breathtaking view of the sun setting over the horizon.</p>
      </div>
    </div>
  </div>
</body>
</html>
```

```css
/* styles.css */
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.image-overlay {
  position: relative;
}

.overlay-image {
  width: 100%;
  height: auto;
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 20px;
  text-align: center;
}

.overlay-text h2 {
  margin: 0;
}
```

## Image Slider with Controls

Create an image slider with navigation controls for an interactive image showcase.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="slider-container">
    <div class="slider">
      <img src="image1.jpg" alt="Image 1" class="slider-image">
      <img src="image2.jpg" alt="Image 2" class="slider-image">
      <img src="image3.jpg" alt="Image 3" class="slider-image">
    </div>
    <div class="slider-controls">
      <button class="prev-button">&#10094;</button>
      <button class="next-button">&#10095;</button>
    </div>
  </div>
</body>
</html>
```

```css
/* styles.css */
.slider-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.slider {
  display: flex;
  overflow: hidden;
}

.slider-image {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}

.slider-controls {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.prev-button,
.next-button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 50%;
  margin: 0 10px;
}

.prev-button:hover,
.next-button:hover {
  background-color: #555;
}
```

## Circular Image with Border

Create circular images with a subtle border for a visually appealing effect.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="image-container">
    <img src="profile.jpg" alt="Profile Image" class="circular-image">
  </div>
</body>
</html>
```

```css
/* styles.css */
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.circular-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid #007bff;
}
```

## Image Caption Overlay

Add caption overlays to images for contextual information.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="image-container">
    <div class="image-caption">
      <img src="vacation.jpg" alt="Vacation" class="caption-image">
      <div class="caption-text">
        <p>Enjoying a relaxing vacation on a tropical beach.</p>
      </div>
    </div>
  </div>
</body>
</html>
```

```css
/* styles.css */
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.image-caption {
  position: relative;
}

.caption-image {
 

 width: 100%;
  height: auto;
}

.caption-text {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 10px;
}

.caption-text p {
  margin: 0;
}
```

## Icon Buttons

Create attractive icon buttons for a modern user interface.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>
  <div class="button-container">
    <button class="icon-button"><i class="fas fa-heart"></i></button>
    <button class="icon-button"><i class="fas fa-comment"></i></button>
    <button class="icon-button"><i class="fas fa-share"></i></button>
  </div>
</body>
</html>
```

```css
/* styles.css */
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.icon-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 20px;
}

.icon-button:hover {
  background-color: #0056b3;
}
```

## Gradient Icon Background

Create a gradient background for icons to add visual depth.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>
  <div class="icon-container">
    <div class="gradient-icon">
      <i class="fas fa-star"></i>
    </div>
  </div>
</body>
</html>
```

```css
/* styles.css */
.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.gradient-icon {
  background-image: linear-gradient(to bottom, #007bff, #00bcd4);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 24px;
}
```

## Image Hover Transition

Apply smooth transitions to images on hover.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="image-container">
    <img src="image.jpg" alt="Image" class="hover-transition">
  </div>
</body>
</html>
```

```css
/* styles.css */
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.hover-transition {
  transition: transform 0.3s ease, filter 0.3s ease;
}

.hover-transition:hover {
  transform: scale(1.1);
  filter: brightness(70%);
}
```

## Circular Icon Button

Create circular buttons with icon content.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>
  <div class="button-container">
    <button class="circular-icon-button"><i class="fas fa-plus"></i></button>
    <button class="circular-icon-button"><i class="fas fa-pencil-alt"></i></button>
    <button class="circular-icon-button"><i class="fas fa-trash"></i></button>
  </div>
</body>
</html>
```

```css
/* styles.css */
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.circular-icon-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 15px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.circular-icon-button:hover {
  background-color: #0056b3;
  transform: scale(1.1);
}
```

## Image Carousel

Create a responsive image carousel using CSS for a dynamic image display.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="carousel-container">
    <div class="carousel">
      <div class="carousel-slide">
        <img src="image1.jpg" alt="Image 1" class="carousel-image">
      </div>
      <div class="carousel-slide">
        <img src="image2.jpg" alt="Image 2" class="carousel-image">
      </div>
      <div class="carousel-slide">
        <img src="image3.jpg" alt="Image 3" class="carousel-image">
      </div>
    </div>
  </div>
</body>
</html>
```

```css
/* styles.css */
.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.carousel {
  display: flex;
  overflow: hidden;
}

.carousel-slide {
  min-width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-image {
  max-width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}

/* Add animation to create carousel effect */
@keyframes carousel {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.carousel {
  animation: carousel 10s infinite;
}

/* Pause animation on hover */
.carousel:hover {
  animation-play-state: paused;
}
```

## Gradient Icon Text

Apply a gradient background to text icons for a visually engaging effect.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>
  <div class="icon-container">
    <div class="gradient-icon-text">
      <i class="fas fa-star"></i>
      <span>Featured</span>
    </div

>
  </div>
</body>
</html>
```

```css
/* styles.css */
.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.gradient-icon-text {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, #007bff, #00bcd4);
  padding: 10px;
  border-radius: 5px;
  color: #fff;
}

.gradient-icon-text i {
  font-size: 24px;
  margin-right: 5px;
}

.gradient-icon-text span {
  font-size: 16px;
  font-weight: bold;
}
```

## Image Gallery Grid

Create a responsive image gallery using a grid layout.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="gallery-container">
    <div class="image-grid">
      <img src="image1.jpg" alt="Image 1" class="grid-image">
      <img src="image2.jpg" alt="Image 2" class="grid-image">
      <img src="image3.jpg" alt="Image 3" class="grid-image">
      <img src="image4.jpg" alt="Image 4" class="grid-image">
      <img src="image5.jpg" alt="Image 5" class="grid-image">
      <img src="image6.jpg" alt="Image 6" class="grid-image">
    </div>
  </div>
</body>
</html>
```

```css
/* styles.css */
.gallery-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
}

.grid-image {
  width: 100%;
  height: auto;
}
```

## Icon Rotate on Hover

Rotate icons smoothly when hovered over.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>
  <div class="icon-container">
    <i class="fas fa-bell"></i>
  </div>
</body>
</html>
```

```css
/* styles.css */
.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.icon-container i {
  font-size: 48px;
  color: #007bff;
  transition: transform 0.3s ease;
}

.icon-container i:hover {
  transform: rotate(45deg);
}
```

## Circular Image with Border Gradient

Combine circular images with gradient borders for a captivating effect.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="image-container">
    <img src="avatar.jpg" alt="Avatar" class="circular-border-image">
  </div>
</body>
</html>
```

```css
/* styles.css */
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.circular-border-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid transparent;
  background-clip: padding-box;
  background-image: linear-gradient(to bottom, #007bff, #00bcd4);
}
```

## Icon Shadow Effect

Apply a shadow effect to icons on hover.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>
  <div class="icon-container">
    <i class="fas fa-paper-plane"></i>
  </div>
</body>
</html>
```

```css
/* styles.css */
.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.icon-container i {
  font-size: 48px;
  color: #007bff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.icon-container i:hover {
  transform: translateY(-5px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
```

## Icon Grid Layout

Create a responsive grid layout for displaying icons.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>
  <div class="icon-grid">
    <i class="fas fa-heart"></i>
    <i class="fas fa-comment"></i>
    <i class="fas fa-share"></i>
    <i class="fas fa-bookmark"></i>
    <i class="fas fa-camera"></i>
    <i class

="fas fa-globe"></i>
  </div>
</body>
</html>
```

```css
/* styles.css */
.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.icon-grid i {
  font-size: 24px;
  color: #007bff;
}
```

## Icon Pulse Animation

Create a pulsating animation effect on icons.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>
  <div class="icon-container">
    <i class="fas fa-heart"></i>
  </div>
</body>
</html>
```

```css
/* styles.css */
.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.icon-container i {
  font-size: 48px;
  color: #007bff;
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}
```

## Image Fade-in Animation

Apply a smooth fade-in animation to images.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="image-container">
    <img src="image.jpg" alt="Image" class="fade-in-image">
  </div>
</body>
</html>
```

```css
/* styles.css */
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.fade-in-image {
  opacity: 0;
  animation: fadeIn 1s forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
```

## Text Over Image

Overlay text on an image for visual contrast.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="image-container">
    <div class="text-overlay">
      <img src="landscape.jpg" alt="Landscape" class="overlay-image">
      <div class="overlay-text">
        <h2>Nature's Beauty</h2>
        <p>Explore the breathtaking beauty of untouched landscapes.</p>
      </div>
    </div>
  </div>
</body>
</html>
```

```css
/* styles.css */
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.text-overlay {
  position: relative;
}

.overlay-image {
  width: 100%;
  height: auto;
}

.overlay-text {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 20px;
}

.overlay-text h2 {
  margin: 0;
}
```

I apologize for the oversight. Here is the missing snippet:

---

## Image Hover Flip Effect

Apply a flip animation to images on hover, revealing a different side.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="image-container">
    <div class="flip-image">
      <div class="front">
        <img src="front.jpg" alt="Front" class="flip-front">
      </div>
      <div class="back">
        <img src="back.jpg" alt="Back" class="flip-back">
      </div>
    </div>
  </div>
</body>
</html>
```

```css
/* styles.css */
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.flip-image {
  position: relative;
  width: 200px;
  height: 300px;
  perspective: 1000px;
}

.front,
.back {
  width: 100%;
  height: 100%;
  position: absolute;
  transition: transform 0.5s;
  backface-visibility: hidden;
}

.front {
  transform: rotateY(0deg);
}

.back {
  transform: rotateY(180deg);
}

.flip-image:hover .front {
  transform: rotateY(-180deg);
}

.flip-image:hover .back {
  transform: rotateY(0deg);
}

.flip-front,
.flip-back {
  width: 100%;
  height: 100%;
}
```