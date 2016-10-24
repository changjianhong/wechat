var app = getApp();

Page({
  data:{
    books:[]
  },

  onLoad:function(o) {
    var _this = this;
    app.server.findBooks({id:"123"}).then(d => {
      _this.setData({books:d.books})
    }).catch(e => {
      console.log(e);
    });
  },

  refreshData: function() {
    var book = {title:"title", author:"changjianhong", chapter:"18"};
    app.server.insertBook(book).then(d => {
      console.log(d);
    }).catch(e => {
      console.log(e);
    });
  },

  loadData: function() {
    console.log("load data");
  }
})