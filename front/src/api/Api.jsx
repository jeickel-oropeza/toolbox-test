import axios from 'axios'
import { formatResponse } from '../utils/utils'
const apiUrl = 'http://localhost:3000'

export const GetFileList = async () => {
	try {
		let response = await axios.get(`${apiUrl}/files/data`)
		response = formatResponse(response.data)
		return response
	} catch (error) {
		console.log(error)
	} 
}