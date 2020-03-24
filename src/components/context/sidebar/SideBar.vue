<template>
  <dv-border-box-8 :color="['#E6E6E6', '#1990FF']" style="width:100%;height:980px;">
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
  data() {
    return {
      value: 50,
      value1: true,
      value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      startTime: '',
      endTime: ''
    }
  }
}
</script>

<style>

</style>