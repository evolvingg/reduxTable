import React from 'react';
import {connect} from 'react-redux';

class TableRow2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {rowData,rowHeight} = this.props;
        return (
            <div className="row" style={{height:rowHeight}}>
                <div>{rowData.html_url}</div>
            </div>
        )
    }
}

export default connect((state, ownProps)=>{
    const { rowId } = ownProps;
    const { tableReducer } = state;
    const map = new Map([[rowId,tableReducer]]);
    return {
        rowHeight: map.get(rowId)[rowId],
    };
})(TableRow2);