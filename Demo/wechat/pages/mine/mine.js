var app = getApp();
var  
    touchStartPointY = 0,
    touchMovePointOffsetY = 0,
    originHeight = 0;

Page({
  data:{
    userInfo: {
        nickName:"",
        avatarUrl:"",
        gender:"",
        province:"",
        city:"",
    },
    headHeight:400,
    actionSheetHidden:true,
    actionSheetItems: ["相册", "相机"],
    showimg: {
        hidden:true,
        image:"",
        animation:"",
        bgAnimation:"",
        width:120,
        height:120,
        left:158,
        top:0
    },
    category:[
            {
                category_item:[
                    {img:"../../images/photo.png",name:"相册",url:""},
                    {img:"../../images/sc_2.png",name:"收藏",url:""},
                    {img:"../../images/money.png",name:"钱包",url:""},
                    {img:"../../images/card.png",name:"卡包",url:""}
                ]
            },{
                category_item:[
                    {img:"../../images/bq_2.png",name:"表情",url:""}, 
                ]
            },{
                category_item:[
                    {img:"../../images/setting.png",name:"设置",url:""}
                ]
            },
        ]
  },

  onLoad: function() {
      var _this = this;
      app.getUserInfo().then(function(userInfo) {
          _this.setData({
              userInfo:userInfo
          })
      }).catch(function(e) {
          console.log(e);
      });
  },

  //head background animation
  touchstart: function(e) {
      originHeight = 400;
      touchStartPointY = e.touches[0].screenY;
  },
  touchmove: function(e) {
      var pointY = e.touches[0].screenY;
      var height = originHeight + pointY - touchStartPointY
      this.setData({
          headHeight:height
      });
  },
  touchend: function(e) {
      var animation = wx.createAnimation({
          duration:300,
          timingFunction:"ease",
      });
      animation.height("400rpx").step();
      this.setData({
          animation: animation.export(),
      });
  },

  //change  avatar
  _isLongTaping:false,
  changeAvatar: function(e) {
      this._isLongTaping = true;
      this.setData({
          actionSheetHidden:false
      });
  },
  actionSheetItemTap :function(e) {
      var _this = this;
      var name = e.currentTarget.dataset.name;
      var chooseParam = {count: 1, sizeType: ['original', 'compressed']};
      if (name === "相册") {
          chooseParam.sourceType = ['album'];
      } else {
          chooseParam.sourceType = ['camera'];
      }
      app.wechat.chooseImage(chooseParam).then(res => {
          var userInfo = _this.data.userInfo;
          userInfo.avatarUrl = res.tempFilePaths[0];
          _this.setData({
              userInfo:userInfo
          })
          this.actionSheetCancel();
      }).catch(err => {
          console.log(err);
          this.actionSheetCancel();
      })
  },
  actionSheetCancel: function() {
      this._isLongTaping = false;
      this.setData({
          actionSheetHidden:true
      });
  },
  




  //showimg animation
  avatarTap: function(e) {     
      if (this._isLongTaping) return;
      var _this = this; 
      var animation = wx.createAnimation({
          duration:350
      });
      animation.translateY(200).scale(750/120).step();

      var showimg = this.data.showimg;
      showimg.hidden = !showimg.hidden;
      showimg.left = e.target.offsetLeft;
      showimg.image = this.data.userInfo.avatarUrl;
      this.setData({showimg:showimg});

      showimg.animation = animation.export();
      setTimeout(function() {
          _this.setData({showimg:showimg});
      }, 10);
  },
  showimgTap: function(e) {
      var _this = this;
      var showimg = this.data.showimg;
      var animation = wx.createAnimation();
      animation.translateY(0).scale(1.0).step();
      showimg.animation = animation.export();

      animation.opacity(0).translateY(0).step();
      showimg.bgAnimation = animation.export();
      this.setData({showimg:showimg});

      animation.opacity(1.0).step();
      showimg.bgAnimation = animation.export();
      showimg.hidden = !showimg.hidden;
      setTimeout(function() {
          _this.setData({showimg:showimg});
      }, 400);
  },


  goPage: function() {
      
  }
});