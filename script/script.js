const catsContainer = document.querySelector('.intro__content')
const ADD_FORM = document.querySelector('#form_add #add');


cats.forEach(function(catData) {
    const cardInstance = new Card(catData, '#card-template')
    const card = cardInstance.getElemet()
    catsContainer.append(card)
});

const popupAddCat = new Popup('form__wrapper');
popupAddCat.eventListener()
const addCatBtn = document.querySelector('#menu-btn').addEventListener('click', () => popupAddCat.visible())

ADD_FORM.addEventListener('click', function(e) {    
    e.preventDefault();
    const form = document.querySelector('#form_add')
    const inputFormData = [...form];
    const addedCard = getFormData(inputFormData);
    const cardInstance = new Card(addedCard, '#card-template')
    const card = cardInstance.getElemet()
    catsContainer.append(card)
})
