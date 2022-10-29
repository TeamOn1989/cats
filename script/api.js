const CONFIG_API = {
    url: "https://sb-cats.herokuapp.com/api/2/teamon1989/",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}

class Api {
    constructor(config){
        this._url = config.url
        this._headers = config.headers
    }
    getAllCats() {
        return fetch(`${this._url}show`, {
            method: 'GET'
        })
        .then((responce) => {
            return responce.ok ? responce.json() : Promise.reject({...responce, message: "Серверная ошибка"})
        })
    }
    
    addNewCat(data) {
        return fetch(`${this._url}add`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: this._headers
        })
        .then((responce) => {
            return responce.ok ? responce.json() : Promise.reject({...responce, message: "Серверная ошибка"})
        })
    }

    updateCatById(catsId, data) {
        fetch(`${this._url}update/${catsId}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: this._headers
        })
    }

    getCatById(catsId) {
        fetch(`${this._url}show/${catsId}`, {
            method: 'GET',
        })
    }

    deleteCatById(catsId) {
        fetch(`${this._url}delete/${catsId}`, {
            method: 'DELETE',
        })
    }

    getAllCatsId() {
        fetch(`${this._url}ids`, {
            method: 'GET'
        })
    }
}

