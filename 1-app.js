const amount=9;

if (amount<10)
{
    console.log("Small Amount ");
}
else{
    console.log("Greater Amount");
}
console.log("It's my First Try for Node js.");


//Global Verialble
console.log(__dirname);
setInterval(()=>{
    console.log("Hello World")
},1000);


//modules
const sayHi=(name)=> {
    console.log(`hello world ${name}`);

    //console.log('hello world',name);
}

sayHi('sujan');
sayHi(Ram);
sayHi(Tam);
