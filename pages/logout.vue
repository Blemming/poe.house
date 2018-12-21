<template>
	<card-layout title="Logging out">
		<p>Logging you out !</p>
	</card-layout>
</template>

<script>
import CardLayout from '~/components/CardLayout.vue';
import { mapMutations } from 'vuex';

export default {
	components: {
		CardLayout
	},
	mounted () {
		this.logOut();
		this.$router.push('/');
	},
	methods: {
		...mapMutations({
			logOut: 'auth/logout'
		})
	}

};
</script>
