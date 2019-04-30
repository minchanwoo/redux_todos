import React from 'react';
import { connect } from 'react-redux';
import { completeTodo } from '../../../redux';

import { Link } from 'react-router-dom';


class TodoItem extends React.Component {
    handleComplete = () => {
        if(window.confirm('완료하시겠습니까?')) {
            this.props.completeTed(this.props.todo.id);
        }
    }
    
    render() {
        return (
            <div>
                <input
                    type='checkbox'
                    checked={this.props.todo.completed}
                    onChange={this.handleComplete} 
                />
                <Link to={`/${this.props.todo.id}`}>
                    {this.props.todo.text}
                </Link>
            </div>
        );
    }
}

export default connect(
    null,
    (dispatch)=> ({completeTed: (id)=> dispatch(completeTodo(id))})
)(TodoItem);