class Popup {
    constructor(className) {
        this._className = className
        this.popup = document.querySelector(`.${className}`)
        this._escClose = this._escClose.bind(this)
    }

    _escClose(e) {
        if (e.key === 'Escape') {
            this.hidden()
            console.log(this)
        }
       
    }

    visible() {
        this.popup.classList.remove('closed')
        if (!this.popup.classList.contains('.closed')) {
            document.addEventListener('keyup', this._escClose)
        }
        
    }

    hidden() {
        this.popup.classList.add('closed')
        document.removeEventListener('keyup', this._escClose)
    }

    eventListener() {
        this.popup.addEventListener('click', (e) => {
            e.preventDefault()
            if (e.target.classList.contains(this._className) || e.target.closest('#chancel')) {
                this.hidden()
            }
        })
    }

}