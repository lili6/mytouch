/**
 * Created by lili on 15/7/12.
 */

Ext.onReady(function(){
    var toolbar = new Ext.toolbar.Toolbar({
        renderTo:'toolbar',
        width:800
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
            hideLable:true,
            width:150
        },
        '->',
        '<a href=#>超链接</div>',
        {xtype:'tbspacer',width:50},
        '静态文本',
        {text:'打开',
            handler: onButtonClick,
            iconcls:'openIcon'
        },
        {text:'保存',
            handler: onButtonClick,
            iconcls:'saveIcon'
        }


    ]);
    function onButtonClick(btn){
        alert(btn.text);
    }
});