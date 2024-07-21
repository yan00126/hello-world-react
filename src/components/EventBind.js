import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'I say Hello'
    }
    // this.clickHandler = this.clickHandler.bind(this) //approach three
  }
//   clickHandler() {
//     this.setState({
//         message: "You say Goodbye!"
//     })
//     console.log(this)
//   }

  //approach four
  clickHandler = () => {
    this.setState({
        message: "you say goodbye!"
    })
  }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* approach one */}
        {/* <button className='btn btn-success' onClick={this.clickHandler.bind(this)}>Click for EventBind</button> */} 
        {/* approach two */}
        {/* <button className='btn btn-success' onClick={()=> this.clickHandler()}>Click for EventBind</button> */}
        {/* approach three */}
        <button className='btn btn-success' onClick={this.clickHandler}>Click for EventBind</button>

      </div>
    )
  }
}

export default EventBind