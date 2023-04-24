import { useState, useEffect, useMemo } from "react"
import { useQuery } from "react-query"
import { GetFile } from "../api/Api"
import { Modal, Button } from "react-bootstrap"
import Table from "./Table"

export default function ModalFile({ name, show, toggleModal }) {
	
	const [tableData, setTableData] = useState(null)
	const columns = useMemo(
		() => [
			{
				Header: 'File Name',
				accessor: 'file',
			},
			{
				Header: 'Text',
				accessor: 'text',
			},
			{
				Header: 'Number',
				accessor: 'number',
			},
			{
				Header: 'Hex',
				accessor: 'hex',
			}
		],
		[]
	)

	let { data: apiResponse } = useQuery(
		'GetFileData',
		async () =>
			await GetFile(name),
		{
			enabled: show,
			refetchOnMount: true
		}
	);

	useEffect(() => {
		if (apiResponse) {
			setTableData(apiResponse)
		}
	}, [apiResponse]);
	return (
		<Modal show={show} onHide={toggleModal} size="lg">
			<Modal.Header closeButton>
				<Modal.Title>{name} details</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{tableData &&
					<Table
						columns={columns}
						data={tableData}
					/>
				}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={toggleModal}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	)
}