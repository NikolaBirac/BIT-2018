var mainModule = (function (UIModule, dataModule) {

    function addLoginButtonListener() {//zasto jos jedna funckija?

        var button = document.querySelector(UIModule.UISelectors.buttonSelector)

        button.addEventListener('click', function () {
            var formData = UIModule.getFormData();

            var validationResult = UIModule.validation(formData);

            if (validationResult == UIModule.status.MISSING) {
                UIModule.setError(UIModule.status.MISSING)
            } else {
                var databaseChack = dataModule.checkUsernameAndPassword(formData.username, formData.password);

                if (databaseChack == false) {
                    UIModule.setError(UIModule.status.WRONG)
                } else {
                    UIModule.cleanError;
                    UIModule.setError(UIModule.status.OK)
                }
            }
        })
    }
    return {
        init: function () {
            console.log("Init...");
            addLoginButtonListener();
        }
    }

})(UIModule, dataModule);
mainModule.init();