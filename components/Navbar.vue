<style lang="scss">

</style>

<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-primary bg-secondary border-bottom border-dark">
			<nuxt-link
				class="navbar-brand"
				to="/">
				<img
					style="width:55px;"
					src="~/assets/images/poehouse.png"
					alt="">
			</nuxt-link>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"/>
			</button>

			<div
				id="navbarSupportedContent"
				class="collapse navbar-collapse">
				<ul class="navbar-nav mr-auto">
					<li
						v-for="item in navbarOptions"
						:key="item.title"
						:class="(item.dropdownItems)?'nav-item dropdown':'nav-item'">
						<nuxt-link
							v-if="!item.dropdownItems"
							:to="item.url"
							class="nav-link" >
							{{ item.description }}
						</nuxt-link>

						<a
							v-if="item.dropdownItems"
							:id="`navbar${item.title}`"
							class="nav-link dropdown-toggle"
							href="#"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							{{ item.description }}
						</a>
						<div
							v-if="item.dropdownItems"
							class="dropdown-menu bg-secondary dropdown-primary"
							aria-labelledby="navbarDropdown">
							<nuxt-link
								v-for="(dropdownItem,index) in item.dropdownItems"
								:key="index"
								:to="dropdownItem.url"
								class="dropdown-item"
								v-html="dropdownItem.description"/>
						</div>
					</li>
				</ul>
				<ul class="navbar-nav ml-auto ">
					<li
						v-for="item in rightNavbarOptions"
						:key="item.title"
						:class="(item.dropdownItems)?'nav-item dropdown':'nav-item'">
						<nuxt-link
							v-if="!item.dropdownItems"
							:to="item.url"
							class="nav-link" >
							{{ item.description }}
						</nuxt-link>

						<a
							v-if="item.dropdownItems"
							:id="`navbar${item.title}`"
							class="nav-link dropdown-toggle"
							href="#"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							{{ item.description }}
						</a>
						<div
							v-if="item.dropdownItems"
							class="dropdown-menu bg-secondary dropdown-primary"
							aria-labelledby="navbarDropdown">
							<nuxt-link
								v-for="(dropdownItem,index) in item.dropdownItems"
								:key="index"
								:to="dropdownItem.url"
								class="dropdown-item"
								v-html="dropdownItem.description"/>
						</div>
					</li>
				</ul>
				<div
					class="form-inline ml-5 my-2 my-lg-0">
					<nuxt-link
						to="/hideout/create"
						class="btn btn-outline-primary my-2 my-sm-0">
						Submit Hideout
					</nuxt-link>
				</div>
			</div>
		</nav>
	</div>
</template>
<script>
export default {
	computed: {
		navbarOptions () {
			return [
				{
					title: 'about',
					dropdownItems: false,
					description: 'About',
					url: '/about',
					target: false
				}];
		},
		rightNavbarOptions () {
			if (this.$store.getters['auth/username']) {
				return [
					{
						title: 'account',
						dropdownItems: false,
						description: 'Account',
						url: '/user',
						target: false
					},
					{
						title: 'logout',
						dropdownItems: false,
						description: 'Log out',
						url: '/logout',
						target: false
					}
				];
			}
			// const categories = this.$store.state.poe.hideouts.map(hideout => ({ description: hideout.Name, url: `/hideout/${hideout.Hash}`, target: false }));
			return [
				{
					title: 'login',
					dropdownItems: false,
					description: 'Login',
					url: '/login',
					target: false
				},
				{
					title: 'register',
					dropdownItems: false,
					description: 'Register',
					url: '/register',
					target: false
				}
				// {
				// 	title: 'categories',
				// 	description: 'Categories',
				// 	dropdownItems: categories
				// }
			];
		}
	},
	methods: {
		logout () {
			this.$store.dispatch('userLogout');
		}
	}
};
</script>
