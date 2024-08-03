import React from 'react';
import UserCard from './components/UserCardModules';
import logo from './images/me.png'
import ToggleButton from './components/ToggleButton';

function App() {
  return (
    <div >
    
    <UserCard 
      name="Балбес"
      email="ivan@balbesov"
      avatarUrl={logo}
    /> 
    
     <ToggleButton />

    </div>
  );
}

export default App;
