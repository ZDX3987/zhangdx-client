<template>
  <div class="footer-content">
    <el-row>
      <el-col :md="12">
        <ul class="other-links">
          <li v-for="(link, i) of otherLinks" :key="i">
            <a :href="link.linkUrl">{{ link.linkName }}</a>
          </li>
        </ul>
        <p class="copyright">
          <a href="http://beian.miit.gov.cn">豫 ICP 备 20019985 号 - 1</a>
          Copyright © {{ currentYear }}
          <a href="http://www.zhangdx.cn">ZHANGDX</a>
        </p>
      </el-col>
      <el-col :md="12">
        <div class="shared-icon">
          <ul>
            <li v-for="(iconItem, i) of sharedIcons" :key="i">
              <a :href="iconItem.type === 'show' ? '#' : iconItem.href"
                 class="shared-a" :title="iconItem.title">
                <i :class="iconItem.iconClass" aria-hidden="true"></i>
                <el-image
                  class="qrcode-img"
                  v-if="iconItem.type === 'show'"
                  :src="iconItem.href"
                  fit="cover"
                ></el-image>
              </a>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
      otherLinks: [],
      sharedIcons: [
        {
          iconClass: "fa fa-weixin",
          title: "微信",
          type: "show",
          href: "/static/images/qrcode_for_gh_6e38291aed7a_258.jpg",
        },
        {
          iconClass: "fa fa-github",
          title: "Github",
          type: "href",
          href: "https://github.com/ZDX3987",
        },
        {iconClass: "fa fa-weibo", title: "微博", type: "href", href: ""},
        {
          iconClass: "fa fa-feed",
          title: "反馈",
          type: "href",
          href: "mailto:zdx3987@163.com?&subject=ZHANGDX博客反馈邮件"
        },
      ],
    };
  },
  created() {
    this.query();
  },
  methods: {
    query() {
      this.loading = true;
      this.$api.settingsApi.getAllFriendshipLink().then(res => {
        this.otherLinks = res.data;
        this.loading = false;
      }).catch(error => this.$message.error(error.msg));
    }
  }
};
</script>

<style scoped>
.footer-content {
  width: 100%;
  background-color: rgb(23, 28, 62);
  padding: 80px 0;
}

.other-links {
  height: 40px;
}

.other-links li {
  font-size: 16px;
}

.other-links a {
  color: #fff;
}

.copyright {
  color: rgb(176, 183, 189);
  font-size: 14px;
}

.shared-icon a {
  width: 50px;
  height: 50px;
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.1);
  font-size: 24px;
  line-height: 50px;
  position: relative;
}

.qrcode-img {
  width: 100px;
  height: 100px;
  transform: scale(0.5, 0.5);
  opacity: 0;
  transition: all 0.5s;
  position: absolute;
  left: -25px;
  top: -25px;
}

.shared-a:hover .qrcode-img {
  transform: scale(1, 1);
  transform: translate(-100px, 0);
  opacity: 1;
}

/* 公共样式 */
ul {
  list-style: none;
  text-align: center;
  padding-left: 0;
}

ul li {
  display: inline;
  margin: 0 1%;
}

a {
  color: rgb(176, 183, 189);
  text-decoration: none;
  transition: all 0.5s;
}

a:hover {
  color: var(--mainThemeColor);
}
</style>
