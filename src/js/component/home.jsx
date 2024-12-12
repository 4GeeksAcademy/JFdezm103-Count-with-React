import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component



const Home = (props) => {
return (
<div className="counter">
	<div className="row bg-dark text-center text-white mt-4 ">
		<div className="col p-2 mx-3 ms-5">
			<i className="fa-regular fa-clock" style={{color: "white"}}></i>
		</div>
   		<div className="col p-2 mx-3">
     	 	{props.num6}
   		</div>
    	<div className="col p-2 mx-3">
			{props.num5}
    	</div>
    	<div className="col p-2 mx-3">
			{props.num4}
    	</div>
		<div className="col p-2 mx-3">
			{props.num3}
   		</div>
    	<div className="col p-2 mx-3">
			{props.num2}
    	</div>
    	<div className="col p-2 ms-3 me-5">
			{props.num1}
    	</div>
  </div>
</div>
);		
};

export default Home;
