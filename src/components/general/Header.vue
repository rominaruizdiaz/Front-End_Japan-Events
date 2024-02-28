<script setup>
const showSidebar = () => {
	const sidebar = document.querySelector(".sidebar");
	sidebar.style.display = "flex";
};
const hideSidebar = () => {
	const sidebar = document.querySelector(".sidebar");
	sidebar.style.display = "none";
};

document.addEventListener("DOMContentLoaded", function () {
	// Tu código JavaScript aquí
	let prevScrollpos = window.scrollY;
	const header = document.getElementById("header");

	window.addEventListener("scroll", function () {
		let currentScrollPos = window.scrollY;
		if (prevScrollpos > currentScrollPos) {
			header.style.top = "0";
		} else {
			header.style.top = "-10rem";
		}
		prevScrollpos = currentScrollPos;
	});
});
</script>

<template>
	<header id="header">
		<div id="logo_container">
			<img src="./../../assets/images/logoConectados.png" alt="Logo" />
		</div>

		<nav>
			<div class="sidebar">
				<li @click="hideSidebar">
					<img
						src="./../../assets/icons/hide-hamburger.svg"
						alt="Logo"
					/>
				</li>
				<img
					src="./../../assets/images/logoConectados-pink.png"
					alt="Logo"
				/>
				<router-link to="/" class="button underline">Home</router-link>
				<router-link to="/my-events" class="button underline"
					>My Events</router-link
				>
				<router-link to="/control-panel" class="button underline"
					>Control Panel</router-link
				>
				<router-link to="/login" class="button login_button"
					>Log In</router-link
				>
			</div>
			<div id="desktop-menu">
				<router-link to="/" class="button underline hideOnMobile"
					>Home</router-link
				>
				<router-link
					to="/my-events"
					class="button underline hideOnMobile"
					>My Events</router-link
				>
				<router-link
					to="/control-panel"
					class="button underline hideOnMobile"
					>Control Panel</router-link
				>
				<router-link
					to="/login"
					class="button hideOnMobile login_button"
					>Log In</router-link
				>
				<li @click="showSidebar">
					<img
						src="./../../assets/icons/hamburger-menu.svg"
						alt="Logo"
					/>
				</li>
			</div>
		</nav>
	</header>
</template>

<style lang="scss" scoped>
header {
	height: 10rem;
	width: 100vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px 6rem;
	background-color: rgba(0, 0, 0, 0.214);
	backdrop-filter: blur(30px);
	position: fixed;
	z-index: 998;
}

#logo_container {
	width: 20rem;

	img {
		width: 100%;
	}
}
#desktop-menu {
	font-size: 1.7rem;
	font-family: "Poppins", sans-serif;
	display: flex;
	gap: 3rem;
	align-items: center;
	justify-content: space-between;
	align-items: center;

	li {
		list-style: none;
		display: none;
		img {
			width: 2.3em;
		}
	}
	.button {
		color: white;
		text-decoration: none;
	}

	.login_button {
		border-radius: 0.5rem;
		border: solid 0.1rem white;
		padding: 1rem 3rem;
		transition: 300ms ease-in-out;
	}
	.login_button:hover {
		background-color: white;
		color: black;
	}
}

.sidebar {
	position: fixed;
	top: 0;
	right: 0;
	height: 100vh;
	width: 100%;
	z-index: 999;
	background-color: white;
	box-shadow: -10px 0 10px rgba(0, 0, 0, 0.244);
	display: none;
	flex-direction: column;
	align-items: center;
	padding: 2rem 0;
	gap: 4vh 0;
	display: none;

	.login_button {
		border-radius: 0.5rem;
		border: solid 0.1rem #ad8799;
		padding: 1rem 3rem;
		transition: 300ms ease-in-out;
	}
	.login_button:hover {
		background-color: #ad8799;
		color: rgb(255, 255, 255);
	}

	.button {
		color: rgb(0, 0, 0);
		text-decoration: none;
		font-size: 2rem;
		font-family: "Poppins", sans-serif;
	}

	> img {
		width: 80%;
		margin-bottom: 4rem;
	}

	li {
		width: 100%;
		display: flex;
		margin-left: 5rem;

		img {
			width: 3em;
			height: 90%;
		}
	}

	.button {
		color: black;
	}
	.button:hover {
		color: black;
	}
}

.underline {
	display: inline-block;
}
.underline:after {
	content: "";
	width: 0px;
	height: 0.1rem;
	display: block;
	background: white;
	transition: 300ms ease-in-out;
}
.underline:hover:after {
	width: 100%;
}

#stickyheaders {
	transition: transform 0.34s ease;
}
.headerup {
	transform: translateY(-110px);
}

#header {
	transition: top 0.3s ease;
}

@media (max-width: 800px) {
	.hideOnMobile {
		display: none;
	}

	header {
		padding: 0px 3rem;
	}

	#desktop-menu > li {
		display: block;
	}
}
</style>
