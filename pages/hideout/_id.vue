<template>
	<div class="row py-5">
		<div class="col-12">
			<div class="card text-primary bg-secondary border border-primary">
				<div class="card-header border-bottom border-dark text-white text-center">
					<h1 class="display-5">{{ hideout.nameDescription }}</h1>
				</div>
				<div class="card-body text-primary text-left">
					<div class="row">
						<div class="col-12">
							<p v-html="hideout.hideoutDescription"/>

						</div>
						<div class="col-6">
							<a
								:href="hideout.hideoutVideo"
								target="_blank">
								YouTube
							</a>
						</div>
						<div class="col-6"/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	async asyncData (context) {
		const hideoutsRef = context.app.$fireStore.collection('hideouts').doc(context.params.id);
		try {
			const hideoutsDoc = await hideoutsRef.get();
			const hideout = hideoutsDoc.data();
			return {
				hideout
			};
		} catch (e) {
			console.log(e);
		}
	},
	methods: {
	}
};
</script>
