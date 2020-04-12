

const initialState = {};


export const tableReducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case 'ADD_ROW_HEIGHT':
                const {data: {rowId, height}} = action;
                if(rowId) {
                    // return {
                    //     data: {
                    //         rowId,
                    //         [rowId]: height
                    //     }
                    // }
                    return ({
                        ...state,
                        [rowId]: height,
                    })
                }
                
        default: 
            return state;
    }
}

export default tableReducer;