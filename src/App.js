import React, { Component } from 'react';
import './App.css';
import Projects from './Projects';
import SocialProfiles from  './SocialProfiles'
import profile from './assets/raji_photo.jpg';

import Myresume from  './Myresume'
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
 		 	<section className="aboutme text-center" id="bio" style={{ padding: 5, background: 'mediumspringgreen'}}>
		      <div class="container-fluid" > 
		        <div class="row">        
		            <div class="col-12 col-sm-12x col-lg-3">
		              <img src="https://pbs.twimg.com/profile_images/897497695362744320/f6L5Z2qJ_400x400.jpg" class="rounded-circle" alt="RajiPRiyanga" style={{width:250, height:250}} /> 
		              <div> <strong> Raji Priyanga Ganesan </strong> ,</div>
		              <div class="strong"> Ruby on Rails Developer</div> 
		              	<div class="d-block d-sm-none"> 
		                  Get in touch 
		                  	<div class="social-icons">
				                    <a rel="me" href="mailto:rajipriyangaa91@gmailcom.me" class="button button-icon u-email" title="mail: rajipriyangaa91@gmailcom">
				                    <i class="fa fa-envelope"></i>
				                    </a>

				                    <a rel="me" href="https://in.linkedin.com/in/raji-priyanga-44397658" class="button button-icon" title="linkedin: jtompl">
				                    <i class="fa fa-linkedin-square"></i>
				                    </a>

				                    <a rel="me" href="https://github.com/rajipriyanga" class="button button-icon" title="github: jtomaszewski">
				                    <i class="fa fa-github-square"></i>
				                    </a>


				                    <a rel="me" href="https://twitter.com/prettypriyanga" class="button button-icon" title="twitter: @jtompl">
				                    <i class="fa fa-twitter-square"></i>
				                    </a>
				                </div>
		                </div>
		            </div>
		            <div class="col-12 col-sm-12 col-lg-9">
		              <div className="about-me-desc" > 
		                Ruby on Rails developer with 5 years of experience in Requirements Analysis, Design, Development, Implementation, Production using Ruby on Rails and other Web Application frameworks.
            	 			{
				 				this.state.displayBio ? ( 
							 		<div> 
							 			<ul>
								 		    <li> Expertise in development of web applications using Ruby, JavaScript, JQuery, HTML, CSS and AJAX.</li>
										    <li> Experience in Agile Development, Git Hub, Amazon S3 , Amazon EC2, Amazon AWS .</li>
										    <li> Expertise in MySQL, SQLite3, PostgreSQL, and Oracle including SQL or PL/SQL, Stored Procedures.</li>
											<li> Experience with Application Servers and Web Servers such as  WEBrick and Apache Tomcat</li>

								 			<div>
								 				<button class="btn btn-dark" onClick={this.toggleDisplayBio}>show Less </button>
								 			</div>
							 			</ul>
							 		</div>
							 	) : (<div> <button class="btn btn-dark" onClick={this.toggleDisplayBio}>Read More </button></div>)
				 			}
			                <div class="d-none d-sm-block"> 
			                  Get in touch 
			                  	<div class="social-icons">
				                    <a rel="me" href="mailto:rajipriyangaa91@gmailcom.me" class="button button-icon u-email" title="mail: rajipriyangaa91@gmailcom">
				                    <i class="fa fa-envelope"></i>
				                    </a>

				                    <a rel="me" href="https://in.linkedin.com/in/raji-priyanga-44397658" class="button button-icon" title="linkedin: jtompl">
				                    <i class="fa fa-linkedin-square"></i>
				                    </a>

				                    <a rel="me" href="https://github.com/rajipriyanga" class="button button-icon" title="github: jtomaszewski">
				                    <i class="fa fa-github-square"></i>
				                    </a>


				                    <a rel="me" href="https://twitter.com/prettypriyanga" class="button button-icon" title="twitter: @jtompl">
				                    <i class="fa fa-twitter-square"></i>
				                    </a>
				                </div>
			                </div>
		              </div>
		            </div>

		        </div>
		      </div>
		    </section>
 			<Projects/>
 			
 			<Myresume />
 		</div>

 		
 	)
 }
}

export default App;