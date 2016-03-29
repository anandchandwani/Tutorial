# Client Server
## HTTP Request Response. Internet Basics

---

# Why?

Client Server is the foundation of the whole internet, with a solid understanding of the way the internet works, we can truly understand what is happening, rather than just relying on tutorials or generators.

---

# Servers

* Special computers connected directly to the Internet
* Web pages are files on that hard drive
* Domain names are simply aliases of the IP address

---

# Clients

* Your computer is a client
* So is your phone.
* They are connected through an Internet Service Provider (ISP)

---

# IP Address

* Everything connected directly or indirectly to the Internet has an IP address! (servers, computers, cellphones)
* Routers exist where two or more parts of the Internet intersect. They direct the packets around the Internet. 
* 4(or 6) period separated numbers ranging from 0 to 255 74.125.224.66

^ Gateways regulate traffic between two different protocols

---

# What happens when I hit enter?

* Does a DNS Lookup
* Find the IP address
* of a specific server
* sends an HTTP request

---

# DNS Lookup

Maps a URL to a specific IP

try it out!
$ nslookup google.com
Then paste the IP address in your browser!

^ traceroute to that IP 

---

# HTTP

* the current request does not know what has been done in the previous requests.
  * HTTP is stateless. 
* HTTP permits negotiating of data type and representation.
  * this allows systems to be built independently of the data being transferred.

---

# HTPP requests have at least 3 parts

* uri
* method
* headers

---

#HTTP Request Headers

* What data you accept
* What data you want
* what browser you're on etc

---

#HTTP Request Methods

* GET
* POST
* DELETE
* PUT

---

# HTTP Response


* Response Code
  * 200 OK
  * 302 Found & redirect
  * 400 Bad request
  * 404 Not found
  * 500 Internal server error

^ use curl to show that response with the google IP from above

---

![fit](http.png)

---

# Now what?

later today we’re going to be accessing data on the server from the client side by sending http requests using jQuery.
