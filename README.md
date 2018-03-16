# libWPKG.js - JavaScript library

Small library for work with WPKG XML configuration files.

    npm install --save libwpkg

## Small how to

More examples here.

```js
// Enable WPKG module
let wpkg = require("libwpkg");
```

### Hosts

Example of Hosts XML file is [here](extra/hosts.xml).

How to import and work with `Hosts` object:

```js
// Import XML file
wpkg.hosts.import(__dirname + '/extra/hosts.xml');

// Get all hosts
let hosts_all = wpkg.hosts.get();
console.log(hosts_all);

// Get single host by hostname
let host_single = wpkg.hosts.get('host2');
console.log(host_single);
```

### Profiles

Example of Profiles XML file is [here](extra/profiles.xml).

How to import and work with `Profiles` object:

```js
wpkg.profiles.import(__dirname + '/extra/profiles.xml');

let profiles_all = wpkg.profiles.get();
console.log(profiles_all);

let profile_single = wpkg.profiles.get('profile3');
console.log(profile_single);
```

### Packages

Example of Profiles XML file is [here](extra/packages.xml).

How to import and work with `Packages` object:

```js
wpkg.packages.import(__dirname + '/extra/packages.xml');

let packages_all = wpkg.packages.get();
console.log(packages_all);

let package_single = wpkg.packages.get('wpkg');
console.log(package_single);

// Show packages commands
console.log(package_single.commands);
for (let command of package_single.commands) {
    // Show single command
    console.log(command);
}
```

# Get Support!

* [Discord](https://discord.gg/vRjVfHK) - Join us on Discord.
* [GitHub Issues](https://github.com/wpkg/libwpkg.js/issues) - Got issues? Please tell us!

# Some links

* Main the WPKG website - https://wpkg.org/
* WPKG documentation page - https://wpkg.org/Documentation
* Article on Wikipedia - https://en.wikipedia.org/wiki/WPKG_(software)