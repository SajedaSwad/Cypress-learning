//page object model
/// <reference types="cypress"/>

import { LoginPage } from "./pages/login-page"
var  loginPage  = new LoginPage() //create object of the class

it ('POM DEMO',()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com')
    //calling the class function
    loginPage.enterUserName("admin")
    loginPage.enterPassword("admin123")
    loginPage.clickLogin()
    
})