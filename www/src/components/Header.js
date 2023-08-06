import React from "react"




class Header extends React.Component{
    render(){							
        return <header className="header">
                        {this.props.title}
                  <br/>
                  <button  onClick={this.props.nuke}>nuc them all</button>
                </header>
    }
  }

  export default Header