<template>
	<div class="row py-5">
		<div class="col-12">
			<card-layout title="About poe.house">
				<div
					class="card-body text-primary text-left"
					v-html="readme"/>
			</card-layout>
		</div>
	</div>
</template>
<script>
import CardLayout from '~/components/CardLayout.vue';
import readme from '../README.md';
export default {
	components: {
		CardLayout
	},
	data () {
		return {
			readme
		};
	}
};
</script>
