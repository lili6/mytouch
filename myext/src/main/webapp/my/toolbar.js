/**
 * Created by lili on 15/7/12.
 */

Ext.onReady(function(){
    var toolbar = new Ext.toolbar.Toolbar({
        renderTo:'toolbar',
        width:800,
        margin:'5 0 0 0'
        //layout:'anchor'

    });
    toolbar.add([
    //向工具栏添加按钮
        {
            text:'新建',
            handler: onButtonClick,
            cls:'newIcon'
        },
        '-',{
          xtype:'textfield',
            name:'field1',
            emptyText:'enter search team',
            //hideLable:true,
            layout:'fit'
        },
        '->',
        '<a href=#>超链接</div>',
        {xtype:'tbspacer',width:10},

        '静态文本',
        {xtype:'splitbutton',text:'Split Button'},
        {text:'打开',
            handler: onButtonClick,
            iconcls:'openIcon'
        },
        {text:'保存',
            handler: onButtonClick,
            iconcls:'saveIcon'
        },
        {xtype:enableBtn ,text:'enable toolbar'},
        {xtype:disableBtn , text:'disable toolbar'}



    ]);
    function onButtonClick(btn){
        alert(btn.text);
    }

    var enableBtn = Ext.create('Ext.button.Button', {
        text    : 'Enable All Items',
        disabled: true,
        scope   : this,
        handler : function() {
            //disable the enable button and enable the disable button
            enableBtn.disable();
            disableBtn.enable();

            //enable the toolbar
            toolbar.enable();
        }
    });

    var disableBtn = Ext.create('Ext.button.Button', {
        text    : 'Disable All Items',
        scope   : this,
        handler : function() {
            //enable the enable button and disable button
            disableBtn.disable();
            enableBtn.enable();

            //disable the toolbar
            toolbar.disable();
        }
    });


});