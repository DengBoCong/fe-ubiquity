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
        placeholder="辽宁沈阳 • 中山公园东站(公交站)"
        :disabled="true">
      </el-input>
    </el-container>
    <el-container style="height:400px;">
      <el-table
        :data="tableData.filter(data => !search || data.date.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
        max-height="400">
        <el-table-column
          label="地点"
          prop="date">
        </el-table-column>
        <el-table-column
          align="right">
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入地点搜索"/>
          </template>
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small">
              切换
            </el-button>
          </template>
        </el-table-column>
      </el-table>
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
  name: "SideBar",
  components: {
    //
  },
  inject:['reload'],
  data() {
    return {
      count: 10,
      loading: false,
      value: 50,
      radio: 3,
      value1: true,
      value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      startTime: '',
      endTime: '',
      dynamicTags: ['出行', '驻留'],
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
      }],
      tableData: [{
        date: '三台子(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '航空航天大学(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '奥体中心(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '沈阳站(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '沈阳北站(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '于洪广场(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '铁西广场(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '黎明广场(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '中街(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '青年大街(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '市府广场(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '南市场(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '青年公园(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '怀远门(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '金融中心(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '太原街(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '工业展览馆(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '岐山路(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '东中街(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '云峰北街(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '中医药大学(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '市图书馆(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '重型文化广场(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '北二路(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '皇姑屯(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '北陵公园(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '五里河(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '滂江街(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '胜利南街(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '兴华公园(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '新乐遗址(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '沈辽路(地铁站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '加油站(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '湖广公园南门(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '河沿村(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '创业(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '单家(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '荣鹏商厦(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '75中学(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '老边乡(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '平罗三村(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '招呼站(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '沙河村(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '金立得驾校(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '大屯(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '小营子(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '西北街派出所(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '双树(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '东大产业园(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '中色泵业(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '高力屯村(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '中山公园东站(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '和平大街八纬路站(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '中华路太原街站(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '北三路圣工街(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '马路湾北站(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '家具广场站(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '保工街南十四路站(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '北行站(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '中山广场东站(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '北市场西站(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '龙之梦旅游度假中心(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '叶家(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '上头子(公交站)',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      search: '',
    }
  },
  computed: {
    noMore () {
      return this.count >= 20
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
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
    },
    load () {
      this.loading = true
      setTimeout(() => {
        this.count += 2
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style>

</style>