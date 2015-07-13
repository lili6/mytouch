/**
 * Created by lili on 15/7/13.
 */
Ext.onReady(function(){
    Ext.tip.QuickTipManager.init();//初始化提示
    var productForm = Ext.create('Ext.form.Panel',{
        title:'表单加载实例',
        width:500,
        frame:true,
        bodyPadding:10,
        fieldDefaults:{
            labelSeparator: ':' ,//分隔符
            labelWidth:80, //标签宽度
            width: 300,
            labelAlign:'right',
            msgTarget:'side'

        },
        renderTo: Ext.getBody(),
        items:[{
            fieldLabel:'产品名称',
            xtype: 'textfield',
            name : 'productName',
            value :' U盘' //同步加载数据
        }, {
            fieldLabel:'金额',
            xtype: 'numberfield',
            name : 'price',
            value :'100' //同步加载数据
        },{
            fieldLabel:'生产日期',
            xtype: 'datefield',
            format: 'Y年m月d日', //显示日期格式
            name : 'date',
            value: new Date()
            //value :' U盘' //同步加载数据
        },{
            //fieldLabel:'产品名称',
            xtype: 'hidden',
            name : 'productId',
            value :'001' //同步加载数据
        } ,{
            fieldLabel:'产品简介',
            xtype: 'textarea',
            name : 'introduction'
            //value :' U盘' //同步加载数据
        }

        ],
        buttons:[{
            text:'加载简介',
            handler:loadIntroduction
        }]

    });
    function loadIntroduction(){
        var params = productForm.getForm().getValues();
        productForm.getForm().load({
            params : params,//传递参数
            url : 'productServer.jsp', //请求的url地址
            method: 'GET', //请求方式
            success : function(form ,action) {
                Ext.Msg.alert('提示' ,'产品简介加载成功');
            },
            failure: function(form,action) {
                Ext.Msg.alert('提示','产品简介加载失败<br> 失败原因：' +action.result.errorMessage);
            }
        })

    }
});