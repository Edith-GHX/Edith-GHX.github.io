<template>
    <div class="container">
      <header>
        <v-toolbar style="height:82px;display: fixed;background-color: #8ac5ff;">
          <div class="d-flex align-center" style="position: absolute; margin: 4px 0px; padding: 0px 16px; height: 74px; top: 0%; left: 0%; transform: translate(0%, 0%) scale(1); cursor: pointer;">
            <img src="../../images/logo.png" class="mr-2" style="height: 74px;">
            <div style="width: 400px; visibility: visible;color: white;">
              <span class="text-h5 font-weight-bold">Laboratory of Artificial Intelligence in Medical Imaging</span><br>
            </div>
          </div>
          <div style="position: absolute;top: 34px;right: 0px; margin-right: 16px;height: 78px;opacity: 1;">
            <v-tabs background-color="#8ac5ff">
            <v-tab to="/en">
              <span style="font-size: 1.1rem; font-family: Roboto,sans-serif; color: white;">About</span>
            </v-tab>
            <v-tab to="/en/News" class="pl-4 pr-4">
              <span style="font-size: 1.1rem; font-family: Roboto,sans-serif; color: white;">News</span>
            </v-tab>
            <v-tab to="/en/Research" class="pl-4 pr-4">
              <span style="font-size: 1.1rem; font-family: Roboto,sans-serif; color: white;">Research</span>
            </v-tab>
            <v-tab to="/en/Results" class="pl-4 pr-4">
              <span style="font-size: 1.1rem; font-family: Roboto,sans-serif; color: white;">Publications</span>
            </v-tab>
            <v-tab to="/en/Team" class="pl-4 pr-4">
              <span style="font-size: 1.1rem; font-family: Roboto,sans-serif; color: white;">Team</span>
            </v-tab>
            <v-tab to="/en/Contact" class="pl-4 pr-4">
              <span style="font-size: 1.1rem; font-family: Roboto,sans-serif; color: white;">Contact</span>
            </v-tab>
            <v-tab to="/home" class="pl-4 pr-4">
              <span style="font-size: 1rem; font-family: Roboto,sans-serif; color: white; text-transform: none;">Chinese</span>
            </v-tab>
          </v-tabs>
          </div>
        </v-toolbar>
      </header>
  
      <div class="content" style="margin-bottom: 100px;">
        <v-tabs background-color="transparent" style="margin-top: 20px; margin-left: 50px; margin-right: 50px; width: auto;">
            <v-tab class="text-h6" style="text-transform:none" to="/en/Research"> Research </v-tab>
            <v-tab class="text-h6" style="text-transform:none" to="/en/Research/MIS"> Medical image segmentation </v-tab>
            <v-tab class="text-h6" style="text-transform:none" to="/en/Research/DD"> Disease diagnosis </v-tab>
            <v-tab class="text-h6" style="text-transform:none" to="/en/Research/OD"> Medical object detection </v-tab>
        </v-tabs>
        <div class="flexCont" style="display: flex;flex-wrap: wrap;flex-direction: row;justify-content: space-between;margin:auto;width: 90%;">
          <v-card>
            <v-img
              class="white--text align-end"
              height="200px"
              src="../../images/pic1-q.png"
            >
            </v-img>
            <v-card-subtitle class="pb-0">胃镜视频摘要</v-card-subtitle>
            <v-card-text class="text--primary">
              <div>xxx</div>
              <div>xxxx</div>
            </v-card-text>
          </v-card>
          <v-card>
            <v-img
              class="white--text align-end"
              height="200px"
              src="../../images/pic1-1.png"
            >
            </v-img>
            <v-card-subtitle class="pb-0">多示例疾病预测</v-card-subtitle>
            <v-card-text class="text--primary">
              <div>xxx</div>
              <div>xxxx</div>
            </v-card-text>
          </v-card>
          <v-card>
            <v-img
              class="white--text align-end"
              height="200px"
              src="../../images/pic1-r.png"
            >
            </v-img>
            <v-card-subtitle class="pb-0">在线学习疾病预测</v-card-subtitle>
            <v-card-text class="text--primary">
              <div>xxx</div>
              <div>xxxx</div>
            </v-card-text>
          </v-card>
        </div>
      </div>
  
  
      <v-footer
        absolute
        class="font-weight-medium primary lighten-3 pb-0"
        style="height: 50px;"
      >
        <v-col
          cols="12"
          class="text-center white--text pb-0 pt-0"
        >
          {{ new Date().getFullYear() }} — Hangzhou Dianzi University
        </v-col>
      </v-footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MISPage',
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