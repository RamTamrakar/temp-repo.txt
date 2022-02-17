//http module 
const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req);
    if(req.url==='/'){
        res.write("Welcome to home page.");
    }
    if(req.url==='/about'){
        res.write("Here our short history.");
    }
    //res.write("This is first http request.");
    res.end(`<h1>OPPS</h1>
    <p>Con't seem to find the page you are looking </p>`);
});
server.listen(5000);