<template>
  <header class="main_header">
    <div class="button_container">
      <div class="logo_container">
        <img src="../../assets/images/logoConectados.png" alt="Logo">
      </div>
      <div class="buttons">
        <button class="home_button" @click="navigate('Home')">Home</button>
        <button class="my_events_button" @click="navigate('My Events')">My Events</button>
        <button class="control_panel_button" @click="navigate('Control Panel')">Control Panel</button>
      </div>
      <div class="menu_container" @click="toggleMenu" v-show="isMobile">
        <div class="menu_icon">&#9776;</div>
      </div>
      <div class="login_container">
        <button class="login_button" @click="navigate('Login')">Log In</button>
      </div>
    </div>
    <div class="title_container">
      <div class="main_title">Your official Japan</div>
      <div class="sub_title">travel guide</div>
    </div>
    <div class="mobile_menu" v-show="showMenu">
      <div class="menu_content">
        <div class="logo_container">
          <img src="../../assets/images/logoConectados.png" alt="Logo">
        </div>
        <button class="menu_close" @click="toggleMenu">&times;</button>
        <div class="menu_links">
          <button class="menu_link" @click="navigate('Home')">Home</button>
          <button class="menu_link" @click="navigate('My Events')">My Events</button>
          <button class="menu_link" @click="navigate('Control Panel')">Control Panel</button>
          <button class="menu_link" @click="navigate('Login')">Log In</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      isMobile: window.innerWidth <= 430,
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    navigate(page) {
      this.selectedPage = page;
      this.showMenu = false;
    },
    handleResize() {
      this.isMobile = window.innerWidth <= 430;
    },
  },
};
</script>

<style scoped>
.main_header {
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(255, 255, 255)),
              url('../../assets/images/imagenFondoHeader.jpg') center/cover no-repeat; 
}

.button_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo_container img {
  max-height: 6rem;
}

.buttons {
  display: flex;
}

.home_button,
.my_events_button,
.control_panel_button {
  margin-right: 0.5rem;
  padding: 7px 11px;
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  transition: font-size 0.3s;
}

.login_container {
  display: flex;
  align-items: center;
}

.login_button {
  margin-left: 0.5rem;
  padding: 7px 11px;
  background-color: #d6d6d600;
  color: #fff;
  border: solid 1px #fff;
  border-radius: 15px;
  cursor: pointer;
  font-size: 1.5rem;
  transition: font-size 0.3s;
}

.menu_container {
  display: none;
  cursor: pointer;
  font-size: 2rem; 
  color: #fff; 
}

.dropdown_menu {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6));
}

.menu_button {
  padding: 7px 11px;
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  transition: font-size 0.3s;
}

.title_container {
  text-align: center;
  margin-bottom: 4rem;
}

.main_title {
  font-size: 5rem;
  color: #fff;
}

.sub_title {
  font-size: 3.5rem;
  color: #ffffff;
}

@media (max-width: 768px) {

  .main_title {
  font-size: 4rem;
  color: #fff;
}

.sub_title {
  font-size: 3rem;
  color: #ffffff;
}
}



@media (max-width: 430px) {
  .buttons {
    display: none;
  }

  .menu_container {
    display: flex;
  }

  .menu_icon {
    display: block;
  }

  .dropdown_menu {
    display: none;
  }

  .login_button {
    margin-left: 0;
  }
}


</style>
