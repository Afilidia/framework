let
framework = require('../framework'),
config = framework.config,
chai = require('chai'),

server = supertest(`${config.server.protocol}://${config.server.url}:${config.server.port}${config.server.api.path}`);

module.exports = () => {
    describe('Framework', ()=>{
        it('Index response status should be 200', (done)=>{
            server.get('/').expect(200, done);
        });
    })
}