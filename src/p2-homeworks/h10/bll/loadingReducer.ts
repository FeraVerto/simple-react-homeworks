const initState = {
    loading: false
};

export type initStateType = {
    loading: boolean
}

export type ActionType = {
    type: "TOGGLE_LOADING",
    loading: boolean
}

export const loadingReducer = (state = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case "TOGGLE_LOADING": {
            return {...state, loading: action.loading};
        }
        default:
            return state;
    }
};

export const loadingAC = (loading: boolean): any => (
    {type: "TOGGLE_LOADING", loading}
); // fix any