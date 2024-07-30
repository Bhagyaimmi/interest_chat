import React from 'react';
import Login from './components/Login';
import SendInterest from './components/SendInterest';
import Chat from './components/Chat';

const App = () => {
    return (
        <div>
            <Login />
            <SendInterest />
            <Chat />
        </div>
    );
};

export default App;
