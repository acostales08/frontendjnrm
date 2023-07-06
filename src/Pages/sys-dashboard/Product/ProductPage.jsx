import React from 'react'
import { ControlledCard } from '../../../Components'
import DataTable from 'react-data-table-component'


const ProductPage = () => {
    return (
        <section className="h-[897px] w-auto p-8 bg-[#f8f8f8] overflow-scroll">
            <ControlledCard>
              <DataTable
                title="Product's List"
                // columns={columns}
                // data={data}
                selectableRows
                pagination
                fixedHeader
                // progressPending={loading}
                // progressComponent={<h2 className='text-gray-900'>loading please wait ...</h2>}
                // expandableRowDisabled={rowDisable}
                >
              </DataTable>
            </ControlledCard>
        </section>
      )
}

export default ProductPage