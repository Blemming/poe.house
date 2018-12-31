<style lang="scss">
.hideout-card {
  position: relative;
  .card-header {
    z-index: 3;
    top: 0px;
    left: 0px;
    height: 80px;
    width: 100%;
    position: absolute;
    background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    border-bottom: 0px;
  }
  .image-container {
    z-index: 1;
    position: relative;
    .card-subheader {
      bottom: 0px;
      text-align: center;
      height: 80px;
      width: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
      position: absolute;
      h3{
          padding-top:40px;
  text-shadow:
   -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
     1px 1px 0 #000;
      }
    }
  }
}
</style>

<template>
	<div class="card hideout-card bg-secondary">
		<div class="card-header text-right text-white">
			{{ hideout.views }} <i class="fas fa-eye"/> {{ hideout.downloads }} <i class="fas fa-file-download"/> {{ hideout.comments.length }} <i class="fas fa-comments"/>
		</div>
		<nuxt-link
			:to="`/hideout/${hideout.hideoutId}`">
			<div class="image-container">
				<img
					:src="$getThumbnail(getImage(hideout))"
					class="card-img-top"
					alt="Card image cap">
				<div class="card-subheader">
					<h3 class="text-white">{{ hideout.nameDescription }}</h3>
				</div>
			</div>

		</nuxt-link>
		<div class="card-body">
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
							<tr>
								<th scope="row">Masters:</th>
								<td>
									<div class="row">
										<div class="col"><strong class="text-white">{{ hideout.hideoutMasters['Alva'] }}</strong><br>Alva</div>
										<div class="col"><strong class="text-white">{{ hideout.hideoutMasters['Einhar'] }}</strong><br>Einhar</div>
										<div class="col"><strong class="text-white">{{ hideout.hideoutMasters['Niko'] }}</strong><br>Niko</div>
										<div class="col"><strong class="text-white">{{ hideout.hideoutMasters['Zana'] }}</strong><br>Zana</div>
									</div>
								</td>
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
						class="btn btn-primary border border-dark text-dark">Details</nuxt-link>

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
