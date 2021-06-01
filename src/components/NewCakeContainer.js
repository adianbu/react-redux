import React,{useState} from 'react'
import {buyCake} from '../redux';
import {connect} from 'react-redux';

const NewCakeContainer = (props) => {
    const [number, setNumber] = useState(1);

    return (
        <div>
        <h1>Cakes={props.numOfCakes}</h1>
        <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}/>
            <button onClick={() =>props.buyCake(number)}>Buy {number} cakes</button>
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
        buyCake: number => dispatch(buyCake(number)) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (NewCakeContainer)
