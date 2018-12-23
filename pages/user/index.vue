<template>
	<div class="row py-5">
		<div
			v-if="$store.getters['auth/username']"
			class="col-12">
			<card-layout :title="user.username">
				<div
					class="card-body text-primary text-left">
					<div v-if="!$store.state.auth.user.confirmed">
						<h4>Account not confirmed, check your email to confirm account. </h4>
						<p>If it does not show up check the spam folder. If after 24 hours you still have not received the confirmation email contact
							<a
								class="text-white"
								href="mailto:support@poe.house">support@poe.house</a> with your registered email.
						</p>
					</div>
					<div
						v-if="$store.state.auth.user.confirmed">
						<div
							v-if="user.hideouts.length <= 0"
							class="text-center">
							<a
								v-if="claimable"
								class="btn btn-primary"
								href="#"
								@click.prevent="claimEmailHideouts()">
								<h4>Claim email hideouts</h4>
							</a>
							<h4
								v-if="!claimable">You have no hideouts yet. If you want to claim a hideout send an email to
								<a
									class="text-white"
									href="mailto:support@poe.house">support@poe.house</a> with a link to the hideout and your account name.
							</h4>
						</div>
						<div
							v-for="(hideout,index) in user.hideouts"
							:key="index"
							class="col-xs-12 my-2">
							<div class="media border-bottom border-dark">
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
										<div class="col-3 text-right">
											<nuxt-link
												:to="`/hideout/${hideout.hideoutId}/edit`"
												class="btn btn-primary">Edit</nuxt-link>

										</div>
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

export default {
	middleware: 'auth',
	components: {
		CardLayout
	},
	data () {
		return {
			claimable: true
		};
	},
	computed: {
		user () {
			return this.$store.state.auth.user;
		}
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
		},
		async claimEmailHideouts () {
			try {
				const getHideoutsQuery = `
                        query{
                            hideouts(where:{
                                authorEmail:"${this.$store.state.auth.user.email}"
                            }){
                                _id
                            }
                            }
                        `;
				const { data } = await this.$axios.$post(`/api/graphql`, { query: getHideoutsQuery });
				let ids = '';
				if (data.hideouts.length > 0) {
					data.hideouts.forEach(hide => { ids += `, "${hide._id}"`; });
					const updateQuery = `
                                mutation{
                                    updateHideout(input:{
                                        where:{
                                            id:${ids.replace(', "', '"')}
                                        },
                                        data:{
                                            user:"${this.$store.state.auth.user._id}"
                                        }
                                    }){
                                        hideout{
                                            user{
                                                username,
                                                email
                                            }
                                        }
                                    }
                                }
                    `;
					await this.$axios.post(`/api/graphql`, { query: updateQuery });
					this.$store.dispatch('auth/updateUserHideouts');
				} else {
					this.claimable = false;
				}
			} catch (e) {
				console.log(e.response.data);
			}
		}
	}
};
</script>
