import React from 'react';
import { Card } from 'react-bootstrap';
import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route} from 'react-router-dom';

import { ProjNavBar } from './NavBar/NavBar';
import { PersonalInfo } from './PersonalInfo/PersonalInfo';

function App() {
  return (
    <div>
      <Router>
           <ProjNavBar/>
           <Routes>
                 <Route  path='/' element={< PersonalInfo />}></Route>
                 <Route path='/form' element={<PersonalInfo/>}></Route>
          </Routes>
       </Router>
    </div>
    
  );
}

export default App;
