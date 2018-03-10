# libWPKG.js - NodeJS module

    npm install --save libwpkg.js

### Hosts

Example of Hosts XML file is [here](extra/hosts.xml).

How to import and work with `Hosts` object:

```js
// Enable module
let wpkg = require("libwpkg");

// Import XML file
let hosts = wpkg.hosts.import(__dirname + '/extra/hosts.xml');

// Get all hosts
let hosts_all = hosts.get();
console.log(hosts_all);

// Get single host by hostname
let host_single = hosts.get('host2');
console.log(host_single);
```
