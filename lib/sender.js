var ActionFactoryAbstract = require('./action-factory-abstract');
var SenderAdd = require('./sender-add');
var SenderDelete = require('./sender-delete');
var SenderStatus = require('./sender-status');
var SenderDefault = require('./sender-default');
var SenderList = require('./sender-list');

/**
 *
 * @param options
 * @extends ActionAbstract
 * @constructor
 */
function Sender(options) {
    ActionFactoryAbstract.call(this, options);
}

Sender.prototype = Object.create(ActionFactoryAbstract.prototype);

/**
 * add new sender
 * @return {SenderAdd}
 */
Sender.prototype.add = function () {
    return this.createAction(SenderAdd);
};

/**
 * delete existing sender
 * @param  {String} name
 * @return {SenderDelete}
 */
Sender.prototype.delete = function (name) {
    return this.createAction(SenderDelete, name);
};

/**
 * check status of the existing sender
 * @param  {String} name
 * @return {SenderStatus}
 */
Sender.prototype.status = function (name) {
    return this.createAction(SenderStatus, name);
};

/**
 * set sender as default
 * @param  {String} name
 * @return {SenderDefault}
 */
Sender.prototype.default = function (name) {
    return this.createAction(SenderDefault, name);
};

/**
 * get list of senders
 * @return {SenderList}
 */
Sender.prototype.list = function () {
    return this.createAction(SenderList);
};

module.exports = Sender;
