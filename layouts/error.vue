<template>
	<div class="row py-5">
		<div class="col-12">
			<div class="card text-primary bg-secondary border border-primary">
				<div class="card-header border-bottom border-dark text-white text-center">
					<h2 class="display-4">{{ error.statusCode }}</h2>
				</div>
				<div class="card-body text-primary text-left">
					<p>
						{{ error.message }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		error: {
			type: Object,
			default () {
				return { statusCode: 404, message: 'Page not found' };
			}
		}
	},
	head () {
		return {
			title: 'Error'
		};
	}
};
</script>
