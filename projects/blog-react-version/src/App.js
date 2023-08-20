import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"



class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
           
           blogs:[
           {
            id:1,
            title:"First blog",
            anons:"The First Blog",
            full_text:"Converting Java Thymeleaf in to JavaScrip React"
           },
           {
            id:2,
            title:"Second blog",
            anons:"The Second Blog",
            full_text:"Converting Java Thymeleaf in to JavaScrip React"
           }
           ]

        }
    }
    render() {
        return (<div>
              <Header blogs={this.state.blogs}  onDelete={this.deleteBlog} onAdd={this.addBlog} onEdit={this.blogEdit}></Header>
              
              <Footer/>
        </div>)
    }

    addBlog = (blog)=>{
        const id = this.state.blogs.length + 1
        this.setState({blogs:[...this.state.blogs,{id,...blog}]})
    }

    blogEdit = (blog) => {
        let allBlogs = this.state.blogs
        allBlogs[blog.id - 1] = blog
      
        this.setState({blogs: []}, () => {this.setState({blogs: [...allBlogs]})})

    }
      


    deleteBlog = (id) =>{
        this.setState({blogs: this.state.blogs.filter((el) => el.id !== id) })  
        
    }

}

export default App

/*
blogEdit =(blog) => {
  let allBlogs = this.state.blogs
  allBlogs[blog.id - 1] = blog

  this.setState({blogs: []}, () => {this.setState({blogs: [... allBlogs]})})
}



*/