/**
 * Created by lili on 15/7/15.
 */
Ext.application({
    name:'app',
    launch:function(){
        console.log('app started...');
         var task = new Ext.util.DelayedTask(function(){
            splashscreen.fadeOut({
                duration : 1000,
                remove: true
            });
            splashscreen.next().fadeOut({
            duration:1000,
            remove:true
        });
            console.log('App launched');

        });
        task.delay(2000);
        //task.delay(2000)
    },
    init:function(){
      splashscreen =   Ext.getBody().mask('Loading application','splashscreen');
        console.log('app init...');
    }
});