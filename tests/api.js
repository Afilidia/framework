var chai = require('chai'),
supertest = require('supertest'),
config = require('../config.json'),

server = supertest(`${config.server.protocol}://${config.server.url}:${config.server.port}${config.server.api.path}`);

module.exports = () => {
    describe('API', ()=>{
        it('Index response status should be 200', (done)=>{
            server.get('/').expect(200, done);
        });
    })
}