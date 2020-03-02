/*jshint esversion: 8 */
class properties {
    constructor(rows) {
        this.rows = rows;
        this.title = this.getTitle();
        this.address = this.getAddress();
    }
    getTitle() {
        var arr = [];
        for (let i = 0; i < this.rows.length; i++) {
            arr.push(this.rows[i].values.title);
        }
        return arr;
    }
    getAddress() {
        var arr = [];
        for (let i = 0; i < this.rows.length; i++) {
            arr.push(this.rows[i].values.address);
        }
        return arr;
    }
    getTesting() {
        var arr = [];
        var tryt;

        for (let i = 0; i < this.rows.length; i++) {
            var part1 = this.rows[i].values;
            var part2 = "title";
            tryt = part1 + "." + part2;
            var input = `${this.rows[i].values.title}`;
            // console.log(tryt);
            arr.push(tryt);

        }

        return arr;
    }

}
const Coda = require('coda-js');
const mysql = require('mysql');
const token = '95d63884-3ab3-4782-a698-bbdf26702147';
const docidairbnb = `jD-jACu6BB`;
var propertiesTable = "grid-ehazIVHY-p";
var roomTable = "grid-817Qe0TyYq";

(async () => {
    // const sql = new database();
    // sql.connect();
    const coda = new Coda(token);
    const property_rows = await coda.listRows(docidairbnb, propertiesTable, {
        useColumnNames: true,
        limit: 1000
    });
    const room_rows = await coda.listRows(docidairbnb, roomTable, {
        useColumnNames: true,
        limit: 1000
    });
    let property = new properties(property_rows);
    console.log(property.getTesting());
    // let room = new rooms(room_rows);
    // sql.deletingRows(deleteAllRowsRoom, "Room");
    // sql.deletingRows(deleleAllRowsProperty, "Property");
    // sql.fillingRows(fillingPropertyTableRows, [property.property()], "Property");
    // sql.fillingRows(fillingRoomTableRows, [room.room()], "Room");
    // sql.endConnetion();
})().catch(error => console.log(error));