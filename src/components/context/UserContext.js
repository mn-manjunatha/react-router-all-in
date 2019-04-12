import React from 'react';

const UserContext = React.createContext('no name')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer};
