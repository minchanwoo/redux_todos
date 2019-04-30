import React from 'react';

import { connect } from 'react-redux';
import { addTodo } from '../../../redux';


class AddTodo extends React.Component {
    state = {
        text: '',
    }

    handleInput = (e) => {
        if(e.key === 'Enter') {
            this.props.addTodo(this.state.text);
            this.setState({
                text: '',
            });
        } else {
            this.setState({ text: e.target.value });
        }
    }

    render() {
        return (
            <input
                type='text'
                onKeyPress={this.handleInput}
                value={this.state.text}
                onChange={this.handleInput}
            />
        );
    }
}

export default connect(
    null,
    (dispatch)=> ({addTodo: (text)=> dispatch(addTodo(text)) })
)(AddTodo);