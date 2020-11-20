
// //CUSTOM JS OBJECT WITH CONSTRUCTOR

//BUTTON AND HEADER SECTION//
class Card{
    constructor(id, name){
        this.id = id
        this.name = name
       
    }
}

const newChar= new Card([], "New Card")
const newCard = document.querySelector('#button')

//USING DOT NOTATION TO ADD PROPERTIES TO OBJECT
newCard.addEventListener('click', function () {
    let charID = prompt("Add another character by ID!(Any number between 1 & 493)")
    
    if (charID > 0 && charID <= 493) {
        //TEMPLATE LITERAL
        getRickMortyData(`https://rickandmortyapi.com/api/character/${charID}`)
            .then(newChar => {
                populateDOM(newChar)
                window.scrollTo(0,document.body.scrollHeight);       
                     
            })
        } else {
        alert('There are no characters with that ID. TRY AGAIN.')
    }

})



newCard.textContent = 'Add another character!'
let rickPic = document.createElement('img')
rickPic.src = '/images/99.jpeg'
rickPic.setAttribute('class', '#rickpic')
newCard.appendChild(rickPic)


        
var header = document.getElementById("myHeader");

const introduction = document.createElement('h1')
introduction.textContent = 'Click on any character to see their stats, or use the button to add more characters!'
header.appendChild(introduction)


//CARDS SECTION//

async function getRickMortyData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data

    } catch (error) {
        console.error(error)
    }

}

let mainArea = document.querySelector('main')

//ARROW FUNCTION
const theData = getRickMortyData(`https://rickandmortyapi.com/api/character/?page=1`)
    .then(data => {
        for (const characters of data.results) {
            getRickMortyData(characters.url)
                .then(characterdata => {
                    populateDOM(characterdata)
                

                })
        }

    })
const theSecondData = getRickMortyData('https://rickandmortyapi.com/api/character/?page=2')
    .then(data => {
        for (const characters of data.results) {
            getRickMortyData(characters.url)
                .then(characterdata => {
                    populateDOM(characterdata)
                
                })
        }
  
    })


//populating DOM
function populateDOM(one_char) {

    let characterScene = document.createElement('div')
    let characterCard = document.createElement('div')
    let cardFront = document.createElement('div')
    let cardBack = document.createElement('div')


    fillCardFront(cardFront, one_char)
    fillCardBack(cardBack, one_char)

    characterCard.setAttribute('class', 'card')
    characterScene.setAttribute('class', 'scene')

    characterCard.appendChild(cardBack)

    characterCard.appendChild(cardFront)
    characterScene.appendChild(characterCard)



    mainArea.appendChild(characterScene)

    characterCard.addEventListener('click', function () {
        console.log('-----')
        characterCard.classList.toggle('is-flipped')
    })
}


function fillCardFront(cardFront, data) {
    cardFront.setAttribute('class', 'card__face card__face--front')
    let name = document.createElement('h1')
    let pic = document.createElement('img')

    name.setAttribute('class', 'card_face card__face--front')
    pic.setAttribute('class', 'card_face card__face--front')

    name.textContent = data.name
    pic.src = `https://rickandmortyapi.com/api/character/avatar/${data.id}.jpeg`

    // console.log(pic.src)
    cardFront.appendChild(pic)
    cardFront.appendChild(name)

}

//filling the back of the card with stats and image
function fillCardBack(cardBack, data) {
    cardBack.setAttribute('class', 'card__face card__face--back')
    // let charDiv = document.createElement('div')


    let status = document.createElement('p')
    let species = document.createElement('p')
    let statusText = document.createElement('h3')
    let speciesText = document.createElement('h3')
    let lastText = document.createElement('h3')
    let location = document.createElement('p')
    let pic = document.createElement('img')
    let stats = document.createElement('h1')

    stats.setAttribute('class', 'stats')
    stats.textContent = 'Stats'
    
    species.setAttribute('class', 'species')
    speciesText.textContent = 'Species:'

    statusText.textContent = 'Status:'
    lastText.textContent = 'Last Seen:'
    //key value pair
    location.textContent = `${data.location.name}`
    status.textContent = `${data.status}`

    //string manipulation
    status.textContent = status.textContent.toUpperCase()
    species.textContent = ` ${data.species}`

    pic.src = `https://rickandmortyapi.com/api/character/avatar/${data.id}.jpeg`


    cardBack.appendChild(pic)
    cardBack.appendChild(stats)
    cardBack.appendChild(statusText)
    cardBack.appendChild(status)
    cardBack.appendChild(speciesText)
    cardBack.appendChild(species)
    cardBack.appendChild(lastText)
    cardBack.appendChild(location)


    mainArea.appendChild(cardBack)
    // cardBack.appendChild(charDiv)
}

