import React from 'react';
import {connect} from 'react-redux';

import TodoItem from './TodoItem';

const TodoList = (props) => (
    <div>
        {props.todos.map((todo, i)=> <TodoItem key={i} todo={todo} />)}
    </div>
)


export default connect(
    state => {
        const todos = state.filter === 'COMPLETED' ? state.todos.filter((todos)=> todos.completed)
                : state.filter === 'INCOMPLETED' ? state.todos.filter((todo)=> !todo.completed)
                :state.todos;
            return {todos};
    }
)(TodoList);