Ext.define('DEMO.store.Events', {
    extend : 'Sch.data.EventStore',
    model : 'Sch.model.Event',
    autoLoad : true,
    autoSync : true,
    
    proxy : {
        type : 'ajax',
        url : "taskdata.js",
        reader : {
            type : 'json',
            root : 'tasks'
        }
    }
});