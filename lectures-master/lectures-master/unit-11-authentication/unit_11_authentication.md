#Authentication

---

#What is Authentication
* Making sure someone is who they say they are

---
#Access token
* give user a token
* deny requests if it doesnt contain a valid token
* this works on cross domain requests

---
#Set a cookie
* same domain
* cookies are sent with every request
* put access token in there

---

#How this works with HTTP
##Someone send a post request with their login data, server response has a `'Set-Cookie'` header, browser saves this by default
Properties

* domain
* expires
* httpOnly
* maxAge
* path
* secure
* signed

---
# JWT or JSON web tokens
* Server sends back a token
* sent back as Authorization header
* Base64 encoded JSON object

---

# Why Should I care

---

#Why should I care later

---

