var study = function (state = {
    user: null
}, action) {
    switch (action.type) {
        case "LOGIN": {
            console.log("login started")
            state = { ...state }
            state["isloggedin"] = true
            state["user"] = action.payload
            return state
        }
        case "LOGOUT": {
            state = { ...state }
            localStorage.clear()
            delete state["isloggedin"]
            delete state["user"]
            return state
        }
        case "CHECK_USER":{
            //console.log("Here we have to write logic for login")
            state = {...state}
            state["isloggedin"] =true
            state["user"]=action.payload
            return state
        }
        case "UNIVERSITY":{
            //console.log("Here we have to write logic for login")
            state = {...state}
            state["isUni"] =true
            state["university"]=action.payload
            return state
        }
        case "SCHOLERSHIP":{
            //console.log("Here we have to write logic for login")
            state = {...state}
            state["isscholer"] =true
            state["scholership"]=action.payload
            return state
        }
        default: return state


    }
}
export default study