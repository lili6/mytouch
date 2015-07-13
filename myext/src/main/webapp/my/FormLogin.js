/**
 * Created by lili on 15/7/13.
 */
Ext.onReady(function(){
    Ext.tip.QuickTipManager.init();
    var loginForm = Ext.create('Ext.form.Panel',{
        title:'表单提交实例',
        width:230,
        frame:true,
        fieldDefaults:{
            labelSeparator: ':',
            labelWidth: 50,
            msgTarget:'side',
            width:200
        },
        renderTo:Ext.getBody(),
        bodyPadding: 5,
        defaultType:'textfield',//设置表格的默认类型
        items:[{
            fieldLabel:'用户名',
            name:'userName',
            allowBlank:false,
            vtype:'email'
        },{
            fieldLabel :'密码',
            name:'password',
            inputType:'password',
            allowBlank: false
        }
        ],
        buttons:[{
            text:'登录',
            handler:login
        },{
            text:'重置',
            handler:reset
        }

        ]
    });
    function login(){
        loginForm.getForm().submit({
            clientValidation:true,//进行客户端验证
            url:'loginServer.jsp',//请求url地址
            method:'GET',
            success : function(form,action){
                Ext.Msg.alert('提示','系统登录成功');
            },
            failure : function(form,action){
                Ext.Msg.alert('提示','系统登录失败，原因：' + action.result.errors.password);//与response中json格式一致
            }

        });
    }
    function reset(){
        loginForm.form.reset();
    }
});