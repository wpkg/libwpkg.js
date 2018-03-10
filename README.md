# libWPKG.js - NodeJS module

    npm install --save libwpkg.js

### Hosts

Example of Hosts XML file is [here](extra/hosts.xml).

How to import and work with `Hosts` object:

```js
// Enable module
let Hosts = require("libwpkg");

// Import XML file
let hosts = Hosts.import(__dirname + '/hosts.xml');

// Get single host by hostname
let host = hosts.get('host1');

console.log(host);
```
