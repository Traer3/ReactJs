import React from 'react';
import Main from './Main';
import Service from './Service';
import AboutUs from './AboutUs';
import Contacts from './Contacts';

class Header extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            callInfo: false,
            callService: false,
            callAbout: false,
            callContacts: false,
        }
    }

    render(){
        return <header>
            <button class="button" onClick={() => this.handleButtonClick('callInfo')}>Главная</button>
            <button class="button" onClick={() => this.handleButtonClick('callService')}>Сервисы</button>
            <button class="button" onClick={ () => this.handleButtonClick('callAbout') }>О нас</button>
            <button class="button" onClick={() => this.handleButtonClick('Contacts')}>Контакты</button> 

            {this.state.callInfo && <Main /> }
            {this.state.callService && <Service /> }
            {this.state.callAbout && <AboutUs /> }
            {this.state.callContacts && <Contacts /> }
        </header>
    }

resetState = () =>{
    this.setState({
        callInfo: false,
        callService: false,
        callAbout: false,
        callContacts: false,
      });
}

handleButtonClick = (field) => {
    this.resetState();
    this.setState({ [field]: !this.state[field] });
  };
}

export default Header