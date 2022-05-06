import "./members.css";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Projects</h1>
      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Veni in Norway</h1>
          <h3 className="position">Developer</h3>
          <h4 className="about">
          Produktutveckling @ lifeAtWork platform. .NET C#, Azure, DevOps, React, typeskript, API utveckling, Apputveckling, iOs, Android, Cordova, Mailjet, Node.js, service bus

          </h4>
          <a href="#contact" className="contact-member">
            <span>contact</span>
          </a>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">The swedish Armed Forces </h1>
          <h3 className="position">Developer</h3>
          <h4 className="about">
          .NET, IIS, Microsoft SQL Server, Microsoft Visual Studio, MVC, SQL,
          SharePoint, FAST, Performance test, BDD, CodedUI, TFS, PowerShell
          
          </h4>
          <a href="#contact" className="contact-member">
            <span>contact</span>
          </a>
        </div>
      </div>

      <div className="member member-3">
      <div className="member-img"></div>
      <div className="member-info">
        <h1 className="name">Higher Education and the University Council</h1>
        <h3 className="position">Developer</h3>
        <h4 className="about">
        C#, .NET, MVC, Entity Framework, HTML, CSS, JavaScript, jQuery, Jaws, Readspeaker, colorAnerlys, SQL Server, Visual Studio, Jenkins, EpiServer CMS, FIND, Epi-forms, Google Analytics, Jira, TFS
        </h4>
        <a href="#contact" className="contact-member">
          <span>contact</span>
        </a>
      </div>
    </div>

      <div className="member member-4">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">H&M</h1>
          <h3 className="position">Developer</h3>
          <h4 className="about">
          C#, .NET, ASP.NET, WebAPI, Servicebus, Azure, REST, JSON, SignalR, Azure, JavaScript, Typescript, AngularJS, HTML5, CSS3, Bootstrap, Visual Studio, Continuous Integration, TFS, SQL, T-SQL, Stored Procedure

          </h4>
          <a href="#contact" className="contact-member">
            <span>contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Members;
