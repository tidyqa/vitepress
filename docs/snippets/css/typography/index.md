---
layout: doc
title: Typography - CSS Snippets
description: Master the art of text styling and formatting. Enhance web readability and presentation with effective typography methods.
head:
  - ['meta', {property: 'og:title', content:  'Typography - CSS Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/snippets/css/typography/' }] 
  - ['meta', {name: 'twitter:title', content: 'Typography - CSS Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/snippets/css/typography/'}]
---

# Typography

Explore the realm of typography with these CSS snippets. From custom fonts and responsive sizing to elegant drop caps and intriguing blend modes, enhance your web content with creative text styling. Elevate design and readability effortlessly.

## Styling Text with Different Fonts

Change the appearance of your text by applying various font families using CSS. This snippet showcases how to set distinct fonts for both headings and paragraphs, offering a visual contrast to your content.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  h1 {
    font-family: "Helvetica Neue", sans-serif;
  }
  p {
    font-family: "Georgia", serif;
  }
</style>
</head>
<body>

<h1>Heading with a Custom Font</h1>
<p>Experience text transformation with this font change.</p>

</body>
</html>
```

## Adjusting Font Size and Line Height

Control the size and spacing of your text to enhance readability. This snippet demonstrates varying font sizes and line heights to ensure optimal text presentation across different sections of your content.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  body {
    font-size: 16px;
    line-height: 1.6;
  }
  h1 {
    font-size: 2rem;
    line-height: 1.2;
  }
  p {
    font-size: 1.2rem;
  }
</style>
</head>
<body>

<h1>Amplify Your Impact with a Larger Heading</h1>
<p>Engage your readers by tuning font size and line height.</p>

</body>
</html>
```

## Applying Font Styles and Weights

Elevate your text design with font styles and weights using CSS. This snippet adds italic and bold formatting to headings, letting you emphasize specific content.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  h1 {
    font-style: italic;
    font-weight: bold;
  }
</style>
</head>
<body>

<h1>Empower Your Message with Italic and Bold Heading</h1>
<p>Deliver a powerful visual impact through diverse font treatments.</p>

</body>
</html>
```

## Creating a Custom Text Color Palette

Craft a distinctive text color palette using CSS variables. This snippet defines custom color variables for headings and paragraphs, allowing you to maintain consistent branding throughout your content.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  :root {
    --heading-color: #333;
    --text-color: #777;
  }
  h1 {
    color: var(--heading-color);
  }
  p {
    color: var(--text-color);
  }
</style>
</head>
<body>

<h1>Personalize Your Headings with Custom Colors</h1>
<p>Infuse visual harmony with your chosen text color palette.</p>

</body>
</html>
```

## Adding Text Shadows

Bring depth and emphasis to your text with CSS text shadows. This snippet applies a subtle shadow to headings, imparting a three-dimensional effect to your content.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  h1 {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
</style>
</head>
<body>

<h1>Elevate Your Heading with Subtle Text Shadow</h1>
<p>Add an enchanting touch by casting shadows behind your text.</p>

</body>
</html>
```

## Creating Underlined Text

Enhance specific text elements by applying underlines using CSS. This snippet creatively underlines selected portions of your content for emphasis and visual appeal.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .underline {
    text-decoration: underline;
  }
</style>
</head>
<body>

<p>Discover <span class="underline">Underlined Text</span> to Catch Attention</p>

</body>
</html>
```

## Changing Text Case

Manipulate text case effortlessly with CSS transformations. This snippet showcases the power to change text to uppercase or lowercase, enhancing your content's stylistic flexibility.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .uppercase {
    text-transform: uppercase;
  }
  .lowercase {
    text-transform: lowercase;
  }
</style>
</head>
<body>

<p class="uppercase">EXPRESS YOUR MESSAGE IN UPPERCASE</p>
<p class="lowercase">adjust your content to lowercase for subtlety</p>

</body>
</html>
```

## Creating Highlighted Text

Emphasize key phrases with background highlights using CSS. This snippet adds an eye-catching background color to portions of your content, making them visually striking.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .highlight {
    background-color: #ffcc00;
    padding: 2px 4px;
  }
</style>
</head>
<body>

<p>Discover <span class="highlight">Highlighted Text</span> to Capture Interest</p>

</body>
</html>
```

## Adding Text Opacity

Create subtle text effects by adjusting text opacity using CSS. This snippet subtly decreases the opacity of a paragraph, enhancing its blending with the background.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .opacity {
    opacity: 0.6;
  }
</style>
</head>
<body>

<p class="opacity">Add a Touch of Mystery with Reduced Opacity</p>

</body>
</html>
```

## Creating Drop Caps

Make your opening paragraph stand out with a drop cap using CSS. This snippet stylishly enlarges the first letter of a paragraph, offering an elegant visual introduction.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .drop-cap {
    float: left;
    font-size: 3rem;
    line-height: 1;
    margin: 5px 10px 0 0;
    padding: 5px;
  }
</style>
</head>
<body>

<p><span class="drop-cap">D</span>elight Your Readers with a Distinctive Drop Cap</p>

</body>
</html>
```

## Creating Responsive Text

Adapt your text to various screen sizes with responsive font sizing. This snippet employs media queries to adjust font size, ensuring readability across different devices.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  p {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    p {
      font-size: 14px;
    }
  }
</style>
</head>
<body>

<p>Ensure Readability on All Devices with Responsive

 Font Size</p>

</body>
</html>
```

## Applying Google Fonts

Enhance your text presentation with Google Fonts using CSS. This snippet imports and applies a selected Google Font to headings, enabling a wide array of font choices.

```html
<!DOCTYPE html>
<html>
<head>
<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
<style>
  h1 {
    font-family: 'Open Sans', sans-serif;
  }
</style>
</head>
<body>

<h1>Elevate Your Heading with a Google Font</h1>
<p>Discover the vast range of typography options available.</p>

</body>
</html>
```

## Creating Vertical Text

Experiment with vertical text orientation using CSS writing modes. This snippet rotates text 90 degrees for vertical display, adding a unique visual element.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .vertical-text {
    writing-mode: vertical-lr;
    text-orientation: upright;
  }
</style>
</head>
<body>

<p class="vertical-text">Explore Creative Possibilities with Vertical Text</p>

</body>
</html>
```

## Controlling Letter and Word Spacing

Fine-tune letter and word spacing for optimal legibility using CSS. This snippet allows you to adjust the spacing between characters and words to ensure an appealing visual rhythm.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .letter-spacing {
    letter-spacing: 2px;
  }
  .word-spacing {
    word-spacing: 5px;
  }
</style>
</head>
<body>

<p class="letter-spacing">Strive for Clarity with Adjusted Letter Spacing</p>
<p class="word-spacing">Strike a Balance with Thoughtful Word Spacing</p>

</body>
</html>
```

## Creating Text Columns

Enhance content flow by creating text columns using CSS. This snippet introduces a multi-column layout, ideal for presenting lengthy text content in a visually organized manner.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .text-columns {
    columns: 2;
    column-gap: 20px;
  }
</style>
</head>
<body>

<div class="text-columns">
  <p>Unleash the Power of Text Columns for Clear Communication</p>
  <p>Explore an Engaging Reading Experience with Multi-Column Text</p>
</div>

</body>
</html>
```

## Creating Block Quotes

Style block quotes to enhance their visual impact using CSS. This snippet applies a subtle left border and italic style to block quotes, distinguishing them within your content.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  blockquote {
    border-left: 4px solid #ddd;
    padding-left: 20px;
    font-style: italic;
  }
</style>
</head>
<body>

<p>Discover the Power of <blockquote>Stylish Block Quotes</blockquote> in Amplifying Content</p>

</body>
</html>
```

## Creating Text Links

Elevate the style of text links using CSS. This snippet provides a consistent look for regular, hover, and visited links, ensuring an engaging and visually appealing user experience.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  a {
    color: #007bff;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  a:visited {
    color: #cc0000;
  }
</style>
</head>
<body>

<p>Discover the World of <a href="#">Stylish Text Links</a> for Enhanced User Interaction</p>

</body>
</html>
```

## Controlling Text Overflow

Maintain a clean and polished design by controlling text overflow using CSS. This snippet employs text-overflow and ellipsis to manage lengthy text within a confined space.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 200px;
    border: 1px solid #ddd;
  }
</style>
</head>
<body>

<p class="ellipsis">Master Text Overflow with Style and Elegance</p>

</body>
</html>
```

## Creating Curved Text

Explore the creative realm of curved text using CSS transformations. This snippet showcases how to bend text along a circular path, adding an artistic touch to your designs.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .curved-text {
    transform: rotate(45deg);
    transform-origin: 50% 50%;
    white-space: nowrap;
  }
</style>
</head>
<body>

<p class="curved-text">Discover the Fascinating World of Curved Text</p>

</body>
</html>
```

## Applying Text Blend Modes

Infuse a touch of blending magic to your text with CSS blend modes. This snippet allows you to experiment with various blend modes, producing captivating visual effects where text interacts with background imagery.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .blend-text {
    font-size: 2rem;
    background-image: url('background-image.jpg');
    background-blend-mode: overlay;
    color: white;
    padding: 10px;
  }
</style>
</head>
<body>

<p class="blend-text">Elevate Your Text with Intriguing Blend Modes</p>

</body>
</html>
```