import React from 'react';
import { connect } from 'react-redux';
import {filterTodo} from '../../../redux';

const  FILTERS = [
    {value: 'ALL', text:'전체'},
    {value: 'COMPLETED', text:'완료'},
    {value: 'INCOMPLETED', text:'미완료'}
]

class TodoFilter extends React.Component {
    render() {
        return (
            <div>
                {FILTERS.map((filter, i)=>
                    <div
                        key={i} 
                        onClick={()=> this.props.filterTodo(filter.value)}>
                        {filter.text}
                </div>)}
            </div>
        );
    }
}

export default connect(
    null,
    (dispatch)=> ({filterTodo: (filter)=> dispatch(filterTodo(filter)) })
)(TodoFilter);