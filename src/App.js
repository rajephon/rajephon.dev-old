import React from 'react';
import './App.css';
import Profile from "./Segments/Profile";
import AboutMe from "./Segments/AboutMe";
import Project from "./Segments/Project";
import project_history from "./project_history";
import fun_history from "./fun_history";


function App() {
    return (
        <div>
          <Profile name={'Chanwoo Noh'} description={'1992년생, Software Engineer'} email={'rajephon@gmail.com'}
                   linkedIn={'chanwoo-noh-799b79141/'} github={'rajephon'} blog={'https://blog.rajephon.dev/'}/>
          <AboutMe />
          <Project header={'Project'} project_history={project_history}/>
          <Project header={'For Fun'} project_history={fun_history} background={'#eee'} color='rgba(51,51,51,0.9)' />
        </div>
    );
}

export default App;
