
import { useEffect, useMemo, useState } from "react"
import { Container, Row, Col, Card } from 'react-bootstrap'
import { GetFileList } from '../api/Api';
import { useQuery } from "react-query"
import Table from '../components/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

	const [tableData, setTableData] = useState(null)

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
		</Container>

	)
}

export default App
