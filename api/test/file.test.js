const app = require('../app')
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe('Files', () => {
	// Test the /GET route
	describe('/GET files', () => {
		it('it should GET all the files', (done) => {
			chai.request(app)
				.get('/files/data')
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('array');
					res.body[0].should.have.property('file')
					res.body[0].should.have.property('lines')
					done();
				});
		});
	});

});