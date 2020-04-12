import React from 'react';
import axios from 'axios';
import Table1 from './Table1';
import Table2 from './Table2';

class TableParent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : [],
            offset: 5,
            refHeight: []
        }
    }
    componentDidMount() {
        let offset = this.state.offset;
        this.callingApi(offset)
    }

    handleClick = () => {
        this.callingApi(this.state.offset);
    }

    callingApi = (offset) => {
        //let data = [...this.state.data];
       // console.log('data::',data);
        axios.get(`https://api.github.com/users?since=${offset}&per_page=100`)
        .then(response => {
          console.log('dtta::',response.data)
          this.setState({data: response.data.slice(0,10),offset: offset+1})
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="test-div">
                { this.state.data && 
                <Table1 data={this.state.data} 
                /> 
                }
                {
                    this.state.data && <Table2 data={this.state.data} elemHeight={this.state.rowId}/>
                }
                <button className="btn" onClick={()=> this.handleClick()}>Click me for next</button>
            </div>

        )
    }

}


export default TableParent;


