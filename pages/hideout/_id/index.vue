<template>
	<div class="row py-5">
		<div class="col-12">
			<card-layout :title="hideout.nameDescription">
				<div
					class="row">
					<div class="col-12 mb-5">
						<img
							:src="hideout.hideoutScreenshot || getScreenshot"
							alt=""
							class="img-fluid">
					</div>
				</div>
				<div class="row mb-5">
					<div class="col-12">
						<table class="table table-bordered table-striped table-dark bg-secondary text-primary ">
							<tbody>
								<tr>
									<th
										class="text-center w-25 text-h"
										scope="row">
										Hideout Type:
									</th>
									<td>{{ getHideoutType }}</td>
								</tr>
								<tr>
									<th
										class="text-center w-25 text-h"
										scope="row">
										Rating:
									</th>
									<td>
										<image-rating
											v-if="!!$store.getters['auth/username']"
											v-model="rating"
											:read-only="false"
											:src="require('~/assets/images/Exalted_Orb.png')"
											:show-rating="false"
											:item-size="30"
											@rating-selected="rateHideout()"/>
										<image-rating
											v-else
											:rating="$calculateVotes(hideout.votes)"
											:read-only="true"
											:src="require('~/assets/images/Exalted_Orb.png')"
											:show-rating="false"
											:item-size="30"
											@rating-selected="rateHideout()"/>
									</td>
								</tr>
								<tr>
									<th
										class="text-center w-25"
										scope="row">
										Total Favor:
									</th>
									<td>{{ totalFavorCost }}</td>
								</tr>
								<tr
									v-if="hideout.gallery">
									<th
										class="text-center w-25"
										scope="row">
										Gallery
									</th>
									<td
										scope="row">
										<a
											:href="hideout.gallery || ''"
											target="_blank">
											Images
											<i class="far fa-images"/>
										</a>
									</td>
								</tr>
								<tr>
									<th
										class="text-center w-25"
										scope="row">
										Author:
									</th>
									<td>
										<nuxt-link
											v-if="hideout.user && hideout.user.username"
											:to="`/user/${hideout.user.id}`"
											class="text-white"><i class="fas fa-user"/>  {{ hideout.user.username }}</nuxt-link>
										<span v-else>{{ hideout.author || 'Anonymous' }}</span>
									</td>
								</tr>
								<tr>
									<th
										class="text-center w-25"
										scope="row">
										Download Link:
									</th>
									<td>
										<a
											:download="`${hideout.nameDescription}.hideout`"
											:href="downloadLink"
											class="btn btn-primary"
											target="_blank"
											@click="downloaded()">
											Download
										</a>
										<p>
											<small>Note: You might have to change the file extension to .hideout</small>
										</p>
									</td>
								</tr>
								<tr

									v-if="hideout.hideoutVideo">
									<th
										class="text-center w-25"
										scope="row">
										Video Link:
									</th>
									<td>
										<a
											:href="hideout.hideoutVideo"
											target="_blank">
											<img
												class="w-25 bg-white p-2"
												src="~/assets/images/yt_logo_rgb_light.png"
												alt="Youtube">
										</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<ul
					id="myTab"
					class="nav nav-tabs"
					role="tablist">
					<li class="nav-item">
						<a
							id="home-tab"
							class="nav-link active"
							data-toggle="tab"
							href="#description"
							role="tab"
							aria-controls="home"
							aria-selected="true">Description</a>
					</li>
					<li class="nav-item">
						<a
							id="list-tab"
							class="nav-link"
							data-toggle="tab"
							href="#list"
							role="tab"
							aria-controls="list"
							aria-selected="false">Shopping List</a>
					</li>
					<li class="nav-item">
						<a
							id="comment-tab"
							class="nav-link"
							data-toggle="tab"
							href="#comment"
							role="tab"
							aria-controls="comment"
							aria-selected="false">Comments</a>
					</li>
				</ul>
				<div
					id="myTabContent"
					class="tab-content">
					<div
						id="description"
						class="tab-pane show active bg-dark mt-3 p-2 border border-primary"
						role="tabpanel"
						aria-labelledby="description-tab">
						<div class="row m-4">
							<div class="col-12">
								<p v-html="hideout.hideoutDescription"/>

							</div>
						</div>
					</div>
					<div
						id="list"
						class="tab-pane"
						role="tabpanel"
						aria-labelledby="list-tab">

						<div class="row m-4">
							<div class="col-12">
								<h2 class="display-4 border border-primary py-3 bg-dark text-center">Shopping List</h2>
								<hr>
							</div>
							<div
								v-if="shoppingList.alva.length> 0"
								class="col-xs-12 col-lg-6">
								<div class="row">
									<div
										id="alva"
										class="col-12 panel-title">
										<h5 class="mb-0 text-center">
											<a
												href="#"
												class="text-white"
												data-toggle="collapse"
												data-target="#collapseAlva"
												aria-expanded="true"
												aria-controls="collapseTwo">
												<img
													src="https://web.poecdn.com/image/Art/2DItems/Hideout/Alva.png?scale=1"
													alt=""
													class="img-fluid"><br>
												<span class="btn btn-primary mt-3">Alva decorations</span>
											</a>
											<hr>
										</h5>
										<div
											id="collapseAlva"
											class="collapse show"
											aria-labelledby="headingOne"
											data-parent="#alva">
											<div class="card bg-secondary">
												<shopping-list :list="shoppingList.alva"/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								v-if="shoppingList.einhar.length> 0"
								class="col-xs-12 col-lg-6">
								<div class="row">
									<div
										id="Einhar"
										class="col-12">
										<h5 class="mb-0 text-center">
											<a
												href="#"
												class="text-white"
												data-toggle="collapse"
												data-target="#collapseEinhar"
												aria-expanded="true"
												aria-controls="collapseEinhar">
												<img
													src="https://web.poecdn.com/image/Art/2DItems/Hideout/Einhar.png?scale=1"
													alt=""
													class="img-fluid"><br>
												<span class="btn btn-primary mt-3">Einhar decorations</span>
											</a>
											<hr>
										</h5>
										<div
											id="collapseEinhar"
											class="collapse show"
											aria-labelledby="headingOne"
											data-parent="#Einhar">
											<div class="card bg-secondary">
												<shopping-list :list="shoppingList.einhar"/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								v-if="shoppingList.niko.length> 0"
								class="col-xs-12 col-lg-6">
								<div class="row">
									<div
										id="Niko"
										class="col-12">
										<h5 class="mb-0 text-center">
											<a
												href="#"
												class="text-white"
												data-toggle="collapse"
												data-target="#collapseNiko"
												aria-expanded="true"
												aria-controls="collapseNiko">
												<img
													src="https://web.poecdn.com/image/Art/2DItems/Hideout/Niko.png?scale=1"
													alt=""
													class="img-fluid"><br>
												<span class="btn btn-primary mt-3">Niko decorations</span>
											</a>
											<hr>
										</h5>
										<div
											id="collapseNiko"
											class="collapse show"
											aria-labelledby="headingOne"
											data-parent="#Niko">
											<div class="card bg-secondary">
												<shopping-list :list="shoppingList.niko"/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								v-if="shoppingList.zana.length> 0"
								class="col-xs-12 col-lg-6">
								<div class="row">
									<div
										id="Zana"
										class="col-12">
										<h5 class="mb-0 text-center">
											<a
												href="#"
												class="text-white"
												data-toggle="collapse"
												data-target="#collapseZana"
												aria-expanded="true"
												aria-controls="collapseZana">
												<img
													src="https://web.poecdn.com/image/Art/2DItems/Hideout/Zana.png?scale=1"
													alt=""
													class="img-fluid"><br>
												<span class="btn btn-primary mt-3">Zana decorations</span>
											</a>
											<hr>
										</h5>
										<div
											id="collapseZana"
											class="collapse show"
											aria-labelledby="headingOne"
											data-parent="#Zana">
											<div class="card bg-secondary">
												<shopping-list :list="shoppingList.zana"/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								v-if="shoppingList.other.length> 0"
								class="col-xs-12 col-lg-12">
								<div class="row">
									<div
										id="mtx"
										class="col-12">
										<h5 class="mb-0 text-center">
											<a
												href="#"
												class="text-white"
												data-toggle="collapse"
												data-target="#collapseOther"
												aria-expanded="true"
												aria-controls="collapseOther">
												<span class="display-4">
													<img
														class="pb-4"
														src="https://web.poecdn.com/image/shop/item/ShopItemCoin.png?1538109960000"
														alt="">Microtransactions</span>
												<hr>
											</a>
										</h5>
										<div
											id="collapseOther"
											class="collapse show"
											aria-labelledby="headingOne"
											data-parent="#mtx">
											<div class="card bg-secondary">
												<shopping-list :list="shoppingList.other"/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						id="comment"
						class="tab-pane"
						role="tabpanel"
						aria-labelledby="comment-tab">
						<div class="m-3">
							Comments coming soon ...
						</div>
					</div>
				</div>
			</card-layout>
		</div>
	</div>
</template>
<script>
import CardLayout from '~/components/CardLayout.vue';
import ShoppingList from '~/components/ShoppingList';
import Cookies from 'js-cookie';

export default {
	middleware: 'views',
	async asyncData ({ app, store, params, error }) {
		try {
			const hideouts = await app.$axios.$get(`/api/hideouts?hideoutId=${params.id}`);
			const hideout = hideouts[0];
			if (hideout) {
				const hideoutLink = await hideout.hideoutFileLink.replace(/https:\/\/pastebin.com\//gi, '/raw/');
				const hideoutFile = await app.$axios.$get(hideoutLink);
				let votes = [];
				if (store.getters['auth/username']) {
					votes = hideout.votes.filter(v => v.user === store.state.auth.user._id);
				}
				return {
					hideout,
					hideoutFile: hideoutFile.replace(/\n/g, '\n'),
					rating: (votes.length > 0) ? votes[0].score : undefined
				};
			} else {
				error({ statusCode: 404, message: 'This hideout does not exist' });
			}
		} catch (e) {
			error({ statusCode: 404, message: e.message });
		}
	},
	components: {
		CardLayout,
		ShoppingList
	},
	computed: {
		getHideoutType () {
			return this.$store.state.hideouts.filter(hideout => parseInt(hideout['Hash']) === this.hideout.hideoutType)[0]['Name'];
		},
		getScreenshot () {
			const image = this.$store.state.hideouts.filter(hideout => parseInt(hideout['Hash']) === this.hideout.hideoutType)[0]['Icon'];
			return image.replace(/\?scale=1/gi, '');
		},
		imgurGallery () {
			return !!/imgur/g.test(this.hideout.hideoutScreenshot) && !/.png|.jpg|.jpeg/g.test(this.hideout.hideoutScreenshot);
		},
		shoppingList () {
			const alva = this.hideout.hideoutDoodads.filter(doodad => doodad['MasterName'] === 'Alva');
			const einhar = this.hideout.hideoutDoodads.filter(doodad => doodad['MasterName'] === 'Einhar');
			const niko = this.hideout.hideoutDoodads.filter(doodad => doodad['MasterName'] === 'Niko');
			const zana = this.hideout.hideoutDoodads.filter(doodad => doodad['MasterName'] === 'Zana');
			const other = this.$getMTX(this.hideout.hideoutDoodads);
			return {
				alva,
				einhar,
				niko,
				zana,
				other
			};
		},
		checkUserHasVoted () {
			const votes = this.hideout.votes.filter(v => v.user === this.$store.state.auth.user._id) || [];
			return {
				hasVoted: (votes.length > 0),
				id: (votes.length > 0) ? votes[0]._id : undefined,
				score: (votes.length > 0) ? votes[0].score : undefined
			};
		},
		totalFavorCost () {
			return this.$favorCost(this.hideout.hideoutDoodads);
		},
		downloadLink () {
			return `data:text/plain;charset=utf-8,${encodeURIComponent(this.hideoutFile)}`;
		}
	},
	methods: {
		async downloaded () {
			const downloaded = JSON.parse(Cookies.get('downloaded') || '[]');
			try {
				if (downloaded.indexOf(this.hideout.hideoutId) === -1) {
					downloaded.push(this.hideout.hideoutId);
					const downloads = this.hideout.downloads || 0;
					this.hideout.downloads = downloads + 1;
					await this.$axios.put(`/api/hideouts/${this.hideout.id}`, this.hideout);
					Cookies.set('downloaded', downloaded);
				}
			} catch (e) {
				this.error({ statusCode: 404, message: e.message });
			}
		},
		async rateHideout () {
			try {
				if (this.checkUserHasVoted.hasVoted) {
					await this.$axios.put(`/api/votes/${this.checkUserHasVoted.id}`, { user: this.$store.state.auth.user, score: this.rating, hideout: this.hideout });
					await this.$store.dispatch('auth/updateUserHideouts');
					location.reload();
				} else {
					await this.$axios.post(`/api/votes`, { user: this.$store.state.auth.user, score: this.rating, hideout: this.hideout });
					await this.$store.dispatch('auth/updateUserHideouts');
					location.reload();
				}
			} catch (e) {

			}
		}
	},
	head () {
		return {
			title: this.hideout.nameDescription
		};
	}
};
</script>
