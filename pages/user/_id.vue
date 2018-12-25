<style lang="scss">
</style>

<template>
	<div class="row py-5">
		<div
			class="col-12">
			<card-layout :title="user.username">
				<div
					class="card-body text-primary text-left">
					<div>
						<div
							v-for="(hideout,index) in user.hideouts"
							:key="index"
							class="col-xs-12 my-2">

							<nuxt-link
								:to="`/hideout/${hideout.hideoutId}`">
								<div class="media border-bottom border-dark on-hover p-3">
									<img
										:src="$getThumbnail(getImage(hideout))"
										style="max-width:300px;"
										class="align-self-center mr-3">

									<div class="media-body py-3">
										<h4 class="card-title text-white ">{{ hideout.nameDescription }}
										</h4>
										<div class="row">
											<div class="col-12">
												<table class="table table-sm table-striped table-dark bg-secondary text-primary ">
													<tbody>
														<tr>
															<th scope="row">Hideout</th>
															<td class="text-white"><strong>{{ getHideout(hideout.hideoutType) }}</strong></td>
														</tr>
														<tr v-if="hideout.views">
															<th scope="row">Views</th>
															<td class="text-white"><strong>{{ hideout.views }}</strong></td>
														</tr>
														<tr v-if="hideout.downloads">
															<th scope="row">Downloads</th>
															<td class="text-white"><strong>{{ hideout.downloads }}</strong></td>
														</tr>
														<tr>
															<th scope="row">Posted</th>
															<td class="text-white"><strong>{{ $moment.unix(hideout.hideoutDateSubmit.seconds).format(' MMMM Do YYYY') }}</strong></td>
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
										</div>
									</div>
								</div>
							</nuxt-link>
						</div>

					</div>
				</div>
			</card-layout>
		</div>
	</div>
</template>
<script>
import CardLayout from '~/components/CardLayout.vue';
export default {
	async asyncData (context) {
		try {
			const user = await context.app.$axios.$get(`/api/users/${context.params.id}`);
			return {
				user
			};
		} catch (e) {
			console.log(e);
		}
	},
	components: {
		CardLayout
	},
	methods: {
		getImage (hideout) {
			if (/.jpg|.png|jpeg/gi.test(hideout.hideoutScreenshot)) {
				return hideout.hideoutScreenshot;
			} else {
				return this.$store.getters.getHideout(hideout.hideoutType)['Icon'];
			}
		},
		getHideout (hash) {
			return this.$store.getters.getHideout(hash)['Name'];
		}
	}
};
</script>
