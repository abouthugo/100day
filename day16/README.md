# Axios basics

Some of the benefits over AJAX are:

- lightweight package
- even less verbose
- use of promises
- progressive
- json by default

## How to use

You have two options:

- Via npm: `npm i --save axios`
- Via cdn: just include the cdn link on your html file

## Examples

```javascript
axios.get(URL, {
		// optional
		params: {
			postId: 2,
		},
	})
	.then(res => {
		// do something
	})
	.catch(error => {
		// handle the error
	});
```
