# Day 1: Basic HTML/CSS 

```html
<main>
    ...
</main>
```
Helps browsers identify main content of the page.

**Correct way to use internal linking**
```html
<a href="#contacts-header">Contacts</a>
...
<h2 id="contatcs-header">Contacts</h2>
```

`target="_blank"` causes the linked document to open a new window tab.

**Radio Buttons**
Can't believe I forgot how these worked :worried:
```html
<label for="indoor">
    <input type="radio" id="indoor" name="indoor-outdoor">Indoor
</label>
<label for="outdoor">
    <input type="radio" id="outdoor" name="indoor-outdoor">Outdoor
</label>
```

**Check Boxes**
```html
<label for="loving">
    <input type="checkbox" id="loving" name="personality"/>Loving
</label>
<label for="caring">
    <input type="checkbox" id="caring" name="personality"/>Caring
</label>
<label for="kind">
    <input type="checkbox" id="kind" name="personality"/>Kind
</label>
```

**Type CSS selector**
```css
[type="text"] {
    outline: none;
}
```

## CSS Units

### Absolute Units

Absolute units tie to physical units of length like `in` anc `mm` for inches and millimeters. Absolute length units approximate the actual measurement on a screen, it all depends on the screen's resolution.

### Relative Units

Relative units are relative to another length value, such as `em` or `rem`.

* `em` is based on the size of an element's font. Its relative to it parent.
* `rem` is relative to the root element.

## CSS Variables

This is how you define them:
```css
--primary-color: #FAFAFA;
```

After the variable has been created, you can use it like this:
```css
background-color: var(--primary-color);
/*  Using fallba */
color: var(--contrast-color, white);
```
> **Note**: you can reassign the value of a variable specific to a CSS selector


## Demo 
![demo](/day-one-demo.gif)