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
							class="nav-link border border-primary" >
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
					<li class="nav-item dropdown">
						<a
							:id="`navbar-support`"
							class="nav-link dropdown-toggle text-danger"
							href="#"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							<i class="fas fa-heart"/> Support
						</a>
						<div
							class="dropdown-menu bg-secondary dropdown-primary"
							aria-labelledby="navbarDropdown">
							<a
								class="dropdown-item text-danger"
								target="_blank"
								href="https://www.patreon.com/blemming"
								@click="logClick('patreon')">
								<i
									style="color:#f96854;"
									class="fab fa-patreon"/>
								<small
									style="color:#f96854;">
									Support with Patreon
								</small>
							</a>
							<a
								class="dropdown-item text-danger"
								target="_blank"
								href="https://www.paypal.me/bluelemming"
								@click="logClick('paypal')">
								<i
									style="color:#3b7bbf;"
									class="fab fa-paypal"/>
								<small
									style="color:#3b7bbf;">
									Support with Paypal
								</small>
							</a>
							<a
								class="dropdown-item text-white"
								target="_blank"
								href="https://m.do.co/c/015a65653606"
								@click="logClick('digitalocean')">
								<i
									class="fab fa-digital-ocean"/>
								<small>
									Use my Digital Ocean Referral
								</small>
							</a>
						</div>
					</li>
				</ul>
				<no-ssr>

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
						<li
							v-if="$store.getters['auth/username'] "
							class="nav-item dropdown">
							<a
								:id="`navbar-support`"
								class="nav-link dropdown-toggle"
								href="#"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								<span
									v-if="$store.state.auth.user.Donator"
									style="color: rgb(255, 108, 0);"><img
										style="max-height:1rem;"
										src="/images/Chaos_Orb.png"
										alt=""> {{ $store.getters['auth/username'] }} </span>
								<span v-else>
									{{ $store.getters['auth/username'] }}
								</span>

							<!-- <span class="badge badge-dark border border-primary ml-1">{{ $store.getters['auth/unreadComments'].length }}</span> -->
							</a>
							<div
								class="dropdown-menu bg-secondary dropdown-primary"
								aria-labelledby="navbarDropdown">
								<nuxt-link
									class="dropdown-item text-white"
									to="/user">
									Hideouts
								</nuxt-link>
								<div
									v-if="$store.state.auth.user.confirmed"
									class="dropdown-divider border-top border-dark"/>
								<a
									v-if="$store.state.auth.user.confirmed"
									class="dropdown-item"
									href="/"
									@click.prevent="logout()">
									Logout <i class="fas fa-sign-out-alt"/>
								</a>
							</div>
						</li>
					</ul>
				</no-ssr>
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
		<div
			v-if="$store.state.announcement"
			:class="`alert alert-${($store.state.announcement)?$store.state.announcement.alertcolor:'warning'} alert-dismissible text-center fade ${($store.state.showAnnouncement)?'show':''} d-none d-lg-block`"
			style="position:absolute;z-index:99;width:100%;"
			role="alert">
			<no-ssr>
				<div v-html="$store.state.announcement.message"/>
			</no-ssr>
			<button
				type="button"
				class="close"
				aria-label="Close"
				@click="toggleAnnouncement()">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>

	</div>
</template>
<script>
export default {
	computed: {
		navbarOptions () {
			return [
				// {
				// 	title: 'contest',
				// 	dropdownItems: false,
				// 	description: 'Community Hideout Contest',
				// 	url: '/contest',
				// 	target: false
				// }
			];
		},
		rightNavbarOptions () {
			if (this.$store.getters['auth/username']) {
				return [
					// {
					// 	title: 'account',
					// 	dropdownItems: false,
					// 	description: 'Account',
					// 	url: '/user',
					// 	target: false
					// },
					// {
					// 	title: 'logout',
					// 	dropdownItems: false,
					// 	description: 'Log out',
					// 	url: '/logout',
					// 	target: false
					// }
				];
			}
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
		toggleAnnouncement () {
			this.$store.commit('TOGGLE_ANNOUNCEMENT', false);
		},
		logout () {
			this.$router.push('/');
			this.$store.dispatch('auth/logoutUser');
		},
		logClick (type) {
			this.$ga.event({
				eventCategory: 'click',
				eventAction: `${type}`
			});
		}
	}
};
</script>
