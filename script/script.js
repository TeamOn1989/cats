const catsContainer = document.querySelector('.intro__content')
const ADD_FORM = document.querySelector('#form_add #add');
const api = new Api(CONFIG_API)
const AUTH_FORM_BTN = document.querySelector('#form_auth')

const addCat = document.querySelector('#nav-add-btn')

const popupAddCat = new Popup('form__wrapper');
popupAddCat.eventListener()

const popupLogin = new Popup('form__wrapper_auth');
popupLogin.eventListener()



ADD_FORM.addEventListener('click', function(e) {    
    e.preventDefault();
    const form = document.querySelector('#form_add')
    const inputFormData = [...form];
    const addedCard = getFormData(inputFormData);
    let localData = JSON.parse(localStorage.getItem('card'))
    localData =+ localStorage.setItem('card', JSON.stringify(addedCard))
    api.addNewCat(addedCard)
        .then(() => {            
            createCatData(addedCard)
            popupAddCat.hidden()
        })
    
})

AUTH_FORM_BTN.addEventListener('submit', function(e) {
    e.preventDefault()    
    const auth_form = document.querySelector('#form_auth')
    const inputFormDataAuth = [...auth_form];
    const authData = getFormData(inputFormDataAuth)
    document.cookie = `email=${authData.email};max-age=3600`
    addCat.classList.remove('closed')
    checkLocalStorage(api)
    popupLogin.hidden()    
})





const addCatBtn = document.querySelector('#nav-add-btn').addEventListener('click', () => popupAddCat.visible())
const AUTH_BTN = document.querySelector('#login').addEventListener('click', () => popupLogin.visible())

const isAuth = document.cookie;

if (isAuth) {
    addCat.classList.remove('closed')
    checkLocalStorage(api)
}