Example of Hosts XML file is here.

How to import and start work with `Hosts` object:

```js
let Hosts = require("./src/Hosts");

let hosts = Hosts.import(__dirname + '/hosts.xml');
let host = hosts.get('host1');

console.log(host);
```
