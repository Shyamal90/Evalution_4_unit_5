const initialState = {
    searchResult : []
};

export const SearchReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case "GET_DATA": 
                       let data = action.payload;
                    //    console.log(data);
                       return{
                        ...state,
                        searchResult:[
                            ...state.searchResult,
                            data
                        ]
                       
                       }

        default: return state;
    }
}