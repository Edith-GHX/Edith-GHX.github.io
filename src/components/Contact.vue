<template>
  <div class="container">
    <header>
      <v-toolbar style="height:82px;display: fixed;background-color: #8ac5ff;">
        <div class="d-flex align-center" style="position: absolute; margin: 4px 0px; padding: 0px 16px; height: 74px; top: 0%; left: 0%; transform: translate(0%, 0%) scale(1); cursor: pointer;">
          <img src="../images/logo.png" class="mr-2" style="height: 74px;">
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

    <div class="content" style="margin-bottom: 100px;">
      <h1 class="text-h5 pl-8 mt-8" style="color: rgb(24, 78, 129);">联系我们</h1>
      <div style="display: flex; flex-direction: row;flex-wrap: wrap;">
        <div style="display: flex; flex-direction: column; gap: 16px;" class="ml-8 mt-6">
          <div style="display: flex; gap:10px;">
            <v-icon style="font-size: 30px;">mdi-map-marker</v-icon>
            <div style="width: 300px;">浙江省杭州市杭州经济开发区白杨街道2号大街1158号 杭州电子科技大学</div>
          </div>
          <div style="display: flex; gap:10px;">
            <v-icon style="font-size: 30px;">mdi-account-box</v-icon>
            <div style="width: 300px;">联系人：孙老师</div>
          </div>
          <div style="display: flex; gap:10px;">
            <v-icon style="font-size: 30px;">mdi-email</v-icon>
            <div style="width: 300px;">syq@hdu.edu.cn</div>
          </div>
          <div style="display: flex; gap:10px;">
            <v-icon style="font-size: 30px;">mdi-phone</v-icon>
            <div style="width: 300px;">0571-86878691</div>
          </div>
        </div>
        <div class="ml-12 mt-6">
          <v-img src="../images/location.png" width="700px"></v-img>
        </div>
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
        {{ new Date().getFullYear() }} — <strong>杭州电子科技大学智能信息处理实验室</strong>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
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
</style>