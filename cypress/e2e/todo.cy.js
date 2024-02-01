import { faker } from '@faker-js/faker';
import TodoApi from '../api/todoApi';
import userApi from '../api/userApi';
import TodoPage from '../pages/todoPage';
import NewTodoPage from '../pages/newTodoPage';

describe("todo test cases" , () => {
    let token;
    beforeEach(()=>{
        cy.request({
            url: "/api/v1/users/register",
            method : "POST",
            body: {
                firstName: faker.person.firstName(),
                lastName: faker.person.lastName(),
                email: faker.internet.email(),
                password: faker.internet.password()
            }
        }).then(response => {
            token = response.body.access_token;
        })
    })
    it("should be able to add todo" , () => {
        new TodoPage().load().clickOnAddButton().addNewTodo("Learn Cypress").firstItemShouldHaveText("Learn Cypress");
    });
    
    it("should be able to mark a todo as completed " , ()=>{
        TodoApi.add(token);
        new TodoPage().load().markFirstTodoCompleted().firstItemShouldHaveBackgroundColor("rgb(33, 76, 97)");
    })
})

