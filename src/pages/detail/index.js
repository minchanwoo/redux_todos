import React from 'react';
import { connect } from 'react-redux';
import { completeTodo } from '../../redux';

import { Link } from 'react-router-dom';


class PostDetail extends React.Component {

    handleComplete = () => {
        if(window.confirm('완료하시겠습니까?')) {
            this.props.completeTed(this.props.todo.id);
        }
    }

    render() {
        return (
            <div>
                <Link to='/'>목록으로</Link>
                <div>{this.props.todo.text}</div>
                <input
                    type='checkbox'
                    checked={this.props.todo.completed}
                    onChange={this.handleComplete} 
                />
            </div>
        );
    }
}

export default connect(
  (state, { match: { params } })=> ({todo: state.todos.find((todo)=> todo.id === Number(params.id))}),
  (dispatch)=> ({completeTed: (id)=> dispatch(completeTodo(id))})
)(PostDetail);