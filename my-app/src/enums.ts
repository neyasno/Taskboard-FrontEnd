
export enum EApi{
    DEFAULT = "/api" , 

    USERS = DEFAULT + "/users" , 
    
    LOGIN = USERS + "/login" ,
    VERIFICATION = USERS + "/verification" ,
    REGISTRATION = USERS + "/registration" ,

    TASKBOARDS = USERS + "/taskboards"


}

export enum ERoutes{
    DEFAULT = "/" ,
    
    LOGIN = "/verification/login" , 
    REGISTRATION = "/verification/registration" ,

    PROFILE_SETTINGS = "/profile/settings"
}