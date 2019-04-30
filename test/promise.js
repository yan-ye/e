function fn1() {
    const fs = require('fs')

    const readFile = function (filename) {
        return new Promise(function (resolve, reject) {
            fs.readFile(filename,function (err, data) {
                if(err) return reject(err)
                resolve(data)
            })
        })
    };

    const asyncReadFile = async function () {
        const f1 = await await readFile('../web/www/controllers/authentication.js');
        const f2 = await readFile('../web/www/controllers/home.js');
        console.log(f1.toString());
        // console.log(f2.toString());
    }
    asyncReadFile()
}
function fn2() {
    function timeout(ms) {
        return new Promise(function (resolve) {
            setTimeout(resolve,ms)
        });
    }
    async function asyncprint(value, ms) {
        await timeout(ms)
        console.log(value);
    }
    asyncprint('hello word',5000)
}
fn2()