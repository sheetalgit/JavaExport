Ext.define('DEMO.store.Resources', {
    extend : 'Sch.data.ResourceStore',
    model : 'Sch.model.Resource',
    autoLoad : true,
    autoSync : true,
    sorters : 'Name',
    proxy : {
        type : 'ajax',
        url : "peopledata.js",
        reader : {
            type : 'json',
            root : 'people'
        }
    }
});