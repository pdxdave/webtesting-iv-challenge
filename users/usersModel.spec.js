const db = require('../data/dbConfig.js');

const Users = require('./usersModel')

describe('users model', () => {

    beforeEach(async () => {
        await db('users')
        .truncate();
    })


    describe('insert()', () => {

        it('will insert a user into the db', () => {
            return Users.insert({ username: 'Tyler'})
            .then(() => {
                return Users.insert({ username: 'Cody'})
            })
            .then(() => {
                return db('users')
                 .then(user => {
                     expect(user).toHaveLength(2)
                 })
            })
        })

    }) // end of insert describe 


    describe('remove', () => {

        it('should remove Tyler from the db by ID', async () => {
            await Users.insert(({ username: 'tyler'}));
            await Users.remove(1)

            const users = await db('users')
            expect(users).toHaveLength(0)
        })
    })

})// end of users model describe