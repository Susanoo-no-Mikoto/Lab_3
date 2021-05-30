const DB = require('../DB/db.js');
//console.log(DB);

let Users = async () => {
    let dataUsers = await DB.gg();
    console.log(dataUsers);
}