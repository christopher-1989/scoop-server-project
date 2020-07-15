dog = ['poppy']

dog.unshift('hello')
console.log(dog)
dog.splice(dog.indexOf('poppy', 1))
console.log(dog)