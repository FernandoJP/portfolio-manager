import React, { Component } from 'react';

class Layout extends Component {
    
  render () {
    return (
        <div>
           <nav>
               <ul>
                   <li>Item 1</li>
                   <li>Item 2</li>
                   <li>Item 3</li>
               </ul>
           </nav>
           {this.props.children}
        </div>
    )
  }
}

export default Layout;