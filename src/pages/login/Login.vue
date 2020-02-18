<template>
  <div class="login">
    <div class="login-con">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>欢迎登录 Ubiquity</span>
        </div>
        <div>
          <LoginForm @on-success-valid="handleSubmit"></LoginForm>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
import LoginForm from 'components/common/login-form/LoginForm'
import { mapActions } from 'vuex'
export default {
  components: {
    LoginForm
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit ({ platform, account, password, isStorage }) {
      this.handleLogin({ platform, account, password, isStorage }).then(res => {
        // this.getUserInfo().then(res => {
        //   this.$router.push({
        //     name: this.$config.homeName
        //   })
        // })
        this.$router.push({
          name: this.$config.homeName
        })
      })
    }
  }
}
</script>

<style lang="less">
  @import './login';
</style>
