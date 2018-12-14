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
								<th scope="col">Date</th>
								<th scope="col">Title</th>
								<th scope="col">Type</th>
								<th scope="col">Author</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="(hideout,index) in hideouts"
								:key="index">
								<th scope="row">{{ tempDate(hideout.hideoutDateSubmit.seconds) }}</th>
								<td>{{ hideout.nameDescription }}</td>
								<td>{{ hideout.hideoutType }}</td>
								<td>{{ hideout.author }}</td>
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

		tempDate (secs) {
			const date = new Date(secs * 1000);
			// Hours part from the timestamp
			const hours = date.getHours();
			// Minutes part from the timestamp
			const minutes = '0' + date.getMinutes();
			// Seconds part from the timestamp
			const seconds = '0' + date.getSeconds();
			return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
		}
	}
};
</script>
