import React from 'react';
import UserCard from './components/UserCardModules';
import logo from './images/me.png'
import ToggleButton from './components/ToggleButton';
import Button from './components/Button';
import Card from './components/Card';
import Alert from './components/Alert';
import ProfileCard from './components/ProfileCard';
import GlobalStyleButton from './components/GlobalStyleButton';
import GlobalStyleCard from './components/GlobalStyleCard';

function App() {
  return (
    <div >
    
    
      <UserCard 
      name="Балбес"
      email="ivan@balbesov"
      avatarUrl={logo}
    />
    
     <ToggleButton />


    
      <Card>
            <h2>Card Title</h2>
            <p>Content inside a card.</p>
            <Button>Click Me!</Button>
      </Card>
    
    <div>
          <Alert type="success" message="This is a success message!"/>
          <Alert type="error" message="This is a error message!"/>
    </div>

    <ProfileCard />

    <GlobalStyleButton>Global Styles for React is a bad practice </GlobalStyleButton>
    <GlobalStyleCard>You cant use gloabal styles like " import './styles.css'; " You need to import it in your project and call it className= style.button</GlobalStyleCard>

    </div>
  );
}

export default App;
