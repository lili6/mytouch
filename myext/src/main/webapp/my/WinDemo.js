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
    Ext.tip.QuickTipManager.init();//初始化提示

    var win = Ext.create('widget.window', {
        title: 'Layout Window with title <em>after</em> tools',
        header: {
            titlePosition: 5,
            titleAlign: 'center'
            //html:'hello....'
        },
        maximized:true,
        renderTo:Ext.getBody(),
        closable: true,
        closeAction: 'hide',
        maximizable: true,
        layout:'anchor',
        //animateTarget: button,
        width: 600,
        minWidth: 350,
        height: 350,
        tools: [{type: 'pin'}],
        autoShow: true,
        layout: {
            type: 'border',
            padding: 5
        },
        tools:[{
            type:'refresh',
            tooltip: 'Refresh form Data',
            // hidden:true,
            handler: function(event, toolEl, panelHeader) {
                // refresh logic
            }
        },
            {
                type:'help',
                tooltip: 'Get Help',
                callback: function(panel, tool, event) {
                    // show help here
                }
            }],

        items: [{
            region: 'west',
            title: 'Navigation',
            width: 200,
            split: true,
            collapsible: true,
            floatable: false
        }, {
            region: 'center',
            xtype: 'tabpanel',
            items: [{
                // LTR even when example is RTL so that the code can be read
                rtl: false,
                title: 'Bogus Tab',
                html: '<p>Window configured with:</p><pre style="margin-left:20px"><code>header: {\n    titlePosition: 2,\n    titleAlign: "center"\n},\nmaximizable: true,\ntools: [{type: "pin"}],\nclosable: true</code></pre>'
            }, {
                title: 'Another Tab',
                html: 'Hello world 2'
            }, {
                title: 'Closable Tab',
                html: 'Hello world 3',
                closable: true
            }]
        }]
    });
    //win.show();
});