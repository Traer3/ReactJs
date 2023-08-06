import React from "react"
import Header from "./components/Header"
import Users from "./components/Users"
import AddUser from "./components/AddUser"
import axios from "axios"


const baseUrl = "https://reqres.in/api/users?page=1"

class App extends React.Component {

    constructor(props){
        super(props)

        axios.get(baseUrl).then((res) =>{this.setState({users: res.data.data})})
        this.state = {
            users: []
        }
   
}

  render(){
  return(<div>
            <Header title="Список пользователей" nuke={this.nukeThemAll}/>
    
        <main>
            <Users users={this.state.users} onDelete={this.deletUser} onEdit={this.editUser}/>
        </main>

	    <aside>
            <AddUser onAdd={this.addUser}/>
        </aside>
     
</div>)
}

addUser = (user)=>{
    const id = this.state.users.length + 1
    this.setState({users:[...this.state.users,{id,...user}]})
}

deleteUser = (id) =>{
    this.setState({users: this.state.users.filter((el) => el.id !== id) })  
    
}

editUser = (user) => {
    let allUsers = this.state.users
    allUsers[user.id - 1] = user 
    
    this.setState({users: []}, ()=>{this.setState({users: [...allUsers]})})
}


nukeThemAll = () => {
    this.setState({users: []})
}
}



export default App