/**
 * Module : compox-util dataTable
 * Author : huyue(huyueb@yonyou.com)
 * Date	  : 2017-01-18 09:34:01
 */

var addDataTable = function addDataTable(dataTable) {
    this.dataTables[dataTable.id] = dataTable;
    return this;
};
var getDataTable = function getDataTable(id) {
    return this.dataTables[id];
};

var getDataTables = function getDataTables() {
    return this.dataTables;
};

export { addDataTable, getDataTable, getDataTables };