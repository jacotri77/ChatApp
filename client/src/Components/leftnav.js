import React, { Component } from 'react'
import '../index.css'
import {Link} from 'react-router-dom'

class LeftNav extends Component {

	render(){
		return(
			<div id="channels">
				<ul>
					<li><Link to="#" />Brew House</li>
					<li><Link to="#" />Coffee House</li>
					<li><Link to="#" />All Things Moto</li>
				</ul>
			</div>
		)
	}

}
export default LeftNav