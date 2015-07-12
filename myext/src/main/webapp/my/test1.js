
 Ext.onReady(function(){
    var config = {
        title: 'case1',
        msg   : 'very easy ，hands on'
    }
     //Ext.Msg.show(config);
     Ext.MessageBox.alert('提示','惦记我回调呢,', callback);
     function callback(id) {
         Ext.Msg.alert('yes','单击的ID是：' + id)
     }



    }    );