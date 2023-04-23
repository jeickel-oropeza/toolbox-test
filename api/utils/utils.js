const fetch = require('node-fetch')

// Connect to external api and get list of external files
const getExternalFiles = async () => {
	try {
		let response = await fetch('https://echo-serv.tbxnet.com/v1/secret/files', {
			method: 'GET',
			headers: {
				Authorization: 'Bearer aSuperSecretKey'
			}
		})
		response = await response.json()
		return response.files
	} catch (error) {
		console.log(error)
	}
}

// Connect to external api and get data of individual file by name file
const getExternalFile = async (fileName) => {
	try {
		let response = await fetch(`https://echo-serv.tbxnet.com/v1/secret/file/${fileName}`, {
			method: 'GET',
			headers: {
				Authorization: 'Bearer aSuperSecretKey'
			}
		})
		response = await response.text()
		response = formatCSV(response)
		return response
	} catch (error) {
		console.log(error)
	}
}

const formatCSV = (data) => {
	const formattedResponse = {
		file: '',
		lines: []
	}

	if (data.includes('SYS-ERR') || data.includes('File error')) {
		return null
	}

	const lines = data.split('\n')
	if (lines.length === 1) {
		return null
	}

	for (let i = 1; i < lines.length; i++) {
		let linesData = lines[i].split(',')

		if (linesData.length === 4) {
			if (linesData[1] && linesData[2] && linesData[3]) {
				formattedResponse.file = linesData[0]
				formattedResponse.lines.push({
					text: linesData[1],
					number: linesData[2],
					hex: linesData[3]
				})
			} else {
				continue
			}
		}
	}

	return formattedResponse

}

module.exports = { getExternalFiles, getExternalFile }