import React from 'react';
import ComponentA from './ComponentA';
import { UserProvider } from './UserContext';

class Context extends React.Component {
  render() {
    return (
      <div>
        <h1>Context</h1>
        <ComponentA />
        
        <UserProvider value="Mnm">
          <ComponentA />
        </UserProvider>
      </div>
    );
  }
}

export default Context;
