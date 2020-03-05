// import {
//   FETCHING_NAMES,
//   NAMES_FETCHED,
//   FETCHING_ERROR 
// } from '../Actions/PlaceA';

// const initialState = {
//   names:[],
//   isFetching:false,
//   error:null
// }

// export const namesR  = (state = initialState, action) => {
//   switch(action.type){
//     case FETCHING_NAMES:
//       return {
//         ...state,
//         isFetching:true,
//       }
//     case NAMES_FETCHED:
//       return{
//         ...state,
//         names:action.payload,
//         isFetching:false
//       }
//     case FETCHING_ERROR:
//       return{
//         ...state,
//         error:action.payload
//       }
//     default:
//       return state;
//   }
// }