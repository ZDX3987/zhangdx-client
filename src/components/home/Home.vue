<template>
  <div class="layout">
    <el-row class="index-content">
      <el-col :xl="{span: 10, offset: 5}" :lg="{span: 13, offset: 3}" :md="{span: 14, offset: 2}"
              :xs="{span: 22, offset: 1}" :sm="{span: 22, offset: 1}">
        <ArticleList :query-cate-id="0"/>
      </el-col>
      <el-col :xl="4" :lg="5" :md="6" :xs="{span: 22, offset: 1}" :sm="{span: 22, offset: 1}" class="ml-lg-3">
        <CateCloud/>
        <TopicSide/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ArticleList from "../article/ArticleList";
import CateCloud from "../category/CateCloud";
import TopicSide from "../topic/TopicSide";

export default {
  name: "Home",
  data() {
    return {}
  },
  components: {
    ArticleList,
    CateCloud,
    TopicSide
  }
}
</script>

<style scoped>
.index-content {
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
