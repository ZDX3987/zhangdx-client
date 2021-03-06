import http from '../http/index'

const url = '/api/client/article';

export default {
  getArticleByPage(formData) {
    return http.get(url + '/articles', {params: formData});
  },
  getArticleById(id) {
    return http.get(url + '/article/' + id);
  },

  getArchivesTimeline() {
    return http.get(url + '/archives/timeline');
  },

  getArticleForArchives(formData) {
    return http.get(url + '/archives/articles', {params: formData})
  },

  praiseArticle(type, articleId) {
    return http.put(url + '/article/praise/' + articleId, {type: type})
  }
}
