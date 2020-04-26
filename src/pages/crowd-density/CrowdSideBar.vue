<template>
  <dv-border-box-8 :color="['#E6E6E6', '#1990FF']" style="width:100%;height:980px;padding:10px;">
    <el-container style="width:100%;padding:10px;">
      <el-tag
        :key="tag"
        v-for="tag in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)" style="margin-left:10px;">
        {{tag}}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput">添加标签</el-button>
    </el-container>
    <el-container>
      <el-divider></el-divider>
    </el-container>
    <el-container>
      <el-input
        placeholder="辽宁沈阳"
        :disabled="true">
      </el-input>
    </el-container>
    <el-container>
      <div class="block" style="width:100%;">
        <el-slider
          v-model="value3"
          range
          :max="130"
          :min="110">
        </el-slider>
      </div>
    </el-container>
    <el-container>
      <div class="block" style="width:100%;">
        <el-slider
          v-model="value4"
          range
          :max="45"
          :min="40">
        </el-slider>
      </div>
    </el-container>
    <el-container>
      <div class="demo-input-suffix">
        <el-input
          placeholder="123.3987808"
          suffix-icon="el-icon-edit"
          :disabled="true">
        </el-input>
        <el-input
          placeholder="41.79610062"
          suffix-icon="el-icon-edit"
          :disabled="true">
        </el-input>
      </div>
    </el-container>
    <el-container style="margin-top:30px;margin-left:30px;">
      <el-radio-group v-model="radio">
        <el-radio :label="3">原始</el-radio>
        <el-radio :label="6">模拟</el-radio>
        <el-radio :label="9">混合</el-radio>
      </el-radio-group>
    </el-container>
    <el-container style="margin-top: 30px;">
      <el-input-number v-model="num" :precision="2" :step="0.01" :max="10" style="width:100%;"></el-input-number>
    </el-container>
    <el-container style="margin-top: 30px;">
      <el-input-number v-model="num" :precision="2" :step="0.01" :max="10" style="width:100%;"></el-input-number>
    </el-container>
    <el-container style="margin-left:70px;margin-top:20px;">
      <el-button type="text" @click="open">点击提交 数据控制</el-button>
    </el-container>
    <el-container>
      <el-divider></el-divider>
    </el-container>
    <el-container style="padding:20px;">
      <div class="block">
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
    <!-- <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>属性控制</template>
        <el-menu-item index="1-1">
          <el-switch
            v-model="value1"
            active-text="按月付费"
            inactive-text="按年付费">
          </el-switch>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>时间控制</template>
        <el-menu-item index="2-1">
          <el-time-select
            placeholder="起始时间"
            v-model="startTime"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30'
            }">
          </el-time-select>
        </el-menu-item>
        <el-menu-item index="2-2">
          <el-time-select
            placeholder="结束时间"
            v-model="endTime"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30',
              minTime: startTime
            }">
          </el-time-select>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>源数据控制</template>
        <el-slider
          v-model="value"
          vertical
          height="200px">
        </el-slider>
        <el-slider
          v-model="value"
          show-input>
        </el-slider>
      </el-submenu>
    </el-menu> -->
  </dv-border-box-8>
</template>

<script>
export default {
  name: "CrowdSideBar",
  components: {
    //
  },
  inject:['reload'],
  data() {
    return {
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
      dynamicTags: ['密度', '#E6E6E6'],
      inputVisible: false,
      inputValue: '',
      reverse: true,
      activities: [{
        content: '数据创建完毕',
        timestamp: '2020-04-22 10:19:14'
      },{
        content: '已预设加入模拟数据',
        timestamp: '48089条'
      },{
        content: '数据有效率',
        timestamp: '95.56%'
      }, {
        content: '正在整理数据',
        timestamp: '2020-04-22 10:15:27'
      }, {
        content: '第一个数据采集时间',
        timestamp: '2018-10-03 00:00:04:916'
      }]
    }
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
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

</style>