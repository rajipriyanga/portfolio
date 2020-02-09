import React, { Component } from 'react';
import {PROJECTS} from './data/projects';


class Project extends Component{
	render(){
		const { title,image} = this.props.project;
		return(
			<div style={{display: 'inline-block', width:300, margin: 10}}>
				<h3> {title}</h3>
				<img src ={image} style={{width:200,height:200}}/>
			</div> 
		)
	}
}
class Projects extends Component{
 render(){
   return(
   		<div> 
	   		<h2>Highlighted Projects</h2>
	   		 <div>
	   		 	
	   		 		{PROJECTS.map(PROJECT => {
	   		 			return(
	   		 				<Project key={PROJECT.id} project={PROJECT} />
	   		 			);
	   		 		})}
	   		 	
	   		 </div>
   		</div>
   	)
 }
}
export default Projects;