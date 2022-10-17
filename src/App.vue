<template>
  <div id="content-wrapper">
        <div class="menu">
            <div class="menu-wrapper">
              <router-link v-for="item in menuItems" :key="item.key" :to="item.link" v-model="item.key">
                  <img class='nav-icon' :src="item.icon" :alt="item.alt">
              </router-link>
            </div>
            <div class="page-title-container">
              <p id="page-title"></p> 
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

  export default {
    data() {
      return {
        menuItems: [
          {
            key:'main',
            title: 'Main',
            icon: './assets/home.png',
            alt: 'Main',
            link: '/',
          },
          {
            key:'profile',
            title: 'Profile',
            icon: './assets/user.svg',
            alt: 'Profile Icon',
            link: 'profile',
          },
        ],
      };
    },
    mounted() {}
  }

</script>

<style scoped>

</style>
