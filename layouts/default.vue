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
	head () {
		return {
			script: [
				{ src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
			],
			link: [
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Serif' }
			]
		};
	},
	components: {
		Navbar
	}
};
</script>

<style>
body{
    font-family: 'Fontin-SmallCaps', serif;
}
</style>
