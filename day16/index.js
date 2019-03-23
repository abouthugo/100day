/**
 * Comparison of XHR, Fetch, jQuery (AJAX), and Axios
 */
const url =
  "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'"

function XHR () {
  let XHR = new XMLHttpRequest()
  XHR.onreadystatechange = function () {
    if (XHR.readyState === 4) {
      if (XHR.status === 200) {
        let res = JSON.parse(XHR.response)
        updateQuote(res[0].content, res[0].title)
      } else {
        console.log(XHR.status)
      }
    }
  }

  XHR.open('GET', url)
  XHR.send()
}

function Fetch () {
  fetch(url, {
    method: 'GET',
    cache: 'no-cache'
    // body: JSON.stringify({// some object})
  })
    .then(res => res.json())
    .then(data => {
      console.log('[FETCH]')
      console.log(data)
      updateQuote(data[0].content, data[0].title)
    })
    .catch(function () {
      console.log('Fetch error')
    })
}

function jQueryAjax () {
  $.ajax({
    method: 'GET',
    url,
    cache: false,
    dataType: 'json'
  })
    .done(data => {
      console.log('[jQuery-AJAX]')
      console.log(data)
      updateQuote(data[0].content, data[0].title)
    })
    .fail(() => {
      console.log('jQuery AJAX error')
    })
}

function Axios () {
  axios
    .get(url)
    .then(({data}) => {
      console.log('[AXIOS]')
      console.log(data)
      updateQuote(data[0].content, data[0].title)
    })
    .catch(error => {
      console.log('AXIOS error')
    })
}

function updateQuote (quote, author) {
  $('#quote-text').html(quote)
  $('#author').text(author)
}
