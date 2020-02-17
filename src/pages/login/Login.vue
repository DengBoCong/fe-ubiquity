<template>
  <div class="login">
    <div class="login-con">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>欢迎登录 Ubiquity</span>
        </div>
        <div>
          <LoginForm></LoginForm>
        </div>
      </el-card>
    </div>
  </div>
</template>
// <div class="login">
//     <div class="login-con">
//       <Card icon="log-in" title="欢迎登录" :bordered="false">
//         <div class="form-con">
//           <login-form @on-success-valid="handleSubmit"></login-form>
//           <p class="login-tip">输入任意用户名和密码即可</p>
//         </div>
//       </Card>
//     </div>
//   </div>
<script>
import LoginForm from 'components/common/login-form/LoginForm'
import { mapActions } from 'vuex'
export default {
  components: {
    LoginForm
  },
  // methods: {
  //   ...mapActions([
  //     'handleLogin',
  //     'getUserInfo'
  //   ]),
  //   handleSubmit ({ userName, password }) {
  //     this.handleLogin({ userName, password }).then(res => {
  //       this.getUserInfo().then(res => {
  //         this.$router.push({
  //           name: this.$config.homeName
  //         })
  //       })
  //     })
  //   }
  // }
}
</script>

<style lang="less">
  @import './login';
</style>
