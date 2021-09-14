export const addList=(item)=>{
    return{
        type:"ADD_LIST",
        payload:item,
    };
};

const deleteList=(id)=>{
    return{
        type:"DELETE_LIST",
        index:id,
    };
};

export default deleteList;