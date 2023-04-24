
import { useEffect, useMemo, useState } from "react"
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { GetFileList } from '../api/Api';
import { useQuery } from "react-query"
import Table from '../components/Table';
import ModalFile from "../components/ModalFile";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

	const [tableData, setTableData] = useState(null)
	const [showModal, setShowModal] = useState(false)
	const [fileName, setFileName] = useState(null)

	let { data: apiResponse } = useQuery(
		'GetData',
		async () =>
			await GetFileList(),
		{
			enabled: true
		}
	);

	useEffect(() => {
		if (apiResponse) {
			setTableData(apiResponse)
		}
	}, [apiResponse]);

	const toggleModal = () => setShowModal(false)

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
			},
			{
				Header: 'Detalle',
				Cell: ({ cell }) => (
					<Button value={cell.row.values.name} variant="primary" onClick={() => {
						setFileName(cell.row.values.file)
						setShowModal(true)
					}}>
						Ver
					</Button>
				)
			}
		],
		[]
	)

	return (
		<Container>
			<Row>
				<Col>
					<Card>
						<Card.Header>
							File List
						</Card.Header>
						<Card.Body>
							{tableData &&
								<Table
									columns={columns}
									data={tableData}
								/>
							}
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<ModalFile
				name={fileName}
				show={showModal}
				toggleModal={toggleModal}
				columns={columns}
			/>
		</Container>

	)
}

export default App
