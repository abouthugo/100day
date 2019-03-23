# jQuery & Axios

Looking back at how to use jQuery's ajax requests and axios—from the udemy course "Advance Web Dev Bootcamp"

## Making a request and parsing JSON (without jQuery/fetch)

```javascript
let request = new XMLHttpRequest();
request.open("GET", "some/url/of/your/choice");
reques.onload = () => {
	if (request.status >= 200 && request.status < 400) {
		let data = JSON.parse(request.responseText);
	} else {
		// handle the other status codes
	}
};

request.onerror = () => {
	// handle connection error
};

request.send();
```

## Making a request with jQuery

```javascript
$.getJSON("/some/url/of/your/choice", data => {
	// do something with data
});
```

There are 4 jQuery AJAX methods:

1. `$.ajax`
2. `$.get`
3. `$.post`
4. `$.getJSON`

## Basics of AJAX

```javascript
$.ajax({
	method: "GET",
	url: "some.api.com",
	//optional
	cache: false,
	dataType: "json",
})
	.done(function(res) {
		// do something with the response data
	})
	.fail(function() {
		// do something when the requests fails
	});
```

### Using the other methods

**POST/GET**

```javascript
let url = "some/post/endpoint/";
// POST request
$.post(url)
	.done(res => {
		// response from post request
	})
	.fail(() => {
		// catch errors
	});
// GET request
$.get(url)
	.done(data => {
		// do something with the data
	})
	.fail(() => {
		// cattch errors
	});
```

**getJSON shorthand**
Parses the request as JSON automatically.

```javascript
let url = "some/post/endpoint/";
$.getJSON(url)
	.done(data => {
		// got some json data
	})
	.fail(() => {
		// catch errors
	});
```
