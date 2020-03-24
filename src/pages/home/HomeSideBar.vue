<template>
  <dv-border-box-8 :color="['#E6E6E6', '#1990FF']" style="width:100%;height:980px;">
    <el-container>
      <el-main>
        <el-container>
          <dv-decoration-9 style="width:150px;height:150px;left:70px;">66%</dv-decoration-9>
        </el-container>
        <el-container>
          <el-divider></el-divider>
        </el-container>
        <el-container>
          <el-main>
            <el-container>
              <el-divider></el-divider>
              <el-popover
                placement="top-start"
                title="标题"
                width="200"
                trigger="hover"
                content="作者信息：DengBoCong......">
                <el-button slot="reference">Ubiquity</el-button>
              </el-popover>
              <el-divider></el-divider>
            </el-container>
            <el-container style="color:#606266;font-size:10px;">交通时空大数据分析挖掘系统 1.3.6，旨在最大程度整合出行数据，完成交通分析。以手机信令数据为对象，现有的大数据体系架构和大数据服务组织为基础。完成交通分析，大数据分析模型和算法的研制，实现人口的出行分析，驻留分析，人群密度分析和出行方式分析等。</el-container>
          </el-main>
        </el-container>
        <el-container>
          <el-divider></el-divider>
        </el-container>
        <el-container style="padding:0;">
          <dv-capsule-chart :config="config" style="width:100%;height:200px;color:#000000" />
        </el-container>
      </el-main>
    </el-container>
  </dv-border-box-8>
  
</template>

<script>
export default {
  name: "HomeSideBar",
  components: {
    //
  },
  data() {
    return {
      value: 50,
      value1: true,
      value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      startTime: '',
      endTime: '',
      config: {
        data: [
          {
            name: '南阳',
            value: 167
          },
          {
            name: '周口',
            value: 67
          },
          {
            name: '漯河',
            value: 123
          },
          {
            name: '郑州',
            value: 55
          },
          {
            name: '西峡',
            value: 98
          },
        ],
        unit: '单位'
      }
    }
  }
}
</script>

<style>

</style>