
    /**
 * Created by lili on 15/7/12.
 */

    Ext.onReady(function(){
        var ProgressBar = new Ext.ProgressBar({
            text:'使用RenderTo为进度条定位',
            width:300,
            renderTo:'ProgressBar1'
            //applyTo:'ProgressBar1'
        })
        ProgressBar.wait({
            duration :10000,
            interval:1000,
            increment:10,
            text:'waiting...',
            scope:this,
            fn:function(){
                alert('更新完毕！');
            }

        });
//var ProgressBar =

});
/* 手工更新
 Ext.onReady(function(){
    var ProgressBar = new Ext.ProgressBar({
        text:'使用RenderTo为进度条定位',
        width:300,
        renderTo:'ProgressBar1'
    });
    var count =0 ;//滚动条被刷新的次数
    var percentage=0; //进度百分比
    var progressText= ''; //进度条信息
    Ext.TaskManager.start({
        run:function(){
            count++;
            if(count >10) {
                ProgressBar.hideAll();
            }
            percentage = count/10;
            progressText=percentage *100 +'%';
            ProgressBar.updateProgress(percentage,progressText,true);
        },
        interval:1000,//间隔时间
        repeat : 13 //设置执行此时
    })
});
*/
