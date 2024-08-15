import React from 'react';
import UserCard from './components/UserCardModules';
import logo from './images/me.png'
import ToggleButton from './components/ToggleButton';
import Button from './components/Button';
import Card from './components/Card';
import Alert from './components/Alert';
import ProfileCard from './components/ProfileCard';

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

    </div>
  );
}

export default App;
