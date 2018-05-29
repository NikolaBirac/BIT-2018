var mainModule = (function(UIModule, dataModule){

    function addLoginButtonListener(){

        //dohvatiti dugmence
        var loginButton = document.querySelector(UIModule.UISelectors.loginButtonSelector);

        //definisati listener        
        loginButton.addEventListener('click', function(){
            //procitati podatke
            var formData = UIModule.getFormData();

            //proverti podatke
            var validationResult = UIModule.validationData(formData);

            if(validationResult == UIModule.status.MISSING_DATA){
                //1) prijaviti gresku
            
                UIModule.setError(UIModule.status.MISSING_DATA);
            }
            else{
                // ili 2) proveriti da li korisnik postoji
                var databaseCheck = dataModule.checkUsernameAndPassword(formData.username, formData.password);
                
                if(databaseCheck == false){
                    UIModule.setError(UIModule.status.WRONG_DATA);
                }
                else{
                    UIModule.clearError();
                    UIModule.setError(UIModule.status.OK);
                    //
                }

            }



        });
            

    }

    return {
        init: function(){
            console.log("Init...");
            addLoginButtonListener();
        }
    }


})(UIModule, dataModule);

mainModule.init();