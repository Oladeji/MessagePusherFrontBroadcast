import {createAction,props}  from '@ngrx/store'
import { msgtype } from '../msgtype';
import { AppState } from './appstate';

export const addmsg = createAction('[msgtype] Add Message1', props<{
    body:string;    icon: string;    title :string;    }>());


export const AddMessageOnly = createAction('[msgtype] Add AddMessageOnly', props<{   msg:msgtype   } >());
       
export const AddToken = createAction('[msgtype] Add AddBrowserToken', props< {  thetoken:string   } >());

export const AddPatientInfo = createAction('[msgtype] Add AddPatientId', props<{  patientid:string, passcode:string  } >());

    