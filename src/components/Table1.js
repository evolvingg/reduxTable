import React from 'react';
import TableRow from './TableRow';

class Table1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            compHeight : []
        }
    }

    // setRef = (elemHeight, index) => {
    //     // let {compHeight} = this.state;
    //     // compHeight[index] = elemHeight;
    //     // this.setState({compHeight}, () => {
    //     //     console.log('components:::::::',this.state.compHeight);
    //     //     this.props.setRef(this.state.compHeight);
    //     // })
    //      let compHeight = this.state.compHeight;
    //      compHeight.push(elemHeight);
    //      this.setState({ compHeight: [...compHeight] }, () => {
    //          console.log('components:::::::',this.state.compHeight);
    //          this.props.setRef(this.state.compHeight);  
    //      });
    // }

    render() {
        return (
            <div className="tab-container">
                <div className="tab-header">
                    <div>profile</div>
                    <div>login</div>
                    <div>site_admin</div>
                    <div>node_id</div>
                </div>
                <div className="tab-body">
                    {this.props.data && this.props.data.map((row,index) => {
                        console.log('in row::',row,index)
                        return (
                            <TableRow rowData = {row}
                                        key={index}
                                        rowId = {index}
                                        setRef = {this.setRef}
                                        />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Table1;