import NewTodoPage from "./newTodoPage";

class TodoPage {
    //get elements
    get welcomeMessage(){
        return cy.get('[data-testid="welcome"]');
    }
    get addButton(){
        return cy.get('[data-testid="add"]')
    }
    get firstTodoItem(){
        return cy.get('[data-testid="todo-item"]').eq(0);
    }
    get firstTodoCheckbox(){
        return cy.get('[data-testid="complete-task"]').eq(0);
    }
    //methods
    load(){
        cy.visit('/todo');
        return this;
    }
    welcomeMessageShouldBeVisible(){
        this.welcomeMessage.should('be.visible');
        return this;
    }
    clickOnAddButton(){
        this.addButton.click();
        return new NewTodoPage();
    }
    firstItemShouldHaveText(text){
        this.firstTodoItem.should('have.text' , text);
        return this;
    }
    markFirstTodoCompleted(){
        this.firstTodoCheckbox.click();
        return this;
    }
    firstItemShouldHaveBackgroundColor(color){
        this.firstTodoItem.should('have.css' , 'background-color' , color);
        return this;
    }
}
export default TodoPage