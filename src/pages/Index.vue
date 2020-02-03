<template>
  <div class="index">
    <mt-header class="header" title="岚皋县出入登记">
        <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="form">
        <mt-field label="姓名" placeholder="请输入姓名"></mt-field>
        <mt-field label="性别" placeholder="请输入性别"></mt-field>
        <mt-field label="年龄" placeholder="请输入年龄"></mt-field>
        <mt-field label="联系方式" placeholder="请输入联系方式"></mt-field>
        <mt-field label="乘坐车次" placeholder="请输入乘坐车次"></mt-field>
        <mt-field label="身份证号" placeholder="请输入身份证号"></mt-field>
        <mt-field label="车牌号" placeholder="请输入车牌号"></mt-field>
        <mt-field label="" placeholder=""></mt-field>
    </div>
    <div class="submit">
        <mt-button class="submit-btn" @click.native="handleClick" type="primary">确认</mt-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'index',
  data(){
    return {
    }
  },
  created(){
    // this.$axios.get('/getUser').then((data)=>{
    //   const result = data.data;
    //   this.users = JSON.stringify(result);
    // });
  },
  components: {
    
  }
}
</script>

<style>
.full{
    width: 100%;
}
.index .form{
    margin-top: 48px;
}
.index .submit{
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
}
.index .submit-btn{
    width: 100%;
    background-color: #008000 !important;
}
.header{
    background-color: #000000 !important;
}
</style>
