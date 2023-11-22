### IF.03.01 Basic Web Techniques
# Reading Assignment 4: Classes, IDs, Box Model, Floating

## Classes and IDs
Which if the following statements are true?
1. true - Classes are used to select html elements
2. true - IDs are used to select html elements.
3. true - Classes can occur more than once on a page
4. true - IDs can occur more than once on a page
5. Write down the start tag of a `p` element of class `message`
```html
<p class="message">
```
6. Write down a css selector which selects a `p` element of class `message`
```css
p.message {
}
```
7. Write down a css selector selecting any element of class `message`
```css
*.message {
}
```
8. Write down the start tag of a `body` element with id `main`
```html
<body id="main">
```
9. Write down a css selector which selects a `body` element with id `main`
```css
body#main {
}
```
10. Write down a css selector selecting any element with id `main`
```css
*#main {
}
```

## Box Model
1. Tick the right answers
   - [x] Margin is the space between the border and the surrounding elements.
   - [x] Padding is the space between the content of the element and its border.
   - [ ] Margin is the space between the content of the element and its border.
   - [ ] Padding is the space between the border and the surrounding elements.

2. Block elements
   - [x] use an extra line above and below
   - [ ] stay in the line with their neighboring elements
   - [ ] block other elements from being displayed
   - [ ] block the browser until they are completely rendered
   - [x] can have margin and padding to keep distance from all surrounding elements
   - [x] only keep distance only to the elements on the left and on the right if a positive margin and/or padding is defined

3. Inline elements
   - [ ] use an extra line above and below
   - [x] stay in the line with their neighboring elements
   - [ ] are elements which are coded inside the html page (similar to inline css)
   - [ ] are like Bielefeld, they do not exist
   - [ ] can have margin and padding to keep distance from all surrounding elements
   - [ ] only keep distance only to the elements on the left and on the right if a positive margin and/or padding is defined

## Floating
1. Make an image float to the left:
```css
img {
   float: left;
}
```
2. Stop section element to flow around a right floating image element:
```css
section {
   clear: right;
}
```