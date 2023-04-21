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
        <div class="mt-6">
          <div class="card-title" style="justify-content: space-between;cursor: pointer;">
            <h1 class="text-h5 pl-4" style="color: rgb(24, 78, 129);"><span>P</span>ROFESSOR</h1>
          </div>
          <hr/>
          <div class="pa-2" style="display: flex; flex-direction: row;flex-wrap: wrap;">
            <v-card
              max-width="280"
              style="display: flex; align-items: center;"
              class="flex-column pa-2 ma-2"
            >
              <v-img
                src="../../images/photo.jpg"
              />
              <v-card-subtitle class="font-weight-bold text-h5 pb-0">Shuai Wang</v-card-subtitle>
              <v-card-text class="text--primary text-body-1 pt-0 pb-0" style="text-align: center;">Researcher</v-card-text>
              <v-card-text class="text--primary text-subtitle-2 pt-0" style="text-align: center;">
                <a href="https://scholar.google.com/citations?user=xUC3rsQAAAAJ&hl=zh-CN" style="text-decoration: none;">https://scholar.google.com/citations?user=xUC3rsQAAAAJ&hl=zh-CN</a>
              </v-card-text>
            </v-card>
            <div class="pa-4 ma-4" style="font-size: 16px; width: 70%;;">              
              <strong>Shuai Wang</strong> received his Ph.D. from the University of Chinese Academy of Sciences in 2017, and then served as an assistant researcher at the State Key Laboratory of Robotics, Shenyang Institute of Automation, Chinese Academy of Sciences, a postdoctoral researcher at the University of North Carolina at Chapel Hill (UNC), a visiting researcher at the National Institutes of Health (NIH), and a researcher at Shandong University. He is currently a researcher at Hangzhou Dianzi University.
              <br>
              <strong> Research interests:</strong> medical imaging artificial intelligence, machine vision, big data analysis.
              <br>
              <strong> Scientific research projects:</strong> presided over 2 projects of the National Natural Science Foundation of China, 2 provincial and ministerial projects, and 1 horizontal project. As the main participant, he participated in 1 major project (innovation group) of Zhejiang Natural Science Foundation.
              <br>
              <strong> Publications:</strong> He has published more than 50 high-level academic papers, including more than 30 in SCI.
              <br>
              <strong>Academic awards:</strong> won the second and third prizes of Liaoning Provincial Natural Science Academic Achievement Award and ICIP Travel Grant, a well-known international conference on image processing.
              <br>
              <strong>Academic appointments:</strong> Invited associate editor of Frontiers in Neuroinformatics and Artificial Intelligence in Radiology; IJCAI, AAI and other CCF-A conference PC members; President of the International Conference IPODT General Assembly, Chairman of ICIRA Chapter.
              <br>
              <strong>Student development:</strong> Mentoring students to the silver medal of Kaggle UW-Madison GI Tract Image Segmentation (ranked 54/1548 worldwide); Kaggle HuBMAP + HPA - Silver Medal for Hacking the Human Body (ranked 31/1175 worldwide); China International "Internet +" College Students Innovation and Entrepreneurship Competition Silver Award.
            </div>
          </div>
        </div>
        <div class="mb-2 mt-8" style="flex-wrap: wrap;">
          <div class="card-title" style="justify-content: space-between;cursor: pointer;">
            <h1 class="text-h5 pl-4" style="color: rgb(24, 78, 129);"><span>S</span>TUDENTS</h1>
          </div>
          <hr/>
        </div>
        <div class="mb-2 mt-8" style="flex-wrap: wrap;">
          <div class="card-title" style="justify-content: space-between;cursor: pointer;">
            <h1 class="text-h5 pl-4" style="color: rgb(24, 78, 129);"><span>A</span>LUMNI</h1>
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
          {{ new Date().getFullYear() }} — Hangzhou Dianzi University
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