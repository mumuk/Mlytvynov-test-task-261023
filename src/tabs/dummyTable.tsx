import React from 'react'

const DummyTable: React.FC = () => (
  <div className="container mt-5">
    <table className="table  table-bordered table-hover">
      <thead>
      <tr className='text-center'>
        <th scope="col">Dummy</th>
        <th scope="col">Table</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Row 1</td>
        <td>Data 1</td>
      </tr>
      <tr>
        <td>Row 2</td>
        <td>Data 2</td>
      </tr>
      </tbody>
    </table>
  </div>
)

export default DummyTable
