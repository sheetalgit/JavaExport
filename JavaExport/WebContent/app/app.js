Ext.Loader.setConfig({
    disableCaching : true,
	enabled:true,
    paths:{
         DEMO:'app'
	}
});

Ext.application({
    name: 'DEMO',
    appFolder: 'app',
    controllers: [
		'Scheduler'
    ],
    autoCreateViewport	: false,

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout  : 'border',
            items   : [
			    {   xtype: 'Scheduler', 
			        rowHeight : 40,
			        startDate : new Date(2010, 4, 27),
			        endDate : new Date(2010, 5, 5)
			    }
            ]
        });
    }
});