const mysql = require('mysql');
const mysqlConnnection=mysql.createConnection(
  {
    host: '181.133.136.83',
    user: 'mediatecnica',
    password: '123',
    database: 'lab_mediatecnica',
    multipleStatements: true
  }
);//Fin createConnection

mysqlConnnection.connect(function(err){
  //Si hay un error entonces
  if(err){
    console.error(err);
    return;
  }else{
    //Todo esta bien (falso)
    console.log('Base de datos conectada');
  }
})

module.exports=mysqlConnnection;