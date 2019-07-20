import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    getStyle() {
        return { textDecoration: this.props.todo.isCompleted ?  'line-through' : 'none' }
    }

    render() {
        const { id , title } = this.props.todo;
        return (
            <div className="list-group-item list-group-item-action" >
                <input type="checkbox" defaultChecked={this.props.todo.isCompleted } 
                onChange={this.props.handleIsCompleted.bind(this, id)}/>
                <span className="ml-3" style={this.getStyle()} > { title }</span>
                <span className="float-right" 
                style={Style} 
                onClick={this.props.removeTodo.bind(this, id)}> &times; </span>
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const Style = {
    cursor: 'pointer'
}
export default TodoItem;
