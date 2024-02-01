import TodoApi from '../api/todoApi';
import userApi from '../api/userApi';
import TodoPage from '../pages/todoPage';
import NewTodoPage from '../pages/newTodoPage';
import UserApi from '../api/userApi';

describe("todo test cases" , () => {
    let token;
    beforeEach(()=>{
        UserApi.register().then(response => {
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

