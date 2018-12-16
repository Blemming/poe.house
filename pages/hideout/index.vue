<template>
	<div class="row py-5">
		<div class="col-12">
			<div class="card text-primary bg-secondary border border-primary">
				<div class="card-header border-bottom border-dark text-white text-center">
					<h2 class="display-4">Hideouts</h2>
				</div>
				<div class="card-body text-primary text-left">
					<table class="table table-bordered table-striped table-dark bg-secondary text-primary ">
						<thead>
							<tr>
								<th scope="col">Doodads</th>
								<th scope="col">Title</th>
								<th scope="col">Type</th>
								<th scope="col">Required Masters</th>
								<th scope="col">Author</th>
								<th scope="col"/>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="(hideout,index) in hideouts"
								:key="index">
								<th scope="row">{{ hideout.hideoutDoodads.length }}</th>
								<td>{{ hideout.nameDescription }}</td>
								<td>{{ getHideout(hideout.hideoutType) }}</td>
								<td>
									Alva level {{ hideout.hideoutMasters['Alva'] }}<br>
									Einhar level {{ hideout.hideoutMasters['Einhar'] }}<br>
									Niko level {{ hideout.hideoutMasters['Niko'] }}<br>
									Zana level {{ hideout.hideoutMasters['Zana'] }}<br>
								</td>
								<td>{{ hideout.author }}</td>
								<td><nuxt-link
									:to="`/hideout/${hideout.hideoutId}`"
									class="btn btn-primary">Details</nuxt-link></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	async asyncData (context) {
		const hideoutsRef = context.app.$fireStore.collection('hideouts');
		try {
			const hideoutsDoc = await hideoutsRef.get();
			const hideouts = [];
			hideoutsDoc.docs.forEach(hideout => hideouts.push(hideout.data()));
			return {
				hideouts
			};
		} catch (e) {
			console.log(e);
		}
	},
	methods: {
		getHideout (hash) {
			if (hash) {
				return this.$store.state.hideouts.filter(hideout => parseInt(hideout['Hash']) === hash)[0]['Name'];
			} else {
				return '';
			}
		}
	}
};
</script>
