
const initialState = {
    todos:[{
        id:1,
        text:'welcome redux'
    }]
};

const TodoReducer = (state=initialState,action)=>{
    return state;
}

export default TodoReducer;