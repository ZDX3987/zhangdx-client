import Vue from 'vue'
import Router from 'vue-router'
import Index from "../components/Index/Index";
import ArticlePreview from "../components/article/ArticlePreview";
import IndexContent from "../components/Index/IndexContent";

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/',
          name: 'IndexContent',
          component: IndexContent,
          meta: {title: '首页'},
        },
        {
          path: '/article/:id.html',
          name: 'ArticlePreview',
          component: ArticlePreview,
          meta: {
            title: '文章详情'
          }
        }
      ]
    }
  ]
})

export default router

