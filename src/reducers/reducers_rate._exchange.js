import { GET_RATE_EXCHANGE } from '../actions';

const initialState = {
    rateExchangeList:[]
}

export default (oldRateExchangeReducer = initialState, action) => {
    switch(action.type) {
        case  GET_RATE_EXCHANGE :
            return {
                ...oldRateExchangeReducer,
                rateExchangeList :[
                    action.payload,
                    ...oldRateExchangeReducer.rateExchangeList
                ]
            } 
        break;
    }
    return oldRateExchangeReducer
}