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
              <v-tab to="/News" class="pl-4 pr-4">
                <span style="font-size: 1.1rem; font-family: Roboto,sans-serif; color: white;">新闻</span>
              </v-tab>
              <v-tab to="/Research" class="pl-4 pr-4">
                <span style="font-size: 1.1rem; font-family: Roboto,sans-serif; color: white;">研究方向</span>
              </v-tab>
              <v-tab to="/Results" class="pl-4 pr-4">
                <span style="font-size: 1.1rem; font-family: Roboto,sans-serif; color: white;">研究成果</span>
              </v-tab>
              <v-tab to="/Team" class="pl-4 pr-4">
                <span style="font-size: 1.1rem; font-family: Roboto,sans-serif; color: white;">团队成员</span>
              </v-tab>
              <v-tab to="/Contact" class="pl-4 pr-4">
                <span style="font-size: 1.1rem; font-family: Roboto,sans-serif; color: white;">联系我们</span>
              </v-tab>
              <v-tab to="/en" class="pl-4 pr-4">
                <span style="font-size: 1rem; font-family: Roboto,sans-serif; color: white; text-transform: none;">English</span>
              </v-tab>
            </v-tabs>
          </div>
        </v-toolbar>
      </header>
  
      <div class="content ml-8 mr-8 mt-8" style="margin-bottom: 100px;">
        <v-tabs 
          vertical
        >
          <v-tab> 2023年 </v-tab>
          <v-tab> 2022年 </v-tab>
          <v-tab> 2021年 </v-tab>
          <v-tab> 2020年 </v-tab>         
          <v-tab> 2019年 </v-tab>
          <v-tab> 2018年 </v-tab>
          <v-tab> 2017年 </v-tab>
          <v-tab> 2016年 </v-tab>
          <v-tab> 2015年 </v-tab>
          <v-tab> 2014年 </v-tab>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p>1. Siyuan Song, Kai Jin, <strong>Shuai Wang</strong>, Ce Yang, Jingxin Zhou, Zhiqing Chen, Juan Ye,  Retinal fluid is associated with cytokines of aqueous humor in age-related macular degeneration using automatic 3-dimensional quantification, Frontiers in Cell and Developmental Biology</p>
                  <p>2. Kai Jin, Yan Yan, <strong>Shuai Wang</strong>,Ce Yang, Menglu Chen, Xindi Liu, Hiroto Terasaki, Tun-Hang Yeo, Neha Gulab Singh, Yao Wang, Juan Ye,  iERM: An Interpretable Deep Learning System to Classify Epiretinal Membrane for Different Optical Coherence Tomography Devices: A Multi-Center Analysis, Journal of Clinical Medicine</p>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p>1. Yunxiang Li, Ruilong Dan, <strong>Shuai Wang</strong>, Yifan Cao, Xiangde Luo, Chenghao Tan, Gangyong Jia, Huiyu Zhou, You Zhang, Yaqi Wang, Li Wang, Plug-and-Play Shape Refinement Framework for Multi-site and Lifespan Brain Skull Stripping, Machine Learning in Medical Imaging</p>
                  <p>2. Jinhao Li, <strong>Shuai Wang</strong>, Shaodan Hu, Yiming Sun, Yaqi Wang, Peifang Xu, Juan Ye,  Class-Aware Attention Network for infectious keratitis diagnosis using corneal photographs, Computers in Biology and Medicine<font color="#0000CC"><strong></strong></font></p>
                  <p>3. Hancan Zhu, Mingxia Liu, Zhenyu Tang, <strong>Shuai Wang</strong>, Editorial: Weakly supervised deep learning-based methods for brain image analysis, Frontiers in Neuroinformatics<font color="#0000CC"><strong></strong></font></p>
                  <p>4. Lei Zhou, <strong>Shuai Wang</strong>, Kun Sun, Tao Zhou, Fuhua Yan, Dinggang Shen,  Three-dimensional affinity learning based multi-branch ensemble network for breast tumor segmentation in MRI, Pattern Recognition<font color="#0000CC"><strong></strong></font></p>
                  <p>5. Yiming Sun, Jinhao Li, Peifang Xu, Pengjie Chen, Yaqi Wang, Shaodan Hu, Gangyong Jia,<strong>Shuai Wang</strong>, Juan Ye,  Automatic quantifying and monitoring follow-ups for implantable collamer lens implantation using AS-OCT images, Frontiers in Physics<font color="#0000CC"><strong></strong></font></p>
                  <p>6. X Liu, K Jin, Z Yang, Y Yan, <strong>S Wang</strong>, Y Wang, J Ye,  A curriculum learning-based fully automated system for quantification of the choroidal structure in highly myopic patients, Physics in Medicine and Biology<font color="#0000CC"><strong></strong></font></p>
                  <p>7. <strong>Shuai Wang</strong>, Yingying Zhu, Sungwon Lee, Daniel C. Elton, Thomas C. Shen,Youbao Tang, Yifan Peng, Zhiyong Lu, Ronald M. Summers, Global-Local attention network with multi-task uncertainty loss for abnormal lymph node detection in MR images, Medical Image Analysis<font color="#0000CC"><strong></strong></font></p>
                  <p>8. Yunxiang Li, Ruilong Dan, <strong>Shuai Wang</strong>, Yifan Cao, Xiangde Luo, Chenghao Tan, Gangyong Jia, Huiyu Zhou, Yaqi Wang, Li Wang,  Source-free Domain Adaptation for Multi-site and Lifespan Brain Skull Stripping, Machine Learning in Medical Imaging<font color="#0000CC"><strong></strong></font></p>
                  <p>9. Menglu Chen, Kai Jin, Yan Yan, Xindi Liu, Xiaoling Huang, Zhiyuan Gao, Yao Wang, <strong>Shuai Wang</strong>, Juan Ye, Automated Diagnosis of Age-related Macular Degeneration using Multi-modal Vertical Plane Feature Fusion via Deep Learning, Medical Physics<font color="#0000CC"><strong></strong></font></p>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p>1. J Liu, B Dong, <strong>S Wang</strong>, H Cui, DP Fan, J Ma, G Chen, COVID-19 lung infection segmentation with a novel two-stage cross-domain transfer learning framework, Medical image analysis<font color="#0000CC"><strong></strong></font></p>
                  <p>2. Yunxiang Li, Guodong Zeng, Yifan Zhang, Jun Wang, Qun Jin, Lingling Sun, Qianni Zhang, Qisi Lian, Guiping Qian, Neng Xia, Ruizi Peng, Kai Tang, <strong>Shuai Wang</strong>, Yaqi Wang,  Agmb-transformer: Anatomy-guided multi-branch transformer network for automated evaluation of root canal therapy, IEEE Journal of Biomedical and Health Informatics<font color="#0000CC"><strong></strong></font></p>
                  <p>3. Xuanang Xu, Chunfeng Lian, <strong>Shuai Wang</strong>, Tong Zhu, Ronald C Chen, Andrew Z Wang, Trevor J Royce, Pew-Thian Yap, Dinggang Shen, Jun Lian, Asymmetric multi-task attention network for prostate bed segmentation in computed tomography images, Medical image analysis<font color="#0000CC"><strong></strong></font></p>
                  <p>4. H Zhu, <strong>S Wang</strong>, L Qu, D Shen, Hippocampus segmentation in MR images: Multiatlas methods and deep learning methods, Big Data in Psychiatry and Neurology<font color="#0000CC"><strong></strong></font></p>
                  <p>5. J Li, Y Wang, <strong>S Wang</strong>, J Wang, J Liu, Q Jin, L Sun, Multiscale attention guided network for COVID-19 diagnosis using chest X-ray images, IEEE Journal of Biomedical and Health Informatics<font color="#0000CC"><strong></strong></font></p>
                  <p>6. Li-Ming Hsu, <strong>Shuai Wang</strong>, Lindsay Walton, Tzu-Wen Winnie Wang, Sung-Ho Lee, Yen-Yu Ian Shih, 3D U-Net improves automatic brain extraction for isotropic rat brain magnetic resonance imaging data, Frontiers in Neuroscience<font color="#0000CC"><strong></strong></font></p>
                  <p>7. <strong>S Wang</strong>, K Sun, L Wang, L Qu, F Yan, Q Wang, D Shen, Breast Tumor Segmentation in DCE-MRI with Tumor Sensitive Synthesis, IEEE Transactions on Neural Networks and Learning Systems<font color="#0000CC"><strong></strong></font></p>
                  <p>8. Y Li, <strong>S Wang</strong>, J Wang, G Zeng, W Liu, Q Zhang, Q Jin, Y Wang, Gt u-net: A u-net like group transformer network for tooth root segmentation, Machine Learning in Medical Imaging<font color="#0000CC"><strong></strong></font></p>
                  <p>9. Y Zhu, <strong>S Wang</strong>, Q Chen, S Lee, T Shen, DC Elton, Z Lu, RM Summers, Learning Structure from Visual Semantic Features and Radiology Ontology for Lymph Node Classification on MRI, Machine Learning in Medical Imaging<font color="#0000CC"><strong></strong></font></p>
                  <p>10. Jianping Li, Zhiming Cui, <strong>Shuai Wang</strong>, Jie Wei, Jun Feng, Shu Liao, Dinggang Shen, Morphology-Guided Prostate MRI Segmentation with Multi-slice Association, Machine Learning in Medical Imaging<font color="#0000CC"><strong></strong></font></p>
                  <p>11. D Lv, Y Wang, <strong>S Wang</strong>, Q Zhang, W Qi, Y Li, L Sun, A Cascade‐SEME network for COVID‐19 detection in chest c‐ray images, Medical Physics<font color="#0000CC"><strong></strong></font></p>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p>1. Yifan Peng, Sungwon Lee, Daniel C Elton, Thomas Shen, Yu-xing Tang, Qingyu Chen, <strong>Shuai Wang</strong>, Yingying Zhu, Ronald Summers, Zhiyong Lu, Automatic recognition of abdominal lymph nodes from clinical text, Proceedings of the 3rd Clinical Natural Language Processing Workshop<font color="#0000CC"><strong></strong></font></p>
                  <p>2. Li-Ming Hsu,<strong>Shuai Wang</strong>, Paridhi Ranadive, Woomi Ban, Tzu-Hao Harry Chao, Sheng Song, Domenic Hayden Cerri, Lindsay R Walton, Margaret A Broadwater, Sung-Ho Lee, Dinggang Shen, Yen-Yu Ian Shih, Automatic skull stripping of rat and mouse brain MRI data using U-Net, Frontiers in neuroscience<font color="#0000CC"><strong></strong></font></p>
                  <p>3. <strong>Shuai Wang</strong>, Mingxia Liu, Jun Lian, Dinggang Shen, Boundary coding representation for organ segmentation in prostate cancer radiotherapy, IEEE transactions on medical imaging<font color="#0000CC"><strong></strong></font></p>
                  <p>4. Luyi Han, Yunzhi Huang, Haoran Dou, <strong>Shuai Wang</strong>, Sahar Ahamad, Honghao Luo, Qi Liu, Jingfan Fan, Jiang Zhang, Semi-supervised segmentation of lesion from breast ultrasound images with attentional generative adversarial network, Computer methods and programs in biomedicine <font color="#0000CC"><strong></strong></font></p>
                  <p>5. <strong>S Wang</strong>, Y Cong, H Zhu, X Chen, L Qu, H Fan, Q Zhang, M Liu, Multi-scale context-guided deep network for automated lesion segmentation with endoscopy images of gastrointestinal tractMulti-scale context-guided deep network for automated lesion segmentation with endoscopy images of gastrointestinal tract, IEEE Journal of Biomedical and Health Informatics<font color="#0000CC"><strong></strong></font></p>
                  <p>6. L Qu, Y Zhang, <strong>S Wang</strong> PT Yap, D Shen,Synthesized 7T MRI from 3T MRI via deep learning in spatial and wavelet domains, Medical image analysis<font color="#0000CC"><strong></strong></font></p>
                  <p>7. <strong>S Wang</strong>, Q Wang, Y Shao, L Qu, C Lian, J Lian, D Shen, Iterative label denoising network: Segmenting male pelvic organs in CT from 3D bounding box annotations, IEEE Transactions on Biomedical Engineering<font color="#0000CC"><strong></strong></font></p>
                  <p>8. <strong>S Wang</strong>, D Nie, L Qu, Y Shao, J Lian, Q Wang, D Shen, CT male pelvic organ segmentation via hybrid loss network with incomplete annotation, IEEE transactions on medical imaging<font color="#0000CC"><strong></strong></font></p>
                  <p>9. X Xu, C Lian, <strong>S Wang</strong>, A Wang, T Royce, R Chen, J Lian, D Shen, Asymmetrical multi-task attention U-Net for the segmentation of prostate bed in CT image, Medical Image Computing and Computer Assisted Intervention–MICCAI 2020<font color="#0000CC"><strong></strong></font></p>
                  <p>10. <strong>S Wang</strong>, X Chen, Adaptive binary coding for scene classification based on convolutional networks, CMC-COMPUTERS MATERIALS & CONTINUA<font color="#0000CC"><strong></strong></font></p>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p>1. <strong>Shuai Wang</strong>, Kelei He, Dong Nie, Sihang Zhou, Yaozong Gao, Dinggang Shen,  CT male pelvic organ segmentation using fully convolutional networks with boundary sensitive representation, Medical image analysis<font color="#0000CC"><strong></strong></font></p>
                  <p>2. X Chen, A Qiu, X Sun, <strong>S Wang</strong>, G Wei, A high-capacity coverless image steganography method based on double-level index and block matching, Mathematical Biosciences and Engineering<font color="#0000CC"><strong></strong></font></p>
                  <p>3. H Zhu, F Shi, L Wang, SC Hung, MH Chen, <strong>S Wang</strong>, W Lin, D Shen, Dilated dense U-Net for infant hippocampus subfield segmentation, Frontiers in neuroinformatics<font color="#0000CC"><strong></strong></font></p>
                  <p>4. <strong>S Wang</strong>, K He, D Nie, S Zhou, Y Gao, D Shen, Hierarchical representation for CT prostate segmentation, 2019 IEEE 16th International Symposium on Biomedical Imaging<font color="#0000CC"><strong></strong></font></p>
                  <p>5. Liangqiong Qu, <strong>Shuai Wang</strong>, Pew-Thian Yap, Dinggang Shen, Wavelet-based semi-supervised adversarial learning for synthesizing realistic 7T from 3T MRI, Medical Image Computing and Computer Assisted Intervention–MICCAI 2019<font color="#0000CC"><strong></strong></font></p>
                  <p>6. A Qiu, X Chen, X Sun, <strong>S Wang</strong>, W Guo, Coverless image steganography method based on feature selection, Journal of Information Hiding and Privacy Protection<font color="#0000CC"><strong></strong></font></p>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p>1. Xuhua Ren, Tingting Li, Xiujun Yang, <strong>Shuai Wang</strong>, Sahar Ahmad, Lei Xiang, Shaun Richard Stone, Lihong Li, Yiqiang Zhan, Dinggang Shen, Qian Wang, Regression convolutional neural network for automated pediatric bone age assessment from hand radiograph, IEEE journal of biomedical and health informatics <font color="#0000CC"><strong></strong></font></p>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p>1. H Liu, Y Cong,<strong>S Wang</strong>, H Fan, D Tian, Y Tang,Deep learning of directional truncated signed distance function for robust 3d object recognition, 2017 IEEE/RSJ International Conference on Intelligent Robots and Systems<font color="#0000CC"><strong></strong></font></p>
                  <p>2. <strong>S Wang</strong>, Y Cong, H Fan, B Fan, L Liu, Y Yang, Y Tang, H Zhao, H Yu, Multi-class latent concept pooling for computer-aided endoscopy diagnosis, ACM Transactions on Multimedia Computing, Communications, and Applications<font color="#0000CC"><strong></strong></font></p>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p>1. C Gu, D Tian, Y Cong, Y Zhang, <strong>S Wang</strong>, Flame detection based on spatio-temporal covariance matrix, 2016 International Conference on Advanced Robotics and Mechatronics <font color="#0000CC"><strong></strong></font></p>
                  <p>2. Y Cong, <strong>S Wang</strong>, B Fan, Y Yang, H Yu, UDSFS: Unsupervised deep sparse feature selection, Neurocomputing<font color="#0000CC"><strong></strong></font></p>
                  <p>3. <strong>S Wang</strong>, Y Cong, H Fan, L Liu, X Li, Y Yang, Y Tang, H Zhao, H Yu, Computer-aided endoscopic diagnosis without human-specific labeling, IEEE Transactions on Biomedical Engineering<font color="#0000CC"><strong></strong></font></p>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p>1. <strong>S Wang</strong>, Y Cong, J Cao, Y Yang, Y Tang, H Zhao, H Yu, Scalable gastroscopic video summarization via similar-inhibition dictionary selection, Artificial intelligence in medicine<font color="#0000CC"><strong></strong></font></p>
                  <p>2. H Liu, <strong>S Wang</strong>, D Tian, D Yang, Y Cong, Y Tang, Non-rigid point matching via genetic algorithm searching, 2015 8th International Congress on Image and Signal Processing<font color="#0000CC"><strong></strong></font></p>
                  <p>3. <strong>S Wang</strong>, Y Cong, H Fan, Y Yang, Y Tang, H Zhao, Computer aided endoscope diagnosis via weakly labeled data mining, 2015 IEEE International Conference on Image Processing<font color="#0000CC"><strong></strong></font></p>
                  <p>4. Y Cong, <strong>S Wang</strong>, J Liu, J Cao, Y Yang, J Luo, Deep sparse feature selection for computer aided endoscopy diagnosis, Pattern Recognition<font color="#0000CC"><strong></strong></font></p>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p>1. <strong>S Wang</strong>, D Tian, Y Cong, Y Yang, Y Tang, H Zhao, Automatic gastroscopy video quality assessment, 2014 IEEE International Conference on Robotics and Biomimetics<font color="#0000CC"><strong></strong></font></p>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
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