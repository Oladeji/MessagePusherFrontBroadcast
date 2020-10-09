import { msgtype } from '../msgtype';

export interface AppState
{
    msg:msgtype[];
    token:string;
    loggedIn:boolean;
    id:string;
    passcode:string;
    hastoken:boolean
}

//Add msg