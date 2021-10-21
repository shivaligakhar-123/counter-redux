import React from 'react';
import {connect} from 'react-redux';
import { incrementCount } from '../redux/counterActions';


function Counter (props){
    return(
        <div>
            <h2>My Count - {props.number} </h2>
            <button onClick={props.incrementCount}>Increment Count</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        number:state.num
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        incrementCount: () => dispatch(incrementCount())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)