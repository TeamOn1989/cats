class Popup {
    constructor(className) {
        this._className = className
        this.popup = document.querySelector(`.${className}`)
        this._escClose = this._escClose.bind(this)
        this.header = document.querySelector('.header')
        this.footer = document.querySelector('.footer')
    }

    _escClose(e) {
        if (e.key === 'Escape') {
            this.hidden()
        }
       
    }

    visible() {
        this.popup.classList.remove('closed')
        if (!this.popup.classList.contains('.closed')) {
            document.addEventListener('keyup', this._escClose)
            this.footer.classList.add('closed')
            this.header.classList.add('closed')
        }
        
    }

    hidden() {
        this.popup.classList.add('closed')
        document.removeEventListener('keyup', this._escClose)
        this.header.classList.remove('closed')
        this.footer.classList.remove('closed')
    }

    eventListener() {
        this.popup.addEventListener('click', (e) => {
            if (e.target.classList.contains(this._className) || e.target.closest('#chancel')) {
                this.hidden()
            }
        })
    }

}