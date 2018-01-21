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































// const test = require('tape');
// const queries = require('../model/query/queries.js');
//
// test('should insert data into db', (t)=>{
//   insertData('fake', 'fake', 'fake', (err, data)=>{
//     t.equal(err, null, 'there are no errors when data is inserted');
//     t.deepEqual(data, []], 'data should be inserted successfully');
//     t.end();
//   });
// });

////
// const test = require('tape');
//
// const queries = require('../model/query/queris.js');
//
// test('should insert data into db', ()=>{
//   t('fake', 'fake', 'fake', (err, data)=>{
//     t.equal(err, null, 'there are no errors when data is inserted');
//     t.deepEqual()
//   })
// })
