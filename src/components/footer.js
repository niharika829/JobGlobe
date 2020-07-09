import React ,{Component} from 'react';

class Footer extends Component{
	
  render(){
	    var x={
			backgroundColor: 'black',
			height:"20%",
			position: 'relative'
			
    }
	
    return(
    <div id="foot" style={ x }>
   <br/>
	 <p style={{fontSize: '30px',textAlign:'center',color:'white'}}>&copy; 2020 jobglobe</p>
	<br/>
    </div>
    );
}
}
export default Footer;


