class Card {
    constructor(data, selectorTemplate) {
        this.data = data;
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

        if(this.data.favourite === true) {
            favourite.innerHTML = '<i class="fa-solid fa-heart fa-2x"></i>'
            favourite.style.color = '#ff0000'
        }

        cardTitle.textContent = this.data.name;
        cardImg.src = this.data.img_link;
        return this.element
    }
}

