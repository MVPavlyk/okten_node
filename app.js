/*1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл,
 в вас вийде невеликий callback hell, пізніше я вам покажу
як можна це обійти, але поки зробіть так*/

const fs = require('fs');
const path = require('path');
const Path = require('path');

/*
for (let i = 0; i < 10; i++) {
    fs.writeFile(path.join(__dirname, 'text1.txt'), `data ${i}\n`, {flag: 'a'}, err => {
        if (err) {
            console.log(err);
        }
    });
}


fs.readFile(path.join(__dirname, 'text1.txt'), 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        throw err;
    }
    fs.writeFile(path.join(__dirname, 'text2.txt'), data, {flag: 'a'}, err => {
        if (err) {
            console.log(err);
        }
    });
});*/


/*-----------------------------------------------------------------------------------------------------------------*/

/*2. Створіть файл ( можете вручну ) заповніть його якимись даними
Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній,
 старий файл видаліть після того як все завершиться. Також вийде callback hell*/

/*fs.mkdir(path.join(__dirname, 'ex2Directory'), err => {
    if(err){
        console.log(err);
    }
})

fs.readFile(path.join(__dirname, 'ex2File.txt'), 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        throw err;
    }
    fs.writeFile(path.join(__dirname, 'ex2Directory', 'ex2ResultFile.txt'), data, {flag: 'a'}, err => {
        if (err) {
            console.log(err);
        }
    });
});

fs.unlink(path.join(__dirname, 'ex2File.txt'), err => {
    if(err){
        console.log(err);
    }
})*/

/*--------------------------------------------------------------------------------------------------------------------------------*/

/*3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки
 і файли(в файли запишіть якусь дату) )
і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли
тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки, вам потрібно їх
перейменувати і додати до назви префікс _new*/


/*

fs.mkdir(path.join(__dirname, 'ex3Directory'), {recursive: true}, err => {
    if(err){
        console.log(err);
    }
})

fs.mkdir(path.join(__dirname, 'ex3Directory', 'someDirectory'), {recursive: true}, err => {
    if(err){
        console.log(err);
    }
})

fs.writeFile(path.join(__dirname, 'ex3Directory', 'file.txt'), 'some data before cleaning', err => {
    if(err){
        console.log(err);
    }

})

const changer = (filename) => {
    if(fs.statSync(path.join(__dirname, 'ex3Directory', filename)).isFile()){
        fs.writeFile(path.join(__dirname, 'ex3Directory', filename), '', {flag: 'w'} ,err => {
            if(err){
                console.log(err);
            }

        })
    } else {
        fs.rename(path.join(__dirname, 'ex3Directory', filename), path.join(__dirname, 'ex3Directory', `new_${filename}`), err => {
            if(err){
                console.log(err);
            }
        })
    }
}


changer('someDirectory')

setTimeout(() => {
    changer('file.txt')
}, 100)

*/
