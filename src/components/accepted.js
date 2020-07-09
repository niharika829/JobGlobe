import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import FooterFormat from  './footer.js';
import BlockFilter from  './blockfilter.js';
import Modal from "react-animated-modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase,faAddressCard,faCalendar,faUser,faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'
import company from './images/company.JPG';
import back from './images/back.jpg';
import Jumbotron from 'react-bootstrap/Jumbotron';
class Accepted extends Component{

	    
  state = {
	  
	timingList: [
        {
            id: 1,
            title: 'front end developer',
            company_name:'company A',
			dept: 'web development',
			company_location:'chandigarh',
			number:'123456',
			exp:"7-10 yrs",
			job_type:"full time",
			candidate:'3 candidates',
			stripend:"23-25 lakhs"
        },
        {
            id: 2,
            title:'back  end developer',
             company_name:'company B',
			dept: 'web development',
			company_location:'noida',
				number:'345678',
				exp:"7-10 yrs",job_type:"full time",
				candidate:'3 candidates',
			stripend:"23-25 lakhs"
        },
        {
            id: 3,
                      title:'PHP developer',
            company_name:'company C',
			dept: 'web development',
			company_location:'bangaluru',
				number:'678901',
				exp:"7-10 yrs",
				job_type:"full time",
				candidate:'3 candidates',
			stripend:"23-25 lakhs"
        },
		{
            id: 4,
                        title:'laravel developer',
             company_name:'company D',
			dept: 'web development',
			company_location:'pune',
				number:'456321',
				exp:"7-10 yrs",
				job_type:"full time",
				candidate:'3 candidates',
			stripend:"23-25 lakhs"
        }
        
		
	]
};


  render() {
	  var container_image={
		borderRadius: '2% 40%',
		border:'2px solid black'
	}
      return (
          <div className="main-container">
		  	
				
				<div className="container">
				<div className="row">
				
				<div className="col-md-10">
              <span className="timing-list-container" style={{position:'relative',marginTop:'30%'}}>
                  {
                      this.state.timingList.map((timing,i) => {
                          return <Jumbotron style={{backgroundImage: `url(${back})`,backgroundRepeat: 'no-repeat',backgroundAttachment: 'fixed',backgroundSize: '100% 100%'}}><span key={timing.id}>
						  <div className="row">
						  <div className="col-md-4"><img src={company} style={container_image}/></div>
						  <div className="col-md-8">
									   <span className="row">
											<div className="col-md-6"> <FontAwesomeIcon icon={faAddressCard} style={{fontSize:'300%'}}/> {timing.number}
											</div>
											<div className="col-md-6"> <FontAwesomeIcon icon={faBriefcase} style={{fontSize:'300%'}}/> {timing.exp}
											</div>
										</span>
										<span className="row">
											<div className="col-md-6"><FontAwesomeIcon icon={faCalendar} style={{fontSize:'300%'}}/>{timing.job_type}</div>
										</span>
										<hr style={{border:'2px groove black',width:'60%'}}/>  
										<span className="row">
											<div className="col-md-6"> <FontAwesomeIcon icon={faUser} style={{fontSize:'300%'}}/> {timing.candidate}</div>
											<div className="col-md-6"> <FontAwesomeIcon icon={faMoneyBillAlt} style={{fontSize:'300%'}}/> {timing.stripend}</div>
											
										</span><br/>
										 <button style={{width:'30%'}} type="button" class="btn btn-lg btn-success" disabled>accepted</button>
									
						  </div>
						  </div>
						    
						   
								
                          </span></Jumbotron>
						  
                      })
                  }
              </span>
			  </div>
			  <div className="col-md-2" style={{backgroundColor:'#111'}} ><BlockFilter /></div>
			  </div>
			  </div>
			  
			  
			  
			  <br/><br/> <br/>
			  <FooterFormat/>
          </div>
      );
  }

 }
export default Accepted

