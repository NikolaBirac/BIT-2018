var UIModule = (function () {

    var UISelectors = {
        userSelector: '#username',
        passwordSelector: '#password',
        buttonSelector: '#login-button',
        errorSelector: '#error'
    }

    var usernameInput = document.querySelector(UISelectors.userSelector);
    var passwordInput = document.querySelector(UISelectors.passwordSelector);
    var errorElement = document.querySelector(UISelectors.errorSelector);
    //ZASTO NEMA ZA BUTTON

    var status = {
        OK: 'ok',
        MISSING: 'fill the form',
        WRONG: 'wrong username or password'
    };

    function getFormData() {//zasto uopste funkcija ovde
        var formData = {}; //zasto pravimo objekat a ne samo 2 varijable username i password?
        formData.username = usernameInput.value;//zasto nema return, kako ukucamo samo formdata.username i dobijemo sta zelimo
        formData.password = passwordInput.value;//kako moze da se pozove formdata van funckije?
    }

    function validation(formData) {
        if (formData.username == '' || formData.password == '') {
            return status.MISSING;
        }
        return status.OK;
    }

    function setError(message) {
        errorElement.textContent = message;
    }
    function cleanError() {
        errorElement.textContent = '';
    }

    return {
        UISelectors: UISelectors,
        status: status,
        getFormData: getFormData,//zasto nema ()?
        validation: validation,
        setError: setError,
        cleanError: cleanError
    }

})();
