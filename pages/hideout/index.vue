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
									selected>Choose...</option>
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
									selected>Choose...</option>
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
									selected>Choose...</option>
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
									selected>Choose...</option>
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
									selected>Choose...</option>
								<option
									v-for="level in levels"
									:value="level"
									:key="level">{{ level }}</option>
							</select>
						</div>
					</div>
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
		}
	}
};
</script>
