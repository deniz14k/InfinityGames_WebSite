const sql = require('msnodesqlv8');
const connectionString="server=LAPTOP-4EOTPMU1;Trusted_Connection=Yes;Database=InfinityGames;Driver={SQL Server Native Client 11.0}";
const query="SELECT * from Register";

sql.query(connectionString,query,(err,rows)=>{
console.log(rows);
});