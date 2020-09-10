import React, { useState, useEffect } from 'react';
import Header from './HeaderComponent';
import { Input } from 'antd';
import { Button } from 'antd';
import { Card } from 'antd';
import Cardaccount from './CardComponent';

const useFetch = async(url)=>{

const[data,setData]=useState(null);

useEffect(async() => {
	const response = await fetch(url);
	const data = await response.json();
	setData(data);
},[]); 

return { data };
}



function Enter(props)
{
	const { data } = useFetch("https://api.github.com/users/");

	return (
		<div className="container" align="center">
			<Header/>
			<h2>Input the accounts</h2>
			<Input size="large" placeholder="accounts" onSearch={value => console.log(data.login)} />
				<div className="container">
					<Button onClick={() => props.data}>
						Compare	
					</Button>
				</div>

		</div>
	);
}

export default Enter;