import React from 'react';
import { Login } from '../Login/Login';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './App.css';
import { Chat } from '../Chat/Chat';
import { NavigationBar } from '../NavigationBar/NavigationBar';

function App() {
  const userId = useSelector<RootState, string | undefined>((state) => state.currentUser.userId);

  return (
    <div className='app'>
      {
        userId ? <>
          <div className='User-Info'>
              <span>
                {userId} 
              </span>
          </div>
          <NavigationBar/>
          <div className='Info-Sidebar'></div>
          <Chat/>
        </> : <Login/>
      }
    </div>
  );
}

export default App;
