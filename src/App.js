import React from 'react';
import './App.css';
import {Header} from './common/header/header';
import {Menu} from './common/menu/menu';
import {Profile} from './common/profile/profile';
import {Dialog} from './common/dialog/dialog';
import {News} from './common/news/news';
import {Music} from './common/music/music';
import {Setting} from './common/setting/setting';
import {Route, BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Menu/>
        <Route path='/profile' component={Profile}/>
        <Route path='/dialog' component={Dialog}/>
        <Route path='/news' component={News}/>
        <Route path='/music' component={Music}/>
        <Route path='/setting' component={Setting}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
