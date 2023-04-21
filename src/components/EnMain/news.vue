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

    <div class="content ml-8 mr-8 mt-8" style="margin-bottom: 100px;">
      <div class="row">
        <div class="col-md-9 col-12 pa-0" style="display: flex;">
          <div class="text-h6 col col-3 indigo--text" style="display: flex;">
            <v-icon style="font-size: 16px" class="notranslate mr-2 mdi theme--light indigo--text">mdi-circle</v-icon>
            2022-07 
          </div>
          <div class="text-h6 col col-9">
            Congratulations to xxx's paper accepted by xxx!
          </div>
        </div>
        <div class="pa-0 col col-12">
          <hr class="v-divider theme--light">
        </div>

        <div class="col-md-9 col-12 pa-0" style="display: flex;">
          <div class="text-h6 col col-3 cyan--text" style="display: flex;">
            <v-icon style="font-size: 16px" class="notranslate mr-2 mdi theme--light cyan--text">mdi-circle</v-icon>
            2022-07 
          </div>
          <div class="text-h6 col col-9">
            Congratulations to xxx's paper accepted by xxx!
          </div>
          </div>
          <div class="pa-0 col col-12">
            <hr class="v-divider theme--light">
          </div>


          <div class="col-md-9 col-12 pa-0" style="display: flex;">
          <div class="text-h6 col col-3 red--text" style="display: flex;">
            <v-icon style="font-size: 16px" class="notranslate mr-2 mdi theme--light red--text">mdi-circle</v-icon>
            2022-07 
          </div>
          <div class="text-h6 col col-9">
            Congratulations to xxx's paper accepted by xxx!
          </div>
          </div>
          <div class="pa-0 col col-12">
            <hr class="v-divider theme--light">
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
        {{ new Date().getFullYear() }} — Hangzhou Dianzi University
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