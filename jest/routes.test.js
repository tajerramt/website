/*jshint esversion: 8*/
const request = require('supertest');
const app = require('./app');
const index = require('./routes/index');
const connection = require('./routes/mysql');
// describe('Test the about us path', () => {
//     test('It should response the GET method', async () => {
//         const response = await request(app).get('/');
//         expect(response.statusCode).toBe(200);

//     });

// });
// describe('Test the about us path', () => {
//     test('It should response the GET method', async () => {
//         const response = await request(app).get('/listing');
//         expect(response.statusCode).toBe(200);

//     });

// });
describe('Test the about us path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/about');
        expect(response.statusCode).toBe(200);

    });

});
describe('Test the about us path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/contact');
        expect(response.statusCode).toBe(200);

    });

});
// describe('Test the about us path', () => {
//     test('It should response the GET method', async () => {
//         const response = await request(app).get('/property/1703-Deerfield');
//         expect(response.statusCode).toBe(200);

//     });

// });
// const connection = require('./routes/mysql');
// const index =
// describe('Test the connection path', () => {
//     test('It should response to the connection method', async () => {
//         expect(
//             //SELECT unit FROM property WHERE title = "Deerfield";
//             await connection.getConnection((err, tempconnection) => {
//                 if (err) {
//                     tempconnection.release();
//                     throw err;
//                 } else {
//                     console.log("connect");
//                 }
//             })).toBe("connect");
//     })
// });
// describe('Test the listing path', () => {
//     test('It should response the GET method', async () => {
//         const response = await request(app).get('/listing');
//         expect(response.statusCode).toBe(200);
//     });
// });
// describe('Test the contact us path', () => {
//     test('It should response the GET method', async () => {
//         const response = await request(app).get('/');
//         expect(response.statusCode).toBe(200);
//         done();
//     });
// });

// afterAll(async () => {
//     await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
// });

// describe('Test the properties path', () => {
//     test('It should response the GET method', async () => {
//         const response = await request(app).get('/about');
//         expect(response.statusCode).toBe(200);
//     });
// });
// describe('Test the rooms path', () => {
//     test('It should response the GET method', async () => {
//         const response = await request(app).get('/about');
//         expect(response.statusCode).toBe(200);
//     });
// });