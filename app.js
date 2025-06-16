import fs from 'fs';
import path from 'path';


fs.readFile("./a.txt", "utf-8", (err, data) => {
    if (err) { console.log("error") }

    else {
        const toAsci = [...data].map(i => i.charCodeAt(0)).join(" ")
        fs.writeFile("./b.txt", toAsci, (err) => {
            console.log("ad yazildi")
        })
    }

})

const vurma = () => {
    let result = '';
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            result += `${i} * ${j} = ${i * j}\n`;
        }
    }
    return result;
};


fs.writeFile("./vurma.txt", vurma(), (err) => {

    if (err) { console.log("error") }

    else {

        fs.readFile("./vurma.txt", "utf-8", (err, data) => {
            console.log("Vurma yazildi")
        })
    }

})
//////////////////////////////////////////////////////////////
const salam = (name) => {
    return `Salam ${name}`;
}



fs.writeFile("./tap3.txt", salam("Ali"), (err, data) => {
    fs.readFile("./tap3.txt", "utf-8", (err, data) => {
        if (err) {
            console.log("Fayl yoxdur")
        }
        else {
            fs.unlink("./tap3.txt", (err) => {
                if (err) {
                    console.log("Fayl silinmedi")
                }
                else {
                    console.log("Fayl silindi")
                }
            })
        }
    })

})
///////////////////////////


fs.readFile("./Ki.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Fayl oxunarkən xəta baş verdi:", err);
    }
    else {
        fs.writeFile("./big.txt", data.toUpperCase(), (err) => {
            console.log("sucsess");

        })
    }

})
////////////////////////////////////////////////


const Copy = (url) => {

    fs.readFile(`${url}`, "utf-8", (err, data) => {
        if (err) {
            console.error("Fayl oxunarkən xəta baş verdi:", err);
        }
        else {
            const fileName = path.basename(url);
            const newPath = path.join(`copy_${fileName}`);
            fs.writeFile(newPath, data, (err) => {
                if (err) {
                    console.error("Yazma zamanı xəta:", err);
                } else {
                    console.log("Fayl uğurla kopyalandı!");
                }

            })
        }

    })
}

Copy("./copy_big.txt");