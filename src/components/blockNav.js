import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAfrica } from '@fortawesome/free-solid-svg-icons'


class BlockNav extends Component{

  render(){
	  
	
    return(
	<div>

    <div className="container">
   
			 <div className="row" style={{position:'fixed',zIndex:'99',backgroundColor:'black',color:'white',width:'15%'}}>
			 navigation
					 <br/><br/>
					 
					  <div className="col-md-12"><FontAwesomeIcon icon={faGlobeAfrica} style={{fontSize:'200%'}}/>dashboard</div> 
					   <hr className="col-md-2" style={{border:'2px groove black',width:'20%',marginLeft:'0'}}/>
					  <div className="col-md-12"><FontAwesomeIcon icon={faGlobeAfrica} style={{fontSize:'200%'}}/>candidates</div>
						 <hr className="col-md-2" style={{border:'2px groove black',width:'20%',marginLeft:'0'}}/>
					  <div className="col-md-12"><FontAwesomeIcon icon={faGlobeAfrica} style={{fontSize:'200%'}}/>jobs</div> 
					   <hr className="col-md-2" style={{border:'2px groove black',width:'20%',marginLeft:'0'}}/>
					  <div className="col-md-12"><FontAwesomeIcon icon={faGlobeAfrica} style={{fontSize:'200%'}}/>rejected</div>
					   <hr className="col-md-2" style={{border:'2px groove black',width:'20%',marginLeft:'0'}}/>
					  <div className="col-md-12" > <FontAwesomeIcon icon={faGlobeAfrica} style={{fontSize:'200%'}}/>accepted</div>
				 </div>
				  
		</div>
	</div>
    );
}

}
export default BlockNav;


