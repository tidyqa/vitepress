---
layout: doc
title: Media Queries - Adapting Styles for Different Devices | CSS Tutorial
description: Learn to create responsive designs by targeting device characteristics such as screen size, orientation, and capabilities.
head:
  - ['meta', {property: 'og:title', content:  'Media Queries - Adapting Styles for Different Devices | CSS Tutorial' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/css/media-queries/' }] 
  - ['meta', {name: 'twitter:title', content: 'Media Queries - Adapting Styles for Different Devices | CSS Tutorial'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/css/media-queries/'}]
---

# Media Queries

Powerful technique that enables you to adapt your styles based on various device characteristics. With media queries, you can create responsive and user-friendly designs that cater to different screen sizes, orientations, and capabilities.

## Introduction to Media Queries

Media queries are CSS rules that target specific device characteristics, allowing you to apply different styles based on the device's screen size, resolution, orientation, and more. They are essential for creating responsive and adaptable web designs.

## Syntax and Structure

Media queries are written using the `@media` rule followed by a condition. Here's the basic structure:

```css
@media (condition) {
  /* Styles to apply when condition is met */
}
```

## Breakpoints and Device Characteristics

Breakpoints are specific screen widths where you apply different styles. They are defined using the `min-width` or `max-width` condition:

```css
@media (min-width: 768px) {
  /* Styles for screens wider than 768px */
}

@media (max-width: 576px) {
  /* Styles for screens narrower than 576px */
}
```

## Responsive Breakpoints

Choose breakpoints based on common device sizes to ensure a seamless experience across various screens:

```css
@media (min-width: 576px) {
  /* Styles for small screens (phones) */
}

@media (min-width: 768px) {
  /* Styles for medium screens (tablets) */
}

@media (min-width: 992px) {
  /* Styles for large screens (desktops) */
}

@media (min-width: 1200px) {
  /* Styles for extra-large screens (large desktops) */
}
```

## Orientation Queries

Target different styles for portrait and landscape orientations:

```css
@media (orientation: portrait) {
  /* Styles for portrait orientation */
}

@media (orientation: landscape) {
  /* Styles for landscape orientation */
}
```

## High DPI Screens

Serve high-resolution images to high DPI screens using media queries:

```css
@media (-webkit-min-device-pixel-ratio: 2),
       (min-resolution: 192dpi) {
  /* Styles for high DPI screens (Retina) */
}
```

## Feature Queries

Use feature queries to target specific browser capabilities:

```css
@media (hover: hover) {
  /* Styles for devices with hover capability (usually desktops) */
}

@media (pointer: coarse) {
  /* Styles for devices with touch or stylus input */
}
```

## Combining Queries

Combine multiple conditions to fine-tune your responsive designs:

```css
@media (min-width: 768px) and (orientation: landscape) {
  /* Styles for tablets in landscape orientation */
}
```

## Optimizing Performance

Avoid unnecessary media queries to optimize performance:

```css
/* Avoid using too many media queries */
@media (max-width: 1200px) {
  /* Styles for screens narrower than 1200px */
}
```

## Mastering Adaptive Styles

Congratulations! You've navigated the world of media queries. By understanding the syntax, breakpoints, orientation queries, feature queries, and performance considerations, you have the tools to create responsive and adaptable designs that cater to various devices and user needs.