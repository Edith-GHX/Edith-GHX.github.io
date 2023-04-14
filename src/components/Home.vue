<template>
  <div>
      <div class="hero">
        <v-toolbar style="height:82px;display: fixed;background-color: transparent;box-shadow:none">
          <div style="position: absolute;top: 34px;right: 0px; margin-right: 16px;height: 78px;">
              <v-tabs background-color="transparent">
                <v-tab to="/Home">
                  <span style="font-size: 1.1rem; font-family: Roboto,sans-serif; color: white;">首页</span>
                </v-tab>
                <v-tab to="/Search/ALL" class="pl-4 pr-4">
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
        <div class="title-container">
          <!-- <p class="pre-title">One stop for global success</p> -->
          <v-img src="../images/logo.png" class="mt-2" width="74px" height="74px"></v-img>
          <div class="title">
            <span>医学影像人工智能实验室</span>
            <br>
            <span class="title-english">Laboratory of Artificial Intelligence in Medical Imaging</span>
          </div>
        </div>
      </div>

      <div class="about container w3-padding-large" id="about">
        <div class="text-one">
          <div class="card-title" style="justify-content: space-between;cursor: pointer;" @click="toSearch">
            <h1 class="text-h5" style="color: rgb(24, 78, 129); font-weight: bold;"><span>研</span>究方向</h1>
            <h3 style="font-size: 16px;">MORE</h3>
          </div>
          <hr style="margin-top: 0px">
          <div class="mt-8 mb-8" style="display: flex;">
            <div class="ml-4 mr-4 mr-xl-8" style="flex-shrink: 0; min-height: 264px;">
              <h1 class="text-h4" style="color: rgb(0, 120, 215);">医学图像分割</h1>
              <v-list>
                <v-list-item-group>
                  <v-list-item class="mb4" to="/Search/MIS">
                    <v-icon style="font-size: 16px" class="notranslate mr-2 mdi">mdi-square</v-icon>
                    <v-list-item-title class="text-h6">前列腺分割</v-list-item-title>
                  </v-list-item>
                  <v-list-item class="mb4" to="/Search/MIS">
                    <v-icon style="font-size: 16px" class="notranslate mr-2 mdi">mdi-square</v-icon>
                    <v-list-item-title class="text-h6">胃部疾病分割</v-list-item-title>
                  </v-list-item>
                  <v-list-item class="mb4" to="/Search/MIS">
                    <v-icon style="font-size: 16px" class="notranslate mr-2 mdi">mdi-square</v-icon>
                    <v-list-item-title class="text-h6">乳腺肿瘤分割</v-list-item-title>
                  </v-list-item>
                  <v-list-item class="mb4" to="/Search/MIS">
                    <v-icon style="font-size: 16px" class="notranslate mr-2 mdi">mdi-square</v-icon>
                    <v-list-item-title class="text-h6">头颈部分割</v-list-item-title>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>
            <div class="ml-4 mr-8" style="position: relative; overflow: hidden; flex-grow: 1; min-height: 150px; align-self: center;">
              <v-img src="../images/pic1-1.png" aspect-ratio="1.2"></v-img>
            </div>
          </div>
          <div class="mt-8 mb-8" style="display: flex;">
            <div class="ml-4 mr-4 mr-xl-8" style="flex-shrink: 0; min-height: 264px;">
              <h1 class="text-h4" style="color: rgb(229, 89, 52);">疾病诊断预测</h1>
              <v-list>
                <v-list-item-group>
                  <v-list-item class="mb4" to="/Search/DD">
                    <v-icon style="font-size: 16px" class="notranslate mr-2 mdi">mdi-square</v-icon>
                    <v-list-item-title class="text-h6">胃镜视频摘要</v-list-item-title>
                  </v-list-item>
                  <v-list-item class="mb4" to="/Search/DD">
                    <v-icon style="font-size: 16px" class="notranslate mr-2 mdi">mdi-square</v-icon>
                    <v-list-item-title class="text-h6">多示例疾病预测</v-list-item-title>
                  </v-list-item>
                  <v-list-item class="mb4" to="/Search/DD">
                    <v-icon style="font-size: 16px" class="notranslate mr-2 mdi">mdi-square</v-icon>
                    <v-list-item-title class="text-h6">在线学习疾病预测</v-list-item-title>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>
            <div class="ml-4 mr-8" style="position: relative; overflow: hidden; flex-grow: 1; min-height: 150px; align-self: center;">
              <v-img src="../images/wei.png" aspect-ratio="1.2"></v-img>
            </div>
          </div>
          <div class="mt-8 mb-8" style="display: flex;">
            <div class="ml-4 mr-4 mr-xl-8" style="flex-shrink: 0; min-height: 264px;">
              <h1 class="text-h4" style="color: rgb(118, 77, 195);">医学目标检测</h1>
              <v-list>
                <v-list-item-group>
                  <v-list-item class="mb4" to="/Search/OD">
                    <v-icon style="font-size: 16px" class="notranslate mr-2 mdi">mdi-square</v-icon>
                    <v-list-item-title class="text-h6">淋巴结检测</v-list-item-title>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>
            <div class="ml-4 mr-8" style="position: relative; overflow: hidden; flex-grow: 1; min-height: 150px; align-self: center;">
              <v-img src="../images/pic3.png" aspect-ratio="1.2"></v-img>
            </div>
          </div>
        </div>
        <div class="text-one">
          <div class="card-title" style="justify-content: space-between;cursor: pointer;" @click="toNews">
            <h1 class="text-h5" style="color: rgb(24, 78, 129); font-weight: bold;"><span>新</span>闻</h1>
            <h3 style="font-size: 16px;">MORE</h3>
          </div>
          <hr style="margin-top: 0px">
          <v-timeline :dense="true" :light="true" class="pt-3">
            <v-timeline-item small class="pb-3">
              <v-card class="pt-2 pb-2 pl-4 pr-4">
              <v-card-text>
                <span class="font-weight-bold text-body-1 mr-3 indigo--text">
                  2023-01
                </span>
                <span class="text--primary text-body-1 link_title">
                  一项工作被xx录用
                </span>
              </v-card-text>
            </v-card>
            </v-timeline-item>
            <v-timeline-item color="cyan" small class="pb-3">
              <v-card class="pt-2 pb-2 pl-4 pr-4">
                <v-card-text>
                  <span class="font-weight-bold text-body-1 mr-3 cyan--text">
                    2022-07
                  </span>
                  <span class="text--primary text-body-1 link_title">
                    一项工作被xx录用
                  </span>
                </v-card-text>
              </v-card>
            </v-timeline-item>
            <v-timeline-item color="red" small class="pb-3">
              <v-card class="pt-2 pb-2 pl-4 pr-4">
                <v-card-text>
                  <span class="font-weight-bold text-body-1 mr-3 red--text">
                    2022-07
                  </span>
                  <span class="text--primary text-body-1 link_title">
                    一项工作被xx录用
                  </span>
                </v-card-text>
              </v-card>
            </v-timeline-item>
            <v-timeline-item color="pink" small class="pb-3">
              <v-card class="pt-2 pb-2 pl-4 pr-4">
                <v-card-text>
                  <span class="font-weight-bold text-body-1 mr-3 pink--text">
                    2022-05
                  </span>
                  <span class="text--primary text-body-1 link_title">
                    一项工作被xx录用
                  </span>
                </v-card-text>
              </v-card>
            </v-timeline-item>
            <v-timeline-item color="purple lighten-2" small class="pb-3">
              <v-card class="pt-2 pb-2 pl-4 pr-4">
                <v-card-text>
                  <span class="font-weight-bold text-body-1 mr-3 purple--text">
                    2022-01
                  </span>
                  <span class="text--primary text-body-1 link_title">
                    一项工作被xx录用
                  </span>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>

          <div class="card-title pb-1 mt-16" style="justify-content: space-between;cursor: pointer;">
            <h1 class="text-h5" style="color: rgb(24, 78, 129); font-weight: bold;"><span>组</span>内活动</h1>
            <h3 style="font-size: 16px;">MORE</h3>
          </div>
          <hr style="margin-top: 0px">        
          <v-carousel
            cycle
            height="260"
            hide-delimiter-background
            show-arrows-on-hover
            style="width: 420px; margin: auto; margin-top: 10px;"
            interval="1500"
          >
            <v-carousel-item>
              <v-sheet>
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <v-img src="../images/bk4.jpg" ></v-img>
                </v-row>
              </v-sheet>
            </v-carousel-item>
            <v-carousel-item>
              <v-sheet>
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <v-img src="../images/school.jpg" ></v-img>
                </v-row>
              </v-sheet>
            </v-carousel-item>
            <v-carousel-item>
              <v-sheet>
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <v-img src="../images/bk2.png" ></v-img>
                </v-row>
              </v-sheet>
            </v-carousel-item>
            <v-carousel-item>
              <v-sheet>
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <v-img src="../images/bk3.jpg" ></v-img>
                </v-row>
              </v-sheet>
            </v-carousel-item>
            <v-carousel-item>
              <v-sheet>
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <v-img src="../images/bk.jpg" ></v-img>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
          <!-- <v-slide-group
            v-model="model"
            class="pa-4"
            :show-arrows=true
          >
            <v-slide-item>
              <v-card
                class="ma-4"
                height="160"
                width="220"
              >
                <v-img class="white--text align-end" src="../images/school.jpg"/>
              </v-card>
            </v-slide-item>
            <v-slide-item>
              <v-card
                class="ma-4"
                height="160"
                width="220"
              >
                <v-img class="white--text align-end" src="../images/bk.jpg"/>
              </v-card>
            </v-slide-item>
            <v-slide-item>
              <v-card
                class="ma-4"
                height="160"
                width="220"
              >
                <v-img class="white--text align-end" src="../images/logo_lab.png"/>
              </v-card>
            </v-slide-item>
          </v-slide-group> -->
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
    name: "HomePage",
    props: {
        msg: String
    },
    methods: {
      toNews() {
        this.$router.push('/News');
      },
      toSearch() {
        this.$router.push('/Search');
      }
    },
} 
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  /*Large Desktop*/
  /*General CSS*/
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: Roboto,sans-serif;
  }
  
  * {
    margin: 0;
    padding: 0;
  }
  
  h2,
  h3 {
    color: rgb(24, 78, 129);
    font-weight: bold;
  }
  
  h2,
  h3,
  p {
    font-family: Roboto,sans-serif;
  }
  
  .container {
    width: 90%;
    margin: 0 auto;
  }
  
  .hero .title-container{
    display: flex;
    flex-direction: row;
    position: absolute;
    margin: 10px 0px;
    padding: 0px 16px;
    height: 74px;
    top: 150px;
    left: 50%;
    transform: translate(-50%, -50%) scale(2);
  }
  /*Navigation*/
  
  .navigation {
    width: 100%;
    position: absolute;
    z-index: 100;
    top: 0px;
    left: 0px;
    height: 50px;
  }
  
  .nav-container {
    margin: 0 auto;
    width: 70%;
    height: 100%;
    display: flex;
    margin-top: 40px;
  }
  
  .nav-container .links {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    gap: 25px;
    font-family: Roboto,sans-serif;
    color: #ffffff99;
  }
  
  .nav-container .logo {
    display: flex;
    width: auto;
    align-items: center;
    min-width: 20%;
    width: auto;
    font-family: Roboto,sans-serif;
    font-size: 20px;
  }
  
  .nav-container .logo span {
    color: var(--nav-link-hover-color);
  }
  
  .nav-container .links a,
  .nav-container .logo a {
    text-decoration: none;
    color: var(--nav-link-color);
    transition: var(--transition-fast);
  }
  
  .nav-container .links a {
    /* font-size: var(--font-medium); */
    font-size: 17.6px;
    color: hsla(0,0%,100%,.6);
    font-weight: 500;
    padding: 0px 16px;
    font-family: Roboto,sans-serif;
  }
  
  .nav-container .logo a {
    font-size: var(--font-large);
  }
  
  .nav-container .links a:hover,
  .nav-container .logo a:hover {
    color: var(--nav-link-hover-color);
  }
  
  .nav-container .links a:after,
  .nav-container .logo a:after {
    display: block;
    content: "";
    border-bottom: 1px solid var(--nav-link-hover-color);
    transform: scaleX(0);
    transition: transform var(--transition-fastest) ease-in-out;
    transform-origin: 100% 50%;
  }
  
  .nav-container .logo a:hover:after,
  .nav-container .links a:hover:after {
    transform: scaleX(1);
    transform-origin: 0% 50%;
  }
  
  .mobile-button {
    display: none;
  }
  
  .mobile-logo {
    display: flex !important;
  }
  
  .mobile-logo .logo {
    width: auto;
  }
  
  .mobile-links {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    transition: var(--transition-fast);
    padding-top: 20px;
  }
  
  .mobile-links a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: var(--nav-link-color);
    display: block;
    transition: 0.3s;
  }
  
  .mobile-links a:hover {
    color: #f1f1f1;
  }
  
  .mobile-links .closebtn {
    font-size: var(--font-x-large);
    margin-right: 25px;
  }
  
  /*Hero*/
  
  .hero {
    /* display: flex; */
    min-height: 300px;
    height: 420px;
    background-image: linear-gradient(to right top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("../images/bk.jpg");
    background-size: cover;
    background-position: center center;
  }
  
  .hero .text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    text-align: center;
  }
  
  .hero .text .pre-title {
    font-size: var(--font-2x-large);
  }
  .hero .text .title {
    font-size: var(--font-5x-large);
    color: #fff;
  }
  .hero .text .title span {
    color: var(--title-span-color);
    border-bottom: 5px solid var(--title-span-color);
  }
  .hero .title {
    font-size: 20px;
    color: #fff;
    font-weight: 400;
    margin-left: 10px;
    margin-top: 10px;
    font-family: Roboto,sans-serif;
    font-weight: 700;
  }

  .hero .title .title-english{
    font-size: 16px;
  }
  
  /*About*/
  
  .about {
    min-height: 400px;
    display: flex;
    gap: 20px;
    padding: 50px 25px;
    margin-bottom: 50px;
  }
  
  .about-us {
    min-height: 400px;
    padding: 50px;
  }
  
  .about .text-one {
    display: flex;
    flex-direction: column;
    min-height: 400px;
    width: 50%;
  }

  .about .text-one .card-title{
    align-items: center;
    display: flex;
    flex-wrap: wrap;
  }

  .about .text-one .card-title h3{
    font-family: Roboto,sans-serif;
  }

  .about .text-one .card-title span{
    font-size: 36px;
  }
  
  .about .text-one h2 {
    font-size: var(--font-3x-large);
    width: max-content;
  }
  
  .about .text-one p {
    font-size: var(--font-medium-large);
  }
  
  .about .text-one a {
    width: max-content;
  }
  
  </style>