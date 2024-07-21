import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler() {
    console.log('Clicked the button')
    }
    render() {
        return (
        <div>
            <button class="btn btn-primary" onClick={this.clickHandler}>Click Me</button>
        </div>
        )
    }
}
export default ClassClick
