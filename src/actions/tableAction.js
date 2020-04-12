


export const addRowHeight = (rowId, height) => (dispatch) => {
    dispatch({type: 'ADD_ROW_HEIGHT', data: {rowId, height}});
};