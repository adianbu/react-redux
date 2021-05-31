import React from 'react'
import {buyCake} from '../redux';
import {useDispatch,useSelector} from 'react-redux';

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Cakes={numOfCakes}</h1>
            <button onClick={()=>dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}

export default HooksCakeContainer
