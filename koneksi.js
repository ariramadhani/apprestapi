var mysql =require('mysql');

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    databases:'dbrestapi'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql terkoneksi');
})
module.exports = conn;