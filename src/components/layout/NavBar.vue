<template>
  <div class="navbar-content">
    <nav class="navbar navbar-expand-md navbar-light row">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="fa fa-bars"></span>
      </button>
      <div class="col-md-3 col-6 col-sm-6 m-auto m-md-0">
        <router-link class="navbar-brand" :to="{name: 'Home'}">
          <span class="navbar-brand mb-0 h1 navbar-title">{{ title }}</span>
        </router-link>
      </div>
      <div class="col-1 col-md-1 hidden-sm-and-up">
        <span class="search-btn fa" :class="searchShowed ? 'fa-close' : 'fa-search'" @click="showSearch"></span>
      </div>
      <div class="collapse navbar-collapse col-md-8 menu-content" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item mr-3" :class="getNavLiClass(menu)"
              v-for="menu of menuList" :key="menu.index">
            <router-link v-if="menu.children" class="nav-link dropdown-toggle"
                         :id="'menu_' + menu.index" :to="{path: menu.href}"
                         role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span :class="menu.icon"></span>&nbsp;
              {{ menu.text }}
            </router-link>
            <div v-if="menu.children" class="dropdown-menu"
                 :aria-labelledby="'menu_' + menu.index">
              <router-link v-for="child of menu.children" :key="child.index" class="dropdown-item"
                           :to="{path: child.href}">
                {{ child.text }}
              </router-link>
            </div>
            <router-link v-else class="nav-link" :to="{path: menu.href}"
                         :id="'menu_' + menu.index">
              <span :class="menu.icon"></span>&nbsp;
              {{ menu.text }} <span class="sr-only">(current)</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col-1 hidden-xs-only">
        <span class="search-btn fa" :class="searchShowed ? 'fa-close' : 'fa-search'" @click="showSearch"></span>
      </div>
    </nav>
  </div>
</template>

<script>
import {navData} from "../../util/nav-data";

export default {
  name: "NavBar",
  data() {
    return {
      title: 'ZHANGDX',
      menuList: navData,
      searchShowed: false
    }
  },
  methods: {
    getNavLiClass(menu) {
      let dropdown = menu.children ? 'dropdown ' : '';
      let active = this.$route.path === menu.href ? 'active ' : '';
      return dropdown + active;
    },
    showSearch() {
      this.searchShowed = !this.searchShowed;
      this.$emit('show-search', this.searchShowed);
    }
  },
}
</script>

<style scoped>
.navbar-content {
  background-color: var(--bgColor);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
}

.navbar-title {
  height: 100%;
  font-weight: bold;
  background-image: linear-gradient(to right, #17b3a1, #e0142b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

a {
  text-decoration: none;
  color: var(--fontColor) !important;
}

.active a {
  color: var(--mainThemeColor) !important;
}

.menu-content {
  text-align: left;
}

.menu-content a:hover {
  color: var(--mainThemeColor) !important;
  background-color: var(--bgColor) !important;
}

.dropdown-menu {
  background-color: var(--bgColor);
  margin-top: 20px;
  border: none;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
}

.dropdown-item {
  border-bottom: 1px solid var(--borderColor);
}

.dropdown-item:nth-last-of-type(1) {
  border: none;
}

.navbar-toggler {
  border: none;
  max-width: 100%;
}
.navbar-toggler >>> span {
  color: var(--fontColor);
}

.search-btn {
  margin-left: -30px;
  color: var(--fontColor);
}
</style>
