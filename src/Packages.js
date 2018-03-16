let config = require("./Drivers/XML");

class Packages {

    constructor() {
        this._packages = [];
    }

    /**
     * Generate array with data from xml
     *
     * @param {string} filename
     * @returns {Packages}
     */
    import(filename) {
        // Get array which was created from XML
        let xml = config.get(filename);

        // Parse XML's array to data array
        this.parse(xml);

        return this;
    }

    /**
     * Extract commands from array
     *
     * @param array
     * @returns {Array}
     */
    parseCommands(array) {

        let items = array.filter(function (item) {
            return (item['name'] === 'commands')
        });

        let out = [];
        for (let item of items) {
            // We do not need "new lines" only real items
            if (item.name) {
                for (let command of item.childs) {
                    if (command.name) {
                        let result = [];
                        // Checks for commands
                        if (command.attrib.type) result.type = command.attrib['type'];
                        if (command.attrib.cmd) result.cmd = command.attrib['cmd'];
                        if (command.attrib.include) result.include = command.attrib['include'];

                        // Exits
                        if (command.childs) {
                            result['exits'] = [];
                            for (let exit of command.childs) {
                                if (exit.name) {
                                    let exits = [];
                                    if (exit.attrib.code) exits.cmd = exit.attrib['code'];
                                    if (exit.attrib.reboot) exits.reboot = exit.attrib['reboot'];
                                    result['exits'].push(exits);
                                }
                            }
                        }

                        out.push(result);
                    }
                }
            }
        }
        return out;
    }

    /**
     * Extract items from array
     *
     * @param {string} type
     * @param {array} array
     * @returns {Array}
     */
    parseItems(type, array) {

        let items = array.filter(function (item) {
            return (item['name'] === type)
        });

        let out = [];
        for (let item of items) {
            // We do not need "new lines" only real items
            if (item.name) {
                let result = [];

                // Variables for checks
                if (item.attrib.type) result.type = item.attrib['type'];
                if (item.attrib.condition) result.condition = item.attrib['condition'];
                if (item.attrib.path) result.path = item.attrib['path'];

                out.push(result);
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

            // We do not need "new lines" only real items
            if (item.name) {

                if (item.attrib.id) result.id = item.attrib.id;
                if (item.attrib.name) result.name = item.attrib.name;
                if (item.attrib.revision) result.revision = item.attrib.revision;
                if (item.attrib.priority) result.priority = item.attrib.priority;
                if (item.attrib.reboot) result.reboot = item.attrib.reboot;

                // Set packages and depended profiles
                if (item.childs) {
                    result.checks = this.parseItems('check', item.childs);
                    result.commands = this.parseCommands(item.childs);
                }

                // Put item into the local array
                this.set(result);
            }
        }
    }

    /**
     * Get profile by profile's id, or all available profiles
     *
     * @param id - Profile ID for search
     * @returns {array}
     */
    get(id = null) {
        let result = [];
        if (id) {
            let items = this._packages.filter(function (item) {
                return (item['id'] === id)
            });
            if (items.length === 1) result = items[0];
            if (items.length > 1) result = items;
        } else {
            result = this._packages
        }
        return result;
    }

    /**
     * Add item into the array of items
     *
     * @param {array} item - Array with data about item
     */
    set(item) {
        this._packages.push(item);
    }

}

module.exports = new Packages();
