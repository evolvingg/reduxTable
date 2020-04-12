import React from 'react';
import TableRow2 from './TableRow2';

export default class Table2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {elemHeight} = this.props;
        return (
            <div className="tab-container-2">
                <div className="tab-header">
                    <div>html url</div>
                </div>
                <div className="tab-body">
                    {this.props.data && this.props.data.map((row,index) => {
                        return (
                            <TableRow2 rowData = {row}
                                        key={index}
                                        
                                        />
                        )
                    })}
                </div>
            </div>
        )
    }
}