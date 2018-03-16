let config = require("./Drivers/XML");

class Profiles {

    constructor() {
        this._profiles = [];
    }

    /**
     * Generate array with data from xml
     *
     * @param {string} filename
     * @returns {Profiles}
     */
    import(filename) {
        // Get array which was created from XML
        let xml = config.get(filename);

        // Parse XML's array to data array
        this.parse(xml);

        return this;
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
                let result;
                if (item.attrib['profile-id']) result = item.attrib['profile-id'];
                if (item.attrib['package-id']) result = item.attrib['package-id'];
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

                // Set profile id
                if (item.attrib.id) result.id = item.attrib.id;

                // Set packages and depended profiles
                if (item.childs) {
                    result.packages = this.parseItems('package', item.childs);
                    result.depends = this.parseItems('depends', item.childs);
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
            let items = this._profiles.filter(function (item) {
                return (item['id'] === id)
            });
            if (items.length === 1) result = items[0];
            if (items.length > 1) result = items;
        } else {
            result = this._profiles
        }
        return result;
    }

    /**
     * Add item into the array of items
     *
     * @param {array} item - Array with data about item
     */
    set(item) {
        this._profiles.push(item);
    }

}

module.exports = new Profiles();
