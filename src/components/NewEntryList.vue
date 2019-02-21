<template>
  <div class="page">
    <button class="btn btn-primary btn-sm addBox" @click="addBox">添加</button>
    <button class="btn btn-danger btn-sm delAll" @click="delAll">批量删除</button>
    <table class="table table-bordered">
      <thead>
      <tr>
        <td><input type="checkbox" @click="allSelect" v-model="checked"></td>
        <td>ID</td>
        <td>名称</td>
        <td>图片</td>
        <td>声音</td>
        <td>视频</td>
        <td>操作</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item,index in list">
        <td><input type="checkbox" v-model="selected" v-bind:value="item.name"></td>
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.picture}}</td>
        <td>{{item.sound}}</td>
        <td>{{item.video}}</td>
        <td><button @click="del(index)" class="btn btn-danger btn-sm">删除</button>
          <button @click="update(index)" class="btn btn-info btn-sm">编辑</button></td>
      </tr>
      </tbody>
    </table>
    <fieldset v-show="seen">
      <legend>新增词条</legend>
      <div>
        <p>
          <label>名称:</label>
          <input type="text" v-model="newEntry.name" placeholder="请输入名称" id="name">
        </p>
        <p>
          <label>图片:</label>
          <input type="text" v-model="newEntry.picture" placeholder="请选择图片文件">
        </p>
        <p>
          <label>声音:</label>
          <input type="text" v-model="newEntry.sound" placeholder="请选择声音文件">
        </p>
        <p>
          <label>视频:</label>
          <input type="text" v-model="newEntry.video" placeholder="请选择视频文件">
        </p>
        <p>
          <button class="btn btn-info btn-sm cancel" @click="cancel">取消</button>
          <button class="btn btn-success btn-sm submit" @click="add">提交</button>
        </p>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      seen: false,
      checked:false,
      selected:[],
      newEntry: {},
      list:[
          {
          id:1001,
        name:"哈士奇",
        picture:"哈士奇.png",
        sound:"哈士奇.mp3",
        video:"哈士奇.mvb"
      },{
        id:1002,
        name:"猫咪",
        picture:"猫咪.png",
        sound:"猫咪.mp3",
        video:"猫咪.mvb"
      },{
        id:1003,
        name:"青蛙",
        picture:"青蛙.png",
        sound:"青蛙.mp3",
        video:"青蛙.mvb"
      },{
        id:1004,
        name:"大象",
        picture:"大象.png",
        sound:"大象.mp3",
        video:"大象.mvb"
      }]
    }
  },
  methods:{
    addBox: function () {
      this.seen = !this.seen;
    },
    add: function () {
        if(!this.newEntry.name){
          return
        }
      this.list.push(this.newEntry);
      this.newEntry = {};
      this.seen = false;
    },
    cancel: function () {
      this.newEntry = {};
      this.seen = false;
    },
    delAll: function () {

    },
    allSelect: function () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page {
    margin: 20px;
  }
  table {
    text-align: center;
    margin-top: 20px;
  }
  fieldset {
    z-index: 1;
    position: absolute;
    top: 50px;
    left: 50%;
    margin-left: -100px;
    background: #f5b3f3;
    padding: 20px;
    text-align: center;
    font-size: 12px;
  }
  input[type=text] {
    outline: none;
    border: none;
    padding: 5px;
    box-sizing: border-box;
    height: 25px;
    width: 180px;
    font-size: 12px;
  }
</style>
