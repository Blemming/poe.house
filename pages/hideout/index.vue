<template>
	<div class="row py-5">
		<div class="col-12">
			<div class="card text-primary bg-secondary border border-primary">
				<div class="card-header border-bottom border-dark text-white text-center">
					<h2 class="display-4">Hideouts</h2>
				</div>
				<div class="card-body text-primary text-left">
					<div class="row">
						<div class="col form-group">
							<label for="inputState">Hideout Type</label>
							<select
								id="inputState"
								v-model="hideoutType"
								class="form-control">
								<option
									value=""
									selected>All</option>
								<option
									v-for="hideout in $store.state.hideouts"
									:value="hideout['Hash']"
									:key="hideout['Hash']">{{ hideout['Name'] }}</option>
							</select>
						</div>
						<div class="col form-group">
							<label for="inputState">Alva Level</label>
							<select
								id="inputState"
								v-model="Alva"
								class="form-control">
								<option
									:value="0"
									selected>All</option>
								<option
									v-for="level in levels"
									:value="level"
									:key="level">{{ level }}</option>
							</select>
						</div>
						<div class="col form-group">
							<label for="inputState">Einhar Level</label>
							<select
								id="inputState"
								v-model="Einhar"
								class="form-control">
								<option
									:value="0"
									selected>All</option>
								<option
									v-for="level in levels"
									:value="level"
									:key="level">{{ level }}</option>
							</select>
						</div>
						<div class="col form-group">
							<label for="inputState">Niko Level</label>
							<select
								id="inputState"
								v-model="Niko"
								class="form-control">
								<option
									:value="0"
									selected>All</option>
								<option
									v-for="level in levels"
									:value="level"
									:key="level">{{ level }}</option>
							</select>
						</div>
						<div class="col form-group">
							<label for="inputState">Zana Level</label>
							<select
								id="inputState"
								v-model="Zana"
								class="form-control">
								<option
									:value="0"
									selected>All</option>
								<option
									v-for="level in levels"
									:value="level"
									:key="level">{{ level }}</option>
							</select>
						</div>
					</div>
					<div class="row bg-dark py-3">
						<div
							v-for="(hideout,index) in filteredHideouts"
							:key="index"
							class="col-6 my-2">
							<div class="card bg-secondary">
								<img
									:src="getImage(hideout)"
									class="card-img-top"
									alt="Card image cap">
								<div class="card-body">
									<h5 class="card-title text-white ">{{ hideout.nameDescription }}
									</h5>
									<div class="row">
										<div class="col-12">
											<table class="table table-sm table-striped table-dark bg-secondary text-primary ">
												<tbody>
													<tr>
														<th scope="row">Hideout</th>
														<td class="text-white"><strong>{{ getHideout(hideout.hideoutType) }}</strong></td>
													</tr>
													<tr>
														<th scope="row">Doodads</th>
														<td class="text-white"><strong>{{ hideout.hideoutDoodads.length }}</strong></td>
													</tr>
													<tr>
														<th scope="row">Alva</th>
														<td class="text-white"><strong>{{ hideout.hideoutMasters['Alva'] }}</strong></td>
													</tr>
													<tr>
														<th scope="row">Einhar </th>
														<td class="text-white"><strong>{{ hideout.hideoutMasters['Einhar'] }}</strong></td>
													</tr>
													<tr>
														<th scope="row">Niko </th>
														<td class="text-white"><strong>{{ hideout.hideoutMasters['Niko'] }}</strong></td>
													</tr>
													<tr>
														<th scope="row">Zana </th>
														<td class="text-white"><strong>{{ hideout.hideoutMasters['Zana'] }}</strong></td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
									<div class="row justify-content-end">
										<nuxt-link
											:to="`/hideout/${hideout.hideoutId}`"
											class="btn btn-primary">Details</nuxt-link>
									</div>
								</div>
								<div class="card-footer">
									<small class="text-muted ">by {{ hideout.author }}</small>
								</div>
							</div>
							<!-- <table class="table table-bordered table-striped table-dark bg-secondary text-primary ">
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
								v-for="(hideout,index) in filteredHideouts"
								:key="index">
								<th scope="row">{{ hideout.hideoutDoodads.length }}</th>
								<td class="text-white"><strong>{{ hideout.nameDescription }}</strong></td>
								<td>{{ getHideout(hideout.hideoutType) }}</td>
								<td>
									Alva level {{ hideout.hideoutMasters['Alva'] }}<br>
									Einhar level {{ hideout.hideoutMasters['Einhar'] }}<br>
									Niko level {{ hideout.hideoutMasters['Niko'] }}<br>
									Zana level {{ hideout.hideoutMasters['Zana'] }}<br>
								</td>
								<td>{{ hideout.author }}</td>
								<td/>
							</tr>
						</tbody>
					</table> -->
						</div>
					</div>
				</div>
			</div>
</div></div></template>
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
	data () {
		return {
			levels: [1, 2, 3, 4, 5, 6, 7],
			hideoutType: '',
			'Alva': 0,
			'Einhar': 0,
			'Niko': 0,
			'Zana': 0
		};
	},
	computed: {
		filteredHideouts () {
			let results = this.hideouts;
			if (this.hideoutType) {
				results = results.filter(hideout => hideout['hideoutType'] === parseInt(this.hideoutType));
			}
			if (this.Alva) {
				results = results.filter(hideout => hideout.hideoutMasters['Alva'] <= this.Alva);
			}
			if (this.Einhar) {
				results = results.filter(hideout => hideout.hideoutMasters['Einhar'] <= this.Einhar);
			}
			if (this.Niko) {
				results = results.filter(hideout => hideout.hideoutMasters['Niko'] <= this.Niko);
			}
			if (this.Zana) {
				results = results.filter(hideout => hideout.hideoutMasters['Zana'] <= this.Zana);
			}
			return results;
		}
	},
	methods: {
		getHideout (hash) {
			if (hash) {
				return this.$store.state.hideouts.filter(hideout => parseInt(hideout['Hash']) === hash)[0]['Name'];
			} else {
				return '';
			}
		},
		getImage (hideout) {
			if (/.jpg|.png|jpeg/gi.test(hideout.hideoutScreenshot)) {
				return hideout.hideoutScreenshot;
			} else {
				return this.$store.state.hideouts.filter(stateHideout => parseInt(stateHideout['Hash']) === hideout.hideoutType)[0]['Icon'];
			}
		}
	}
};
</script>
