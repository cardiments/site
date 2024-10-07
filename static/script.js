// get url params
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)

// search for param: v (visibility)
let visibility = urlParams.get('v')
let display = 'none'

// function to store persistent data
function setCookie(name, value, days) {
  var expires = ''
  if (days) {
    var date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = '; expires=' + date.toUTCString()
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/'
}

// set a cookie if the v param is set
if (visibility) [setCookie('visibility', visibility, 90)]

// function to retrieve persistent data
function getCookie(name) {
  var nameEQ = name + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) == ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

// look for the visibility cookie
let visibilityCookie = getCookie('visibility')
if (visibilityCookie) {
  visibility = visibilityCookie
} else[(visibility = 'hidden')]

if (visibility && visibility == 'visible') {
  visibility = urlParams.get('v')
  display = 'block'
}
else {
  visibility = 'visible'
  display = 'none'
}
