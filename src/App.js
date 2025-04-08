import React from 'react';
import Users from './components/pages/users/Users';
import './App.css';

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <h1>Какая-то админ панель</h1>
            </header>
            <main>
                <Users />
            </main>
        </div>
    );
}

export default App;

