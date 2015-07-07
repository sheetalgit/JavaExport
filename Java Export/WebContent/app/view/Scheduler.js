Ext.define("DEMO.view.Scheduler", {
    extend : "Sch.panel.SchedulerGrid",
    requires : [
        'Ext.grid.plugin.CellEditing'
    ],
    alias : 'widget.Scheduler',
    title: 'Java Schedule',
    region : 'center',
    viewPreset: 'dayAndWeek',
    rowHeight : 40,

    eventStore : 'Events',
    resourceStore : 'Resources',
    
    eventRenderer: function (eventRec, resourceRec, tplData, row) {
        if (row % 2 === 0) {
            tplData.cls = 'specialEventType';
        } else {
            tplData.cls = 'normalEvent';
        }

        return Ext.Date.format(eventRec.getStartDate(), 'M d');
    },
        
    // Specialized template with header and footer
    eventBodyTemplate : '<span class="sch-event-header">{headerText}</span><div class="sch-event-footer">{footerText}</div>',

    initComponent : function() {
        var me = this;

        Ext.apply(me, {
            plugins: [
                Ext.create('Ext.grid.plugin.CellEditing', {
                    clicksToEdit: 2
                }),
                new Sch.plugin.SimpleEditor({ dataIndex: 'Name' }),
                this.exportPlugin = new Sch.plugin.Export({
                	printServer: 'export.action'
                })
            ],
            columns: [
                { header: 'Name', sortable: true, width: 100, dataIndex: 'Name' }
            ],
           tbar: [
               'This example shows how you can export contents of Ext Scheduler to PDF and PNG.',
               '->',
               {
                   iconCls: 'icon-pdf',
                   scale: 'large',
                   text: 'Export to PDF',
                   handler: function () {
                       me.exportPlugin.setFileFormat('pdf');
                       me.showExportDialog();
                   },
                   scope: me
               },
               {
                   iconCls: 'icon-png',
                   scale: 'large',
                   text: 'Export to PNG',
                   handler: function () {
                       me.exportPlugin.setFileFormat('png');
                       me.showExportDialog();
                   },
                   scope: me
               }
           ],
        });

        this.callParent(arguments);
    },

    onRender : function() {
        this.callParent(arguments);
        
        // Lazy loading only after render
        this.getEventStore().load();
    }
});