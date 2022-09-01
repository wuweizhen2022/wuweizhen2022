export default {
  props: {
    lovers: Object
  },
  data() {
    return {
      startDate: "2017/8/29 00:00:00",
      currentDate: "",
      isTimer: ``,
    };
  },
  methods: {
    changeTogetherTime: function () {
      let mss = new Date() - new Date(this.startDate);
      // 86400000 = 1000 * 60 * 60 * 24
      let days = parseInt(mss / (86400000));
      let hours = parseInt((mss % (86400000)) / (3600000));
      let minutes = parseInt((mss % (3600000)) / (60000));
      let seconds = parseInt((mss % (60000)) / 1000);
      this.currentDate =
        days +
        " 天 " +
        hours +
        " 小时 " +
        minutes +
        " 分钟 " +
        seconds +
        " 秒 ";
    },
  },
  mounted: function () {
    this.changeTogetherTime();
    this.isTimer = setInterval(this.changeTogetherTime, 1000);
  },
  beforeDestroy() {
    if (this.isTimer) {
      clearInterval(this.isTimer);
    }
  },
  template: `
  <div class="card-love">
  <div>
    <h1>Hello {{ lovers.boy }}, {{ lovers.girl }}, We in together time!</h1>
    <div>
      <img class="round_icon" src="./boy.jpg" />
      <i class="icon icon-heart-fill"></i>
      <img class="round_icon" src="./girl.jpg" />
      <p>{{ currentDate }}</p>
    </div>
  </div>
  </div>`
}