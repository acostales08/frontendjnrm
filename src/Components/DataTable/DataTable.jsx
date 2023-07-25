import React from 'react'
import DataTable from 'react-data-table-component'
import ControlledCard from '../Card/Card'

const ControlledDataTable = (props) => {

    const {columns, data, loading,title, pagination } = props
  return (
    <ControlledCard
      children={
        <div className='p-10'>
          <DataTable
              title={title}
              columns={columns}
              data={data}
              // selectableRows
              pagination={pagination}
              fixedHeader
              >
          </DataTable>           
        </div>
       
      }
    />
  )
}

export default ControlledDataTable