import { useReducer, useState } from "react"

var initialState = { count: 0 };
function reducer(state, action) {
        switch (action.type) {
            case 'like':
                return { count: state.count + 1 }
            case 'dislike':
                return { count: state.count - 1 }

        }
    }


export default function ReducerDemo() {
 
    const [state,dispatch]=useReducer(reducer,initialState)
    function handleLikeClick(){
        dispatch({type:'like'});
    }
     function handleDislikeClick(){
        dispatch({type:'dislike'});
    }
    return (
        <div className="container-fluid">
            <h2>Likes Counter --{state.count}</h2>
            <button onClick={handleLikeClick}>Like</button>
            <button onClick={handleDislikeClick}>Dislike</button>
        </div>
    )
}