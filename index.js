let container= document.querySelector('div.card')

let newCard= document.createElement('div');
newcard.className='card'
let cardImage=document.createElement('img')
cardImage.src='LEO WYATT.JPEG'
let heading= document.createElement('h3')
heading.textContent= 'LEO WYATT'
let cardText=document.createElement('h5')
cardText.textContent=REAL_NME_ Brian Crause

newCard.appendChild(heading)
newCard.appendChild(cardImage)
newCard.appendChild(cardText)
container.appendChild(newCard)


let newCard2= document.createElement('div');
newcard2.className='card'
let cardImage=document.createElement('img')
cardImage2.src='./COLE TURNER.JPEG'
let heading2= document.createElement('h3')
heading2.textContent= 'COLE TURNER'
let cardText2=document.createElement('h5')
cardText2.textContent= REAL_NME_Julian McMahon

newCard.appendChild(heading2)
newCard.appendChild(cardImage2)
newCard.appendChild(cardText2)
container.appendChild(newCard2)
