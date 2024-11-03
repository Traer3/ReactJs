import React, { Component } from "react";

class ExampleComponent extends Component {

    constructor(props){
        super(props);
        this.state = {count: 0};
        console.log("Constructor: инициализация состояния");
    }

    componentDidMount(){
        console.log("componentDidMount: компонент добавлен в DOM");
    }

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate: обновление компонента");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount: компонент будет удален из DOM");
    }

    render(){

        return<div>{this.state.count}</div>

    }

}

export default ExampleComponent;

