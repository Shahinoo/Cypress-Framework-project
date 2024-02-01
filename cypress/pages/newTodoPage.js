import TodoPage from "./todoPage";

class NewTodoPage {
    //get elements
    get newTodoInput (){
        return cy.get('[data-testid="new-todo"]');
    }
    get submitNewTodoButton (){
        return cy.get('[data-testid="submit-newTask"]')
    }
    //methods
    load(){
        cy.visit('/todo/new');
        return this;
    }
    addNewTodo (item){
        this.newTodoInput.type(item);
        this.submitNewTodoButton.click();
        return new TodoPage();
    }
}
export default NewTodoPage