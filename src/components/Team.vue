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
        <div class="mt-6">
          <div class="card-title" style="justify-content: space-between;cursor: pointer;">
            <h1 class="text-h5 pl-4" style="color: rgb(24, 78, 129);"><span>教</span>授</h1>
            <h1 class="text-h6 pr-4" style="color: rgb(24, 78, 129);">PROFESSOR</h1>
          </div>
          <hr/>
          <div class="pa-2" style="display: flex; flex-direction: row;flex-wrap: wrap;">
            <v-card
              max-width="280"
              style="display: flex; align-items: center;"
              class="flex-column pa-2 ma-2"
            >
              <v-img
                src="../images/photo.jpg"
              />
              <v-card-subtitle class="font-weight-bold text-h5 pb-0">王帅</v-card-subtitle>
              <v-card-text class="text--primary text-subtitle-1 pt-0 pb-0" style="text-align: center;">Shuai Wang </v-card-text>
              <v-card-text class="text--primary text-body-1 pt-0 pb-0" style="text-align: center;">研究员, 博士生导师</v-card-text>
              <v-card-text class="text--primary text-subtitle-2 pt-0" style="text-align: center;">https://scholar.google.com/citations?user=xUC3rsQAAAAJ&hl=zh-CN</v-card-text>
            </v-card>
            <div class="pa-4 ma-4" style="font-size: 16px; width: 70%;;">              
              王帅，于2017年在中国科学院大学获得博士学位，而后分别在中国科学院沈阳自动化研究所机器人学国家重点实验室担任助理研究员、北卡罗来纳大学教堂山分校（UNC）担任博士后研究员、美国国立卫生研究院（NIH）担任客座研究员、山东大学担任研究员。现为杭州电子科技大学研究员。
              研究方向：医学影像人工智能、机器视觉、大数据分析。
              科研项目：主持国家自然科学基金项目2项、省部级项目2项、横向项目1项。作为主要参与人参与浙江省自然科学基金重大项目（创新群体）1项。
              论文发表：发表高水平学术论文50余篇，其中SCI收录30余篇。
              学术奖励：获得辽宁省自然科学学术成果奖二等奖、三等奖以及国际图像处理知名会议ICIP Travel Grant等。
              学术任职：担任Frontiers in Neuroinformatics及Artificial Intelligence in Radiology特邀副主编；IJCAI、AAAI等CCF-A类会议PC Member；国际会议IPODT大会主席、ICIRA分会主席。
              学生培养：指导学生获得Kaggle UW-Madison GI Tract Image Segmentation银牌（全球排名 54/1548）；Kaggle HuBMAP + HPA - Hacking the Human Body银牌（全球排名 31/1175）；中国国际“互联网+”大学生创新创业大赛银奖。
            </div>
          </div>
        </div>
        <div class="mb-2 mt-8" style="flex-wrap: wrap;">
          <div class="card-title" style="justify-content: space-between;cursor: pointer;">
            <h1 class="text-h5 pl-4" style="color: rgb(24, 78, 129);"><span>学</span>生</h1>
            <h1 class="text-h6 pr-4" style="color: rgb(24, 78, 129);">STUDENTS</h1>
          </div>
          <hr/>
        </div>
        <div class="mb-2 mt-8" style="flex-wrap: wrap;">
          <div class="card-title" style="justify-content: space-between;cursor: pointer;">
            <h1 class="text-h5 pl-4" style="color: rgb(24, 78, 129);"><span>校</span>友</h1>
            <h1 class="text-h6 pr-4" style="color: rgb(24, 78, 129);">ALUMNI</h1>
          </div>
          <hr/>
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
          {{ new Date().getFullYear() }} — 杭州电子科技大学智能信息处理实验室
        </v-col>
      </v-footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TeamPage',
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
.content{
  margin: auto;
  padding: 0px 60px 0px 60px;
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