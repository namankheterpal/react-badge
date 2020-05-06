import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Badge = ({count, max=Infinity}) => {
    return (<div style={{position:"relative"}}> <ReactCSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={150}> 
            <div key={count} className="badge" style={{position:"absolute",backgroundColor:"red", padding:"5px",borderRadius:"10px"}}>
                {max<count? max +'+': count}
            </div>                 
        </ReactCSSTransitionGroup>
        </div>
       );
}
 
export default Badge;