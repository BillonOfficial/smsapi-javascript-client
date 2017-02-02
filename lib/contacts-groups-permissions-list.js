var _ = require('lodash');
var ActionAbstract = require('./action-abstract');

/**
 * list group permissions
 * @see  http://dev.smsapi.pl/#!/contacts%2Fgroups/list_0
 * @param {Object} options
 * @param {String} groupId
 * @extends ActionAbstract
 * @constructor
 */
function ContactsGroupsPermissionsList(options, groupId) {
    ActionAbstract.call(this, options);
    this._groupId = groupId;
}

ContactsGroupsPermissionsList.prototype = Object.create(ActionAbstract.prototype);

/**
 * get/set groupId
 * @param  {String} groupId
 * @return {ContactsGroupsPermissionsList} or {String}
 */
ContactsGroupsPermissionsList.prototype.groupId = function (groupId) {
    if (_.isUndefined(groupId))
        return this._groupId;

    this._groupId = groupId;
    return this;
};

/**
 * execute action
 * @return {Promise}
 */
ContactsGroupsPermissionsList.prototype.execute = function () {
    return this.request()
        .get('contacts/groups/' + String(this._groupId) + '/permissions')
        .data(this.params())
        .execute();
};

module.exports = ContactsGroupsPermissionsList;