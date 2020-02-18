<template>
  <el-form :model="from" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
    <el-form-item prop="platform">
      <el-select v-model="from.platform" placeholder="请选择登录平台" class="width">
        <el-option label="大数据可视化平台" value="viewPlatform"></el-option>
        <el-option label="主控制台" value="backPlatform"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item prop="account"><!--label="登录账户"-->
      <el-input v-model="from.account" autocomplete="off" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="from.password" autocomplete="off" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item label="保存密码" prop="isStorage" label-width="200px">
      <el-switch v-model="from.isStorage"></el-switch>
    </el-form-item>
    <el-form-item>
      <el-button class="width" type="primary" @click="submitForm('ruleForm')">登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  import rules from '../../../utils/rules'

  export default {
    name: 'LoginForm',
    props: {
      
    },
    data() {
      return {
        from: {
          account: '',
          platform: '',
          password: '',
          isStorage: false,
        },
        rules: {
          account: rules.checkPhone,
          password: rules.checkPwd,
          platform: [
            { required: true, message: '请选择登录平台', trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // console.log(platform+" "+account+" "+password+" "+isStorage );
            this.$emit('on-success-valid', {
              platform: this.from.platform,
              account: this.from.account,
              password: this.from.password,
              isStorage: this.from.isStorage,
            })
          } else {
            console.log('提交失败');
            return false;
          }
        });
      }
    },
    computed: {
      
    }
  }
</script>

<style>
  .width{
    width: 100%;
  }
</style>