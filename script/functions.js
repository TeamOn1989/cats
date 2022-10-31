function getFormData(elem) {
    const formData = {};
    elem.forEach(element => {
        if (element.type === 'submit') return
        if (element.type !== 'checkbox') {
            formData[element.name] = element.value        
        }

        if (element.type === 'checkbox') {
            formData[element.name] = element.checked        
        }
    });
    return formData
}

function createCatData(catData) {
    const cardInstance = new Card(catData, '#card-template')
    const card = cardInstance.getElemet()
    catsContainer.append(card)
}


function checkLocalStorage(apiInstance) {
    const localData = JSON.parse(localStorage.getItem('card'))

    if (localData && localData.length) {
        localData.forEach(function(catData) {
            createCatData(catData)
        })
    } else {
        apiInstance.getAllCats()
            .then(({data}) => {
                data.forEach(function(catData) {
                    createCatData(catData);
                })
                localStorage.setItem('card', JSON.stringify(data))
            })
    }
}