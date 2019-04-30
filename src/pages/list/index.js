import React from 'react';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';

export default () => (
    <div>
        <AddTodo />
        <TodoList />
        <hr />
        <TodoFilter />
    </div>
)