let Profiles = require("../src/Profiles");

let profiles = Profiles.import(__dirname + '/../extra/profiles.xml');

let profiles_all = profiles.get();
console.log(profiles_all);

let profile_single = profiles.get('profile3');
console.log(profile_single);
