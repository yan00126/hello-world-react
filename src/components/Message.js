import React, {Component} from "react";

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcom Visitor'
        }
    }

    changeMessage() {
        this.setState({
            subd: 'Thanks for subscribing!'
        })
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button  class="btn btn-secondary" onClick={() => this.changeMessage()}>Subscribe</button>
                <p>{this.state.subd}</p>
            </div>
        )
    }
}

export default Message
