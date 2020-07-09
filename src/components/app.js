import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Jobs from './RecruiterPortal'; 
import Candidate from './addcandidate.js'; 
import Accepted from './accepted.js'; 
import Rejected from './rejected.js';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers,faEnvelope,faUserCircle } from '@fortawesome/free-solid-svg-icons'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Home from './home'; 
import About from './about'; 
import Contact from './contact'; 
import background from './images/background.jpg';
import logo from './images/logo.JPG';
import  './header.css';
class App extends Component { 
constructor(){
   super();
   this.shootopen = this.shootopen.bind(this);
	   this.shootclose = this.shootclose.bind(this);
 }
 
 state = {
	 name:'root',
	 width:true,
     showStore:false,
		logo: "./images/logo.jpeg"
    };
render() { 
		    var container_style={
			position:'absolute',
			top:'30%',
			
			
    }
	var container_image={
		borderRadius: '2% 40%'
	}
	return ( 
	<div style={{backgroundColor:'#993d00'}}><Router>
	 <div><span style={{fontSize:'40px'}}className="text_transformation" onClick={this.shootopen}>&#9776;</span>  <img src={logo} style={container_image}/>
	
		<span  style={{float:'right'}}>
		<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic" >
  <FontAwesomeIcon icon={faUserCircle } style={{fontSize:'100%'}}/>
  {this.state.name}
  </Dropdown.Toggle>

  <Dropdown.Menu>
   
		
		<div className="App"> 
			
				 <Dropdown.Item><Link to="/" class="btn btn-lg btn-success"style={{width:'100%'}}>live jobs</Link> </Dropdown.Item>
			
				 <Dropdown.Item><Link to="/candidate" class="btn btn-lg btn-success" style={{width:'100%'}}>add candidates</Link> </Dropdown.Item>
			
				 <Dropdown.Item><Link to="/accepted" class="btn btn-lg btn-success" style={{width:'100%'}}>Accepted jobs</Link> </Dropdown.Item>
			
				 <Dropdown.Item><Link to="/Rejected" class="btn btn-lg btn-success" style={{width:'100%'}}>Rejected JOBS</Link> </Dropdown.Item>
			
			
		</div> 
	
      </Dropdown.Menu>
</Dropdown>
</span>
<FontAwesomeIcon icon={faEnvelope} style={{float:'right',fontSize:'250%',marginRight:'30px'}}/>
		<FontAwesomeIcon icon={faUsers} style={{float:'right',fontSize:'250%',marginRight:'30px'}}/>
	 </div>
	 <div id="mySidenav" className="sidenav" style={{display: this.state.showStore ? 'block' : 'none', width:this.state.width?'0%':'100%' }}>
                                  <a  className="closebtn" onClick={this.shootclose} >&times;</a>
                                  <div className="container" style={container_style}>
                                          <div className="row">
                                                    <div className="col-md-3" ></div>
                                                    <div className="col-md-3" >
                                                          <img src={logo} style={container_image}/>
                                                    </div>
                                                    <div className="vertical" ></div>
                                                    <div className="col-md-3" >
															<Link to="/home" onClick={this.shootclose}>helpdesk</Link> 
															<Link to="/about" onClick={this.shootclose}>feedback</Link> 
															<Link to="/contact" onClick={this.shootclose}>tutorial</Link> 
                                                         
                                                    </div>
                                                    <div className="col-md-3" ></div>
                                          </div>
                                  </div>
                          </div>
	 
	 			
	<Switch> 
			<Route exact path='/' component={Jobs}></Route> 
			<Route exact path='/candidate' component={Candidate}></Route> 
			<Route exact path='/accepted' component={Accepted}></Route> 
			<Route exact path='/Rejected' component={Rejected}></Route> 
			<Route exact path='/home' component={Home}></Route> 
			<Route exact path='/about' component={About}></Route> 
			<Route exact path='/contact' component={Contact}></Route> 
			</Switch> 
	</Router>
    </div>
	
	
	
); 
}
shootopen(){
this.setState({ showStore: true,width:false })
}
shootclose(){
	this.setState({ showStore: false ,width:true})
	
} 
} 

export default App; 
