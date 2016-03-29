#Build tools

---

#Build Tools

- come from compiled code days
- convert your code from what it is, to what it needs to be

---
#Coffee
```coffee
arr = [1,2,3]
arr = arr.map (elem) ->
  return ++elem
```

---
#Javascript
```js
var arr;

arr = [1, 2, 3];

arr = arr.map(function(elem) {
  return ++elem;
  });
```

---
#Sass
```scss
$p-color: #9b59b6
$highlight-color: #8e44ad
body
  margin: 0 auto
  ul
    color: black
    li
      display: inline
      color: $p-color
      &:first-child
        margin-left: 10%

      &:last-child
        color: $highlight-color
        margin-right: 10%

```

---
#CSS
```css
body {
  margin: 0 auto;
}
body ul {
  color: black;
}
body ul li {
  display: inline;
  color: #9b59b6;
}
body ul li:first-child {
  margin-left: 10%;
}
body ul li:last-child {
  color: #8e44ad;
  margin-right: 10%;
}
```

---
#Common Build Tool tasks

- convert Sass/Less into CSS
- convert JSX into JS
- concatenate files
- manage dependencies
- minify files

---

# Tools to do this

---

![fit](../assets/le.jpeg)

---

**Grunt** uses a set of tasks that are accomplished one by one
- provide each task a source file
- and a destination file

**Gulp** uses file streams
- stream is created
- drop things in at the top
- fall through all of the transforms
- things fall out the bottom
- `pipe`

---

```
var concat = require('gulp-concat');
var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
  return gulp.src('./lib/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});
```


![](assets/luxury.jpg)

---

#Browserify

- manages node modules for client side use
- staticly analyzes abstract syntax tree for `require` calls
- for every one with a string browserify resolves those strings to file paths
- searches those recursively until dependency graph is resolved

---

#Node_modules

###any requires that use `./` or `../` are always local to the cwd

### require('xyz')from a file like /beep/boop/bar.js
1. `/beep/boop/node_modules/xyz`
1. `/beep/node_modules/xyz     `
1. `/node_modules/xyz          `

It will check each directory for a package.json and see if it has a "main" field
If it does, then the exports from that file will be loaded.

---

#Other Build tools

- BrocolliJS
- Brunch

