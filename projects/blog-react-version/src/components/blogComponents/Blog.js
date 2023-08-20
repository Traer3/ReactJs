import React from "react"
import BlogDetails from "./BlogDetails"

class Blog extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            showForm: false
        }
    }
    

    
    render() {
        if(this.state.showForm === false)
        return (<div class="alert alert-info mt-2">
              
             <h3>{this.props.blog.title}</h3> 
             <p>{this.props.blog.anons}</p>
             <button class="btn btn-warning" onClick={() => {this.setState({showForm: !this.state.showForm})}}>Детальнее</button>
             <div class="container mt-5"></div>
        </div>)
        return (<div class="alert alert-info mt-2">
            {this.state.showForm && <BlogDetails blog={this.props.blog}  onDelete={this.props.onDelete} onEdit={this.props.onEdit}/> }
            <div class="container mt-5"></div>
        </div>)
    }

}

export default Blog