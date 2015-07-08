Ext.define('DEMO.controller.Scheduler', {
    extend	: 'Ext.app.Controller',

    models	: [
        'Sch.model.Event', 
        'Sch.model.Resource'
    ],

    stores		: [
		'Events',
        'Resources'
    ],

    views		: [
		'Scheduler'
    ],
    
    init		: function() {
        this.control({
            'schedulergrid[lockable=true]' : {
                activate : function(s) {
                    // Fixes row height sync bug
                    s.getView().refresh();
                }
            }
        });
    }
});