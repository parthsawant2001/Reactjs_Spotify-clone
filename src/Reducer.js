export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    items: null,
    // token: "BQAj-NBX3fWmzNavx0gU47EvT2NCXB2C4j7iiLL-_99vLPzkA2lXXoBQC1OOCWmLwH6d3GJbXbEcWwALDqUGXzSUbRlgjPacBQ_ctDRXl3ZJg4NZxRMYdiOpCPkYQWb1tRECSyRjejtC-8pyKdgRs2hr9tJLBztI54829V6Q7SJ715JMcZIHWjHlGQL44-_rz44",
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        default:
            return state;
    }
};
export default reducer;