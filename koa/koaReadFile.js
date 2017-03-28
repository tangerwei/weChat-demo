const fs = require('fs');
const _readFileP = function(fileurl){
    return new Promise(function(resolve,reject){
        fs.readFile(fileurl,function(err,data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    });
}
const _readFile = async function(url){
    let data = await _readFileP(url);
    return data;
}
module.exports = {
    readFile:_readFile
}