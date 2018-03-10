let config = require("./Drivers/XML");

class Hosts {

    constructor() {
        this._hosts = [];
    }

    /**
     * Generate array with hosts from xml
     *
     * @param filename
     * @returns {Hosts}
     */
    import(filename) {
        // Get array which was created from XML
        let hostsXml = config.get(filename);
        // Parse XML's array to hosts array
        this.parse(hostsXml);

        return this;
    }

    /**
     * Get host by hostname, or all available hosts
     *
     * @param hostname - Name of host for search
     * @returns {array}
     */
    get(hostname = null) {
        let result = [];
        if (hostname) {
            let items = this._hosts.filter(function (item) {
                return (item['name'] === hostname)
            });
            if (items.length === 1) result = items[0];
            if (items.length > 1) result = items;
        } else {
            result = this._hosts
        }
        return result;
    }

    /**
     * Add host into the array of hosts
     *
     * @param {array} host - Array with data about host
     */
    set(host) {
        this._hosts.push(host);
    }

    /**
     * Extract items from profiels array
     *
     * @param items
     * @returns {Array}
     */
    parseChilds(items) {
        let out = [];
        for (let item of items) {
            // We do not need "new lines" only real items
            if (item.name) {
                out.push(item.attrib['profile-id']);
            }
        }
        return out;
    }

    /**
     * Normal extraction of items
     *
     * @param {array} items - List of items for parse
     * @returns {Array}
     */
    parse(items) {

        for (let item of items) {

            // Current item
            let result = [];
            result.profiles = [];

            // We do not need "new lines" only real items
            if (item.name) {
                // Parse childs and run recursion if not empty
                if (item.childs) result.profiles = this.parseChilds(item.childs);
                // Set name
                if (item.attrib.name) result.name = item.attrib.name;
                // Set profiles
                if (item.attrib['profile-id']) result.profiles.push(item.attrib['profile-id']);

                // Put item into the local array
                this.set(result);
            }
        }
    }

}

module.exports = new Hosts();
