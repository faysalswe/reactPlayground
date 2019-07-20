import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class TodoForm extends Component {
    state = {
        title : ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    }

    addTodo = () => {
        this.props.addTodo(this.state.title);
        this.setState({ title: ''})
    }
    render() {
        return (
        <div className="form-inline">
            <div className="input-group mb-2 mr-sm-2">
                <div className="input-group-prepend">
                    <div className="input-group-text"> --> </div>
                </div>
                <input type="text" 
                className="form-control" 
                name="title"
                placeholder="Your task"
                value={this.state.title}
                onChange={this.handleChange}/>
            </div>

            <div className="btn-group">
                <button className="btn btn-primary" onClick={this.addTodo} > New </button>
                <button className="btn btn-secondary" 
                onClick={this.props.filterTodo.bind(this, this.state.title)}> Search </button>
            </div>
        </div>
        )
    }
}