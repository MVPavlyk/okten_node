const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'main'), {recursive: true}, err => {
    if (err) {
        console.log(err);
    }
});

const makeDirectory = (directoryName) => {
    fs.mkdir(path.join(__dirname, 'main', directoryName), {recursive: true}, err => {
        if (err) {
            console.log(err);
        }
    });
};

makeDirectory('inPerson');
makeDirectory('online');
makeDirectory('new');


const arrayObjToArrayStr = (array) => {
    let result = [];
    for (const user of array) {
        for (const userKey in user) {
            result.push(`${userKey}: ${user[userKey]}`);
        }
        result.push('');
    }
    return result;
};


const onlineUsers = [
    {name: 'vasya', age: 22, city: 'Lviv'},
    {name: 'petro', age: 32, city: 'London'},
    {name: 'kokos', age: 100500, city: 'assOfWorld'}
];

const inPersonUsers = [
    {name: 'stepan', age: 40, city: 'Zhytomyr'},
    {name: 'ivan', age: 46, city: 'Sruy'},
    {name: 'ananas', age: 5, city: 'Odesa'}
];

const onlineStringArray = arrayObjToArrayStr(onlineUsers);
const inPersonStringArray = arrayObjToArrayStr(inPersonUsers);


const writeToFile = (array, directory, file) => {
    for (const user of array) {
        fs.writeFileSync(path.join(__dirname, 'main', directory, file), `\n${user}`, {flag: 'a'});
    }
};
/*Юзаю синхронну функцію, бо асинхронна виводила стрічки масиву у довільному порядку*/

writeToFile(onlineStringArray, 'online', 'online.txt');
writeToFile(inPersonStringArray, 'inPerson', 'inPerson.txt');


const rewrite = (fromFile, fromDirectory, toFile, toDirectory) => {
    fs.readFile(path.join(__dirname, 'main', fromDirectory, fromFile), 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            throw err;
        }
        fs.writeFile(path.join(__dirname, 'main', toDirectory, toFile), data, {flag: 'w'}, err => {
            if (err) {
                console.log(err);
            }
        });
    });
};

fs.writeFile(path.join(__dirname, 'main', 'new', 'new.txt'), '', err => {
    if (err) {
        console.log(err);
    }
});


rewrite('online.txt', 'online', 'new.txt', 'new');
rewrite('inPerson.txt', 'inPerson', 'online.txt', 'online');

setTimeout(() => {
    rewrite('new.txt', 'new', 'inPerson.txt', 'inPerson');
    setTimeout(() => {
        fs.rmdir(path.join(__dirname, 'main', 'new'), {recursive: true}, err => {
            if (err) {
                console.log(err);
            }

        });
    }, 120);
}, 100);

