import {createReducer,on, Action} from '@ngrx/store';
import { addmsg, AddMessageOnly, AddToken, AddPatientInfo } from '../store/msg.actions';
import { msgtype } from '../msgtype';
import { AppState } from './appstate';

const initialState :AppState={
    msg:[  {
             body:'Waiting......',
             icon: '',
             title :'Waiting title'
           }
        ],

  token:'token',
  loggedIn:false,
  hastoken:false,
  id:'',
  passcode:''
}




// export const msgReducers= createReducer< msgtype[]> (initialState,
//     on(addmsg ,(state,action)=> state.concat({
//          body:action.body,
//         icon: action.icon,
//         title :action.title,

//         })
//       )

//     );

    export const msgReducers= createReducer< AppState> (initialState,
        on(addmsg ,(state,action)=>
        (
            {...state,   body:action.body,title:action.title,icon:action.icon  } )
        )  

        
    ,
    on(AddToken ,(state,action)=>
    (
        {...state,   token:action.thetoken,hastoken:true  } )
    )  ,
    on(AddPatientInfo ,(state,action)=>
    (
        {...state,   id:action.patientid,passcode:action.passcode,loggedIn:true  } )
    )  ,
    on(AddMessageOnly ,(state,action)=>
                        
        // ({...state,msg:[...state.msg.concat({
        //     body:'action.msg.body',title:'action.msg.title',icon:'action.msg.icon' 
        //   })],token:'newtoken7'})
        ({...state,msg:state.msg.concat(action.msg),token:'newtoken7'})
       )
       );
    



    // export function reducer(state: msgtype | undefined, action:Action) {
    //     console.log("Reducer called")
    //     return createReducer(state, action);
    //   }

