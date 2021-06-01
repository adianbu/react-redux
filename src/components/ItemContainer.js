import React from 'react'
import {buyCake,buyIceCream} from '../redux';
import {connect} from 'react-redux';

const ItemContainer = (props) => {
    return (
        <div>
        <h1>Cakes={props.items}</h1>
            <button onClick={props.buyItem}>Buy cake</button>
        </div>
    )
}

//map state and dispacth so that it is dispatched to the store through connect


const mapStateToProps= (state,ownProps) =>{


    //if props is cake , it is printed otherwise its iceCream
    return {
        items: ownProps.cake?
            state.cake.numOfCakes:           //.cake refers to what key we have given in root reducer
            state.iceCream.numOfIceCreams 
    }
}

const mapDispatchToProps = (dispatch,ownProps) =>{
    return{
        buyItem:  ownProps.cake? 
            () => dispatch(buyCake()) 
           :() => dispatch(buyIceCream())
    }
}

//for only dispatch function in connect first argument must be null

export default connect(mapStateToProps,mapDispatchToProps) (ItemContainer) 
