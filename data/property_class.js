/*jshint esversion: 8 */
//query website-properties data collected from coda
class properties {
    constructor(rows) {
        this.rows = rows;
        this.title = this.getTitle();
        this.address = this.getAddress();
        this.numRoom = this.getNumRoom();
        this.numBath = this.getNumBath();
        this.description = this.getDescription();
        this.unit = this.getUnit();
        this.petFriendly = this.getPetFriendly();
        this.property = () => {
            var obj = [];
            for (let i = 0; i < this.title.length; i++) {
                obj.push([
                    this.title[i],
                    this.unit[i],
                    this.title[i],
                    this.address[i],
                    this.description[i],
                    this.numRoom[i],
                    this.numBath[i],
                    this.petFriendly[i]
                ]);
            }
            return obj;
        };
    }
   
    getNumRoom() {
        let arr = [];
        for (let i = 0; i < this.rows.length; i++) {
            arr.push(this.rows[i].values.numRoom);
        }
        return arr;
    }
     getNumBath() {
        let arr = [];
        for (let i = 0; i < this.rows.length; i++) {
            arr.push(this.rows[i].values.numBath);
        }
        return arr;
    }
    getDescription() {
        let arr = [];
        for (let i = 0; i < this.rows.length; i++) {
            arr.push(this.rows[i].values.titleDescription);
        }
        return arr;
    }
    getUnit() {
        let arr = [];
        for (let i = 0; i < this.rows.length; i++) {
            arr.push(this.rows[i].values.Units);
        }
        return arr;
    }
    getPetFriendly() {
        let arr = [];
        for (let i = 0; i < this.rows.length; i++) {
            arr.push(this.rows[i].values.petFriendly);
        }
        return arr;
    }
}