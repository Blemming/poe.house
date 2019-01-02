<style lang="scss">
.text-grey {
  color: rgba(255, 255, 255, 0.8) !important;
}
.border-grey {
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
}
.top-gradient {
  height: 80px;
  z-index: 99;
  width:101%;
  position: absolute;
  top:-1px;
  left:-1px;
  background: linear-gradient(rgba(16, 16, 16,1), rgba(16, 16, 16, 0));
}
.carousel-caption {
  h2,
  p {
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }
}
</style>

<template>
	<div class="row">
		<div class="col-12 my-5">
			<card-layout
				title="PoE.house">
				<div class="row mb-5">
					<div class="col-12">
						<h4 class="text-center text-white bg-dark border border-dark m-0 py-2 lead">Hideouts of {{ $moment().format('MMMM') }}</h4>
						<div
							id="carouselExampleControls"
							class="carousel border border-dark slide"
							data-ride="carousel">
							<div
								class="carousel-inner bg-dark">
								<div
									v-for="(hideout,index) in topHideouts"
									:key="hideout.hideoutId"
									:class="(index===0)?'carousel-item active':'carousel-item'"
								>
									<div
										class="card bg-secondary">
										<div
											class="top-gradient"/>
										<img

											:src="hideout.hideoutScreenshot"
											style="max-height:300px; object-fit:cover; filter: blur(4px);"
											alt="Card image cap">
										<div class="carousel-caption d-none d-md-block">
											<nuxt-link :to="`/hideout/${hideout.hideoutId}`">
												<h2 class="display-4 mb-0">{{ hideout.nameDescription }}</h2>
												<p class="text-white mt-0">{{ hideout.views }} <i class="fas fa-eye pr-3"/>   {{ hideout.downloads }} <i class="fas fa-file-download pr-3"/> {{ hideout.comments.length }} <i class="fas fa-comments"/></p>
												<p>by {{ hideout.author || 'anonymous' }}</p>
											</nuxt-link>
										</div>
									</div>
								</div>
							</div>
							<a
								class="carousel-control-prev"
								href="#carouselExampleControls"
								role="button"
								data-slide="prev">
								<span
									class="carousel-control-prev-icon"
									aria-hidden="true"/>
								<span class="sr-only">Previous</span>
							</a>
							<a
								class="carousel-control-next"
								href="#carouselExampleControls"
								role="button"
								data-slide="next">
								<span
									class="carousel-control-next-icon"
									aria-hidden="true"/>
								<span class="sr-only">Next</span>
							</a>
						</div>
					</div>
				</div>
				<div class="row border-bottom border-dark">
					<div class="col-12 mb-3 d-flex justify-content-between">
						<a
							class="text-primary"
							href="#"
							data-toggle="collapse"
							data-target="#collapseFilters"
							aria-expanded="false"
							aria-controls="collapseFilters"
							@click="toggleFilters()">
							<span
								v-if="!filtersOpened">Show </span>
							<span
								v-else>Hide </span>
							Filters <i
								v-if="!filtersOpened"
								class="fas fa-plus-square"/>
							<i
								v-else
								class="fas fa-minus-square"/>
						</a>
						<div class="col-xs-6 col-lg-2">
							<div class="input-group">
								<input
									v-model="searchQuery"
									type="input"
									placeholder="Search"
									class="form-control border-primary bg-secondary">
								<div
									v-if="!!searchQuery"
									class="input-group-append">
									<button
										class="btn btn-danger"
										@click.prevent="clearSearch()"><i
											class="fa fa-times"
											aria-hidden="true"/></button>
								</div>
							</div>

						</div>
					</div>
				</div>
				<div
					id="collapseFilters"
					ref="filtersCollapse"
					class="collapse">
					<div class="row mt-3">
						<div class="col-12">
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
									<label for="inputState">Minimum Rating</label>
									<select
										id="inputState"
										v-model="atleastRating"
										class="form-control custom-select border-primary text-primary">
										<option
											value=""
											selected>All</option>
										<option :value="1">1</option>
										<option :value="2">2</option>
										<option :value="3">3</option>
										<option :value="4">4</option>
										<option :value="5">5</option>
									</select>
								</div>

							</div>
						</div>
						<div class="col-12">
							<div class="row">
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
						</div>
					</div>
				</div>
				<div
					v-if="filteredHideouts"
					ref="topPage"
					class="row bg-dark py-3">
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
								<option value="ratings">
									Ratings
								</option>
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
								<option :value="3">
									3
								</option>
								<option
									:value="6">
									6
								</option>
								<option
									:value="9">
									9
								</option>
								<option :value="12">
									12
								</option>
								<option :value="48">
									48
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
						class="col-xs-12 col-lg-4 my-2">
						<hideout-card :hideout="hideout"/>
					</div>

					<div class="col-12 col-lg-12 d-flex justify-content-end mt-3">
						<no-ssr>
							<paginate
								v-model="currentPage"
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
				<div
					v-else
					class="row bg-dark py-3">
					<div class="col-12">
						<h4 class="text-center">No results</h4>
					</div>
				</div>
			</card-layout>
		</div>
	</div>
</template>
<script>
import CardLayout from '~/components/CardLayout.vue';
import HideoutCard from '~/components/HideoutCard.vue';

import orderBy from 'lodash/orderBy';
import chunk from 'lodash/chunk';
import take from 'lodash/take';

export default {
	scrollTop: false,
	async asyncData (context) {
		try {
			const query = `
            query{
  hideouts(limit:9000, where:{
                isDeleted_ne:true
     }){
    author,
    downloads,
    hideoutFileLink,
    hideoutId,
    hideoutMasters,
    hideoutScreenshot,
    hideoutType,
    nameDescription,
    views,
    hideoutDateSubmit,
    hideoutDescription,
    hideoutDoodads,
    comments{
        _id
    }
    user{
      username,
      _id
    },
    votes{
      score
    }
  }
}
            `;
			const { data } = await context.app.$axios.$post('/api/graphql', { query });
			const confirmed = context.query.confirmed;
			return {
				hideouts: data.hideouts,
				filtersOpened: false,
				confirmed
			};
		} catch (e) {
			console.log(e);
		}
	},
	components: {
		CardLayout,
		HideoutCard
	},
	data () {
		return {
			levels: [1, 2, 3, 4, 5, 6, 7],
			hideouts: [],
			currentPage: this.$store.state.pageControls.currentPage,
			searchQuery: '',
			atleastRating: '',
			perPage: this.$store.state.pageControls.perPage,
			hideoutType: this.$store.state.filters.type || '',
			'sort': this.$store.state.filters.sortBy,
			mtx: this.$store.state.filters.mtx,
			'Alva': this.$store.state.filters['Alva'] || 0,
			'Einhar': this.$store.state.filters['Einhar'] || 0,
			'Niko': this.$store.state.filters['Niko'] || 0,
			'Zana': this.$store.state.filters['Zana'] || 0
		};
	},
	computed: {
		topHideouts () {
			const startofweek = this.$moment().startOf('month').subtract(1, 'day').unix();
			let results = this.hideouts;
			results = results.filter(ho => ho.hideoutDateSubmit.seconds >= startofweek && !!ho.hideoutScreenshot);
			results = results.map(ho => ({ ...ho, total: ho.views + ho.downloads }));
			results = orderBy(results, (ho) => ho.total, 'desc');
			results = take(results, 5);
			return results;
		},
		paginatePages () {
			if (this.hideoutType || this.searchQuery !== '' || this.mtx !== '' || this.atleastRating !== '' || this.Alva || this.Einhar || this.Niko || this.Zana) {
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
			if (this.atleastRating !== '') {
				results = results.filter(hideout => this.$calculateVotes(hideout.votes) >= this.atleastRating);
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
				if (this.sort === 'ratings') {
					results = orderBy(results, (ho) => this.$calculateVotes(ho.votes), 'desc');
				}
				results = orderBy(results, (ho) => ho[this.sort], 'desc');
			} else {
				results = orderBy(results, (ho) => ho.hideoutDateSubmit.seconds, 'desc');
			}
			if (this.searchQuery) {
				results = results.filter(hideout => hideout.nameDescription.toLowerCase().includes(this.searchQuery.toLowerCase()) || hideout.author.toLowerCase().includes(this.searchQuery.toLowerCase()));
			}
			const offset = (this.currentPage - 1);
			return chunk(results, this.perPage)[offset];
		}
	},
	watch: {
		currentPage (val) {
			this.$store.commit('SET_PAGE_OBJECT', { prop: 'currentPage', choice: val });
		},
		perPage (val) {
			this.$store.commit('SET_PAGE_OBJECT', { prop: 'perPage', choice: val });
		},
		hideoutType (val) {
			this.$store.commit('SET_FILTER_OBJECT', { filter: 'type', choice: val });
		},
		mtx (val) {
			this.$store.commit('SET_FILTER_OBJECT', { filter: 'mtx', choice: val });
		},
		'sort' (val) {
			this.$store.commit('SET_FILTER_OBJECT', { filter: 'sortBy', choice: val });
		},
		'Alva' (val) {
			this.$store.commit('SET_FILTER_OBJECT', { filter: 'Alva', choice: val });
		},
		'Einhar' (val) {
			this.$store.commit('SET_FILTER_OBJECT', { filter: 'Einhar', choice: val });
		},
		'Niko' (val) {
			this.$store.commit('SET_FILTER_OBJECT', { filter: 'Niko', choice: val });
		},
		'Zana' (val) {
			this.$store.commit('SET_FILTER_OBJECT', { filter: 'mtx', choice: val });
		}
	},
	methods: {
		toggleFilters () {
			this.filtersOpened = !this.filtersOpened;
		},
		clearSearch () {
			this.searchQuery = '';
		},
		clickCallback (pageNum) {
			this.currentPage = pageNum;
			this.$nextTick(() => {
				this.setScrollPosition(0);
			});
		},
		setScrollPosition (pos) {
			window.pageYOffset = pos;
			document.documentElement.scrollTop = pos;
			document.body.scrollTop = pos;
		}

	}
};
</script>
