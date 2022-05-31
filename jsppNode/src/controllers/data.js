const fs = require('fs')
const path = require('path')
    //


//promise实现数据读取
function getFileContent(filename) {
    const promise = new Promise((resolve, reject) => {
        //绝对路径
        const fullFilename = path.resolve(__dirname, 'data', filename);

        fs.readFile(fullFilename, (err, data) => {
            if (err) {
                console.log(err);
                return
            }
            //data是二进制数据
            resolve(
                JSON.parse(data.toString())
            );
        });
    });
    return promise;
}

//
getFileContent('a.json').then((aData) => {
    console.log(aData);
    return getFileContent(aData.next)
}).then((bData) => {
    console.log(bData);
    return getFileContent(bData.next)
})

//.then()方法的意思和用法 then()方法是异步执行。
// 意思是:就是当.then()前的方法执行完后再执行then()内部的程序,
//这样就避免了,数据没获取到等的问题