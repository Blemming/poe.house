<template>
	<div class="bg-dark">
		<navbar/>
		<div class="container py-3">
			<nuxt/>
		</div>
	</div>
</template>
<script>
import Navbar from '~/components/Navbar';
export default {
	components: {
		Navbar
	}
};
</script>

<style>
</style>
