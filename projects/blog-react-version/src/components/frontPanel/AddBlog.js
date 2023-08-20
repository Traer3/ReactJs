import React from "react"

class AddBlog extends React.Component {
    
    blogEdit={}
    

    constructor(props){
        super(props)
        this.state = {
            title:"",
            anons:"",
            full_text:"",
        }
    }
    
    render() {
        return (<div>
              
            <form ref={(el)=> this.myForm = el}>
            <input class="form-control" placeholder="Введите название статьи" onChange={(event)=> {this.setState({title: event.target.value})}}/><br/>
            <input class="form-control" placeholder="Введите анонс статьи" onChange={(event)=> {this.setState({anons: event.target.value})}}/><br/>
            <textarea class="form-control" placeholder="Введите полный текст статьи" onChange={(event)=> {this.setState({full_text: event.target.value})}}/><br/>
            <button type="button" class="btn btn-success" onClick={()=> {
                this.myForm.reset()
                this.blogEdit={
                    title:this.state.title,
                    anons:this.state.anons,
                    full_text:this.state.full_text,
                }
                if(this.props.blog)
                    this.blogEdit.id = this.props.blog.id
                this.props.onAdd(this.blogEdit)
            }}>Обновить</button>
            </form>   

                
              
        </div>)
    }

}

export default AddBlog
