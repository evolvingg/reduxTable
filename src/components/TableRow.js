import React from 'react';
import {connect} from 'react-redux';
import {addRowHeight} from '../actions/tableAction';

class TableRow extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.handleHeight();
    }

    handleHeight = () => {
        const { addRowHeight, rowId } = this.props;
        let elem = document.getElementById('row-'+this.props.rowId);
        const compHeight = elem && elem.getBoundingClientRect().height;
        addRowHeight(rowId, compHeight);
    }
    componentDidUpdate(prevProps) {
        console.log('prev::',prevProps,this.props)
        if(prevProps.rowData.id !== this.props.rowData.id ) {
            console.log('clalede::',this.props.rowId)
            this.handleHeight();
        }
    }

    render() {
        const {rowData,rowId} = this.props;
        return (
            <div className="row" id={`row-${rowId}`}>
                <div>{rowData.avatar_url} + {'   '+  rowData.events_url+ '   '+ rowData.followers_url + '   '+rowData.following_url }<img src={rowData.avatar_url}/></div>
                <div>{rowData.login}</div>
                <div>{`${rowData.site_admin}`}</div>
                <div>{rowData.node_id}</div>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    console.log('state:::::',state)
    // return {
    //     data: {
    //         // rowId: state.rowId,
    //         // [rowId]: state.height
    //     }
    // }
    const { rowId } = ownProps;
    const { tableReducer } = state;
    const map = new Map([[rowId,tableReducer]]);
    return {
        rowHeight: map.get(rowId)[rowId],
    };
}

export default connect(mapStateToProps, {
    addRowHeight,
})(TableRow);