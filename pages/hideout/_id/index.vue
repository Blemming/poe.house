<template>
	<div class="row py-5">
		<div class="col-12">
			<card-layout :title="hideout.nameDescription">
				<div
					v-if="imgurGallery"
					class="row justify-content-center">
					<div class="col-6 mb-5">
						<div>
							<blockquote
								:data-id="`a/${hideout.hideoutScreenshot}`"
								class="imgur-embed-pub"
								lang="en">
								<a :href="`//imgur.com/${hideout.hideoutScreenshot}`"/>
							</blockquote>
							<script
								async
								src="//s.imgur.com/min/embed.js"
								charset="utf-8"/>
						</div>
					</div>
				</div>
				<div
					v-else
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
						<p v-html="hideout.hideoutDescription"/>

					</div>
				</div>
				<div class="row mt-5">
					<div class="col-12">
						<table class="table table-bordered table-striped table-dark bg-secondary text-primary ">
							<tbody>
								<tr>
									<th
										class="text-center w-25"
										scope="row">
										Hideout Type:
									</th>
									<td>{{ getHideoutType }}</td>
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
							</tbody>
						</table>
					</div>
				</div>
				<div class="row justify-content-end">
					<div
						v-if="hideout.hideoutVideo"
						class="col-6 text-left">
						<a
							:href="hideout.hideoutVideo"
							target="_blank">
							<img
								class="w-25 bg-primary p-2"
								src="~/assets/images/yt_logo_rgb_light.png"
								alt="Youtube">
						</a>
					</div>
					<div class="col-6 text-right">
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
					</div>
				</div>
				<div class="row">
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
								class="col-12">
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
			</card-layout>
		</div>
	</div>
</template>
<script>
import CardLayout from '~/components/CardLayout.vue';
import ShoppingList from '~/components/ShoppingList';
import Cookies from 'js-cookie';

export default {
	async asyncData (context) {
		try {
			const hideouts = await context.app.$axios.$get(`/api/hideouts?hideoutId=${context.params.id}`);
			const hideout = hideouts[0];
			if (!process.server) {
				const viewed = JSON.parse(Cookies.get('viewed') || '[]');
				if (viewed.indexOf(context.params.id) === -1) {
					viewed.push(context.params.id);
					const views = hideout.views || 0;
					hideout.views = views + 1;
					await context.app.$axios.put(`/api/hideouts/${hideout.id}`, hideout);
					Cookies.set('viewed', viewed);
				}
			}
			if (hideout) {
				const hideoutLink = await hideout.hideoutFileLink.replace(/https:\/\/pastebin.com\//gi, '/raw/');
				const hideoutFile = await context.app.$axios.$get(hideoutLink);
				return {
					hideout,
					hideoutFile: hideoutFile.replace(/\n/g, '\n')
				};
			} else {
				context.error({ statusCode: 404, message: 'This hideout does not exist' });
			}
		} catch (e) {
			context.error({ statusCode: 404, message: e.message });
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
		}
	},
	head () {
		return {
			title: this.hideout.nameDescription
		};
	}
};
</script>
