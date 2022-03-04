const oracledb = require('oracledb')
db ={
    user: 'system',
    password: 'oracle',
    connectString: 'localhost:1521'
}
async function open(sql, binds, autoCommit){
    let con= await  oracledb.getConnection(db)
    let result = await con.execute(sql,binds, {autoCommit})
    con.release()
    return result
}
async function openInput(sql, binds, autoCommit){
    let con= await  oracledb.getConnection(db)
    con.execute(sql,binds, {autoCommit})
    con.release()
    //return result
}
exports.Open=open
exports.OpenI=openInput