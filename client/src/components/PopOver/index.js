import React from 'react';
import "./style.css";
import { Popover, PopoverBody } from 'reactstrap';

export default class PopOver extends React.Component {
	
// gather other componets
//import otherComponent from "../otherComponent";

	render() {
		return(
			<div>
				<Popover placement="bottom" isOpen={this.props.popoverOpen} target="Popover1">
					<PopoverBody><strong>The date and time you have chosen is conflicting with a previously scheduled appointment</strong></PopoverBody>
				</Popover>
			</div>
		);
	}
}
