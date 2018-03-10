let xml = require("node-xml-lite");

exports.get = (filename) => {
    let result = xml.parseFileSync(filename);
    return result.childs;
};
