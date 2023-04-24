import { useTable } from 'react-table'
import { Table as BootstrapTable } from 'react-bootstrap'

export default function Table({ columns, data }) {
	const tableInstance = useTable({ columns, data })

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = tableInstance

	return (

		<BootstrapTable striped bordered hover responsive {...getTableProps()}>
			<thead>
				{
					headerGroups.map((headerGroup, index) => (
						<tr key={index} {...headerGroup.getHeaderGroupProps()}>
							{
								headerGroup.headers.map((column, indexColumn) => (
									<th key={indexColumn} {...column.getHeaderProps()}>
										{
											column.render('Header')}
									</th>
								))}
						</tr>
					))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{
					rows.map((row, indexRow) => {
						prepareRow(row)
						return (
							<tr key={indexRow} {...row.getRowProps()}>
								{
									row.cells.map((cell, indexCelld) => {
										return (
											<td key={indexCelld} {...cell.getCellProps()}>
												{
													cell.render('Cell')}
											</td>
										)
									})}
							</tr>
						)
					})}
			</tbody>
		</BootstrapTable>
	)
}