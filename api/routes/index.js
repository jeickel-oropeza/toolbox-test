const express = require('express');
const router = express.Router();

const { getExternalFiles, getExternalFile } = require('../utils/utils');

// Endpoint to get files data
router.get('/data', async (req, res, next) => {
	let fileList = []
	if (req.query.fileName) {
		let fileResponse = await getExternalFile(req.query.fileName);
		fileList.push(fileResponse)
	} else {
		let externalFiles = await getExternalFiles();
		for (let i = 0; i < externalFiles.length; i++) {
			let fileResponse = await getExternalFile(externalFiles[i]);
			if (fileResponse !== null) {
				if (fileResponse.file !== '') {
					fileList.push(fileResponse)
				}
			}
		}
	}

	res.status(200).send(fileList);
});

// Endpoint to get availables files from external api
router.get('/list', async (req, res, next) => {
	let externalFiles = await getExternalFiles()

	res.status(200).send(externalFiles);
});

module.exports = router;
