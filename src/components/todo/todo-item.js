import React from 'react';

class TodoItem extends React.Component {
    
    render() {
        return (
            <div className="list-group-item">
                <input type="checkbox" checked={this.props.todo.isCompleted }/>
                <span className="ml-3"> { this.props.todo.title }</span>
            </div>
        );
    }
}

export default TodoItem;
