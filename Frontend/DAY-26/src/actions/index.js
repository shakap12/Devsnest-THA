export const nameChange = (username)=>{
    return {
        type:'cName',
        username
    }
}

export const emailChange =(email)=>{ 
    return {
    type:'cEmail',
    email
}}