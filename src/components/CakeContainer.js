import React from 'react'
import {buyCake} from '../redux';
import {connect} from 'react-redux';

const CakeContainer = (props) => {
    return (
        <div>
        <h1>Cakes={props.numOfCakes}</h1>
            <button onClick={props.buyCake}>Buy cake</button>
        </div>
    )
}

//map state and dispacth so that it is dispatched to the store through connect
const mapStateToProps= state =>{
    return {
        numOfCakes: state.cake.numOfCakes //.cake refers to what key we have given in root reducer
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyCake: () => dispatch(buyCake()) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer)
