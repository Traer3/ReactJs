import React from "react";

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {hasError: false};
    }

    componentDidCatch(error,info){
        this.setState({hasError: true});

        const audio = new Audio('/sound/clap.mp3');
        audio.play().catch((err)=>{
            console.warn('error plaing mp3', err);
        });
    }


    render(){
        if(this.state.hasError){
            return <h2>Something is wrong</h2>
        }
        return this.props.children
    }
}

export default ErrorBoundary;