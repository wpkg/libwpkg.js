let Packages = require("../src/Packages");

let packages = Packages.import(__dirname + '/../extra/packages.xml');

let packages_all = packages.get();
console.log(packages_all);

let package_single = packages.get('wpkg');
console.log(package_single);

// Show packages commands
console.log(package_single.commands);
for (let command of package_single.commands) {
    // Show single command
    console.log(command);
}
