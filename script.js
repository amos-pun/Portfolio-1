function send () {

    const inputElement = document.querySelectorAll('.erase');

    for (var i=0; i < inputElement.length; i++){
        inputElement[i].value = '';
    }

    return alert `Contact details has been sent.`

}