import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Jobs from './RecruiterPortal'; 
import Candidate from './addcandidate.js'; 
import Accepted from './accepted.js'; 
import Rejected from './rejected.js';


class App extends Component { 
render() { 
	return ( 
	<Router> 
		<div className="App"> 
			<ul className="App-header"> 
			<li> 
				<Link to="/jobs">Home</Link> 
			</li> 
			<li> 
				<Link to="/candidate">add candidates</Link> 
			</li> 
			<li> 
				<Link to="/accepted">Accepted jobs</Link> 
			</li> 
			<li> 
				<Link to="/Rejected">Rejected JOBS</Link> 
			</li> 
			</ul> 
			<Switch> 
			<Route exact path='/jobs' component={Jobs}></Route> 
			<Route exact path='/candidate' component={Candidate}></Route> 
			<Route exact path='/accepted' component={Accepted}></Route> 
			<Route exact path='/Rejected' component={Rejected}></Route> 
			</Switch> 
		</div> 
	</Router> 
); 
} 
} 

export default App; 
