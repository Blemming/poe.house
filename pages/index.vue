<style lang="scss">
    .text-grey{
        color:rgba(255,255,255,0.8)!important;
    }
    .border-grey{
        border:1px solid rgba(255,255,255,0.3)!important;
    }
</style>

<template>
	<div class="row py-5">
		<div class="col-12">
			<card-layout
				title="Hideouts">
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
					<div class="col-12 mb-3 d-flex justify-content-between">
						<div class="form-group form-inline">
							<label
								class="mr-2"
								for="inputSort">Sort by: </label>
							<select
								id="inputSort"
								v-model="sort"
								class="form-control custom-select border-grey text-grey  mr-2">
								<option
									disabled
									value="">Sort</option>
								<option value="downloads">
									Downloads
								</option>
								<option value="views">
									Views
								</option>
								<option value="date-old">
									Newest
								</option>
								<option value="date-new">
									Oldest
								</option>
							</select>
						</div>
						<div class="form-group form-inline">
							<label
								class="mr-2"
								for="perPage">Results per page: </label>
							<select
								id="perPage"
								v-model="perPage"
								class="form-control custom-select border-grey text-grey">
								<option
									:value="0"
									disabled>
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
					</div>
					<div
						v-for="(hideout,index) in filteredHideouts"
						:key="index"
						class="col-xs-12 col-lg-6 my-2">
						<div class="card bg-secondary">
							<nuxt-link
								:to="`/hideout/${hideout.hideoutId}`">
								<img
									:src="$getThumbnail(getImage(hideout))"
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
													<td class="text-white"><strong>{{ $favorCost(hideout.hideoutDoodads) }}</strong></td>
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

					<div class="col-12 col-lg-12 d-flex justify-content-end mt-3">
						<no-ssr>
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
						</no-ssr>
					</div>
				</div>
			</card-layout>
		</div>
	</div>
</template>
<script>
import CardLayout from '~/components/CardLayout.vue';

import orderBy from 'lodash/orderBy';
import chunk from 'lodash/chunk';

export default {
	async asyncData (context) {
		try {
			const hideouts = await context.app.$axios.$get('/api/hideouts');
			const confirmed = context.query.confirmed;
			return {
				hideouts,
				confirmed
			};
		} catch (e) {
			console.log(e);
		}
	},
	components: {
		CardLayout
	},
	data () {
		return {
			levels: [1, 2, 3, 4, 5, 6, 7],
			hideouts: [],
			currentPage: 1,
			perPage: 6,
			hideoutType: '',
			'mtx': '',
			'sort': 'date-old',
			'Alva': 0,
			'Einhar': 0,
			'Niko': 0,
			'Zana': 0
		};
	},
	computed: {
		paginatePages () {
			if (this.hideoutType || this.mtx !== '' || this.Alva || this.Einhar || this.Niko || this.Zana) {
				return Math.ceil(this.filteredHideouts.length / this.perPage);
			}
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
		clickCallback (pageNum) {
			this.currentPage = pageNum;
		},
		getHideout (hash) {
			return this.$store.getters.getHideout(hash)['Name'];
		},
		getImage (hideout) {
			if (/.jpg|.png|jpeg/gi.test(hideout.hideoutScreenshot)) {
				return hideout.hideoutScreenshot;
			} else {
				const image = this.$store.getters.getHideout(hideout.hideoutType)['Icon'];
				return image;
			}
		}
	}
};
</script>
