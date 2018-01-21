const test = require('tape');
const request = require('supertest');
const app = require('../src/app');

test('all routes return the expected result', (t)=>{
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if(err){
        t.error(err)
      }else{
        t.equal(200, res.result, 'all routes return expected results')
        t.end();
      }
    });
});


test('check the status code of home route', (t)=>{
  request(app)
    .get('/')
    .expect(200)
    .end((err, result)=>{
      if(err){
        t.notOk(err);
      }else{
        t.equal(res.reult, 200, 'home page is returning a status code of 200 ')
        t.end();
      }
    });
});

test('should return register page successfully', (t)=>{
  request(app)
    .get('/register')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res)=>{
      if(err){
        t.error(err);
      }else{
        t.equal(res.result, 200, 'register page is returned successfully')
        t.end();
      }
    });
});

test('should return the login page', (t) => {
  request(app)
    .get('/login')
    .expect(304)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if(err){
        t.error(err);
      }else{
        t.equal(res.result, 200, 'login page is returned successfully')
        t.end();
      }
    });
});
test('the cart page is returned successfully', (t)=>{
  request(app)
    .get('/cart')
    .expect(200)
    .expect('Content-Type', /html/)
    .end(err, res)=>{
      if(err){
        t.error(err)
      }
    }else{
        t.equal(res.result, 200, 'cart page is returned successfully')
        t.end();
    }
});

test('should return the suggestion page', (t)=>{
  request(app)
    .get('/suggestion')
    .expect(200)
    .expect('Content-Type', /html/)
    .end(err, res)=>{
      if(err){
        t.error(err)
    }else{
        t.equal(res.result, 200, 'suggestion page is returnes successfully')
        t.end();
    }
  }
});

test('map page is returned successfully', (t)=>{
  request(app)
    .get('/map')
    .expect(200)
    .expect('Content-Type', /html/)
    .end(err, res)=>{
      if(err)
        t.error(err)
      }else{
        t.equal(res.result, 200, 'map page is returned successfully')
        t.end();
      }
});

test('log out is returned successfully', (t)=>{
  request(app)
    .get('/logout')
    .expect(200)
    .expect('Content-Type', /html/)
    .end(err, res)
      if(err){
        t.error(err)
      }else{
        t.equal(res.result, 200, 'log out page is returned successfully')
        t.end();
      }
});

test.onFinish(() => process.exit(0));
