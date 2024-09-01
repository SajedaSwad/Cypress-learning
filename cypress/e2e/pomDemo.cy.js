//page object model
/// <reference types="cypress"/>

//grouping test
import { LoginPage } from "./pages/login-page";
var loginPage = new LoginPage(); //create object of the class

describe("all login test ", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com");
  });

  //it.only("login1", () => {it run just this test
  //it.skip("login1", () => {it skip this test
  it.skip("login1", () => {
    //calling the class function
    loginPage.enterUserName("admin");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
    cy.get(":nth-child(1) > .oxd-main-menu-item").click();
  });
  it("login2", () => {
    //calling the class function
    //invalid credintional
    loginPage.enterUserName("admin");
    loginPage.enterPassword("admin123345");
    loginPage.clickLogin();
    cy.get(":nth-child(1) > .oxd-main-menu-item").click();
  });
});
