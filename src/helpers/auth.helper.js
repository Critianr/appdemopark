const key = 'token'

function setToken(token){
    localStorage.setItem(key, token)
    
}
function getToken(){
    return localStorage.getItem(key)
}
function deleteToken(){
    localStorage.removeItem(key)
}
module.exports = {setToken, getToken, deleteToken}