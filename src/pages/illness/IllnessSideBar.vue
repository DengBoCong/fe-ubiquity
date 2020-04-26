<template>
  <dv-border-box-8 :color="['#E6E6E6', '#1990FF']" style="width:100%;height:980px;padding:10px;">
    <el-container style="width:100%;padding:10px;">
      <el-dropdown @command="handleCommand" style="margin-left:70px;margin-top:20px;">
        <span class="el-dropdown-link">
          新型冠状病毒肺炎<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="新型冠状病毒肺炎">新型冠状病毒肺炎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-container>
    <el-container>
      <el-divider></el-divider>
    </el-container>
    <el-container>
      <div class="block">
        <el-timeline style="margin-left:20px;">
          <el-timeline-item timestamp="" placement="top">
            <el-card>
              <b>累积确诊 <span style="color:#FF0000;">{{ oyes1 }}</span> 例</b>
              <p>相较于上日 <span style="color:#FF0000;">+{{ oyes12 }}</span> 例</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="" placement="top">
            <el-card>
              <b>现有确诊 <span style="color:#FFB628;">{{ oyes2 }}</span> 例</b>
              <p>相较于上日 <span style="color:#FFB628;">+{{ oyes22 }}</span> 例</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="" placement="top">
            <el-card>
              <b>死亡 <span style="color:#000000;">{{ oyes3 }}</span> 例</b>
              <p>相较于上日 <span style="color:#000000;">+{{ oyes32 }}</span> 例</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="" placement="top">
            <el-card>
              <b>死亡 <span style="color:#00C481;">{{ oyes4 }}</span> 例</b>
              <p>相较于上日 <span style="color:#00C481;">+{{ oyes42 }}</span> 例</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-container>
    <el-container style="margin-left:70px;margin-top:20px;">
      <el-dropdown @command="handleCommand1">
        <el-button type="primary">
          国外疫情<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="国外疫情">国外疫情</el-dropdown-item>
          <el-dropdown-item command="国内疫情">国内疫情</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-container>
    <el-container>
      <el-divider></el-divider>
    </el-container>
    <el-container>
      <div class="block" style="margin-left:40px;">
        <div class="radio">
          排序：
          <el-radio-group v-model="reverse">
            <el-radio :label="true">倒序</el-radio>
            <el-radio :label="false">正序</el-radio>
          </el-radio-group>
        </div>
        <el-timeline :reverse="reverse" style="margin-top:20px;">
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp">
            {{activity.content}}
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-container>
  </dv-border-box-8>
</template>

<script>
export default {
  name: "IllnessSideBar",
  components: {
    //
  },
  inject:['reload'],
  data() {
    return {
      oyes1: 2562533,
      oyes12: 78680,
      oyes2: 1728105,
      oyes22: 45702,
      oyes3: 179815,
      oyes32: 6556,
      oyes4: 654613,
      oyes42: 26422,

      count: 1,
      count1: 1,

      value: 50,
      radio: 3,
      num: 3.50,
      num: 4.50,
      value3: [122.3507919, 124.0002823],
      value4: [41.08805847, 42.50167847],
      value1: true,
      value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      startTime: '',
      endTime: '',
      inputVisible: false,
      inputValue: '',
      reverse: true,
      activities: [{
        content: '数据创建完毕',
        timestamp: '2020-04-23 00:13:31'
      },{
        content: '从数据库备份完成',
        timestamp: '2020-04-23 16:13:22'
      },{
        content: '正在同步数据库数据',
        timestamp: '2020-04-23 16:12:51'
      }, {
        content: '正在请求数据',
        timestamp: '2020-04-23 16:12:03'
      }, {
        content: '数据接口无误',
        timestamp: '2020-4-23 16:11:37'
      }]
    }
  },
  methods: {
    handleCommand(command) {
      if(this.count == 1) {
        this.$notify({
          title: '注意',
          message: '当前数据已处在 ' + command + ' 访问接口中！若继续选择，将重新获取并整理数据！',
          type: 'warning'
        });
        this.count = this.count - 1;
      } else {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(255, 255, 255, 0.7)'
        });
        setTimeout(() => {
          loading.close();
          this.reload();
        }, 8000);
      }
    },
    handleCommand1(command) {
      if(this.count1 == 1) {
        this.count1 = 0;
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(255, 255, 255, 0.7)'
        });
        setTimeout(() => {
          loading.close();
          this.oyes1 = 84303;
          this.oyes12 = 15;
          this.oyes2 = 1495;
          this.oyes22 = 90;
          this.oyes3 = 4642;
          this.oyes32 = 0;
          this.oyes4 = 78166;
          this.oyes42 = 105;
        }, 3000);
      }else {
        this.count1 = 1;
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(255, 255, 255, 0.7)'
        });
        setTimeout(() => {
          loading.close();
          this.oyes1 = 2562533;
          this.oyes12 = 78680;
          this.oyes2 = 1728105;
          this.oyes22 = 45702;
          this.oyes3 = 179815;
          this.oyes32 = 6556;
          this.oyes4 = 654613;
          this.oyes42 = 26422;
        }, 3000);
      }
    },
    open2(text) {
      this.$message({
        message: text,
        type: 'success'
      });
    },
    open() {
      this.$prompt('你所修改内容存在风险，请输入安全密码确认', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /andie130857?/,
        inputType: "password",
        inputErrorMessage: '密码格式不正确'
      }).then(({ value }) => {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(255, 255, 255, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 5000);
        setTimeout(() => {
          this.reload();
        }, 6000);
        setTimeout(() => {
          this.$message({
            type: 'success',
            message: '更新完成，这次更新的是 更新频率 数据集'
          });
        }, 7000);
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消更新'
        });       
      });
    }
  }
}
</script>

<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>