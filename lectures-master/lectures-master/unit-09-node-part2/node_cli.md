# Working With node

---

#NPM
- a way of managing node packages
- locally
- globally

---

#Using Packages

- what does `require` and `module.exports` do?



---

#Global Object

* `window` 
* `global`
    * `process`
      * `env`

---

#STDIN and STDOUT

* STDIN(standard input)
* STDOUT(standard output)


---

#APIs

* what is a public facing API?
* how?

---

```js
{
    "Search": [
        {
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg",
            "Title": "Frozen",
            "Type": "movie",
            "Year": "2013",
            "imdbID": "tt2294629"
        },
        {
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMTc5MTg0ODgxMF5BMl5BanBnXkFtZTcwODEzOTYwMw@@._V1_SX300.jpg",
            "Title": "Frozen",
            "Type": "movie",
            "Year": "2010",
            "imdbID": "tt1323045"
        }
    ]
}
```

^ bat get "http://www.omdbapi.com/?s=frozen" bat get "http://www.omdbapi.com/?i=tt2294629"

---

#Build Tools

* Tools that can run a set amount of scripts for you
* Grunt
* Gulp

---

# Why should I care?

- build tools and understanding how npm works behinds the scenes will help you when you encounter errors
- no one is perfect and its super important to figure out what is going wrong.

---

#Why should I care later?

- Using the tools you are given properly will help make you a fast, efficient software developer.

