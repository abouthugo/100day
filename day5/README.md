# Day 5: Revisiting Responsive Web Design

A simple rule for when the with is 100px or less:

```css
@media (max-width: 100px) {
	/* ... some css rules */
}
```

## Responsive images

```css
img {
	max-width: 100%; /* Scales the image to fit the width of its container */
	display: block; /* Makes it a block element covering its own line */
	height: auto; /* Maintains aspect ratio */
}
```

> Remember that `img` tags are by default inline elements, thus we set them as block elements in this example.

**TIP**: To make images appear as _retina_, define the width and height of such images as half of what they originally are.

## Responsive typography

4 different viewport units:

- `vw` the viewport width
- `vh` the viewport height
- `vmin` the viewport's smaller dimension (height vs width)
  - usage: `70vmin` means 70% of the smallest size, whether that is width or height
- `vmax` the viewport's bigger dimension (height vs width)
  - usage: `100vmax` means 100% of the biggest size, whether that is width or height

## `display: flex;`

- The default value of the property `flex-direction` is row

The direction the flex items are arranged is called the main axis.
![useful image](https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg)

- Use `justify-content` for aligning elements in the **main axis**

Options:
`center | flex-start | flex-end | space-between | space-around`

- Use `align-items` for aligning elements in the **cross axis**

Options
`center | flex-start | flex-end | stretch | baseline`

### `flex-wrap`
It tells CSS to wrap items, that is, to move them into a new row or column once the container's full width/length is full.

Options: `nowrap | wrap | wrap-reverse`

To be continued...