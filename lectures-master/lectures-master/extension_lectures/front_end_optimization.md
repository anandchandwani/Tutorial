#Optimizing your Front End

---

#Why?

- building large client side applications can cause a huge load time
- css, large js files.
- Mobile users, dialup etc.

---

#Making Sites fast!

---

# Make fewer Requests (and make those request smaller)

- tons of request for images.
- minimize JS and CSS requests
- bundle your JS and minify
- compress your CSS
- GZIP

---

#GZIP
- GZIP performs best on text-based assets: CSS, JavaScript, HTML
- All modern browsers support GZIP compression and will automatically request it
- Your server needs to be configured to enable GZIP compression
- Some CDNs require special care to ensure that GZIP is enabled
- <https://www.youtube.com/watch?v=whGwm0Lky2s&feature=youtu.be&t=14m11s>



--- 

#In action

--- 
# Use a CDN

- **C**ontent **D**elivery **N**etwork
- Increase parallelism
- chance of cached assets
- geographical location


--- 

#Images

- different sizes
- on your own CDN

---

# Caching

- Memoization, but for the web
- cache invalidation

---

#Beyond this

- NGINX
- SQUID
- Varnish

