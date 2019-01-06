<template>
	<div>
		<navbar/>
		<div class="container-fluid py-3">
			<div class="row justify-content-center">
				<div class="col-xs-12 col-lg-10 py-5">
					<nuxt/>
				</div>

			</div>
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
