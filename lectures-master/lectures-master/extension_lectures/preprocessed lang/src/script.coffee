# compile command: coffee -o dest -c src/script.coffee

# no more var keyword
# arrow function syntax
square = (num) -> num * num

# don't need parens to call functions
console.log square 20


# whitespace delimiting
# implicit return
hypotenuse = (a, b) ->
  squared = a ** 2 + b ** 2
  Math.sqrt squared

console.log hypotenuse 3, 4

# prettier conditionals
if true or false
  console.log 'foo'
  console.log 'bar'

if true is false or true and false
  console.log 'I am invisible'

# one-line if statements
console.log 'baz' if 2 > 1
# chained comparisons
console.log 'oof' if 2 > 1 > 0



# object literals
andy =
  name: 'andy'
  age: 24
  bday: Date.now()

console.log andy.bday


# cool new operators
lol = undefined
lol ?= 'very funny'
console.log lol

lol ?= 'not so funny anymore'
console.log lol


console.log 10 // 3
