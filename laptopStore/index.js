// nodemon starter/index.js

//core modules
const fs = require('fs'); 
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');

const laptopData = JSON.parse(json);


// res = response
const server = http.createServer((req, res) => {
    
    const pathName = url.parse(req.url, true).pathname;
    const id = url.parse(req.url, true).query.id;

    // console.log(req) // the request data
    // console.log(req.url) // shows the requested url
    // console.log(pathName); // shows the same url but parsed
    // console.log(id); // shows the query.id from the requested data
    
    /////////// PRODUCT OVERVIEW //////////
    if (pathName === '/products' || pathName === '/'){    
        res.writeHead(200, { 'Content-type': 'text/html'})

        fs.readFile(`${__dirname}/templates/template-overview.html`, 'utf-8', (err, data) => {
            
            let overviewOutput = data;

            fs.readFile(`${__dirname}/templates/template-card.html`, 'utf-8', (err, data) => {
                
                const cardsOutput = laptopData.map(el => replaceTemplate(data, el)).join('');
                overviewOutput = overviewOutput.replace("{%CARDS%}", cardsOutput);

                res.end(overviewOutput);
            });
        });

        // res.end('Products page')
      }


      // console.log(laptopData.length);
    /////////// LAPTOP DETAILS //////////
    else if (pathName === '/laptop' && id < laptopData.length){
        res.writeHead(200, { 'Content-type': 'text/html'})
        // res.end(`Laptop page Nr.${id}`)

        fs.readFile(`${__dirname}/templates/template-laptop.html`, 'utf-8', (err, data) => {
            const laptop = laptopData[id];
            // console.log(`${__dirname}/templates/template-laptop.html`)
            // console.log(data)
            console.log(laptop.image)
            
            const output = replaceTemplate(data, laptop);

            res.end(output);
        });
    }
    
    ////// IMAGES ///////
    else if ((/\.(jpg|jpeg|png|gif)$/i).test(pathName)) {
        fs.readFile(`${__dirname}/data/img${pathName}`, (err, data) => {
            res.writeHead(200, { 'Content-type': 'image/jpg'});
            res.end(data);
        });

    }


    /////////// ERROR HANDLING //////////
    else {
        res.writeHead(404, { 'Content-type': 'text/html'})
        res.end('URL not found on server')
    }

    // res.writeHead(200, { 'Content-type': 'text/html'})
    // // res.end('This is the response')
    // console.log('Server accessed.');
});

// start listening on  port 1337 (standart)
server.listen(1337, '127.0.0.1', () => {
    console.log('Listening for requests...'); 
})

// console.log(__dirname);
// console.log(laptopData);
console.log('ZAREDEN')

function replaceTemplate(originalHtml, laptop) {
    let output = originalHtml.replace(/{%PRODUCTNAME%}/g, laptop.productName);
        output = output.replace(/{%IMAGE%}/g, laptop.image);
        output = output.replace(/{%PRICE%}/g, laptop.price);
        output = output.replace(/{%SCREEN%}/g, laptop.screen);
        output = output.replace(/{%CPU%}/g, laptop.cpu);
        output = output.replace(/{%STORAGE%}/g, laptop.storage);
        output = output.replace(/{%RAM%}/g, laptop.ram);
        output = output.replace(/{%DESCRIPTION%}/g, laptop.description);
        output = output.replace(/{%ID%}/g, laptop.id);
    return output;
}