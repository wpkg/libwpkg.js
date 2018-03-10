let xml = require("node-xml-lite");

exports.get = (filename) => {
    let result = xml.parseFileSync(filename);
    return result.childs;
};

// exports.get = async (filename) => {
//     return new Promise((resolve, reject) => {
//         try {
//             xml.parseFile(filename, resolve)
//         } catch(e) {
//             reject(e);
//         }
//     })
// };
