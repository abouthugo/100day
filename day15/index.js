const url =
  "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'"
let unsplash = 'http://www.splashbase.co/api/v1/images/random'
$('#btn').click(function () {
  $.ajax({
    method: 'GET',
    url,
    cache: false,
    dataType: 'json'
  })
    .done(updateQuote)
    .fail(handleError)
})

function updateQuote (data) {
  $('#dumbster').html(data[0].content)
  $('#author').html(data[0].title)
}

function handleError () {
  alert('Request failed, check your network connection')
}

$('#randpic').click(function () {
  $.getJSON(unsplash)
    .done(function (data) {
      console.log(data.url)
      setImage(data.url)
    })
    .fail(function () {
      console.log('Error')
    })
})

function setImage (url) {
  console.log('Set image called')
  $('#target').css('background-image', 'url(' + url + ')')
}

$('#both').click(function () {
    generatePost();
})

function generatePost(){
    $.ajax({
        method: 'GET',
        url,
        cache: false,
        dataType: 'json'
      }).done(function (data) {
        $('#quote').html(data[0].content)
        $('#quote-author').html(data[0].title)
      })
    
      $.getJSON(unsplash).done(function (data) {
        $('#quote-img').css('background-image', 'url(' + data.url + ')')
      })
}
$(document).ready(generatePost);