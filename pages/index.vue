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
  h5,
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
				<div
					v-if="!loading"
					class="row mb-5">
					<div
						v-if="topHideouts.length"
						style="min-height:350px;"
						class="col-12">
						<h3 class="text-center text-white bg-dark border border-dark m-0 py-2 lead">Hideouts Updated for Synthesis</h3>
						<!-- <p class="text-center text-white bg-dark border border-dark m-0 py-0 lead"><small>Encourage people to vote to get your hideout here</small>   </p> -->
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
											style="min-height:300px;max-height:300px; object-fit:cover; filter: blur(2px);"
											alt="Card image cap">
										<div class="carousel-caption d-none d-md-block">
											<nuxt-link :to="`/hideout/${hideout.hideoutId}`">
												<h2 class="display-4 mb-0">{{ hideout.nameDescription }}</h2>
												<p class="text-white my-0">
													{{ hideout.views }} <i class="fas fa-eye pr-3"/>   {{ hideout.downloads }} <i class="fas fa-file-download pr-3"/> {{ hideout.comments.length }} <i class="fas fa-comments pr-5"/></p>

												<p class="mt-0">
													<i
														v-if="hideout.gallery"
														class="fas fa-images text-primary pr-2"/>
													<i
														v-if="hideout.hideoutVideo"
														class="fas fa-video text-primary"/>
												</p>
												<p class="mt-0">Updated {{ $moment(hideout.updatedAt).format(' MMMM Do YYYY') }} by {{ hideout.author || 'anonymous' }}</p>
											</nuxt-link>
										</div>
										<div class="carousel-caption d-block d-md-none">
											<nuxt-link :to="`/hideout/${hideout.hideoutId}`">
												<h5
													style="font-size:2rem;"
													class="display-4 mb-0">{{ hideout.nameDescription }}</h5>
												<p class="text-white mt-0">{{ hideout.views }} <i class="fas fa-eye pr-3"/>   {{ hideout.downloads }} <i class="fas fa-file-download pr-3"/> {{ hideout.comments.length }} <i class="fas fa-comments"/></p>
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
									class="form-control border-secondary bg-dark">
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
					class="collapse  ">
					<div class="row mt-3">
						<div class="col-12">
							<div class="row">
								<div class="col-xs-6 col-lg-2 form-group">
									<label
										class="text-white"
										for="inputState">
										<small>
											Hideout Type
										</small>
									</label>
									<select
										id="inputState"
										v-model="hideoutType"
										class="form-control custom-select border-primary text-primary bg-secondary">
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
									<label
										class="text-white"
										for="inputState">
										<small>MTX
										</small>
									</label>
									<select
										id="inputState"
										v-model="mtx"
										class="form-control custom-select border-primary text-primary bg-secondary">
										<option
											value=""
											selected>All</option>
										<option :value="true">Yes</option>
										<option :value="false">No</option>
									</select>
								</div>
								<div class="col-xs-6 col-lg-2 form-group">
									<label
										class="text-white"
										for="inputState">
										<small>Minimum Rating
										</small>
									</label>
									<select
										id="inputState"
										v-model="atleastRating"
										class="form-control custom-select border-primary text-primary bg-secondary">
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
									<label
										class="text-white"
										for="inputState">
										<small>Alva Level
										</small>
									</label>
									<select
										id="inputState"
										v-model="Alva"
										class="form-control custom-select border-primary text-primary bg-secondary">
										<option
											:value="''"
											selected>All</option>
										<option
											v-for="level in levels"
											:value="level"
											:key="level">{{ level || 'None' }}</option>
									</select>
								</div>
								<div class="col-xs-6 col-lg-2 form-group">
									<label
										class="text-white"
										for="inputState">
										<small>Einhar Level
										</small>
									</label>
									<select
										id="inputState"
										v-model="Einhar"
										class="form-control custom-select border-primary text-primary bg-secondary">
										<option
											:value="''"
											selected>All</option>
										<option
											v-for="level in levels"
											:value="level"
											:key="level">{{ level || 'None' }}</option>
									</select>
								</div>
								<div class="col-xs-6 col-lg-2 form-group">
									<label
										class="text-white"
										for="inputState">
										<small>Niko Level
										</small>
									</label>
									<select
										id="inputState"
										v-model="Niko"
										class="form-control custom-select border-primary text-primary bg-secondary">
										<option
											:value="''"
											selected>All</option>
										<option
											v-for="level in levels"
											:value="level"
											:key="level">{{ level || 'None' }}</option>
									</select>
								</div>
								<div class="col-xs-6 col-lg-2 form-group">
									<label
										class="text-white"
										for="inputState">
										<small>Zana Level
										</small>
									</label>
									<select
										id="inputState"
										v-model="Zana"
										class="form-control custom-select border-primary text-primary bg-secondary">
										<option
											:value="''"
											selected>All</option>
										<option
											v-for="level in levels"
											:value="level"
											:key="level">{{ level || 'None' }}</option>
									</select>
								</div>
								<div class="col-xs-6 col-lg-2 form-group">
									<label
										class="text-white"
										for="inputState">
										<small>Jun Level
										</small>
									</label>
									<select
										id="inputState"
										v-model="Jun"
										class="form-control custom-select border-primary text-primary bg-secondary">
										<option
											:value="''"
											selected>All</option>
										<option
											v-for="level in levels"
											:value="level"
											:key="level">{{ level || 'None' }}</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					v-if="filteredHideouts"
					ref="topPage"
					class="row py-3 bg-dark">
					<div class="col-12 mb-3 d-flex">
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
								<option value="favour-desc">
									Favour cost highest
								</option>
								<option value="favour-asc">
									Favour cost lowest
								</option>
							</select>
						</div>
						<div class="form-group  form-inline">
							<div
								class="btn btn-grey border border-grey"
								@click="switchThumbnails">
								{{ (noThumbnails)?'Hide':'Show' }} <i class="fas fa-ban"/> thumbnails
							</div>
						</div>
						<div class="form-group form-inline ml-auto">
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
						class="col-xs-12 col-lg-6 col-xl-4 my-2">
						<no-ssr>
							<hideout-card-placeholder slot="placeholder"/>
							<hideout-card
								v-if="$store.getters.getHideout(hideout.hideoutType)['Name']"
								:hideout="hideout"/>
						</no-ssr>
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
					v-else-if="loading"
					class="row py-3">
					<div class="col-12 text-center py-4">
						<i class="fas fa-cog fa-spin fa-10x"/>
						<h2 class="mt-3">... Loading hideouts ...</h2>
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
import HideoutCardPlaceholder from '~/components/HideoutCardPlaceholder.vue';

import orderBy from 'lodash/orderBy';
import chunk from 'lodash/chunk';
import take from 'lodash/take';

export default {
	scrollTop: false,
	async asyncData (context) {
		try {
			// 			const query = `
			//             query{
			//   hideouts(limit:9000, where:{
			//                 isDeleted_ne:true
			//      }){
			//     author,
			//     downloads,
			//     hideoutFileLink,
			//     hideoutId,
			//     hideoutMasters,
			//     hideoutScreenshot,
			//     hideoutType,
			//     decorationsCost,
			//     uniqueDecorations,
			//     nameDescription,
			//     views,
			//     gallery,
			//     hideoutVideo,
			//     hideoutDateSubmit,
			//     hideoutDescription,
			//     dateSubmitted,
			//     comments{
			//         _id
			//     }
			//     user{
			//         Donator,
			//       username,
			//       _id
			//     },
			//     votes{
			//         _id,
			//       score,
			//       user{
			//           _id
			//       }
			//     }
			//   }
			// }
			//             `;
			// const { data } = await context.app.$axios.$post('/api/graphql', { query });
			const confirmed = context.query.confirmed;
			return {
				// hideouts: data.hideouts,
				filtersOpened: false,
				confirmed
			};
		} catch (e) {
			console.log(e);
		}
	},
	components: {
		CardLayout,
		HideoutCardPlaceholder,
		HideoutCard
	},
	data () {
		return {
			levels: [0, 1, 2, 3, 4, 5, 6, 7],
			noThumbnails: false,
			loading: false,
			hideouts: [],
			currentPage: this.$store.state.pageControls.currentPage,
			searchQuery: '',
			atleastRating: '',
			perPage: this.$store.state.pageControls.perPage,
			hideoutType: this.$store.state.filters.type || '',
			'sort': this.$store.state.filters.sortBy,
			mtx: this.$store.state.filters.mtx,
			'Alva': this.$store.state.filters['Alva'] || '',
			'Einhar': this.$store.state.filters['Einhar'] || '',
			'Niko': this.$store.state.filters['Niko'] || '',
			'Zana': this.$store.state.filters['Zana'] || '',
			'Jun': this.$store.state.filters['Jun'] || ''
		};
	},
	computed: {
		topHideouts () {
			// const startofweek = this.$moment().startOf('week').subtract(1, 'day').unix();
			// let results = this.hideouts;
			// results = results.filter(ho => ho.hideoutDateSubmit.seconds >= startofweek && !!ho.hideoutScreenshot);
			// results = results.map(ho => ({ ...ho, scale: this.$getRatingScale(ho, this.$calculateVotes(ho.votes, ho.user)) }));
			// results = orderBy(results, (ho) => ho.scale, 'desc');
			// results = take(results, 5);
			// if (results.length < 1) {
			const results = this.hideouts;
			results.sort(function compare (a, b) {
				const dateA = new Date(a.updatedAt);
				const dateB = new Date(b.updatedAt);
				return dateB - dateA;
			});
			// }
			return take(results, 15);
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
				results = results.filter(hideout => this.$calculateVotes(hideout.votes, hideout.user) >= this.atleastRating);
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
			if (this.Jun) {
				results = results.filter(hideout => hideout.hideoutMasters['Jun'] <= this.Jun);
			}
			if (this.sort) {
				if (this.sort === 'favour-desc') {
					results = orderBy(results, (ho) => ho.decorationsCost, 'desc');
				}
				if (this.sort === 'favour-asc') {
					results = orderBy(results, (ho) => ho.decorationsCost, 'asc');
				}
				if (this.sort === 'date-old') {
					results = orderBy(results, (ho) => ho.hideoutDateSubmit.seconds, 'desc');
				}
				if (this.sort === 'date-new') {
					results = orderBy(results, (ho) => ho.hideoutDateSubmit.seconds, 'asc');
				}
				if (this.sort === 'ratings') {
					results = orderBy(results, (ho) => this.$calculateVotes(ho.votes, ho.user), 'desc');
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
		'Jun' (val) {
			this.$store.commit('SET_FILTER_OBJECT', { filter: 'Jun', choice: val });
		},
		'Zana' (val) {
			this.$store.commit('SET_FILTER_OBJECT', { filter: 'mtx', choice: val });
		}
	},
	async created () {
		this.getHideouts();
	},
	methods: {
		toggleFilters () {
			this.filtersOpened = !this.filtersOpened;
		},
		async getHideouts (all = false) {
			try {
				const query = `
            query{
  hideouts(limit:9000, where:{
                isDeleted_ne:true,
                ${(all) ? '' : 'hasThumbnail:true'}
     }){
    author,
    downloads,
    hideoutFileLink,
    hideoutId,
    hideoutMasters,
    hideoutScreenshot,
    hideoutType,
    decorationsCost,
    uniqueDecorations,
    nameDescription,
    views,
    gallery,
    hideoutVideo,
    hideoutDateSubmit,
    updatedAt,
    hideoutDescription,
    dateSubmitted,
    comments{
        _id
    }
    user{
        Donator,
      username,
      _id
    },
    votes{
        _id,
      score,
      user{
          _id
      }
    }
  }
}
            `;
				this.loading = true;
				const { data } = await this.$axios.$post('/api/graphql', { query });
				this.hideouts = data.hideouts;

				this.loading = false;
			} catch (e) {
				console.log(e);
			}
		},
		clearSearch () {
			this.searchQuery = '';
		},
		switchThumbnails () {
			this.noThumbnails = !this.noThumbnails;
			this.hideouts = [];
			this.getHideouts(this.noThumbnails);
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
