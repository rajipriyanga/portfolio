import React, { Component } from 'react';
import './App.css';
import Projects from './Projects';
import SocialProfiles from  './SocialProfiles'
import profile from './assets/raji_photo.jpg';
class App extends Component{

 state = {displayBio: false};
 // constructor(){
 // 	super();
 // 	this.state = {displayBio: false};

 // 	this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
 	
 // }



 toggleDisplayBio = () => {
 	this.setState({displayBio: !this.state.displayBio});
 }
 render = () => {


 	return(

 		<div> 
 			<img src={profile} className='profile' />
 			<p> Hello!</p>
 			<p> My name is Raji Priyanga, Ruby on Rails developer with 5 years of experience in Requirements Analysis, Design, Development, Implementation, Production using Ruby on Rails and other Web Application frameworks.</p>
 			{
 				this.state.displayBio ? ( 
			 		<div> 
			 			<ul>
				 		    <li> Expertise in development of web applications using Ruby, JavaScript, JQuery, HTML, CSS and AJAX.</li>
						    <li> Experience in Agile Development, Git Hub, Amazon S3 , Amazon EC2, Amazon AWS .</li>
						    <li> Expertise in MySQL, SQLite3, PostgreSQL, and Oracle including SQL or PL/SQL, Stored Procedures.</li>
							<li> Experience with Application Servers and Web Servers such as  WEBrick and Apache Tomcat</li>

				 			<div>
				 				<button onClick={this.toggleDisplayBio}>show Less </button>
				 			</div>
			 			</ul>
			 		</div>
			 	) : (<div> <button onClick={this.toggleDisplayBio}>Read More </button></div>)
 			}
 			<hr />
 			<Projects/>
 			<hr/>
 			<SocialProfiles />
 		</div>

 		
 	)
 }
}

export default App;