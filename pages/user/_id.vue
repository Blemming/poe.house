<style lang="scss">
.image-container{
    position: relative;
    .image-overlay{
        position:absolute;
        left:1.2rem;
        top:1.4rem;
        z-index:9;
    }
}
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
										<div class="image-container d-flex">
											<img
												:src="$getThumbnail(getImage(hideout))"
												style="max-width:400px;"
												class="align-self-center mr-3 xs-12 lg-2">
										</div>

										<div class="media-body py-3  xs-12 lg-10">
											<div class="card-title text-white ">
												<h4>{{ hideout.nameDescription }}</h4>
												<small class="text-primary">{{ hideout.views }} <i class="fas fa-eye pr-2"/> {{ hideout.downloads }} <i class="fas fa-file-download pr-2"/> {{ hideout.comments.length }} <i class="fas fa-comments"/></small>
											</div>
											<div class="row justify-content-center">
												<div class="col-12">
													<table class="table table-sm table-striped table-dark bg-secondary text-primary ">
														<tbody>
															<tr>
																<th scope="row">Hideout</th>
																<td class="text-white"><strong>{{ getHideout(hideout.hideoutType) }}</strong></td>
															</tr>
															<tr v-if="hideout.votes.length > 0">
																<th scope="row">Rating</th>
																<td class="text-white">
																	<image-rating
																		:rating="$calculateVotes(hideout.votes)"
																		:read-only="true"
																		:src="require('~/assets/images/Exalted_Orb.png')"
																		:increment="0.25"
																		:show-rating="false"
																		:item-size="30"/>
																</td>
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
                comments{
                    _id
                }
                hideoutDateSubmit
                hideoutMasters
                hideoutScreenshot
                votes{
                    score
                }
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
