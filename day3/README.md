# Day 3: Accessible Web

I will be going over the "Applied Accessibility" challenges on FreeCodeCamp.org and make some notes along the way.

- Images deserve to have alt text `<img src="..." alt="cat image"/>`

  - We always need to add this even if the alt is just an empty string

- The `main` element is used to wrap the main content. DUH! but keep in mind that there should be only one per page.

```
<div> - groups content
<section> - groups related content
<article> - groups independent, self-contained content
```

## HTML 5 Audio

gives a semantic meaning when it wraps sound or audio stream content in your markup. Audio content also needs a text alternative to be accessible to people who are deaf or have a hard time hearing.

```html
<audio id="woofClip" controls>
	<source src="audio/woof.mp3" type="audio/mpeg" />
	<source src="audio/woof.ogg" type="audio/ogg" />
</audio>
```

- The `controls` flag shows the browser default play, pause, and other controls and supports keyboard functionality.

## Figure element

Working with `figure` and `figcaption` to wrap around images, diagrams, charts, and such.

```html
<figure>
	<img src="..." alt="..." />
	<figcaption>...</figcaption>
</figure>
```

## Fieldset & Legend

The `fieldset` tag surrounds the entire grouping of radio buttons to semantically show that they are related to each other as possible choices for user with visual impediments.

```html
<form action="#">
	<fieldset>
		<legend>Pick your favorite icream flavor</legend>
		<input id="vanilla" type="radio" name="ice-cream-flavour" />
		<label for="vanilla">Vanilla</label>
		<input id="chocolate" type="radio" name="ice-cream-flavour" />
		<label for="chocolate">Chocolate</label>
		<input id="strawberry" type="radio" name="ice-cream-flavour" />
		<label for="strawberry">Strawberry</label>
	</fieldset>
</form>
```

## Date picker

HTML 5 introduced an type `date` option for inputs made specifically for picking dates

```html
<input type="date" id="pickdate" name="date" />
```

There's also a `time` tag along with its attribute `datetime`. This helps clarify the exact date of a given informal date.

```html
<p>
    This event will be <time datetime="2019-03-13T16:00Z">this upcoming Wednesday</time>
</p>
```

## Visibility
- `display: none;` or `visibility: hidden;` hides content for everyone, including screen reader users
- Zero values for pixels, `width: 0px; height: 0px;` removes that element from the flow of your document, screen readers will ignore it.

Sometimes if you want to show something for screen reader but hide it for other people you will find this following snippet useful:
```css
.sr-only {
    position: absolute;
    left: -10000px;
    width: 1;
    height: 1;
    top: auto;
    overflow: hidden;
}
```

## Access Key

HTML 5 brings the attribute `accesskey`. It can be used in `button` tags as well as `a` tags.

```html
<button accesskey="b">Submit</button>
```

## Tab Index

* Reach elements through the keyboard by hitting the tab key
* Negative indexes indicate that an element is focusable, but out of reach.


```html
<div tabindex="0"> Focus on me </div>
```


# Here's an idea: make a blogpost template!

