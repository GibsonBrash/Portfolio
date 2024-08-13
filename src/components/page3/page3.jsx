import React from '../../assets/react-logo.svg';
import Html from '../../assets/html.svg';
import Java from '../../assets/java.svg';
import JavaScript from '../../assets/javascript.svg';
import C from '../../assets/c.svg';
import Blazor from '../../assets/blazor.svg';
import CSharp from '../../assets/csharp.svg';
import Express from '../../assets/express.svg';
import MongoDB from '../../assets/mongodb.svg';
import MySQL from '../../assets/mysql.svg';
import NET from '../../assets/NET.svg';
import NodeJS from '../../assets/nodejs.svg';
import Python from '../../assets/python.svg';
import Spring from '../../assets/spring.svg';
import CSS from '../../assets/CSS.svg';
//import '../../App.css';
import './page3.css';

function page3({page3P}){
    return(
        <>
            <div id="page3" ref={page3P}>
                <div className="title">
                    <h1>Skills</h1>
                </div>
                <div id="skills-container">
                <div className="skills">
                    <img src={JavaScript} />
                    <div>JavaScript</div>
                </div>
                <div className="skills">
                    <img src={Html} />
                    <img src={CSS} />
                    <div>HTML & CSS</div>
                </div>
                <div className="skills">
                    <img src={React} />
                    <div>React</div>
                </div>
                <div className="skills">
                    <img src={NodeJS} />
                    <div>NodeJS</div>
                </div>
                <div className="skills">
                    <img src={Express} />
                    <div>ExpressJS</div>
                </div>
                <div className="skills">
                    <img src={MongoDB} />
                    <div>MongoDB</div>
                </div>
                <div className="skills">
                    <img src={Python} />
                    <div>Python</div>
                </div>
                <div className="skills">
                    <img src={Java} />
                    <div>Java</div>
                </div>
                <div className="skills">
                    <img src={Spring} />
                    <div>Spring</div>
                </div>
                <div className="skills">
                    <img src={CSharp} />
                    <div>C#</div>
                </div>
                <div className="skills">
                    <img src={Blazor} />
                    <div>Blazor</div>
                </div>
                <div className="skills">
                    <img src={NET} />
                    <div>.NET</div>
                </div>
                <div className="skills" id="bottom-skills1">
                    <img src={MySQL} />
                    <div>MySQL</div>
                </div>
                <div className="skills" id="bottom-skills2">
                    <img src={C} />
                    <div>C</div>
                </div>
                </div>
            </div>
        </>    
    );
}

export default page3;