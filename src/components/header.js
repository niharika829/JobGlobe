import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers,faEnvelope,faUserCircle } from '@fortawesome/free-solid-svg-icons'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

import logo from './images/logo.JPG';

import  './header.css';
class Header extends Component{
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
  render(){
	  
		    var container_style={
			position:'absolute',
			top:'30%',
			
			
    }
	var container_image={
		borderRadius: '2% 40%'
	}
    return(
	<div>
	 <div><span className="text_transformation" onClick={this.shootopen}>&#9776;</span> jobglobe 
	
		<span  style={{float:'right'}}>
		<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic" >
  <FontAwesomeIcon icon={faUserCircle } style={{fontSize:'100%'}}/>
  {this.state.name}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">log out</Dropdown.Item>

      </Dropdown.Menu>
</Dropdown>
</span>
<FontAwesomeIcon icon={faEnvelope} style={{float:'right',fontSize:'200%'}}/>
		<FontAwesomeIcon icon={faUsers} style={{float:'right',fontSize:'200%'}}/>
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
                                                          <a className="text_transformation"href="html/top_rated_movies.html">helpdesk</a>
														  <a className="text_transformation"href="html/top_rated_movies.html">feedback</a>
                                                          <a className="text_transformation"href="html/upcoming_movies.html">tutorial</a>
                                                    </div>
                                                    <div className="col-md-3" ></div>
                                          </div>
                                  </div>
                          </div>
	 
	 
						
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
export default Header;
