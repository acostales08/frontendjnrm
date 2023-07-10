import React from 'react'
import DataTable from 'react-data-table-component'
import ControlledCard from '../Card/Card'

const ControlledDataTable = (props) => {

    const {columns, data, loading  } = props
  return (
    <ControlledCard>
        <DataTable
            title="Member's List"
            columns={columns}
            data={data}
            selectableRows
            pagination
            fixedHeader
            progressPending={loading}
            progressComponent={<h2 className='text-gray-900'>loading please wait ...</h2>}
            >
        </DataTable>
    </ControlledCard>
  )
}

export default ControlledDataTable