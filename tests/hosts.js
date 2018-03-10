let Hosts = require("../src/Hosts");

let hosts = Hosts.import(__dirname + '/../extra/hosts.xml');

let hosts_all = hosts.get();
console.log(hosts_all);

let host_single = hosts.get('host2');
console.log(host_single);
