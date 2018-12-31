<template>
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
					<small class="text-muted ">
						by
					</small>
					<nuxt-link
						v-if="hideout.user && hideout.user._id"
						:to="`/user/${hideout.user._id}`"><i class="fas fa-user"/> {{ hideout.user.username }}
					</nuxt-link>
					<span
						v-else
						class="text-muted "
					>{{ hideout.author || 'Anonymous' }}</span>
				</div>

			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		hideout: {
			default: () => {},
			type: Object
		}
	},
	methods: {
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
