const CHANGE_THEME = "hw12/themeReducer/CHANGE_THEME"

const initState = {
    theme: ""
};

type changeThemeCType = ReturnType<typeof changeThemeC>

export const themeReducer = (state = initState, action: changeThemeCType): any => { // fix any
    switch (action.type) {
        case CHANGE_THEME: {
            return {
                ...state,
                theme: action.value
            };
        }
        default: return state;
    }
};

export const changeThemeC = (value: string): any => ({
    type: CHANGE_THEME,
    value
} as const); // fix any