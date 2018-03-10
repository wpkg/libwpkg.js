# libWPKG.js - JavaScript library

Small library for work with WPKG XML configuration files.

    npm install --save libwpkg

## Small how to

More examples here.

### Hosts

Example of Hosts XML file is [here](extra/hosts.xml).

How to import and work with `Hosts` object:

```js
// Enable module
let wpkg = require("libwpkg");

// Import XML file
wpkg.hosts.import(__dirname + '/extra/hosts.xml');

// Get all hosts
let hosts_all = wpkg.hosts.get();
console.log(hosts_all);

// Get single host by hostname
let host_single = wpkg.hosts.get('host2');
console.log(host_single);
```

# Links