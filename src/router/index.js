import Vue from 'vue'
import Router from 'vue-router'
import Index from "../components/Index/Index";
import ArticlePreview from "../components/article/ArticlePreview";
import IndexContent from "../components/Index/IndexContent";
import Error from '../components/common/Error'
import CateList from "../components/category/CateList";
import Classify from "../components/classify/Classify";
import Archives from "../components/archives/Archives";
import UpdateLog from "../components/updatelog/UpdateLog";
import TopicList from "../components/topic/TopicList";
import TopicItem from "../components/topic/TopicItem";

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {title: '首页'},
      redirect: {name: 'IndexContent'},
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
        },
        {
          path: '/cate/:id.html',
          name: 'CateList',
          component: CateList,
          meta: {
            title: '分类标签'
          }
        },
        {
          path: '/classify',
          name: 'Classify',
          component: Classify,
          meta: {
            title: '文章分类'
          }
        },
        {
          path: '/archives',
          name: 'Archives',
          component: Archives,
          meta: {
            title: '归档'
          }
        },
        {
          path: '/topics',
          name: 'TopicList',
          component: TopicList,
          meta: {
            title: '所有专题'
          }
        },
        {
          path: '/topic/:id.html',
          name: 'TopicItem',
          component: TopicItem,
          meta: {
            title: '专题'
          }
        },
        {
          path: '/updatelog',
          name: 'UpdateLog',
          component: UpdateLog,
          meta: {
            title: '更新日志'
          }
        }
      ]
    },
    {
      path: '/error',
      name: 'Error',
      component: Error,
      meta: {
        title: '页面出错了'
      }
    },
    {
      path: '/**',
      name: 'UnKnown',
      redirect: 'Error',
      meta: {
        title: '页面出错了'
      }
    }
  ]
})

export default router

