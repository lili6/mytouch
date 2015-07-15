/**
 * Created by lili on 15/7/14.
 */
Ext.onReady(function(){
    var panel = Ext.create('Ext.panel.Panel',{
        title : '使用items进行面板嵌套',
        frame : true,//渲染面板
        collapsible: true, //允许展开和收缩
        height:600,
        width:400,
        renderTo : Ext.getBody(),
        bodyPadding : 5,
        //layout:'vbox',
        //layout:'fit',
        layout:'card',
        activeItem:1,
        defaults :{
            //bodyStyle: 'background-color:#FFFFFF',//设置面板背景色
            bodyStyle: 'background-color:#FFFFEE',//设置面板背景色
            padding:15,
            collapsible:true, //允许展开和收缩
            width:230,
            autoScroll:true  //自动显示滚动条
        },
        items :[{
            title:'嵌套面板一',
            height:200,//子面板高度
            contentEl:'localElement', //加载本地资源
            id:'p1'
        },{
            height:400,
            width:300,
            title:'嵌套面板二',
            //autoLoad:'index.html',
            //xtype:'datepicker',
            //minDate:new Date()
            html:"hello I'm here +new Date",
            id:'p2'
        },{
            title:'嵌套面板三',
            height:200,//子面板高度
            html:'hi here', //加载本地资源
            id:'p3'
        }

    ],
        buttons:[{
            text:'上一页',
            handler: changePage
        },{
            text:'下一页',
            handler:changePage
        }]


    });

    function changePage(btn){
        var index = Number(panel.layout.activeItem.id.substring(1));
        if(btn.text == '上一页'){
            index -=1;
            if(index <1) {
                index=1;
            }
        } else {
            index +=1;
            if (index >3) {
                index=3;
            }
        }
        panel.layout.setActiveItem('p'+index);
    }
})
