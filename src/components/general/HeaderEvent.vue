<template>
    <header class="main_header">
      <div class="button_container">
        <div class="logo_container">
          <img src="../../assets/images/logoConectados.png" alt="Logo">
        </div>
        <div class="buttons">
          <router-link to="/" class="home_button">Home</router-link>
          <router-link to="/my-events" class="my_events_button">My Events</router-link>
          <router-link to="/control-panel" class="control_panel_button">Control Panel</router-link>
        </div>
        <div class="menu_container" @click="toggleMenu" v-show="isMobile">
          <div class="menu_icon">&#9776;</div>
        </div>
        <div class="login_container">
          <router-link to="/login" class="login_button">Log In</router-link>
        </div>
      </div>
  
      <div class="mobile_menu" v-show="showMenu">
        <div class="menu_content">
          <div class="logo_container">
            <img src="./../../assets/images/logoConectados.png" alt="Logo">
          </div>
          <div class="menu_links">
            <router-link to="/" class="menu_link">Home</router-link>
            <router-link to="/my-events" class="menu_link">My Events</router-link>
            <router-link to="/control-panel" class="menu_link">Control Panel</router-link>
          </div>
        </div>
        </div>
        <div class="title_container">
          <div class="main_title">Sushi Restaurant Food Event</div>
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
        handleResize() {
            this.isMobile = window.innerWidth <= 430;
        },
    },
};
</script>

<style scoped lang="scss">
.main_header {
    height: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: linear-gradient(to top, rgba(255, 255, 255, 0), rgb(85, 85, 85)),
        url('./../../assets/images/THUMBNAIL.png') center/cover no-repeat;
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
    display: flex;
    flex-direction: column;
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


@media (max-width: 768px) {
    .main_title {
        font-size: 4rem;
        color: #fff;
    }



    @media (max-width: 430px) {
        .buttons {
            display: none;
        }

        .menu_container {
            display: flex;
            margin-right: 4rem;
        }

        .menu_icon {
            display: block;
        }

        .dropdown_menu {
            display: flex;
        }

        .login_button {
            margin-left: 0;
        }

        .mobile_menu {
            z-index: 9999;
            width: 100%;
            background-color: rgba(76, 76, 76, 0.237);
        }

        .menu_links {
            display: flex;
            justify-content: center;
            flex-direction: column;
        }

        .menu_link {
            background-color: transparent;
            color: #fff;
            border: none;
            cursor: pointer;
            font-size: 1.2rem;
            transition: font-size 0.3s;
        }
    }
}
</style>