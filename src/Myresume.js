import React, { Component } from 'react';

class Myresume extends Component{
	render(){
		return(
			<section style={{height: 200,padding: 5}} id = "resume" class="bg-dark resume text-center" >
		      <div class="" style={{padding: 35}}>
		        <div class="h2 text-white"> See my resume for more details </div>
		        <button class="btn btn-danger"> My Resume</button> 
		      </div>
		      
		    </section>
		)
	}
}

export default Myresume;