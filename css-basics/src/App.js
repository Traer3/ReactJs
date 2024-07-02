import React from 'react';
import UserCard from './components/UserCardModules';
import logo from './images/me.png'

function App() {
  return (
    <div >
    
    <UserCard 
      name="Балбес"
      email="ivan@balbesov"
      avatarUrl={logo}
    />
     
    </div>
  );
}

export default App;
