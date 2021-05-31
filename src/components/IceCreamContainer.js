import React from 'react'
import {buyIceCream} from '../redux';
import {connect} from 'react-redux';

const iceCreamContainer = (props) => {
    return (
        <div>
        <h1>IceCreams={props.numOfIceCreams}</h1>
            <button onClick={props.buyIceCream}>Buy cake</button>
        </div>
    )
}

const mapStateToProps= state =>{
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyIceCream: () => dispatch(buyIceCream()) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (iceCreamContainer)
