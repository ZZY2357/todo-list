export default {
    addTodo(state, todo) {
        if (todo.title) {
            state.todos.push(todo);
            this.commit('saveData');
        } else {
            console.log('输入为空');
        }
    },
    removeTodo(state, todoId) {
        for (let i = 0; i < this.state.todos.length; i++) {
            if (state.todos[i].id == todoId) {
                state.todos.splice(i, 1);
                break;
            }
        }
        this.commit('saveData');
    },
    saveData(state) {
        localStorage.setItem('todo-list', JSON.stringify(state.todos));
    }
};
