import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello YanFei,hello</h1>
    //     </div>
    // )
    return React.createElement(
        'div', 
        {id:'hello', className:'dummyClass'}, 
        React.createElement('h1',null,'MuayThai Old Guy'))
}

export default Hello