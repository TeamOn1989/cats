const catsContainer = document.querySelector('.intro__content')

cats.forEach(function(catData) {
    const cardInstance = new Card(catData, '#card-template')
    const card = cardInstance.getElemet()

    catsContainer.append(card)
});
