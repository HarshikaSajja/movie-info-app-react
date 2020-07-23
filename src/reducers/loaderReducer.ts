import { Constants } from '../actions/types'
import { ILoader } from '../actions/loader'

export interface ILoaderReducer {
    enableLoader: boolean
}

const initialState:ILoaderReducer = {
    enableLoader: false
}

const loaderState = (state:ILoaderReducer = initialState, action:ILoader) => {
    switch(action.type) {
        case Constants.SET_LOADER:
            return {
                enableLoader: action.loading
            }
        default:
            return state
    }
}

export default loaderState;