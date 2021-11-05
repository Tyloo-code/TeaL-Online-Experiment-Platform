<template>
  <div>
    <div v-if="this.$route.params.id * 1 === 1">
      <div class="title">{{ this.myList.name }}</div>
      <div class="outer">
        <div class="left">
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
        </div>
        <div class="right">
          <span class="big">实验要求3-4：</span><br />
          <span class="small">1）平均气压时域曲线：</span>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess1"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <span class="small">平均气压的数字特征：</span>
          <el-input type="text" v-model="label1"></el-input>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess2"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <br />

          <span class="small">2）平均气温时域曲线：</span>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess3"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <span class="small">平均气温的数字特征：</span>
          <el-input type="text" v-model="label2"></el-input>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess4"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <br />

          <span class="small">3）最低气温时域曲线：</span>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess5"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <span class="small">最低气温的数字特征：</span>
          <el-input type="text" v-model="label3"></el-input>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess6"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <br />

          <span class="small">4）最高气温时域曲线：</span>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess7"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <span class="small">最高气温的数字特征：</span>
          <el-input type="text" v-model="label4"></el-input>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess8"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <br />

          <span class="small">5）光照时长时域曲线：</span>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess9"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <span class="small">光照时长的数字特征：</span>
          <el-input type="text" v-model="label5"></el-input>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess10"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <br />

          <span class="small">6）平均风速时域曲线：</span>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess11"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <span class="small">平均风速的数字特征：</span>
          <el-input type="text" v-model="label6"></el-input>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess12"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <br />

          <span class="small">7）气压时域曲线：</span>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess13"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <span class="small">气压的数字特征：</span>
          <el-input type="text" v-model="label7"></el-input>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess14"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <br />

          <span class="small">8）太阳辐射时域曲线：</span>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess15"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <span class="small">太阳辐射的数字特征：</span>
          <el-input type="text" v-model="label8"></el-input>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess16"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <br />

          <span class="small">9）气温时域曲线：</span>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess17"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <span class="small">气温的数字特征：</span>
          <el-input type="text" v-model="label9"></el-input>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess18"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <br />

          <span class="small">10）相对湿度时域曲线：</span>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess19"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <span class="small">相对湿度的数字特征：</span>
          <el-input type="text" v-model="label10"></el-input>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess20"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <br />

          <span class="small">11）降雨量时域曲线：</span>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess21"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <span class="small">降雨量的数字特征：</span>
          <el-input type="text" v-model="label11"></el-input>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess22"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <br />

          <span class="small">12）风速时域曲线：</span>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess23"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <span class="small">风速的数字特征：</span>
          <el-input type="text" v-model="label12"></el-input>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess24"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <br />

          <span class="big">实验要求5-7：</span><br />
          <span class="small">1）平均气压：</span><br />
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess25"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入回答内容"
            v-model="jianda1"
          >
          </el-input>
          <br /><br />

          <span class="small">2）平均气温：</span><br />
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess26"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入回答内容"
            v-model="jianda2"
          >
          </el-input>
          <br /><br />

          <span class="small">3）最低气温：</span><br />
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess27"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入回答内容"
            v-model="jianda3"
          >
          </el-input>
          <br /><br />

          <span class="small">4）最高气温：</span><br />
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess28"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入回答内容"
            v-model="jianda4"
          >
          </el-input>
          <br /><br />

          <span class="small">5）光照时长：</span><br />
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess29"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入回答内容"
            v-model="jianda5"
          >
          </el-input>
          <br /><br />

          <span class="small">6）平均风速：</span><br />
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess30"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入回答内容"
            v-model="jianda6"
          >
          </el-input>
          <br /><br />

          <span class="small">7）气压：</span><br />
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess31"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入回答内容"
            v-model="jianda7"
          >
          </el-input>
          <br /><br />

          <span class="small">8）太阳辐射：</span><br />
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess32"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入回答内容"
            v-model="jianda8"
          >
          </el-input>
          <br /><br />

          <span class="small">9）气温：</span><br />
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess33"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入回答内容"
            v-model="jianda9"
          >
          </el-input>
          <br /><br />

          <span class="small">10）相对湿度：</span><br />
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess34"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入回答内容"
            v-model="jianda10"
          >
          </el-input>
          <br /><br />

          <span class="small">11）降雨量：</span><br />
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess35"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入回答内容"
            v-model="jianda11"
          >
          </el-input>
          <br /><br />

          <span class="small">12）风速：</span><br />
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess36"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入回答内容"
            v-model="jianda12"
          >
          </el-input>
          <br /><br />
          <el-button class="btn" @click="submit1">提交</el-button>
        </div>
      </div>
    </div>

    <div v-if="this.$route.params.id * 1 === 4">
      <div class="title">{{ this.myList.name }}</div>
      <div class="outer">
        <div class="left">
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
          <div class="small">
            1. 产生满足要求的x方向和y方向随机噪声500个样本；
          </div>
          <div class="small">2. 明确期望信号和观测信号；</div>
          <div class="small">
            3. 试设计一FIR维纳滤波器，确定最佳传递函数
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
          <div class="small">
            7. 按要求3-5，试设计卡尔曼滤波器进行滤波处理。
          </div>
          <div class="small">
            8.
            试比较所设计的FIR维纳滤波器，因果IIR维纳滤波器，卡尔漫滤波器的性能特性。
          </div>
          <br />
          <span class="big">实验报告要求：</span><br />
          <div class="small">
            实验报告以电子版（word版）形式提交，并附上程序源代码，打包后以“学号_姓名_实验一.rar”命名，提交到邮箱。Word文档中必须包含程序运行的结果（图形、曲线）并进行解释。
          </div>
        </div>
        <div class="right">
          <span class="big">一、x方向和y方向的随机噪声</span><br />
          <span class="small"
            >信号幅度在[-1，1]产生随机噪声500个样本，运行结果图如下：</span
          ><br />
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess40"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <br />

          <span class="big">二、明确期望信号和观测信号</span><br />
          <span class="small">x方向和y方向的期望信号和观测信号如下图：</span
          ><br />
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess41"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <br />

          <span class="big">三、FIR维纳滤波器</span><br />
          <span class="small">FIR维纳滤波器设计：</span>
          <el-input type="text" v-model="tiankong1"></el-input>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess42"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <br />

          <span class="small">FIR维纳滤波器分析：</span>
          <el-input type="text" v-model="tiankong2"></el-input>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess43"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <br />

          <span class="small">FIR维纳滤波器结果：</span>
          <el-input type="text" v-model="tiankong3"></el-input>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess44"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <br />

          <span class="big">四、IIR维纳滤波器</span><br />
          <span class="small">IIR维纳滤波器设计：</span>
          <el-input type="text" v-model="tiankong4"></el-input>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess45"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <br />

          <span class="small">IIR维纳滤波器分析：</span>
          <el-input type="text" v-model="tiankong5"></el-input>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess46"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <br />

          <span class="small">IIR维纳滤波器结果：</span>
          <el-input type="text" v-model="tiankong6"></el-input>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess47"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <br />

          <span class="big">五、卡尔曼滤波器</span><br />
          <span class="small">卡尔曼滤波器设计：</span>
          <el-input type="text" v-model="tiankong7"></el-input>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess48"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <br />

          <span class="small">卡尔曼滤波器分析：</span>
          <el-input type="text" v-model="tiankong8"></el-input>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess49"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <br />

          <span class="small">卡尔曼滤波器结果：</span>
          <el-input type="text" v-model="tiankong9"></el-input>
          <el-upload
            action="http://podolski.cn:5003/Upload"
            ref="pictureUpload"
            list-type="picture-card"
            :show-file-list="true"
            :accept="'image/*'"
            :auto-upload="true"
            :on-success="handleSuccess50"
            :on-error="handleError"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          <br />
          <span class="big">实验对比总结</span>
          <el-input type="text" v-model="tiankong10"></el-input>
          <br /><br />
          <el-button class="btn" @click="submit3">提交</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getQuizzes, putStudentAnswers } from "@/api/xSheng";
import { getToken, setToken, removeToken } from "@/utils/auth";
import jwt_decode from "jwt-decode";
export default {
  name: "stuDati",
  data() {
    return {
      tiankong1: "",
      tiankong2: "",
      tiankong3: "",
      tiankong4: "",
      tiankong5: "",
      tiankong6: "",
      tiankong7: "",
      tiankong8: "",
      tiankong9: "",
      tiankong10: "",
      label1: "",
      label2: "",
      label3: "",
      label4: "",
      label5: "",
      label6: "",
      label7: "",
      label8: "",
      label8: "",
      label9: "",
      label10: "",
      label11: "",
      label12: "",
      jianda1: "",
      jianda2: "",
      jianda3: "",
      jianda4: "",
      jianda5: "",
      jianda6: "",
      jianda7: "",
      jianda8: "",
      jianda9: "",
      jianda10: "",
      jianda11: "",
      jianda12: "",
      myContent1: [],
      myContent2: [],
      myToken: {
        num: null,
        name: "",
        role: "",
      },
      myImagePath1: "",
      myImagePath2: "",
      myImagePath3: "",
      myImagePath4: "",
      myImagePath5: "",
      myImagePath6: "",
      myImagePath7: "",
      myImagePath8: "",
      myImagePath9: "",
      myImagePath10: "",
      myImagePath11: "",
      myImagePath12: "",
      myImagePath13: "",
      myImagePath14: "",
      myImagePath15: "",
      myImagePath16: "",
      myImagePath17: "",
      myImagePath18: "",
      myImagePath19: "",
      myImagePath20: "",
      myImagePath21: "",
      myImagePath22: "",
      myImagePath23: "",
      myImagePath24: "",
      myImagePath25: "",
      myImagePath26: "",
      myImagePath27: "",
      myImagePath28: "",
      myImagePath29: "",
      myImagePath30: "",
      myImagePath31: "",
      myImagePath32: "",
      myImagePath33: "",
      myImagePath34: "",
      myImagePath35: "",
      myImagePath36: "",
      myImagePath40: "",
      myImagePath41: "",
      myImagePath42: "",
      myImagePath43: "",
      myImagePath44: "",
      myImagePath45: "",
      myImagePath46: "",
      myImagePath47: "",
      myImagePath48: "",
      myImagePath49: "",
      myImagePath50: "",
      isBiaoButton: false,
      isShow: false,
      tableContent: [],
      listLoading: "",
      myList: "",
      myTitle: "",
      myListLoading: "",
      studentId: "",
      studentName: "",
      myAnswer: "",
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      questionGroupe: [],
      list: {},
      arrList: [],
      studentAnswerGroup: {
        student: {
          id: "123124",
          name: "gf",
          role: "Student",
        },
        quiz: {
          id: this.$route.params.id * 1,
          name: "",
          markdown: "",
        },
        studentAnswers: [
          {
            answer: "",
            imagePath: "",
            score: 0,
            question: {
              id: null,
              standardAnswer: "",
              questionType: "",
              imagePath: "",
              position: null,
              score: null,
              row: null,
              column: null,
            },
          },
        ],
      },
    };
  },

  created() {
    this.fetchData1();
    this.myToken.num = jwt_decode(getToken()).sub;
    this.myToken.role = jwt_decode(getToken()).role;
  },

  methods: {
    fetchData1() {
      this.myListLoading = true;
      getQuizzes().then(({ data }) => {
        this.myList = data.value;
        this.myListLoading = false;
        this.myContent1 = this.myList[0].questions;
        this.myContent2 = this.myList[1].questions;
        console.log(this.myList);
        for (let i = 0; i < this.myList.length; i++) {
          if (this.myList[i].id == this.$route.params.id) {
            this.myList = this.myList[i];
          }
        }
        // 修改quiz字段
        this.studentAnswerGroup.quiz.id = this.myList.id;
        this.studentAnswerGroup.quiz.name = this.myList.name;
        this.studentAnswerGroup.quiz.markdown = this.myList.markdown;
        // 修改student字段
        this.studentAnswerGroup.student.id = this.myToken.num;
        this.studentAnswerGroup.student.userName = this.myToken.num;
        this.studentAnswerGroup.student.name = this.$store.getters.name;
        this.studentAnswerGroup.student.role = this.myToken.role;
      });
    },

    handleSuccess1(response) {
      this.$message.success("上传成功");
      this.myImagePath1 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess2(response) {
      this.$message.success("上传成功");
      this.myImagePath2 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess3(response) {
      this.$message.success("上传成功");
      this.myImagePath3 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess4(response) {
      this.$message.success("上传成功");
      this.myImagePath4 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess5(response) {
      this.$message.success("上传成功");
      this.myImagePath5 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess6(response) {
      this.$message.success("上传成功");
      this.myImagePath6 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess7(response) {
      this.$message.success("上传成功");
      this.myImagePath7 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess8(response) {
      this.$message.success("上传成功");
      this.myImagePath8 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess9(response) {
      this.$message.success("上传成功");
      this.myImagePath9 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess10(response) {
      this.$message.success("上传成功");
      this.myImagePath10 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess11(response) {
      this.$message.success("上传成功");
      this.myImagePath11 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess12(response) {
      this.$message.success("上传成功");
      this.myImagePath12 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess13(response) {
      this.$message.success("上传成功");
      this.myImagePath13 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess14(response) {
      this.$message.success("上传成功");
      this.myImagePath14 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess15(response) {
      this.$message.success("上传成功");
      this.myImagePath15 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess16(response) {
      this.$message.success("上传成功");
      this.myImagePath16 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess17(response) {
      this.$message.success("上传成功");
      this.myImagePath17 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess18(response) {
      this.$message.success("上传成功");
      this.myImagePath18 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess19(response) {
      this.$message.success("上传成功");
      this.myImagePath19 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess20(response) {
      this.$message.success("上传成功");
      this.myImagePath20 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess21(response) {
      this.$message.success("上传成功");
      this.myImagePath21 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess22(response) {
      this.$message.success("上传成功");
      this.myImagePath22 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess23(response) {
      this.$message.success("上传成功");
      this.myImagePath23 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess24(response) {
      this.$message.success("上传成功");
      this.myImagePath24 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess25(response) {
      this.$message.success("上传成功");
      this.myImagePath25 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess26(response) {
      this.$message.success("上传成功");
      this.myImagePath26 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess27(response) {
      this.$message.success("上传成功");
      this.myImagePath27 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess28(response) {
      this.$message.success("上传成功");
      this.myImagePath28 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess29(response) {
      this.$message.success("上传成功");
      this.myImagePath29 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess30(response) {
      this.$message.success("上传成功");
      this.myImagePath30 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess31(response) {
      this.$message.success("上传成功");
      this.myImagePath31 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess32(response) {
      this.$message.success("上传成功");
      this.myImagePath32 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess33(response) {
      this.$message.success("上传成功");
      this.myImagePath33 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess34(response) {
      this.$message.success("上传成功");
      this.myImagePath34 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess35(response) {
      this.$message.success("上传成功");
      this.myImagePath35 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess36(response) {
      this.$message.success("上传成功");
      this.myImagePath36 = `https://homeworksystem.podolski.cn/${response}`;
    },

    handleSuccess40(response) {
      this.$message.success("上传成功");
      this.myImagePath40 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess41(response) {
      this.$message.success("上传成功");
      this.myImagePath41 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess42(response) {
      this.$message.success("上传成功");
      this.myImagePath42 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess43(response) {
      this.$message.success("上传成功");
      this.myImagePath43 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess44(response) {
      this.$message.success("上传成功");
      this.myImagePath44 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess45(response) {
      this.$message.success("上传成功");
      this.myImagePath45 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess46(response) {
      this.$message.success("上传成功");
      this.myImagePath46 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess47(response) {
      this.$message.success("上传成功");
      this.myImagePath47 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess48(response) {
      this.$message.success("上传成功");
      this.myImagePath48 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess49(response) {
      this.$message.success("上传成功");
      this.myImagePath49 = `https://homeworksystem.podolski.cn/${response}`;
    },
    handleSuccess50(response) {
      this.$message.success("上传成功");
      this.myImagePath50 = `https://homeworksystem.podolski.cn/${response}`;
    },

    handleError() {
      this.$message.error("上传失败,请重新上传图片!");
    },
    handleRemove(file, index) {
      this.$refs.pictureUpload[0].uploadFiles = [];
      this.$message.success("删除成功");
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    submit1() {
      this.myAnswer = [
        {
          answer: "",
          imagePath: this.myImagePath1,
          score: 0,
          question: this.myContent1[0],
        },
        {
          answer: this.label1,
          imagePath: "",
          score: 0,
          question: this.myContent1[42],
        },
        {
          answer: "",
          imagePath: this.myImagePath2,
          score: 0,
          question: this.myContent1[43],
        },
        {
          answer: "",
          imagePath: this.myImagePath3,
          score: 0,
          question: this.myContent1[31],
        },
        {
          answer: this.label2,
          imagePath: "",
          score: 0,
          question: this.myContent1[44],
        },
        {
          answer: "",
          imagePath: this.myImagePath4,
          score: 0,
          question: this.myContent1[45],
        },
        {
          answer: "",
          imagePath: this.myImagePath5,
          score: 0,
          question: this.myContent1[32],
        },
        {
          answer: this.label3,
          imagePath: "",
          score: 0,
          question: this.myContent1[46],
        },
        {
          answer: "",
          imagePath: this.myImagePath6,
          score: 0,
          question: this.myContent1[47],
        },
        {
          answer: "",
          imagePath: this.myImagePath7,
          score: 0,
          question: this.myContent1[33],
        },
        {
          answer: this.label4,
          imagePath: "",
          score: 0,
          question: this.myContent1[48],
        },
        {
          answer: "",
          imagePath: this.myImagePath8,
          score: 0,
          question: this.myContent1[49],
        },
        {
          answer: "",
          imagePath: this.myImagePath9,
          score: 0,
          question: this.myContent1[34],
        },
        {
          answer: this.label5,
          imagePath: "",
          score: 0,
          question: this.myContent1[50],
        },
        {
          answer: "",
          imagePath: this.myImagePath10,
          score: 0,
          question: this.myContent1[51],
        },
        {
          answer: "",
          imagePath: this.myImagePath11,
          score: 0,
          question: this.myContent1[35],
        },
        {
          answer: this.label6,
          imagePath: "",
          score: 0,
          question: this.myContent1[52],
        },
        {
          answer: "",
          imagePath: this.myImagePath12,
          score: 0,
          question: this.myContent1[53],
        },
        {
          answer: "",
          imagePath: this.myImagePath13,
          score: 0,
          question: this.myContent1[36],
        },
        {
          answer: this.label7,
          imagePath: "",
          score: 0,
          question: this.myContent1[54],
        },
        {
          answer: "",
          imagePath: this.myImagePath14,
          score: 0,
          question: this.myContent1[55],
        },
        {
          answer: "",
          imagePath: this.myImagePath15,
          score: 0,
          question: this.myContent1[37],
        },
        {
          answer: this.label8,
          imagePath: "",
          score: 0,
          question: this.myContent1[56],
        },
        {
          answer: "",
          imagePath: this.myImagePath16,
          score: 0,
          question: this.myContent1[57],
        },
        {
          answer: "",
          imagePath: this.myImagePath17,
          score: 0,
          question: this.myContent1[38],
        },
        {
          answer: this.label9,
          imagePath: "",
          score: 0,
          question: this.myContent1[30],
        },
        {
          answer: "",
          imagePath: this.myImagePath18,
          score: 0,
          question: this.myContent1[29],
        },
        {
          answer: "",
          imagePath: this.myImagePath19,
          score: 0,
          question: this.myContent1[39],
        },
        {
          answer: this.label10,
          imagePath: "",
          score: 0,
          question: this.myContent1[28],
        },
        {
          answer: "",
          imagePath: this.myImagePath20,
          score: 0,
          question: this.myContent1[13],
        },
        {
          answer: "",
          imagePath: this.myImagePath21,
          score: 0,
          question: this.myContent1[40],
        },
        {
          answer: this.label11,
          imagePath: "",
          score: 0,
          question: this.myContent1[1],
        },
        {
          answer: "",
          imagePath: this.myImagePath22,
          score: 0,
          question: this.myContent1[2],
        },
        {
          answer: "",
          imagePath: this.myImagePath23,
          score: 0,
          question: this.myContent1[41],
        },
        {
          answer: this.label12,
          imagePath: "",
          score: 0,
          question: this.myContent1[3],
        },
        {
          answer: "",
          imagePath: this.myImagePath24,
          score: 0,
          question: this.myContent1[4],
        },
        {
          answer: "",
          imagePath: this.myImagePath25,
          score: 0,
          question: this.myContent1[5],
        },
        {
          answer: this.jianda1,
          imagePath: "",
          score: 0,
          question: this.myContent1[6],
        },
        {
          answer: "",
          imagePath: this.myImagePath26,
          score: 0,
          question: this.myContent1[7],
        },
        {
          answer: this.jianda2,
          imagePath: "",
          score: 0,
          question: this.myContent1[8],
        },
        {
          answer: "",
          imagePath: this.myImagePath27,
          score: 0,
          question: this.myContent1[9],
        },
        {
          answer: this.jianda3,
          imagePath: "",
          score: 0,
          question: this.myContent1[10],
        },
        {
          answer: "",
          imagePath: this.myImagePath28,
          score: 0,
          question: this.myContent1[11],
        },
        {
          answer: this.jianda4,
          imagePath: "",
          score: 0,
          question: this.myContent1[12],
        },
        {
          answer: "",
          imagePath: this.myImagePath29,
          score: 0,
          question: this.myContent1[14],
        },
        {
          answer: this.jianda5,
          imagePath: "",
          score: 0,
          question: this.myContent1[27],
        },
        {
          answer: "",
          imagePath: this.myImagePath30,
          score: 0,
          question: this.myContent1[15],
        },
        {
          answer: this.jianda6,
          imagePath: "",
          score: 0,
          question: this.myContent1[16],
        },
        {
          answer: "",
          imagePath: this.myImagePath31,
          score: 0,
          question: this.myContent1[17],
        },
        {
          answer: this.jianda7,
          imagePath: "",
          score: 0,
          question: this.myContent1[18],
        },
        {
          answer: "",
          imagePath: this.myImagePath32,
          score: 0,
          question: this.myContent1[19],
        },
        {
          answer: this.jianda8,
          imagePath: "",
          score: 0,
          question: this.myContent1[20],
        },
        {
          answer: "",
          imagePath: this.myImagePath33,
          score: 0,
          question: this.myContent1[21],
        },
        {
          answer: this.jianda9,
          imagePath: "",
          score: 0,
          question: this.myContent1[22],
        },
        {
          answer: "",
          imagePath: this.myImagePath34,
          score: 0,
          question: this.myContent1[23],
        },
        {
          answer: this.jianda10,
          imagePath: "",
          score: 0,
          question: this.myContent1[24],
        },
        {
          answer: "",
          imagePath: this.myImagePath35,
          score: 0,
          question: this.myContent1[25],
        },
        {
          answer: this.jianda11,
          imagePath: "",
          score: 0,
          question: this.myContent1[26],
        },
        {
          answer: "",
          imagePath: this.myImagePath36,
          score: 0,
          question: this.myContent1[58],
        },
        {
          answer: this.jianda12,
          imagePath: "",
          score: 0,
          question: this.myContent1[59],
        },
      ];
      this.studentAnswerGroup.studentAnswers = this.myAnswer;
      putStudentAnswers(this.studentAnswerGroup).then(({ data }) => {
        this.$message.success(`添加成功`);
        this.studentAnswerGroup.studentAnswers = [];
      });
    },
    submit3() {
      this.myAnswer = [
        {
          answer: "",
          imagePath: this.myImagePath40,
          score: 0,
          question: this.myContent2[0],
        },
        {
          answer: "",
          imagePath: this.myImagePath41,
          score: 0,
          question: this.myContent2[18],
        },
        {
          answer: this.tiankong1,
          imagePath: "",
          score: 0,
          question: this.myContent2[17],
        },
        {
          answer: "",
          imagePath: this.myImagePath42,
          score: 0,
          question: this.myContent2[16],
        },
        {
          answer: this.tiankong2,
          imagePath: "",
          score: 0,
          question: this.myContent2[15],
        },
        {
          answer: "",
          imagePath: this.myImagePath43,
          score: 0,
          question: this.myContent2[14],
        },
        {
          answer: this.tiankong3,
          imagePath: "",
          score: 0,
          question: this.myContent2[13],
        },
        {
          answer: "",
          imagePath: this.myImagePath44,
          score: 0,
          question: this.myContent2[12],
        },

        {
          answer: this.tiankong4,
          imagePath: "",
          score: 0,
          question: this.myContent2[11],
        },
        {
          answer: "",
          imagePath: this.myImagePath45,
          score: 0,
          question: this.myContent2[19],
        },
        {
          answer: this.tiankong5,
          imagePath: "",
          score: 0,
          question: this.myContent2[10],
        },
        {
          answer: "",
          imagePath: this.myImagePath46,
          score: 0,
          question: this.myContent2[8],
        },
        {
          answer: this.tiankong6,
          imagePath: "",
          score: 0,
          question: this.myContent2[7],
        },
        {
          answer: "",
          imagePath: this.myImagePath47,
          score: 0,
          question: this.myContent2[6],
        },

        {
          answer: this.tiankong7,
          imagePath: "",
          score: 0,
          question: this.myContent2[5],
        },
        {
          answer: "",
          imagePath: this.myImagePath48,
          score: 0,
          question: this.myContent2[4],
        },
        {
          answer: this.tiankong8,
          imagePath: "",
          score: 0,
          question: this.myContent2[3],
        },
        {
          answer: "",
          imagePath: this.myImagePath49,
          score: 0,
          question: this.myContent2[2],
        },
        {
          answer: this.tiankong9,
          imagePath: "",
          score: 0,
          question: this.myContent2[1],
        },
        {
          answer: "",
          imagePath: this.myImagePath50,
          score: 0,
          question: this.myContent2[9],
        },
        {
          answer: this.tiankong10,
          imagePath: "",
          score: 0,
          question: this.myContent2[20],
        },
      ];
      this.studentAnswerGroup.studentAnswers = this.myAnswer;
      putStudentAnswers(this.studentAnswerGroup).then(({ data }) => {
        this.$message.success(`添加成功`);
        this.studentAnswerGroup.studentAnswers = [];
      });
    },
  },
};
</script>

<style scoped>
body {
  overflow-x: hidden;
  overflow-y: hidden;
}
.title {
  font-size: 26px;
  text-align: center;
  padding: 10px;
  color: rgb(10, 36, 151);
  position: sticky;
  top: 0px;
}
.outer {
  display: flex;
  flex-flow: row;
}
.left,
.right {
  margin-top: 20px;
  overflow-y: auto;
  height: 1000px;
}
.left {
  width: 60%;
  height: 1000px;
  border-right: 2px solid #dddddd;
  font-size: 20px;
}
.right {
  padding-left: 10px;
  flex: 1;
  height: 1000px;
  font-size: 20px;
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
.btn {
  color: #fff;
  background-color: #409eff;
}
</style>