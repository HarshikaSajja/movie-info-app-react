import { Constants } from './types';

export interface ILoader {
    type: typeof Constants.SET_LOADER,
    loading: boolean
}

export const enableLoader:Function = (status:boolean):ILoader => {
    return {
        type: Constants.SET_LOADER,
        loading: status
    }
};