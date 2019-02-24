import React from 'react';
import Cell from './cell.js'
import AvatarAlgorithm from '../algorithms/algorithm.js';

class CellGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mappedNumber: AvatarAlgorithm.getUniqueNumber(this.props.username, 5)
        };
    }

    createRows(size, j) {
        let rows = [];
        for (let i=1; i<size+1; i++) {
            rows.push(<Cell  key={i} fillColor={ this.state.mappedNumber%(i+j)}/>);
        }

        return(
            <div className="board-col">
                {rows}
            </div>
        );
    }

    createColumns (size) {
        let columns = [];
        for (let i=1; i<size+1; i++) {
            columns.push(this.createRows(size, i));
        }
        return columns;
    }

    render() {
      return (
        <div className="grid-container">
            {this.createColumns(5)}
        </div>
      );
    }
  }

  export default CellGrid;