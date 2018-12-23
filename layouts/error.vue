<template>
	<div class="row py-5">
		<div class="col-12">
			<card-layout
				title="Ooops">
				<h4 class="text-center">
					{{ error.message }}
				</h4>
				<h4 class="text-center">
					Please contact
					<a
						class="text-white"
						href="mailto:support@poe.house">support@poe.house</a> if the problem persists.
				</h4>
			</card-layout>
		</div>
	</div>
</template>
<script>
import CardLayout from '~/components/CardLayout.vue';
export default {
	components: {
		CardLayout
	},
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
