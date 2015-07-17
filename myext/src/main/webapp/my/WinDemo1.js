/**
 * Created by lili on 15/7/16.
 */
Ext.require([
    'Ext.tab.*',
    'Ext.window.*',
    'Ext.tip.*',
    'Ext.layout.container.Border'
]);
Ext.onReady(function() {
    Ext.create('Ext.window.Window', {
        title: 'Hello',
        height: 500,
        width: 400,
        maximized:true,
        layout: 'fit',
        items: {  // Let's put an empty grid in just to illustrate fit layout
            xtype: 'grid',
            border: false,
            columns: [
                {header: 'World'},
                {header:'aa'},
                {header:'bb'},
                {header:'cc'}
            ],                 // One header just for show. There's no data,
            store: Ext.create('Ext.data.ArrayStore', {}) // A dummy empty data store
        }
    }).show();
});