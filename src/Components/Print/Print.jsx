import React from 'react'
import ControlledDataTable from '../DataTable/DataTable';

export const ComponentToPrint = React.forwardRef((props, ref) => {

    const {cart, totalAmount} = props;

    const NumberedCell = ({ rowIndex }) => <div>{rowIndex}</div>;
    
    const columns = [
        {
          name: 'No.',
          selector: (row, index) => <NumberedCell rowIndex={index + 1} />,
          sortable: true,
        },
        {
            name: 'image',
            selector: (row) => (
              <img
                src={`http://127.0.0.1:8000/storage/${row.image}`}
                alt=""
                height={50}
                width={50}
              />
            ),
            sortable: true,
          },
        { 
          name: "name", 
          selector: (row) => row.productname, 
          sortable: true 
        },
        { 
          name: "Qty", 
          selector: (row) => row.quantity, 
          sortable: true 
        },
        { 
          name: "total", 
          selector: (row) => row.totalAmount, 
          sortable: true }
    ]

    return (
      <div ref={ref} className='p-5'>
        <div className="p-5">
            <h3 className="">Total Amount: {totalAmount}</h3>
        </div>
        <ControlledDataTable columns={columns} data={cart}/>
      </div>
    );
  });