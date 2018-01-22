const test = require('tape');
const queries = require('../model/query/auth.js');
const dbconnection = require('../model/database/db_connection.js')

test('should insert data successfully', (t)=>{
  isertData('fake', 'fake', 'fake', (err, data)=>{
    t.equal(err, null, 'There are no errors when data is inserted')
    t.deepEqual(data, [], 'data is inserted successfully')
    t.end();
  })
})

test('shloud get all data from database', (t)=>{
  selectData('fake', (err, data)=>{
    t.equal(err, null, 'There are no errors when getting all data')
    t.equl(data.length > 0, true, 'all data is got successfully')
    t.end();
})
})
