const CONFIG_API = {
    url: 'https://sb-cats.herokuapp.com/api/2/teamon1989',
    headers: {
        'Content-type': 'application/json'
    }
}

class Api {
    constructor(config){
        this._url = config.url
        this._headers = config.header
    }
    getAllCats() {
        fetch(`${this._url}show`, {
            method: 'GET'
        })
    }
    getAllCats() {
        fetch(`${this._url}/show`, {
            method: 'GET'
        })
    }
    
    addNewCat(data) {
        fetch(`${this._url}/add`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: this._headers
        })
    }

    updateCatById(catsId, data) {
        fetch(`${this._url}/update/${catsId}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: this._headers
        })
    }

    getCatById(catsId) {
        fetch(`${this._url}/show/${catsId}`, {
            method: 'GET',
        })
    }

    deleteCatById(catsId) {
        fetch(`${this._url}/delete/${catsId}`, {
            method: 'DELETE',
        })
    }

    getAllCatsId() {
        fetch(`${this._url}ids`, {
            method: 'GET'
        })
    }
}

