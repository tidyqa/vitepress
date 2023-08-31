---
layout: doc
title: Shadows and Effects - CSS Snippets
description: Enhance your web designs with 20 practical CSS snippets for shadows and effects. Learn to apply box shadows, text glows, and hover effects for engaging user interfaces.
head:
  - ['meta', {property: 'og:title', content:  'Shadows and Effects - CSS Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/snippets/css/shadows-and-effects/' }] 
  - ['meta', {name: 'twitter:title', content: 'Shadows and Effects - CSS Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/snippets/css/shadows-and-effects/'}]
---

# Shadows and Effects

Explore 20 educational CSS snippets that delve into shadows and effects in web design. These examples cover a range of techniques, including box shadows, text glows, hover effects, and more. Whether you're a beginner or have some coding experience, these snippets provide hands-on learning to elevate your web design skills.

## Box Shadow

Apply a simple box shadow to an element for a subtle lift and separation from its background.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.box-shadow {
  width: 100px;
  height: 100px;
  background-color: #f06;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
}
</style>
</head>
<body>
<div class="box-shadow"></div>
</body>
</html>
```

## Text Shadow

Enhance text legibility and visual presence by adding a shadow to text content.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.text-shadow {
  font-size: 36px;
  color: #f06;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
}
</style>
</head>
<body>
<p class="text-shadow">Shadowed Text</p>
</body>
</html>
```

## Hover Shadow Effect

Create an interactive hover effect with an expanding shadow that adds dimension when hovered.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.hover-shadow {
  width: 100px;
  height: 100px;
  background-color: #f06;
  transition: box-shadow 0.3s;
}
.hover-shadow:hover {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}
</style>
</head>
<body>
<div class="hover-shadow"></div>
</body>
</html>
```

## Inset Shadow

Achieve a subtle pressed effect with an inset shadow, giving the appearance of an element embedded within the surface.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.inset-shadow {
  width: 100px;
  height: 100px;
  background-color: #f06;
  box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.3);
}
</style>
</head>
<body>
<div class="inset-shadow"></div>
</body>
</html>
```

## Multiple Shadows

Combine multiple shadows to create complex effects, such as simulating a light source.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.multiple-shadows {
  width: 100px;
  height: 100px;
  background-color: #f06;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3),
              -3px -3px 5px rgba(255, 255, 255, 0.3);
}
</style>
</head>
<body>
<div class="multiple-shadows"></div>
</body>
</html>
```

## Neon Glow Effect

Achieve a vibrant neon glow effect with a combination of box shadow and color.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.neon-glow {
  width: 100px;
  height: 100px;
  background-color: #f06;
  box-shadow: 0 0 10px #f06,
              0 0 20px #f06,
              0 0 30px #f06,
              0 0 40px #f06;
}
</style>
</head>
<body>
<div class="neon-glow"></div>
</body>
</html>
```

## Curved Shadow

Experiment with CSS variables to create a dynamically curved shadow effect.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.curved-shadow {
  width: 100px;
  height: 100px;
  background-color: #f06;
  --shadow-size: 10px;
  --shadow-distance: 5px;
  --shadow-curve: 50px;
  box-shadow: 0 var(--shadow-distance) var(--shadow-size) 0 rgba(0, 0, 0, 0.3),
              calc(-1 * var(--shadow-curve)) var(--shadow-curve) var(--shadow-size) 0 rgba(0, 0, 0, 0.3);
}
</style>
</head>
<body>
<div class="curved-shadow"></div>
</body>
</html>
```

## Glowing Text Effect

Elevate text content with a subtle glowing effect using text shadow.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.glowing-text {
  font-size: 36px;
  color: #f06;
  text-shadow: 0 0 5px rgba(240, 102, 102, 0.7);
}
</style>
</head>
<body>
<p class="glowing-text">Glowing Text</p>
</body>
</html>
```

## Inner Glow Effect

Achieve an inner glow effect on text using text shadow and a lighter color.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.inner-glow {
  font-size: 36px;
  color: #f06;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
}
</style>
</head>
<body>
<p class="inner-glow">Inner Glow Text</p>
</body>
</html>
```

## Example 10: Lifted Shadow

Simulate a lifted appearance by combining box shadow and negative margin.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.lifted-shadow {
  width: 100px;
  height: 100px;
  background-color: #f06;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  margin-top: -5px;
}
</style>
</head>
<body>
<div class="lifted-shadow"></div>
</body>
</html>
```

## Ambient Glow

Explore a soft ambient glow effect using radial gradients and pseudo-elements.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.ambient-glow {
  width: 100px;
  height: 100px;
  background-color: #f06;
  position: relative;
}
.ambient-glow::before {
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(240, 102, 102, 0.3) 20%, transparent 80%);
}
</style>
</head>
<body>
<div class="ambient-glow"></div>
</body>
</html>
```

## 3D Button Effect

 Add depth to buttons with a 3D effect using gradients and box shadow.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.button-3d {
  padding: 10px 20px;
  font-size: 16px;
  background: linear-gradient(#f06, #d43);
  color: white;
  border: none;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
}
</style>
</head>
<body>
<button class="button-3d">Click Me</button>
</body>
</html>
```

## Floating Card Effect

Create a floating card effect with a shadow and subtle animation.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.floating-card {
  width: 200px;
  height: 300px;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transform: translateY(0);
  transition: transform 0.3s;
}
.floating-card:hover {
  transform: translateY(-10px);
}
</style>
</head>
<body>
<div class="floating-card"></div>
</body>
</html>
```

## Transparent Box with Shadow

Combine transparency with a shadow effect for an ethereal appearance.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.transparent-box {
  width: 100px;
  height: 100px;
  background-color: rgba(240, 102, 102, 0.5);
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
}
</style>
</head>
<body>
<div class="transparent-box"></div>
</body>
</html>
```

## Circular Highlight

Achieve a circular highlight effect with a radial gradient and transparent background.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.circular-highlight {
  width: 100px;
  height: 100px;
  background-color: transparent;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.5) 30%, transparent 70%);
}
</style>
</head>
<body>
<div class="circular-highlight"></div>
</body>
</html>
```

## Glitch Text Effect

Create a glitchy text effect using text shadow and pseudo-elements.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.glitch-text {
  font-size: 36px;
  color: #f06;
  position: relative;
  animation: glitchAnimation 2s infinite;
}
.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: #9f6;
  z-index: -1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
@keyframes glitchAnimation {
  0%, 100% {
    transform: translate(0);
  }
  20%, 60% {
    transform: translate(-2px, 2px);
  }
  40%, 80% {
    transform: translate(2px, -2px);
  }
}
</style>
</head>
<body>
<p class="glitch-text" data-text="Glitch Text">Glitch Text</p>
</body>
</html>
```

## Neon Text Effect

Immerse text in a vibrant neon glow effect using text shadow.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.neon-text {
  font-size: 36px;
  color: #f06;
  text-shadow: 0 0 10px #f06,
              0 0 20px #f06,
              0 0 30px #f06,
              0 0 40px #f06;
}
</style>
</head>
<body>
<p class="neon-text">Neon Text</p>
</body>
</html>
```

## Flickering Light Effect

Replicate the flickering light of a candle with a keyframes animation.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.flickering-light {
  width: 100px;
  height: 100px;
  background-color: #f06;
  box-shadow: 0 0 10px rgba(240, 102, 102, 0.8);
  animation: flickerAnimation 1s infinite;
}
@keyframes flickerAnimation {
  0%, 100% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
</head>
<body>
<div class="flickering-light"></div>
</body>
</html>
```

## Hover Glow Effect

Add a subtle glow effect to an element on hover using box shadow.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.hover-glow {
  width: 100px;
  height: 100px;
  background-color: #f06;
  transition: box-shadow 0.3s;
}
.hover-glow:hover {
  box-shadow: 0 0 20px rgba(240, 102, 102, 0.5);
}
</style>
</head>
<body>
<div class="hover-glow"></div>
</body>
</html>
```

## Outer Glow

Achieve an outer glow effect with a larger box shadow and transparency.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.outer-glow {
  width: 100px;
  height: 100px;
  background-color: transparent;
  box-shadow: 0 0 20px rgba(240, 102, 102, 0.5);
}
</style>
</head>
<body>
<div class="outer-glow"></div>
</body>
</html>
```

These CSS snippets provide a hands-on approach to understanding how shadows and effects can enhance the visual appeal and interactivity of your web designs. Feel free to explore and modify these examples to suit your creative needs.