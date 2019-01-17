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
		<nuxt-link
			:to="`/hideout/${hideout.hideoutId}`">
			<div class="card-header text-white">
				<div class="row">
					<div class="col-6">
						<i
							v-if="hideout.gallery"
							class="fas fa-images text-primary pr-2"/>
						<i
							v-if="hideout.hideoutVideo"
							class="fas fa-video text-primary"/>
					</div>
					<div class="col-6 text-right">
						{{ hideout.views }} <i class="fas fa-eye pr-2"/> {{ hideout.downloads }} <i class="fas fa-file-download pr-2"/> {{ hideout.comments.length }} <i class="fas fa-comments"/>
					</div>
				</div>
			</div>
			<div
				class="image-container">
				<img
					:src="$getThumbnail(getImage(hideout))"
					style="height:272px;object-fit:cover;"
					class="card-img-top"
					alt="Card image cap">
				<div class="card-subheader">
					<h4 class="text-white text-capitalize">{{ hideout.nameDescription }}</h4>
				</div>
			</div>

		</nuxt-link>
		<div class="card-body">
			<div class="row">
				<div
					class="col-12">
					<table class="table table-sm table-striped table-dark bg-secondary text-primary ">
						<tbody>
							<tr>
								<th scope="row">Type</th>
								<td class="text-white"><strong>{{ getHideout(hideout.hideoutType) }}</strong></td>
							</tr>
							<tr>
								<th scope="row">Rating</th>
								<td class="text-white">
									<image-rating
										v-if="hideout.votes.length > 0"
										:rating="$calculateVotes(hideout.votes,hideout.user)"
										:read-only="true"
										:src="require('~/assets/images/Exalted_Orb.png')"
										:increment="0.25"
										:show-rating="false"
										:item-size="30"/>
									<image-rating
										v-else
										:rating="0"
										:read-only="true"
										:src="require('~/assets/images/Exalted_Orb.png')"
										:increment="0.25"
										:show-rating="false"
										:item-size="30"/>
								</td>
							</tr>
							<tr>
								<th scope="row">Favour required</th>
								<td class="text-white"><strong>{{ $favorCost(hideout.decorationsCost) }}</strong></td>
							</tr>
							<tr>
								<th scope="row">Unique decorations</th>
								<td class="text-white"><strong>{{ hideout.uniqueDecorations }}</strong></td>
							</tr>

							<tr>
								<th
									scope="row">
									Gallery
								</th>
								<td class="text-white">
									<span v-if="hideout.gallery">Yes</span>
									<span v-else>No</span>
								</td>
							</tr>
							<tr>
								<th scope="row">Masters:</th>
								<td>
									<div class="row">
										<div class="col text-center"><strong class="text-white">{{ hideout.hideoutMasters['Alva'] }}</strong><br>Alva</div>
										<div class="col text-center"><strong class="text-white">{{ hideout.hideoutMasters['Einhar'] }}</strong><br>Einhar</div>
										<div class="col text-center"><strong class="text-white">{{ hideout.hideoutMasters['Niko'] }}</strong><br>Niko</div>
										<div class="col text-center"><strong class="text-white">{{ hideout.hideoutMasters['Zana'] }}</strong><br>Zana</div>
									</div>
								</td>
							</tr>
						</tbody>
					</table>

				</div>
			</div>
			<div class="row justify-content-between">
				<div class="col-6 col-md-4 col-lg3">
					<img
						v-if="hideout.hideoutMasters['mtx']"
						src="https://web.poecdn.com/image/shop/item/ShopItemCoin.png?1538109960000"
						alt="">
					<small v-if="hideout.hideoutMasters['mtx']">MTX</small>
				</div>
				<div class="col-6 col-md-4 col-lg3 text-right">
					<nuxt-link
						:to="`/hideout/${hideout.hideoutId}`"
						class="btn btn-primary border border-dark text-dark">Details</nuxt-link>

				</div>
			</div>
		</div>
		<div class="card-footer">
			<div class="row justify-content-between">
				<div class="col">
					<small class="text-muted ">{{ $moment(hideout.dateSubmitted).format(' MMMM Do YYYY') }}</small>
				</div>
				<div class="col text-right">
					<small class="text-muted ">
						by
					</small>
					<nuxt-link
						v-if="hideout.user && hideout.user._id && hideout.user.Donator"
						:to="`/user/${hideout.user._id}`"
						style="color: rgb(255, 108, 0);"><img
							style="max-height:1rem;"
							src="/images/Chaos_Orb.png"
							alt=""> {{ hideout.user.username }}
					</nuxt-link>
					<nuxt-link
						v-if="hideout.user && hideout.user._id && !hideout.user.Donator"
						:to="`/user/${hideout.user._id}`"><i class="fas fa-user"/> {{ hideout.user.username }}
					</nuxt-link>
					<span
						v-if="!hideout.user"
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
