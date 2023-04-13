<template>
    <div class="container">
      <header>
        <v-toolbar style="height:82px;display: fixed;background-color: #8ac5ff;">
          <div class="d-flex align-center" style="position: absolute; margin: 4px 0px; padding: 0px 16px; height: 74px; top: 0%; left: 0%; transform: translate(0%, 0%) scale(1); cursor: pointer;">
            <img src="../../images/logo.png" class="mr-2" style="height: 74px;">
            <div style="width: 400px; visibility: visible;color: white;">
              <span class="text-h5 font-weight-bold">医学影像人工智能实验室</span><br>
              <span class="subtitle-1" style="line-height: 1.2rem; font-size: 12px;">Laboratory of Artificial Intelligence in Medical Imaging</span>
            </div>
          </div>
          <div style="position: absolute;top: 34px;right: 0px; margin-right: 16px;height: 78px;opacity: 1;">
            <v-tabs background-color="#8ac5ff">
              <v-tab to="/Home">
                <span style="font-size: 1.1rem; font-family: Roboto,sans-serif; color: white;">首页</span>
              </v-tab>
              <v-tab to="/Search" class="pl-4 pr-4">
                <span style="font-size: 1.1rem; font-family: Roboto,sans-serif; color: white;">研究方向</span>
              </v-tab>
              <v-tab to="/News" class="pl-4 pr-4">
                <span style="font-size: 1.1rem; font-family: Roboto,sans-serif; color: white;">研究成果</span>
              </v-tab>
              <v-tab to="/Team" class="pl-4 pr-4">
                <span style="font-size: 1.1rem; font-family: Roboto,sans-serif; color: white;">团队成员</span>
              </v-tab>
              <v-tab to="/Contact" class="pl-4 pr-4">
                <span style="font-size: 1.1rem; font-family: Roboto,sans-serif; color: white;">联系我们</span>
              </v-tab>
            </v-tabs>
            </div>
        </v-toolbar>
      </header>
  
      <div class="content">
        <v-tabs background-color="transparent" style="margin-top: 20px; margin-left: 50px; margin-right: 50px; width: auto;">
          <v-tab class="text-h5 font-weight-bold" to="/Search/All"> 所有方向 </v-tab>
          <v-tab class="text-h5 font-weight-bold" to="/Search/MIS"> 医学图像分割 </v-tab>
          <v-tab class="text-h5 font-weight-bold" to="/Search/DD"> 疾病诊断预测 </v-tab>
          <v-tab class="text-h5 font-weight-bold" to="/Search/OD"> 医学目标检测 </v-tab>
        </v-tabs>
        <div class="flexCont" style="display: flex;flex-wrap: wrap;flex-direction: row;justify-content: space-between;margin:auto;width: 90%;">
            <v-card>
              <v-img
                class="white--text align-end"
                height="200px"
                src="../../images/pic1-q.png"
              >
              </v-img>
              <v-card-subtitle class="pb-0">淋巴结检测</v-card-subtitle>
              <v-card-text class="text--primary">
                <div>xxx</div>
                <div>xxxx</div>
              </v-card-text>
            </v-card>
          </div>
      </div>
  
  
      <v-footer
        class="font-weight-medium primary lighten-3 mt-16"
      >
        <v-col
          cols="12"
          class="text-center white--text"
        >
          {{ new Date().getFullYear() }} — 杭州电子科技大学智能信息处理实验室
        </v-col>
      </v-footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchPage',
    props: {
      msg: String
    },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .container{
  margin-left: 0px;
  margin-right: 0px;
  padding: 0px;
  width: 100%;
  max-width: none;
  min-width: none;
  }
  .card-title{
    align-items: center;
    display: flex;
    flex-wrap: wrap;
  }
  .card-title span{
    font-size: 36px;
    font-weight: bold;
  }

  .flexCont div{
    width: 350px;
    margin-top: 30px;
  }
  </style>