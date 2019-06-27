const request = require('supertest');

const server = require('./server');

describe('server.js', () => {

    //testing to see if process.env.DB_ENV is working
    it('test the env', () => {
        expect(process.env.DB_ENV)
        .toBe('testing')
    })

   describe('GET /', () => {

    it('should return 200 OK', async () => {
        const res = await request(server)
        .get('/')

        expect(res.status)
        .toBe(200)
     })

     it('should return (api: up', () => {
         return request(server)
         .get('/')
         .then(res => {
             expect(res.body)
             .toEqual({'api': 'up'})
         })
     })


   })// end of GET describe

}) // end of server describe