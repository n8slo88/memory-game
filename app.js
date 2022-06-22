const cardArray =[
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    }, {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    }, 
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    }, {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    }

]

cardArray.sort(()  => 0.5-Math.random())


const gridDisplay = document.querySelector('#grid')

let scoreDisplay = document.getElementById('score')

let cardsChosen = []
let cardsChosenids =[]
const cardsWon= []
let scorenum =[0]



function createBoard(){
    for(let i= 0; i < cardArray.length; i++){
       const card = document.createElement('img')
       card.setAttribute('src', 'images/blank.png')
       card.setAttribute('data-id', i)
       card.addEventListener('click', flipcard)
       gridDisplay.append(card)
    }
}

createBoard()

function checkMatch(){
        
        const cards = document.querySelectorAll('img')
        if (cardsChosenids[0] == cardsChosenids[1]){
            alert ('You clicked the same card')
        }
        if (cardsChosen[0] == cardsChosen[1]) {
            alert ('you found a match');
            cards[cardsChosenids[0]].setAttribute('src', 'images/white.png');
            cards[cardsChosenids[1]].setAttribute('src', 'images/white.png');
            cards[cardsChosenids[0]].removeEventListener('click', flipcard);
            cards[cardsChosenids[1]].removeEventListener('click', flipcard);
            cardsWon.push(cardsChosen);
            
        }
        else{
            alert('sorry try again');
            cards[cardsChosenids[0]].setAttribute('src', 'images/blank.png');
            cards[cardsChosenids[1]].setAttribute('src', 'images/blank.png');
        }
        
        cardsChosen=[]
        cardsChosenids= []
        
        if (cardsWon.length == cardArray.length/2){
            scoreDisplay.textContent ='All done'
        }
        else{
            scoreDisplay.textContent= cardsWon.length
        }

        }
    


function flipcard(){
    const cardId = this.getAttribute('data-id')
    
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenids.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    console.log(cardsChosen)
    console.log(cardsChosenids)
    console.log ("clicked", cardId)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}

