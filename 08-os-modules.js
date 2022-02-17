const os= require('os');

//info about current user 
const user=os.userInfo();
console.log(user);
console.log(`The System Uptime is ${os.uptime} seconds`);

const currentos={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    FreeMem: os.freemem(), 
}
console.log(currentos);