class Loginpage{

    loginMethod(username, password){

        cy.xpath(this.username()).type(username);
        cy.get(this.password()).type(password);
        cy.get(this.loginBtn()).click();

    }

    username(){

        return '//input[@id="txtUsername"]'
    }

    password(){

        return "#txtPassword"
    }

    loginBtn(){

        return "#btnLogin"
    }

    errorMessage(){


        return "#spanMessage"
    }

    demo(){

        return '//input[@id="txtUsername"]'
    }
}

export default Loginpage;