<template>
  <div class="container-fruid">
    <div class="container">
      <div class="row upload-form mt-5">
        <div class="col-md-6">        
          <form>
            <div class="form-row">
              <div class="form-group">
                <label for="">คณะ</label>
                <select v-model="faculty" class="form-select">
                  <option value="">...</option>
                  <option value="เทคโนโลยีสารสนเทศ">เทคโนโลยีสารสนเทศ</option>
                  <option value="วิทยาศาสตร์">วิทยาศาสตร์</option>
                  <option value="เทคโนโลยีการเกษตร">เทคโนโลยีการเกษตร</option>
                  <option value="วิศวกรรมศาสตร์">วิศวกรรมศาสตร์</option>
                </select>
              </div>
              <div class="form-group">
                <label for="">รอบรับสมัคร</label>
                <select v-model="round" class="form-select">
                  <option value="">...</option>
                  <option> ( 1/2565 ) รอบ 1 - รับสมัครประจำภาคการศึกษา</option>
                  <option> ( 1/2565 ) รอบ 1 - รับสมัครแบบเลือกเข้าศึกษาในภาคการศึกษาที่ต้องการ</option>
                  <option> ( 2/2565 ) รอบ 1 - รับสมัครประจำภาคการศึกษา</option>
                </select>
              </div>
              <div class="form-group">
                <label for="">โครงการ</label>
                <select v-model="project" class="form-select">
                  <option value="">...</option>
                  <option> รับเข้า 1/2565 คณะเทคโนโลยีสารสนเทศ</option>
                  <option> รับเข้า 1/2565 คณะวิทยาศาสตร์</option>
                  <option> รับเข้า 1/2565 คณะเทคโนโลยีการเกษตร</option>
                  <option> รับเข้า 1/2565 คณะวิศวกรรมศาสตร์</option>
                </select>
              </div>
              <div class="form-group">
                <label for="">หลักสูตร</label>
                <select v-model="curriculum" class="form-select">
                  <option value="">...</option>
                  <option>นานาชาติ</option>
                  <option>ไทย</option>
                </select>
              </div>
            </div>
            <div class="upload-status">
              <button @click="search()" type="button" class="submit-btn btn btn-outline-success">Submit</button>
            </div>
          </form>
        </div>
      </div>
          <div>
  <b-card>
    <b-card-text>
      หลักสูตร : {{ result.name }} <br>
      แผนการศึกษา : {{ result.plan }}<br>
      วันที่เปิดรับสมัคร : {{ result.time }}<br>
      หมายเหตุ : {{ result.description }}
    </b-card-text>

    <b-button href="#" variant="primary">สมัคร</b-button>
  </b-card>
</div>
    </div>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  name: 'AddminsionPage',
  data() {
    return {
      round: "",
      project: "",
      faculty: "",
      curriculum: "",
      result: ""
    }
  },
  created() {
    document.title = "Addmission-Pdb"
  },
  methods: {
    search() {
      console.log(this.faculty)
        const res = axios.get('http://localhost:9004/search-c-pdb', { params: { tags: this.faculty } });
        this.result = res.data.resultdata;
        console.log(res)
    }
  }
}
</script>

<style>
html {
  height: 100%;
}
.invalid-input {
  font-size: 13px;
  color: #ff4d4f;
  padding: 1% 0 0 1%;
}
.is-invalid {
  border: #ff4d4f;
}
.upload-form {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  height: 70vh;
  box-shadow: 0px 0px 8px lightblue ;
}
.upload-form label {
  margin: 1% 0;
  font-size: 20px;
}
.form-group {
  margin: 1% 0%;
}
.submit-btn {
  margin: 1% 0 1% 0;
}
.upload-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.error {
  color: #ff4d4f;
}
.success {
  color: #52c41a;
}
.uploading {
  color: #1890ff;
}
</style>