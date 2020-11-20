# PortfolioWebpage_Erin
[My Portfolio](https://vigorous-kirch-6d872b.netlify.com/#projects)

This is my portfolio and collection of projects from DGM 1600. 
I used HTML, CSS, and Javascript. It features a [Star Wars character page](https://vigorous-kirch-6d872b.netlify.com/starwars.html), and a [Rick and Morty card flipping page](https://vigorous-kirch-6d872b.netlify.com/rick_morty.html).

---
## Requirements
### UI utilizes proper, basic HTML, CSS and Flexbox

### Basic Javascript code
Proper use of variables with proper scope
(global scope example)
```
let mainArea = document.querySelector('main')
```

Good use of conditional logic and value comparison
```
const allChar = people.filter(person => person.gender == 'male' | 'female' & person.gender !== 'male' & person.gender !== 'female')
```
Proper use of String manipulation

``` 
status.textContent = status.textContent.toUpperCase()
```

Good use of Arrays
```
import { people } from '../assets/people.js';

const femaleChar = people.filter(person => person.gender === 'female')
```

Use of custom JavaScript objects
```class Card{
    constructor(id, name){
        this.id = id
        this.name = name
    }
}
```

### Use of ES6

Proper use of let and const variables 
```
const mainHeader = document.querySelector('header')
```

Use of Arrow functions
```const theData = getRickMortyData('https://rickandmortyapi.com/api/character/?page=1')
    .then(data => {
        for (const characters of data.results) {
            getRickMortyData(characters.url)
                .then(characterdata => {
                    populateDOM(characterdata)

                })
        }

    })
```
Use of Strings using Template Literals
```
 getRickMortyData(`https://rickandmortyapi.com/api/character/${charID}`)
            .then(newChar => {
                populateDOM(newChar)

            })
```
Proper declarations of Objects
```
const newChar= new Card([], "New Card")
```

Use of Import and Export statements
```
import { people } from '../assets/people.js';
```

### Use of Basic Data Structures

Using Arrays to store and manipulate collections of data
```
const otherChar = people.filter(person => person.gender !== 'male' & person.gender !== 'female')
```

Use of Objects with key-value pairs
```
 location.textContent = `${data.location.name}`
 ```

Iteration through an Array using loops and Array methods
```
const theData = getRickMortyData('https://rickandmortyapi.com/api/character/?page=1')
    .then(data => {
        for (const characters of data.results) {
            getRickMortyData(characters.url)
                .then(characterdata => {
                    populateDOM(characterdata)
                })
        }
    })
  ```

### Use of Object Oriented Programming
Objects with properties and methods accessed using dot notation
```
newButton.addEventListener('click', function () {
    let charID = prompt("Add another character by ID!(Any number between 1 & 493)")
    if (charID > 0 && charID <= 493)
        getRickMortyData(`https://rickandmortyapi.com/api/character/${charID}`)
            .then(result => {
                populateDOM(result)

            })
    else {
        alert('There are no characters with that ID. TRY AGAIN.')
        

    }gsap.to("#button", {rotation: 360, x: 1, duration: 1, scale: .5})
})
```
Objects using Constructors properly
```
class Card{
    constructor(id, name){
        this.id = id
        this.name = name
    }
}
```

# cards
