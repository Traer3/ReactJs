import React from "react"

import AddBlog from "../frontPanel/AddBlog"


class BlogDetails extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            showForm: false
        }
    }
    
    blog = this.props.blog
    render() {
        
        return (<div >

            <h3>{this.blog.title}</h3> 
            <p>{this.blog.anons}</p>
            <p>{this.full_text}</p>
            <br/>
            <button class="btn btn-warning" onClick={() => {this.setState({showForm: !this.state.showForm})}}>Редактировать</button>
            <br/>
            <br/>
            <button class="btn btn-warning" onClick={()=> this.props.onDelete(this.blog.id)}  >Удалить</button>
            <br/>
            <br/>
            {this.state.showForm && <AddBlog blog={this.blog} onAdd={this.props.onEdit} /> }
        </div>)
       
    }

}

export default BlogDetails

/*
onAdd={this.props.onEdit}
*/