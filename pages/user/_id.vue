<style lang="scss">
</style>

<template>
	<div class="row py-5">
		<div
			class="col-12">
			<card-layout :title="user.username">
				<div
					class="card-body text-primary text-left">
					<div v-if="user.hideouts.length > 0">
						<div
							v-for="(hideout,index) in user.hideouts"
							:key="index"
							class="col-xs-12 my-2">
							<nuxt-link
								:to="`/hideout/${hideout.hideoutId}`">
								<div class="media border-bottom border-dark on-hover p-3">
									<div class="row w-100">
										<img
											:src="$getThumbnail(getImage(hideout))"
											style="max-width:400px;"
											class="align-self-center mr-3 xs-12 lg-2">

										<div class="media-body py-3  xs-12 lg-10">
											<h4 class="card-title text-white ">{{ hideout.nameDescription }}
											</h4>
											<div class="row justify-content-center">
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
								</div>
							</nuxt-link>
						</div>

					</div>
					<div
						v-else
						class="col-xs-12 my-2">
						<h4 class="text-center">This use has no hideouts</h4>
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
		const query = `
query{
	user(id:"${context.params.id}"){
              username
              confirmed
              hideouts(where:{
                isDeleted_ne:true
              }){
                hideoutId
                nameDescription
                hideoutType
                views
                downloads
                hideoutDateSubmit
                hideoutMasters
                hideoutScreenshot
              }
            }
          }
`;
		try {
			const { data: response } = await context.app.$axios.post(`/api/graphql`, { query });
			return {
				user: response.data.user
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
