import React from 'react';
import { Login } from '../Login/Login';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './App.css';
import { Chat } from '../Chat/chat';

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
          <Chat/>
        </> : <Login/>
      }
    </div>
  );
}

export default App;
