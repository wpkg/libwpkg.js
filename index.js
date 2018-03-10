module.exports.Hosts = require("./src/Hosts");

let Hosts = require("./src/Hosts");

let hosts = Hosts.import(__dirname + '/hosts.xml');
let host = hosts.get('host2');
console.log(host);

// out.then(items => {
//     console.log(items);
// });
