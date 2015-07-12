/**
 * 会更新的进度条
 * Created by lili on 15/7/12.
 */

Ext.onReady(function(){
    var msgBox = Ext.MessageBox.show({
        title:'提示',
        msg:'动态更新的信息文字',
        modal:true,
        buttons:Ext.Msg.OK,
        fn:function(){
            Ext.TaskManager.stop(task);
        }
    });
    var task = {
        run:function(){
            msgBox.updateText('会动的时间:'+Ext.util.Format.date(new Date(),'Y-m-d g:i:s A'));
        },
        interval:1000
    }
    Ext.TaskManager.start(task);
});