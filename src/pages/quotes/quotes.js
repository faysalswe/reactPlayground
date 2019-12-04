import React, { Component } from 'react'
import './quotes.css';
export default class Quotes extends Component {
    state = {
        listOfTodo : [
          {
            id: 1,
            quotes: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
            author: "Martin Fowler"
          },
          {
            id: 2,
            title: "Simplicity is the soul of efficiency.",
            author: "Austin Freeman"
          },
          {
            id: 3,
            title: "Control, control, you must learn control",
            author: "Yoda"
          }
        ]
      }
    render() {
        return (
          <div className="page-container">
            <div className="card">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate.
            </div>
          </div>
        )
    }
}
