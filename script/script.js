const catsContainer = document.querySelector('.intro__content')
const ADD_FORM = document.querySelector('#form_add #add');
const api = new Api(CONFIG_API)
const AUTH_FORM_BTN = document.querySelector('#form_auth')

const popupAddCat = new Popup('form__wrapper');
popupAddCat.eventListener()

const popupLogin = new Popup('form__wrapper_auth');
popupLogin.eventListener()



ADD_FORM.addEventListener('click', function(e) {    
    e.preventDefault();
    const form = document.querySelector('#form_add')
    const inputFormData = [...form];
    const addedCard = getFormData(inputFormData);
    api.addNewCat(addedCard)
        .then(() => {            
            createCatData(addedCard)
            popupAddCat.hidden()
        })
    
})

AUTH_FORM_BTN.addEventListener('submit', function(e) {
    e.preventDefault()
    const addCat = document.querySelector('#nav-add-btn')
    const auth_form = document.querySelector('#form_auth')
    const inputFormDataAuth = [...auth_form];
    const authData = getFormData(inputFormDataAuth)
    document.cookie = `email=${authData.email};max-age=3600`
    document.cookie = `password=${authData.password};max-age=3600`
    console.log(authData)
    addCat.classList.remove('closed')
    popupLogin.hidden()
    
})


api.getAllCats()
    .then(( {data} ) => {
        data.forEach(function(catData) {
            createCatData(catData)
        });
    })


checkLocalStorage(api)

const addCatBtn = document.querySelector('#nav-add-btn').addEventListener('click', () => popupAddCat.visible())
const AUTH_BTN = document.querySelector('#login').addEventListener('click', () => popupLogin.visible())