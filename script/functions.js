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