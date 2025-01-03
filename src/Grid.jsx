import { range } from './utils';

const gridStyles = {
  width: '170px',
  height: '130px',
  border: '1px solid grey',
  borderRadius: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontSize: '14px',
};

function Grid({ numRows, numCols }) {
  return (
    <div className="grid">
      {range(numRows).map((rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {range(numCols).map((colIndex) => (
            <div key={colIndex} style={gridStyles}>
              {`(${rowIndex}, ${colIndex})`}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;
