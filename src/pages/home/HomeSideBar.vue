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
                title="DengBoCong"
                width="200"
                trigger="hover"
                content="作者信息：DengBoCong......">
                <el-button slot="reference">Ubiquity</el-button>
              </el-popover>
              <el-divider></el-divider>
            </el-container>
            <el-container style="color:#606266;font-size:10px;">交通时空大数据分析挖掘系统1.3.6，旨在以交通业务分析为指导，尽最大程度整合出行数据，对综合数据进行挖掘处理和分析工作。以手机信令数据为对象，现有的大数据体系架构和大数据服务组织为基础，完成交通分析，大数据分析模型和智能算法的研制。并通过人群密度、出行方式、驻留分析、病情监测等数据分析模块建设应用系统，专注政企服务型智能城市交通新场景，为行业管理、政府决策、企业运营和公众出行提供全面服务，形成数据和应用相结合的交通运输行业综合信息平台。</el-container>
          </el-main>
        </el-container>
        <el-container>
          <el-divider></el-divider>
        </el-container>
        <el-container style="padding:0;">
          <dv-capsule-chart :config="config" style="width:100%;height:300px;color:#000000" />
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
            name: '原始数据',
            value: 10169
          },
          {
            name: '无效数据',
            value: 137
          },
          {
            name: '模拟数据',
            value: 37920
          },
          {
            name: '含#*^数据',
            value: 9
          },
          {
            name: '有效数据',
            value: 9721
          },
          {
            name: '非当天数据',
            value: 280
          },
          {
            name: '残缺数据',
            value: 22
          },
          {
            name: '数据总和',
            value: 48089
          },
        ],
        //unit: '单位'
      }
    }
  }
}
</script>

<style>

</style>