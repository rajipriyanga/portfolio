import React, { Component } from 'react';
import {PROJECTS} from './data/projects';


class Project extends Component{
	render(){
		const { title,description,image,link } = this.props.project;
		return(
			<div class="card" style={{width:400}}>
	          <img class="card-img-top project-img" src={image} alt="Card image" />
	          <div class="card-body">
	            <h4 class="card-title">{title}</h4>
	            <p class="card-text">{description}</p>
	            <a href={link} class="btn btn-primary">See Project</a>
	          </div>
	        </div>
		)
	}
}
class Projects extends Component{
 render(){
   return(

	   		<section id= "projects" class="projects text-center" style={{padding: 5}} >
		      	<div class="h2" style={{padding: 20}}> Projects </div>
		      	<div class="card-columns">
		   		 	
		   		 		{PROJECTS.map(PROJECT => {
		   		 			return(
		   		 				<Project key={PROJECT.id} project={PROJECT} />
		   		 			);
		   		 		})}	   		 	
		   		 </div>
	   		</section>

   	)
 }
}
export default Projects;