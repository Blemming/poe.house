<template>
	<div class="row py-5">
		<div class="col-12">
			<div class="card text-primary bg-secondary border border-primary">
				<div class="card-header border-bottom border-dark text-white text-center">
					<h1 class="display-5">{{ hideout.nameDescription }}</h1>
				</div>
				<div class="card-body text-primary text-left">
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
								:src="hideout.hideoutScreenshot"
								alt=""
								class="img-fluid">
						</div>
					</div>
					<div class="row justify-content-center">

						<div class="col-12">
							<p v-html="hideout.hideoutDescription"/>

						</div>
						<div
							v-if="hideout.hideoutVideo"
							class="col-6">
							<a
								:href="hideout.hideoutVideo"
								target="_blank">
								<img
									class="w-25 bg-primary p-2"
									src="~/assets/images/yt_logo_rgb_light.png"
									alt="Youtube">
							</a>
						</div>
						<div class="col-6">
							<a
								:href="downloadLink"
								class="btn btn-primary"
								target="_blank">
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
						<div class="col-12">
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
											<span >Alva</span>
										</a>
										<hr>
									</h5>
									<div
										id="collapseAlva"
										class="collapse"
										aria-labelledby="headingOne"
										data-parent="#alva">
										<div class="card bg-secondary">
											<table class="table table-bordered table-striped table-dark bg-secondary text-primary ">
												<tbody>
													<tr
														v-for="doodad in shoppingList.alva"
														:key="doodad['Hash']">
														<th
															class="text-center w-25"
															scope="row">
															<img
																:src="doodad['Icon']"
																style="max-height:80px;"
																alt="">
														</th>
														<td>{{ doodad['Count'] }}</td>
														<td>{{ doodad['Name'] }}</td>
														<td>{{ doodad['Cost'] }}</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-12">
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
											<span>Einhar</span>
										</a>
										<hr>
									</h5>
									<div
										id="collapseEinhar"
										class="collapse"
										aria-labelledby="headingOne"
										data-parent="#Einhar">
										<div class="card bg-secondary">
											<table class="table table-bordered table-striped table-dark bg-secondary text-primary ">
												<tbody>
													<tr
														v-for="doodad in shoppingList.einhar"
														:key="doodad['Hash']">
														<th scope="row"><img
															:src="doodad['Icon']"
															alt=""></th>
														<td>{{ doodad['Count'] }}</td>
														<td>{{ doodad['Name'] }}</td>
														<td>{{ doodad['Cost'] }}</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-12">
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
											<span>Niko</span>
										</a>
										<hr>
									</h5>
									<div
										id="collapseNiko"
										class="collapse"
										aria-labelledby="headingOne"
										data-parent="#Niko">
										<div class="card bg-secondary">
											<table class="table table-bordered table-striped table-dark bg-secondary text-primary ">
												<tbody>
													<tr
														v-for="doodad in shoppingList.niko"
														:key="doodad['Hash']">
														<th scope="row"><img
															:src="doodad['Icon']"
															alt=""></th>
														<td>{{ doodad['Count'] }}</td>
														<td>{{ doodad['Name'] }}</td>
														<td>{{ doodad['Cost'] }}</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-12">
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
											<span>Niko</span>
										</a>
										<hr>
									</h5>
									<div
										id="collapseZana"
										class="collapse"
										aria-labelledby="headingOne"
										data-parent="#Zana">
										<div class="card bg-secondary">
											<table class="table table-bordered table-striped table-dark bg-secondary text-primary ">
												<tbody>
													<tr
														v-for="doodad in shoppingList.zana"
														:key="doodad['Hash']">
														<th scope="row"><img
															:src="doodad['Icon']"
															alt=""></th>
														<td>{{ doodad['Count'] }}</td>
														<td>{{ doodad['Name'] }}</td>
														<td>{{ doodad['Cost'] }}</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-12">
							<div class="row">
								<div
									id="Zana"
									class="col-12">
									<h5 class="mb-0 text-center">
										<img
											class="pb-4"
											src="https://web.poecdn.com/image/shop/item/ShopItemCoin.png?1538109960000"
											alt="">
										<a
											href="#"
											class="text-white"
											data-toggle="collapse"
											data-target="#collapseOther"
											aria-expanded="true"
											aria-controls="collapseOther">
											<span class="display-4">Microtransactions</span>
											<hr>
										</a>
									</h5>
									<div
										id="collapseOther"
										class="collapse"
										aria-labelledby="headingOne"
										data-parent="#Zana">
										<div class="card bg-secondary">
											<table class="table table-bordered table-striped table-dark bg-secondary text-primary ">
												<tbody>
													<tr
														v-for="doodad in shoppingList.other"
														:key="doodad['Hash']">
														<th scope="row"><img
															:src="doodad['Icon']"
															alt=""></th>
														<td>{{ doodad['Count'] }}</td>
														<td>{{ doodad['Name'] }}</td>
														<td>{{ doodad['Cost'] }}</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	async asyncData (context) {
		const hideoutsRef = context.app.$fireStore.collection('hideouts').doc(context.params.id);
		try {
			const hideoutsDoc = await hideoutsRef.get();
			const hideout = hideoutsDoc.data();
			if (hideout) {
				return {
					hideout
				};
			} else {
				context.error({ statusCode: 404, message: 'This hideout does not exist' });
			}
		} catch (e) {
			context.error({ statusCode: 404, message: e.message });
		}
	},
	computed: {
		imgurGallery () {
			return !!/imgur/g.test(this.hideout.hideoutScreenshot) && !/.png|.jpg|.jpeg/g.test(this.hideout.hideoutScreenshot);
		},
		downloadLink () {
			return this.hideout.hideoutFileLink.replace(/https:\/\/pastebin.com\//gi, 'https://pastebin.com/dl/');
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
		}
	},
	methods: {
	},
	head () {
		return {
			title: this.hideout.nameDescription
		};
	}
};
</script>
