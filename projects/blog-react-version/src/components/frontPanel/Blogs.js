import React from "react"
import Blog from "../blogComponents/Blog"

class Blogs extends React.Component {
    

    render() {
        if(this.props.blogs.length > 0)
        return (<div>{this.props.blogs.map((el)=>(<Blog key={el.id} blog={el}  onDelete={this.props.onDelete} onEdit={this.props.onEdit}/>))}</div>)
        else
        return (<div><h1>Блогов нету</h1></div>)
    }

}

export default Blogs