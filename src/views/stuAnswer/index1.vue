<template>
  <div>
    <v-goTop></v-goTop>
    <div v-if="this.$route.params.id === 1">
      <div v-if="isTeacher">
        <el-button class="btn" @click="toHome">返回列表</el-button>
      </div>
      <div class="title" v-if="this.list">
        {{ this.list[0].quiz.name }}
      </div>

      <br /><br />
      <span class="big">实验目的：</span>
      <span class="small">应用MATLAB对数据进行数字特征估计与频谱分析</span
      ><br /><br />
      <span class="big">实验内容：</span>
      <div class="small">
        智慧林业是指充分利用云计算、物联网、大数据、移动互联网等新一代信息技术，通过感知化、物联化、智能化的手段，形成林业立体感知、管理协同高效、生态价值凸显、服务内外一体的林业发展新模式。智慧林业的核心是对林业信息进行智能处理。实验数据一为某林业生态智能监测项目所获取的信息，试用本课程中的应用随机信号处理及其谱估计相关知识，对该数据进行分析，寻找数据规律。
      </div>
      <br />
      <span class="big">实验要求：</span><br />
      <div class="small">1、 编写MATLAB程序；</div>
      <div class="small">2、 将实验数据读入内存；</div>
      <div class="small">3、 画出各气象数据的时域曲线；</div>
      <div class="small">
        4、
        计算各气象数据的数字特征：均值，方差，自相关序列，自相关系数，互相关序列；
      </div>
      <div class="small">
        5、
        分别采用BT法，周期图法（或是改进周期图法）对各气象数据进行频谱分析，比较几种方法的区别，并画出其频谱图；
      </div>
      <div class="small">
        6、
        采用现代谱估计方法估计其频谱（AR模型，MA模型或是ARMA模型），比较其结果与经典法的区别；
      </div>
      <div class="small">7、 解析频谱，寻找数据规律，给出分析与讨论。</div>
      <br />
      <span class="big">实验报告要求：</span><br />
      <div class="small">
        实验报告以电子版（word版）形式提交，并附上程序源代码，打包后以“学号_姓名_实验一.rar”命名，提交到邮箱。Word文档中必须包含程序运行的结果（图形、曲线）并进行解释。
      </div>
      <br /><br />
      <div class="line_01">答题纸 分隔线</div>
      <br /><br />
      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[0].answer !== ''">
          {{ this.list[0].studentAnswers[0].question.stem }}
          {{ this.list[0].studentAnswers[0].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[0].imagePath"
          :src="this.list[0].studentAnswers[0].imagePath"
        />
      </div>
      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[31].answer !== ''">
          {{ this.list[0].studentAnswers[31].question.stem }}
          {{ this.list[0].studentAnswers[31].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[31].imagePath"
          :src="this.list[0].studentAnswers[31].imagePath"
        />
      </div>
      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[32].answer !== ''">
          {{ this.list[0].studentAnswers[32].question.stem }}
          {{ this.list[0].studentAnswers[32].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[32].imagePath"
          :src="this.list[0].studentAnswers[32].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[33].answer !== ''">
          {{ this.list[0].studentAnswers[33].question.stem }}
          {{ this.list[0].studentAnswers[33].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[33].imagePath"
          :src="this.list[0].studentAnswers[33].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[34].answer !== ''">
          {{ this.list[0].studentAnswers[34].question.stem }}
          {{ this.list[0].studentAnswers[34].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[34].imagePath"
          :src="this.list[0].studentAnswers[34].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[35].answer !== ''">
          {{ this.list[0].studentAnswers[35].question.stem }}
          {{ this.list[0].studentAnswers[35].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[35].imagePath"
          :src="this.list[0].studentAnswers[35].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[36].answer !== ''">
          {{ this.list[0].studentAnswers[36].question.stem }}
          {{ this.list[0].studentAnswers[36].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[36].imagePath"
          :src="this.list[0].studentAnswers[36].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[37].answer !== ''">
          {{ this.list[0].studentAnswers[37].question.stem }}
          {{ this.list[0].studentAnswers[37].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[37].imagePath"
          :src="this.list[0].studentAnswers[37].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[38].answer !== ''">
          {{ this.list[0].studentAnswers[38].question.stem }}
          {{ this.list[0].studentAnswers[38].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[38].imagePath"
          :src="this.list[0].studentAnswers[38].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[39].answer !== ''">
          {{ this.list[0].studentAnswers[39].question.stem }}
          {{ this.list[0].studentAnswers[39].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[39].imagePath"
          :src="this.list[0].studentAnswers[39].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[40].answer !== ''">
          {{ this.list[0].studentAnswers[40].question.stem }}
          {{ this.list[0].studentAnswers[40].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[40].imagePath"
          :src="this.list[0].studentAnswers[40].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[41].answer !== ''">
          {{ this.list[0].studentAnswers[41].question.stem }}
          {{ this.list[0].studentAnswers[41].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[41].imagePath"
          :src="this.list[0].studentAnswers[41].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[42].answer !== ''">
          {{ this.list[0].studentAnswers[42].question.stem }}
          {{ this.list[0].studentAnswers[42].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[42].imagePath"
          :src="this.list[0].studentAnswers[42].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[43].answer !== ''">
          {{ this.list[0].studentAnswers[43].question.stem }}
          {{ this.list[0].studentAnswers[43].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[43].imagePath"
          :src="this.list[0].studentAnswers[43].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[44].answer !== ''">
          {{ this.list[0].studentAnswers[44].question.stem }}
          {{ this.list[0].studentAnswers[44].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[44].imagePath"
          :src="this.list[0].studentAnswers[44].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[45].answer !== ''">
          {{ this.list[0].studentAnswers[45].question.stem }}
          {{ this.list[0].studentAnswers[45].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[45].imagePath"
          :src="this.list[0].studentAnswers[45].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[46].answer !== ''">
          {{ this.list[0].studentAnswers[46].question.stem }}
          {{ this.list[0].studentAnswers[46].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[46].imagePath"
          :src="this.list[0].studentAnswers[46].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[47].answer !== ''">
          {{ this.list[0].studentAnswers[47].question.stem }}
          {{ this.list[0].studentAnswers[47].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[47].imagePath"
          :src="this.list[0].studentAnswers[47].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[48].answer !== ''">
          {{ this.list[0].studentAnswers[48].question.stem }}
          {{ this.list[0].studentAnswers[48].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[48].imagePath"
          :src="this.list[0].studentAnswers[48].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[49].answer !== ''">
          {{ this.list[0].studentAnswers[49].question.stem }}
          {{ this.list[0].studentAnswers[49].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[49].imagePath"
          :src="this.list[0].studentAnswers[49].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[50].answer !== ''">
          {{ this.list[0].studentAnswers[50].question.stem }}
          {{ this.list[0].studentAnswers[50].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[50].imagePath"
          :src="this.list[0].studentAnswers[50].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[51].answer !== ''">
          {{ this.list[0].studentAnswers[51].question.stem }}
          {{ this.list[0].studentAnswers[51].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[51].imagePath"
          :src="this.list[0].studentAnswers[51].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[52].answer !== ''">
          {{ this.list[0].studentAnswers[52].question.stem }}
          {{ this.list[0].studentAnswers[52].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[52].imagePath"
          :src="this.list[0].studentAnswers[52].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[53].answer !== ''">
          {{ this.list[0].studentAnswers[53].question.stem }}
          {{ this.list[0].studentAnswers[53].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[53].imagePath"
          :src="this.list[0].studentAnswers[53].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[54].answer !== ''">
          {{ this.list[0].studentAnswers[54].question.stem }}
          {{ this.list[0].studentAnswers[54].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[54].imagePath"
          :src="this.list[0].studentAnswers[54].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[55].answer !== ''">
          {{ this.list[0].studentAnswers[55].question.stem }}
          {{ this.list[0].studentAnswers[55].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[55].imagePath"
          :src="this.list[0].studentAnswers[55].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[56].answer !== ''">
          {{ this.list[0].studentAnswers[56].question.stem }}
          {{ this.list[0].studentAnswers[56].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[56].imagePath"
          :src="this.list[0].studentAnswers[56].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[57].answer !== ''">
          {{ this.list[0].studentAnswers[57].question.stem }}
          {{ this.list[0].studentAnswers[57].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[57].imagePath"
          :src="this.list[0].studentAnswers[57].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[30].answer !== ''">
          {{ this.list[0].studentAnswers[30].question.stem }}
          {{ this.list[0].studentAnswers[30].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[30].imagePath"
          :src="this.list[0].studentAnswers[30].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[29].answer !== ''">
          {{ this.list[0].studentAnswers[29].question.stem }}
          {{ this.list[0].studentAnswers[29].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[29].imagePath"
          :src="this.list[0].studentAnswers[29].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[28].answer !== ''">
          {{ this.list[0].studentAnswers[28].question.stem }}
          {{ this.list[0].studentAnswers[28].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[28].imagePath"
          :src="this.list[0].studentAnswers[28].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[13].answer !== ''">
          {{ this.list[0].studentAnswers[13].question.stem }}
          {{ this.list[0].studentAnswers[13].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[13].imagePath"
          :src="this.list[0].studentAnswers[13].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[1].answer !== ''">
          {{ this.list[0].studentAnswers[1].question.stem }}
          {{ this.list[0].studentAnswers[1].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[1].imagePath"
          :src="this.list[0].studentAnswers[1].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[2].answer !== ''">
          {{ this.list[0].studentAnswers[2].question.stem }}
          {{ this.list[0].studentAnswers[2].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[2].imagePath"
          :src="this.list[0].studentAnswers[2].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[3].answer !== ''">
          {{ this.list[0].studentAnswers[3].question.stem }}
          {{ this.list[0].studentAnswers[3].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[3].imagePath"
          :src="this.list[0].studentAnswers[3].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[4].answer !== ''">
          {{ this.list[0].studentAnswers[4].question.stem }}
          {{ this.list[0].studentAnswers[4].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[4].imagePath"
          :src="this.list[0].studentAnswers[4].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[5].answer !== ''">
          {{ this.list[0].studentAnswers[5].question.stem }}
          {{ this.list[0].studentAnswers[5].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[5].imagePath"
          :src="this.list[0].studentAnswers[5].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[6].answer !== ''">
          {{ this.list[0].studentAnswers[6].question.stem }}
          {{ this.list[0].studentAnswers[6].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[6].imagePath"
          :src="this.list[0].studentAnswers[6].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[7].answer !== ''">
          {{ this.list[0].studentAnswers[7].question.stem }}
          {{ this.list[0].studentAnswers[7].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[7].imagePath"
          :src="this.list[0].studentAnswers[7].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[8].answer !== ''">
          {{ this.list[0].studentAnswers[8].question.stem }}
          {{ this.list[0].studentAnswers[8].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[8].imagePath"
          :src="this.list[0].studentAnswers[8].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[9].answer !== ''">
          {{ this.list[0].studentAnswers[9].question.stem }}
          {{ this.list[0].studentAnswers[9].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[9].imagePath"
          :src="this.list[0].studentAnswers[9].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[10].answer !== ''">
          {{ this.list[0].studentAnswers[10].question.stem }}
          {{ this.list[0].studentAnswers[10].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[10].imagePath"
          :src="this.list[0].studentAnswers[10].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[11].answer !== ''">
          {{ this.list[0].studentAnswers[11].question.stem }}
          {{ this.list[0].studentAnswers[11].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[11].imagePath"
          :src="this.list[0].studentAnswers[11].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[12].answer !== ''">
          {{ this.list[0].studentAnswers[12].question.stem }}
          {{ this.list[0].studentAnswers[12].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[12].imagePath"
          :src="this.list[0].studentAnswers[12].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[14].answer !== ''">
          {{ this.list[0].studentAnswers[14].question.stem }}
          {{ this.list[0].studentAnswers[14].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[14].imagePath"
          :src="this.list[0].studentAnswers[14].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[27].answer !== ''">
          {{ this.list[0].studentAnswers[27].question.stem }}
          {{ this.list[0].studentAnswers[27].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[27].imagePath"
          :src="this.list[0].studentAnswers[27].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[15].answer !== ''">
          {{ this.list[0].studentAnswers[15].question.stem }}
          {{ this.list[0].studentAnswers[15].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[15].imagePath"
          :src="this.list[0].studentAnswers[15].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[16].answer !== ''">
          {{ this.list[0].studentAnswers[16].question.stem }}
          {{ this.list[0].studentAnswers[16].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[16].imagePath"
          :src="this.list[0].studentAnswers[16].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[17].answer !== ''">
          {{ this.list[0].studentAnswers[17].question.stem }}
          {{ this.list[0].studentAnswers[17].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[17].imagePath"
          :src="this.list[0].studentAnswers[17].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[18].answer !== ''">
          {{ this.list[0].studentAnswers[18].question.stem }}
          {{ this.list[0].studentAnswers[18].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[18].imagePath"
          :src="this.list[0].studentAnswers[18].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[19].answer !== ''">
          {{ this.list[0].studentAnswers[19].question.stem }}
          {{ this.list[0].studentAnswers[19].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[19].imagePath"
          :src="this.list[0].studentAnswers[19].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[20].answer !== ''">
          {{ this.list[0].studentAnswers[20].question.stem }}
          {{ this.list[0].studentAnswers[20].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[20].imagePath"
          :src="this.list[0].studentAnswers[20].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[21].answer !== ''">
          {{ this.list[0].studentAnswers[21].question.stem }}
          {{ this.list[0].studentAnswers[21].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[21].imagePath"
          :src="this.list[0].studentAnswers[21].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[22].answer !== ''">
          {{ this.list[0].studentAnswers[22].question.stem }}
          {{ this.list[0].studentAnswers[22].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[22].imagePath"
          :src="this.list[0].studentAnswers[22].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[23].answer !== ''">
          {{ this.list[0].studentAnswers[23].question.stem }}
          {{ this.list[0].studentAnswers[23].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[23].imagePath"
          :src="this.list[0].studentAnswers[23].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[24].answer !== ''">
          {{ this.list[0].studentAnswers[24].question.stem }}
          {{ this.list[0].studentAnswers[24].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[24].imagePath"
          :src="this.list[0].studentAnswers[24].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[25].answer !== ''">
          {{ this.list[0].studentAnswers[25].question.stem }}
          {{ this.list[0].studentAnswers[25].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[25].imagePath"
          :src="this.list[0].studentAnswers[25].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[26].answer !== ''">
          {{ this.list[0].studentAnswers[26].question.stem }}
          {{ this.list[0].studentAnswers[26].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[26].imagePath"
          :src="this.list[0].studentAnswers[26].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[58].answer !== ''">
          {{ this.list[0].studentAnswers[58].question.stem }}
          {{ this.list[0].studentAnswers[58].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[58].imagePath"
          :src="this.list[0].studentAnswers[58].imagePath"
        />
      </div>

      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[59].answer !== ''">
          {{ this.list[0].studentAnswers[59].question.stem }}
          {{ this.list[0].studentAnswers[59].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[59].imagePath"
          :src="this.list[0].studentAnswers[59].imagePath"
        />
      </div>
      <div v-if="isTeacher" style="margin-top: 50px">
        <el-input
          type="text"
          v-model="dafen1"
          placeholder="请输入分数！！"
          style="width: 30%; margin-right: 5%"
        ></el-input>
       
          <el-button class="btn" @click="subScore1" style="display: inline"
            >提交分数</el-button
          >
        
      </div>
    </div>

    <div v-if="this.$route.params.id === 4">
      <div v-if="isTeacher">
        <el-button class="btn" @click="toHome">返回列表</el-button>
      </div>
      <div class="title" v-if="this.list">
        {{ this.list[0].quiz.name }}
      </div>
      <br /><br />
      <span class="big">实验目的：</span>
      <span class="small"
        >设计维纳滤波器或卡尔曼滤波器，实现对随机噪声的滤波</span
      ><br /><br />
      <span class="big">实验内容：</span>
      <div class="small">
        假设一个点目标在x，y平面上绕单位圆做圆周运动，由于外界干扰，其运动轨迹发生了偏移。其中，x方向的干扰为均值为0，方差为0.05的高斯噪声；y方向干扰为均值为0，方差为0.06的高斯噪声。
      </div>
      <br />
      <span class="big">实验要求：</span><br />
      <div class="small">1. 产生满足要求的x方向和y方向随机噪声500个样本；</div>
      <div class="small">2. 明确期望信号和观测信号；</div>
      <div class="small">
        3. 试设计一FIR维纳滤波器，确定最佳传递函数：hopt = Rxx-1Rxs
        ，并用该滤波器处理观测信号，得到其最佳估计。（注：自行设定误差判定阈值，根据阈值确定滤波器的阶数或传递函数的长度）。
      </div>
      <div class="small">
        4.
        分别绘制出x方向和y方向的期望信号、噪声信号、观测信号、滤波后信号、误差信号的曲线图；
      </div>
      <div class="small">
        5. 在同一幅图中绘制出期望信号、观测信号和滤波后点目标的运动轨迹。
      </div>
      <div class="small">6. 按要求3-5，试设计一因果IIR维纳滤波器。</div>
      <div class="small">7. 按要求3-5，试设计卡尔曼滤波器进行滤波处理。</div>
      <div class="small">
        8.
        试比较所设计的FIR维纳滤波器，因果IIR维纳滤波器，卡尔漫滤波器的性能特性。
      </div>
      <br />
      <span class="big">实验报告要求：</span><br />
      <div class="small">
        实验报告以电子版（word版）形式提交，并附上程序源代码，打包后以“学号_姓名_实验一.rar”命名，提交到邮箱。Word文档中必须包含程序运行的结果（图形、曲线）并进行解释。
      </div>
      <br /><br />
      <div class="line_01">答题纸 分隔线</div>
      <br /><br />
      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[0].answer !== ''">
          {{ this.list[0].studentAnswers[0].question.stem }}：
          {{ this.list[0].studentAnswers[0].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[0].imagePath"
          :src="this.list[0].studentAnswers[0].imagePath"
        />
      </div>
      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[18].answer !== ''">
          {{ this.list[0].studentAnswers[18].question.stem }}：
          {{ this.list[0].studentAnswers[18].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[18].imagePath"
          :src="this.list[0].studentAnswers[18].imagePath"
        />
      </div>
      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[17].answer !== ''">
          {{ this.list[0].studentAnswers[17].question.stem }}：
          {{ this.list[0].studentAnswers[17].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[17].imagePath"
          :src="this.list[0].studentAnswers[17].imagePath"
        />
      </div>
      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[16].answer !== ''">
          {{ this.list[0].studentAnswers[16].question.stem }}：
          {{ this.list[0].studentAnswers[16].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[16].imagePath"
          :src="this.list[0].studentAnswers[16].imagePath"
        />
      </div>
      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[15].answer !== ''">
          {{ this.list[0].studentAnswers[15].question.stem }}：
          {{ this.list[0].studentAnswers[15].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[15].imagePath"
          :src="this.list[0].studentAnswers[15].imagePath"
        />
      </div>
      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[14].answer !== ''">
          {{ this.list[0].studentAnswers[14].question.stem }}：
          {{ this.list[0].studentAnswers[14].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[14].imagePath"
          :src="this.list[0].studentAnswers[14].imagePath"
        />
      </div>
      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[13].answer !== ''">
          {{ this.list[0].studentAnswers[13].question.stem }}：
          {{ this.list[0].studentAnswers[13].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[13].imagePath"
          :src="this.list[0].studentAnswers[13].imagePath"
        />
      </div>
      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[12].answer !== ''">
          {{ this.list[0].studentAnswers[12].question.stem }}：
          {{ this.list[0].studentAnswers[12].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[12].imagePath"
          :src="this.list[0].studentAnswers[12].imagePath"
        />
      </div>
      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[11].answer !== ''">
          {{ this.list[0].studentAnswers[11].question.stem }}：
          {{ this.list[0].studentAnswers[11].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[11].imagePath"
          :src="this.list[0].studentAnswers[11].imagePath"
        />
      </div>
      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[19].answer !== ''">
          {{ this.list[0].studentAnswers[19].question.stem }}：
          {{ this.list[0].studentAnswers[19].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[19].imagePath"
          :src="this.list[0].studentAnswers[19].imagePath"
        />
      </div>
      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[10].answer !== ''">
          {{ this.list[0].studentAnswers[10].question.stem }}：
          {{ this.list[0].studentAnswers[10].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[10].imagePath"
          :src="this.list[0].studentAnswers[10].imagePath"
        />
      </div>
      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[8].answer !== ''">
          {{ this.list[0].studentAnswers[8].question.stem }}：
          {{ this.list[0].studentAnswers[8].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[8].imagePath"
          :src="this.list[0].studentAnswers[8].imagePath"
        />
      </div>
      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[7].answer !== ''">
          {{ this.list[0].studentAnswers[7].question.stem }}：
          {{ this.list[0].studentAnswers[7].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[7].imagePath"
          :src="this.list[0].studentAnswers[7].imagePath"
        />
      </div>
      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[6].answer !== ''">
          {{ this.list[0].studentAnswers[6].question.stem }}：
          {{ this.list[0].studentAnswers[6].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[6].imagePath"
          :src="this.list[0].studentAnswers[6].imagePath"
        />
      </div>
      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[5].answer !== ''">
          {{ this.list[0].studentAnswers[5].question.stem }}：
          {{ this.list[0].studentAnswers[5].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[5].imagePath"
          :src="this.list[0].studentAnswers[5].imagePath"
        />
      </div>
      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[4].answer !== ''">
          {{ this.list[0].studentAnswers[4].question.stem }}：
          {{ this.list[0].studentAnswers[4].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[4].imagePath"
          :src="this.list[0].studentAnswers[4].imagePath"
        />
      </div>
      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[3].answer !== ''">
          {{ this.list[0].studentAnswers[3].question.stem }}：
          {{ this.list[0].studentAnswers[3].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[3].imagePath"
          :src="this.list[0].studentAnswers[3].imagePath"
        />
      </div>
      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[2].answer !== ''">
          {{ this.list[0].studentAnswers[2].question.stem }}：
          {{ this.list[0].studentAnswers[2].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[2].imagePath"
          :src="this.list[0].studentAnswers[2].imagePath"
        />
      </div>
      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[1].answer !== ''">
          {{ this.list[0].studentAnswers[1].question.stem }}：
          {{ this.list[0].studentAnswers[1].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[1].imagePath"
          :src="this.list[0].studentAnswers[1].imagePath"
        />
      </div>
      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[9].answer !== ''">
          {{ this.list[0].studentAnswers[9].question.stem }}：
          {{ this.list[0].studentAnswers[9].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[9].imagePath"
          :src="this.list[0].studentAnswers[9].imagePath"
        />
      </div>
      <div class="anwser">
        <div v-if="this.list && this.list[0].studentAnswers[20].answer !== ''">
          {{ this.list[0].studentAnswers[20].question.stem }}：
          {{ this.list[0].studentAnswers[20].answer }}
        </div>
        <img
          class="img"
          v-if="this.list && this.list[0].studentAnswers[20].imagePath"
          :src="this.list[0].studentAnswers[20].imagePath"
        />
      </div>
      <div v-if="isTeacher" style="margin-top: 50px">
        <el-input
          type="text"
          v-model="dafen2"
          placeholder="请输入分数！！"
          style="width: 30%; margin-right: 5%"
        ></el-input>

        <el-button class="btn" @click="subScore2" style="display: inline"
          >提交分数</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import GoTop from "@/components/GoTop/GoTop.vue";
import { getStudentAnswers, putAnswer } from "@/api/answer";
import { putStudentAnswers } from "@/api/xSheng";
import htmlToPdf from "@/utils/htmlToPdf";
export default {
  name: "stuAnswer1",
  data() {
    return {
      isTeacher: false,
      input: null,
      list: null,
      listLoading: true,
      dafen1: "",
      dafen2: "",
      df1: [],
      df2: [],
    };
  },
  components: {
    "v-goTop": GoTop,
  },
  created() {
    this.fetchData();
  },
  methods: {
    subScore1() {
    
      this.df1 = this.list;
      let id1 = {};
      id1 = this.list[0].student.id;
    
      let id11 = {
        id:`${id1}`
      }
      
      this.df1[0].student = id11;
      this.df1[0].studentScore = this.dafen1 * 1;
      delete this.df1[0].studentAnswers;
      delete this.df1[0].id;

      putAnswer(this.df1[0]).then(({ data }) => {
        this.$message.success(`添加成功`);
      });
    },
    subScore2() {
      this.df2 = this.list;
      let id2 = {};
      id2 = this.list[0].student.id;
      let id22 = {
        id:`${id2}`
      }
      this.df2[0].student = id22;
      this.df2[0].studentScore = this.dafen2 * 1;
      delete this.df2[0].studentAnswers;
      delete this.df2[0].id;
      putAnswer(this.df2[0]).then(({ data }) => {
        this.$message.success(`添加成功`);
      });
    },
    toHome() {
      this.$router.push({
        name: "Teacherhomework",
      });
    },
    fetchData() {
      this.listLoading = true;
      this.isTeacher = this.$route.params.isTeacher;

      /**
       * todo 学号变量替换
       */
      let studentId = this.$route.params.studentid;
      let quizId = this.$route.params.id;
      getStudentAnswers(studentId, quizId).then(({ data }) => {
        this.list = data.value;
        
        console.log(this.list);
        this.listLoading = false;
      });
    },
    download() {
      htmlToPdf.downloadPDF(
        document.querySelector("#demo"),
        `${this.list[0].quiz.name}+caoshanshan`
      );
    },
  },
};
</script>

<style scoped>
.line_01 {
  padding: 0 20px 0;
  margin: 20px 0;
  line-height: 10px;
  border-left: 400px dashed #ddd;
  border-right: 400px dashed #ddd;
  text-align: center;
}
.content {
  position: relative;
  height: 100%;
}
.inner {
  font-size: 26px;
  padding: 10px;
  border: 2px solid black;
}
.ma {
  font-size: 20px;
  padding-bottom: 30px;
}
.title {
  font-size: 30px;
  text-align: center;
  padding: 10px;
  color: rgb(10, 36, 151);
  position: sticky;
  top: 10px;
}
.big {
  font-weight: bold;
  font-size: 20px;
  line-height: 40px;
  padding-left: 5px;
  padding-top: 5px;
}
.small {
  font-size: 16px;
  line-height: 20px;
  line-height: 30px;
  padding-left: 10px;
  padding-right: 5px;
}
.img {
  width: 60%;
}
.anwser {
  border: 1px solid black;
}
.btn {
  color: #fff;
  background-color: #409eff;
}
</style>
