var assert = require('assert'),
supertest = require('supertest'),
config = require('../config.json'),

server = supertest(`${config.server.protocol}://${config.server.url}:${config.server.port}`);

module.exports = () => {
    describe('Server', ()=>{
        it('Index response status should be 200', (done)=>{
            server.get('/').expect(200, done);
        });
    });
}