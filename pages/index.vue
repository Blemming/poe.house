<style lang="scss">
.card{
    a:hover{
        text-decoration: none;
    }
}
</style>

<template>
	<div class="row py-5">
		<div class="col-12">
			<div class="card text-primary bg-secondary border border-primary">
				<div class="card-header border-bottom border-dark text-white text-center">
					<h2 class="display-4">Hideouts</h2>
				</div>
				<div class="card-body text-primary text-left">
					<div class="row">
						<div class="col-xs-6 col-lg-2 form-group">
							<label for="inputState">Hideout Type</label>
							<select
								id="inputState"
								v-model="hideoutType"
								class="form-control custom-select border-primary text-primary">
								<option
									value=""
									selected>All</option>
								<option
									v-for="hideout in $store.state.hideouts"
									:value="hideout['Hash']"
									:key="hideout['Hash']">{{ hideout['Name'] }}</option>
							</select>
						</div>
						<div class="col-xs-6 col-lg-2 form-group">
							<label for="inputState">MTX</label>
							<select
								id="inputState"
								v-model="mtx"
								class="form-control custom-select border-primary text-primary">
								<option
									value=""
									selected>All</option>
								<option :value="true">Yes</option>
								<option :value="false">No</option>
							</select>
						</div>
						<div class="col-xs-6 col-lg-2 form-group">
							<label for="inputState">Alva Level</label>
							<select
								id="inputState"
								v-model="Alva"
								class="form-control custom-select border-primary text-primary">
								<option
									:value="0"
									selected>All</option>
								<option
									v-for="level in levels"
									:value="level"
									:key="level">{{ level }}</option>
							</select>
						</div>
						<div class="col-xs-6 col-lg-2 form-group">
							<label for="inputState">Einhar Level</label>
							<select
								id="inputState"
								v-model="Einhar"
								class="form-control custom-select border-primary text-primary">
								<option
									:value="0"
									selected>All</option>
								<option
									v-for="level in levels"
									:value="level"
									:key="level">{{ level }}</option>
							</select>
						</div>
						<div class="col-xs-6 col-lg-2 form-group">
							<label for="inputState">Niko Level</label>
							<select
								id="inputState"
								v-model="Niko"
								class="form-control custom-select border-primary text-primary">
								<option
									:value="0"
									selected>All</option>
								<option
									v-for="level in levels"
									:value="level"
									:key="level">{{ level }}</option>
							</select>
						</div>
						<div class="col-xs-6 col-lg-2 form-group">
							<label for="inputState">Zana Level</label>
							<select
								id="inputState"
								v-model="Zana"
								class="form-control custom-select border-primary text-primary">
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
						<div class="col-12 col-lg-6 mb-3 d-flex">
							<form class="form-inline">
								<div class="form-group mr-2">
									<select
										id="inputState"
										v-model="sort"
										class="form-control custom-select border-secondary text-white ">
										<option
											value=""
											selected>Sort</option>
										<option value="downloads">
											Downloads
										</option>
										<option value="views">
											Views
										</option>
										<option value="date-old">
											Date newest
										</option>
										<option value="date-new">
											Date oldest
										</option>
									</select>
								</div>
								<div class="form-group">
									<select
										id="inputState"
										v-model="perPage"
										class="form-control custom-select border-secondary text-white">
										<option
											:value="6"
											selected>
											Per page
										</option>
										<option :value="2">
											2
										</option>
										<option
											:value="6">
											6
										</option>
										<option :value="12">
											12
										</option>
										<option :value="hideouts.length">
											All
										</option>
									</select>
								</div>
							</form>
						</div>
						<div class="col-12 col-lg-6 d-flex justify-content-end">
							<paginate
								:page-count="paginatePages"
								:click-handler="clickCallback"
								:prev-text="'Prev'"
								:next-text="'Next'"
								container-class="pagination"
								page-class="page-item  bg-secondary"
								page-link-class="page-link"
								prev-class="page-item bg-secondary"
								prev-link-class="page-link"
								next-class="page-item bg-secondary"
								next-link-class="page-link"
							/>
						</div>
						<div
							v-for="(hideout,index) in filteredHideouts"
							:key="index"
							class="col-xs-12 col-lg-6 my-2">
							<div class="card bg-secondary">
								<nuxt-link
									:to="`/hideout/${hideout.hideoutId}`">
									<img
										:src="getImage(hideout)"
										class="card-img-top"
										alt="Card image cap">

								</nuxt-link>
								<div class="card-body">
									<nuxt-link
										:to="`/hideout/${hideout.hideoutId}`">
										<h5 class="card-title text-white ">{{ hideout.nameDescription }}
										</h5>
									</nuxt-link>
									<div class="row">
										<div class="col-12">
											<table class="table table-sm table-striped table-dark bg-secondary text-primary ">
												<tbody>
													<tr>
														<th scope="row">Hideout</th>
														<td class="text-white"><strong>{{ getHideout(hideout.hideoutType) }}</strong></td>
													</tr>
													<tr>
														<th scope="row">Favour Required</th>
														<td class="text-white"><strong>{{ formatFavour(totalFavorCost(hideout.hideoutDoodads)) }}</strong></td>
													</tr>
													<tr>
														<th scope="row">Decorations</th>
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
													<tr v-if="hideout.views">
														<th scope="row">Views</th>
														<td class="text-white"><strong>{{ hideout.views }}</strong></td>
													</tr>
													<tr v-if="hideout.downloads">
														<th scope="row">Downloads</th>
														<td class="text-white"><strong>{{ hideout.downloads }}</strong></td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
									<div class="row justify-content-between">
										<div class="col-3">
											<img
												v-if="hideout.hideoutMasters['mtx']"
												src="https://web.poecdn.com/image/shop/item/ShopItemCoin.png?1538109960000"
												alt="">
											<small v-if="hideout.hideoutMasters['mtx']">MTX</small>
										</div>
										<div class="col-3 text-right">
											<nuxt-link
												:to="`/hideout/${hideout.hideoutId}`"
												class="btn btn-primary">Details</nuxt-link>

										</div>
									</div>
								</div>
								<div class="card-footer">
									<div class="row justify-content-between">
										<div class="col">
											<small class="text-muted ">{{ $moment.unix(hideout.hideoutDateSubmit.seconds).format(' MMMM Do YYYY') }}</small>
										</div>
										<div class="col text-right">
											<small class="text-muted ">by {{ hideout.author || 'Anonymous' }}</small>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="card-footer d-flex justify-content-between">
					<a
						class="nav-item text-danger"
						target="_blank"
						href="https://www.patreon.com/join/blemming/checkout?rid=0">
						<i
							style="color:#f96854;"
							class="fab fa-patreon"/>
						Patreon
					</a>
					<a
						class="nav-item text-danger"
						target="_blank"
						href="https://www.paypal.me/bluelemming">
						<i
							class="fas fa-heart"/>
						Paypal Support
					</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import orderBy from 'lodash/orderBy';
import chunk from 'lodash/chunk';

export default {
	async asyncData (context) {
		try {
			const { data: hideouts } = await context.app.$axios.get('/api/hideouts');
			return {
				hideouts
			};
		} catch (e) {
			console.log(e);
		}
	},
	components: {
	},
	data () {
		return {
			levels: [1, 2, 3, 4, 5, 6, 7],
			currentPage: 1,
			perPage: 6,
			hideoutType: '',
			'mtx': '',
			'sort': '',
			'Alva': 0,
			'Einhar': 0,
			'Niko': 0,
			'Zana': 0
		};
	},
	computed: {
		paginatePages () {
			return Math.ceil(this.hideouts.length / this.perPage);
		},
		filteredHideouts () {
			let results = this.hideouts;
			if (this.hideoutType) {
				results = results.filter(hideout => hideout['hideoutType'] === parseInt(this.hideoutType));
			}
			if (this.mtx !== '') {
				results = results.filter(hideout => hideout.hideoutMasters['mtx'] === this.mtx);
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
			if (this.sort) {
				if (this.sort === 'date-old') {
					results = orderBy(results, (ho) => ho.hideoutDateSubmit.seconds, 'desc');
				}
				if (this.sort === 'date-new') {
					results = orderBy(results, (ho) => ho.hideoutDateSubmit.seconds, 'asc');
				}
				results = orderBy(results, (ho) => ho[this.sort], 'desc');
			} else {
				results = orderBy(results, (ho) => ho.hideoutDateSubmit.seconds, 'desc');
			}
			const offset = (this.currentPage - 1);
			return chunk(results, this.perPage)[offset];
		}
	},
	methods: {
		totalFavorCost (doodads) {
			return this.$favorCost(doodads);
		},
		clickCallback (pageNum) {
			this.currentPage = pageNum;
		},
		getHideout (hash) {
			if (hash) {
				return this.$store.state.hideouts.filter(hideout => parseInt(hideout['Hash']) === hash)[0]['Name'];
			} else {
				return '';
			}
		},
		formatFavour (favour = 0) {
			return favour.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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
