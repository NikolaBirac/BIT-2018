var UIModule = (function(){

    var UISelectors = {
        usernameSelector: '#username', 
        passwordSelector: '#password', 
        errorSelector: '#error', 
        loginButtonSelector: '#login-button'
    };

    var status = {
        OK: "OK", 
        MISSING_DATA: "Please fill in the form!", 
        WRONG_DATA: "Wrong username and/or password." 
    };






    
    var usernameInput = document.querySelector(UISelectors.usernameSelector);
    var passwordInput = document.querySelector(UISelectors.passwordSelector);
    var errorElement = document.querySelector(UISelectors.errorSelector);


    function getFormData(){
        var formData = {};
        formData.username = usernameInput.value;
        formData.password = passwordInput.value;
        
        return formData;
    }


    function validationData(formData){
        if(formData.username =='' || formData.password ==''){
            return status.MISSING_DATA;
        }

        return status.OK;
    }

    function setError(message){
        errorElement.textContent = message;
    }

    function clearError(){
        errorElement.textContent = '';
    }

    return {
        UISelectors: UISelectors, 
        setError: setError,
        clearError: clearError, 
        getFormData: getFormData, 
        validationData: validationData,
        status : status 
    }

})();

