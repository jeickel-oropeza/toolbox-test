const express = require('express');
const router = express.Router();

const { getExternalFiles, getExternalFile } = require('../utils/utils');

// Endpoint to get files data
router.get('/data', async (req, res, next) => {
	let externalFiles = await getExternalFiles()
	let fileList = []

	for (let i = 0; i < externalFiles.length; i++) {
		let fileResponse = await getExternalFile(externalFiles[i]);
		if (fileResponse !== null) {
			if(fileResponse.file !== '') {
				fileList.push(fileResponse)
			}
		}
	}

	res.status(200).send(fileList);
});

module.exports = router;
