import React, { useState,useEffect } from 'react';
import { Button } from 'antd';
import { Card } from 'antd';
import Enter from './InputComponent';

const useFetch = async(url)=>{

const[data,setData]=useState(null);

useEffect(async() => {
	document.title='Comparison';
	const response = await fetch(url);
	const data = await response.json();
	setData(data);
},[]); 

return { data };
}


function Cardaccount(props){

	const { data } = useFetch("https://api.github.com/users/");
	return(
			<div className="container">
				<div className="border">
				    <Card title="Account" bordered={true} style={{ width: 300 }}>
				      <p>data</p>
				      <p>data</p>
				      <p>data</p>
				    </Card>
				  </div>
			</div>
		)
	
}

export default Cardaccount;