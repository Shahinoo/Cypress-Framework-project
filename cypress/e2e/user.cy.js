/// <reference types="cypress" />
import LoginPage from "../pages/loginPage";
import TodoPage from "../pages/todoPage";


it("should be able to login" , () => {
    const loginPage = new LoginPage();
    loginPage.load()
    .login(Cypress.env("email") , Cypress.env("password"))
    .welcomeMessageShouldBeVisible();

})