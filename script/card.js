class Card {
    constructor(data, selectorTemplate) {
        this._data = data;
        this.selectorTemplate = selectorTemplate;
    }

    _getTemlate() {
        return document.querySelector(this.selectorTemplate).content.querySelector('.card')
    }

    getElemet() {
        this.element = this._getTemlate().cloneNode(true);
        const cardTitle = this.element.querySelector('.card__name');
        const cardImg = this.element.querySelector('.card__img');
        const favourite = this.element.querySelector('.card__like');
        const rating = this.element.querySelector('.card__raiting')
        cardTitle.textContent = this._data.name;
        cardImg.src = this._data.img_link;

        if(this._data.favourite === true) {
            favourite.innerHTML = '<i class="fa-solid fa-heart fa-2x"></i>'
            favourite.style.color = '#ff0000'
        }

        
        return this.element
    }
}

