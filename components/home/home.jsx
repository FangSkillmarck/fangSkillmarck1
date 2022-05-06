import './home.css';
import img from '../props/img2.jpg';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt='' />
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p>
          I am a full stack web developer.
        </p>
        <h4>
        <span>Backend: </span>
        <p>
        C#, .NET, ASP.NET, ,PHP ,Python, , GIS, OpenLayer, Leaflet, Github, Git, PostgreSQL, RDF, Docker, SQL, T-SQL, Stored Procedure, REST, Webservices, Azure, DevOps,
        WebAPI, Entity Framework, MVC, SignalR, REST, Sharepoint, EPiServer
        </p>  
        <br />
        </h4> 
        <h4> <span>Frontend:</span>
        <p>
        Javascript, TypeScript,React, AngularJS, jQuery, knockout.js, HTML, Bootstrap, CSS
        </p>
        </h4> 
        <h4> <span>Others:</span> 
        <p>
        Vistual Studio, TFS, Jira, Jenkins, Azure, SQL Server, Unix, IIS
        Metoder
        Scrum, Kanban, BDD, Continuous Integration, Performance test
       
        Powershell, Bash, curl, Batch, Pascal, Prolog, ML, C++, Python, 
       </p>  <br />
       </h4>
       </h2>

      <Buttons />
    </div>
  );
}

export default Home;
