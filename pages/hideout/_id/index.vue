<template>
	<div class="row py-5">
		<div class="col-12">
			<card-layout :title="hideout.nameDescription">
				<div
					v-if="isImgurGallery"
					class="row">
					<div class="col-12">
						<div
							id="carouselExampleControls"
							class="carousel border border-dark slide"
							data-ride="carousel">
							<div
								class="carousel-inner bg-dark">
								<div
									v-for="(image,index) in imgurGalleryPhotos.data"
									:key="image.id"
									:class="(index===0)?'carousel-item active text-center':'carousel-item text-center'"
								>
									<img

										:src="image.link"
										class="img-fluid"
										alt="Card image cap">
								</div>
							</div>
						</div>
						<a
							class="carousel-control-prev text-white"
							href="#carouselExampleControls"
							style="background: linear-gradient(to right,rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));"
							role="button"
							data-slide="prev">
							<i class="fas fa-caret-left fa-7x"/>
							<span class="sr-only">Previous</span>
						</a>
						<a
							class="carousel-control-next"
							href="#carouselExampleControls"
							style="background: linear-gradient(to right,rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));"
							role="button"
							data-slide="next">
							<i class="fas fa-caret-right fa-7x"/>
							<span class="sr-only">Next</span>
						</a>

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
									<td>{{ hideout.decorationsCost }}</td>
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
											:to="`/user/${hideout.user._id}`"
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
											:class="{'btn-danger':!hideoutFile, 'disabled':!hideoutFile}"
											class="btn btn-primary"
											@click="downloaded()">
											<span v-if="hideoutFile">Download</span><span v-else>PASTEBIN NOT VALID</span>
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
							aria-selected="false">Comments ({{ hideout.comments.length }})</a>
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
								<div class="ql-editor">
									<div
										v-html="hideout.hideoutDescription"
									/>
								</div>
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
						<div
							v-if="hideout.comments.length > 0"
							class="m-3">
							<div
								v-for="comment in hideout.comments"
								:key="comment._id"
								class="card border border-dark mt-3">
								<div class="card-body bg-dark">
									<div
										class="ql-editor"
										style="min-height:0px;">
										<div
											v-html="comment.comment"/>
									</div>

								</div>
								<div class="card-footer text-white bg-secondary text-right">
									By
									<nuxt-link
										v-if="comment.user && comment.user.username && comment.user.Donator"
										:to="`/user/${comment.user._id}`"
										style="color: rgb(255, 108, 0);"><img
											style="max-height:1rem;"
											src="/images/Chaos_Orb.png"
											alt="">  {{ comment.user.username }}
									</nuxt-link>
									<nuxt-link
										v-if="comment.user && comment.user.username&& !comment.user.Donator"
										:to="`/user/${comment.user._id}`"
										class="text-primary"><i class="fas fa-user"/>  {{ comment.user.username }}
									</nuxt-link>

									on {{ $moment(comment.createdAt).format(' MMMM Do YYYY') }}
								</div>
							</div>
						</div>
						<div
							v-else
							class="m-3">
							<div class="bg-dark mt-3 p-2 border border-primary">
								<p>No comments yet</p>
							</div>
						</div>
						<div class="border-bottom border-dark"/>

						<div
							v-if="$store.getters['auth/username']"
							class="m-3">
							<div v-if="!$store.state.auth.user.confirmed">
								<h4>Account not confirmed, check your email to confirm account. </h4>
								<p>If it does not show up check the spam folder. If after 24 hours you still have not received the confirmation email contact
									<a
										class="text-white"
										href="mailto:support@poe.house">support@poe.house</a> with your registered email.
								</p>
							</div>
							<no-ssr v-else>
								<div
									v-validate="'required'"
									v-quill:myQuillEditor="editorSettings"
									ref="markdownEditor"
									:content="currentComment"
									class="w-100 bg-dark text-white"
									style="height:100px;"
									name="description"
									required
									@change="onEditorChange($event)"/>
								<div class="row justify-content-end">
									<div class="col mt-3">
										<a
											href="#"
											class="btn btn-primary"
											@click.prevent="submitComment()">Post</a>
									</div>

								</div>

							</no-ssr>
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
		const query = `
        query{
  hideouts(limit:9000, where:{isDelete_ne:true,hideoutId:"${params.id}"}){
      _id,
    author,
    downloads,
    hideoutFileLink,
    hideoutId,
    hideoutMasters,
    hideoutScreenshot,
    hideoutVideo
    gallery,
    hideoutType,
    nameDescription,
    views,
    hideoutDateSubmit,
    hideoutDescription,
    hideoutDoodads,
    comments{
      user{
          Donator,
        username,
        _id
      },
      comment
    },
    user{
        _id,
      username
    },
    votes{
        _id,
      score,
      user{
        _id
      }
    }
  }
}
        `;
		try {
			const { data } = await app.$axios.$post(`/api/graphql`, { query });
			const hideout = data.hideouts[0];
			let isImgurGallery = false;
			let imgurGalleryPhotos = '';
			if (hideout.gallery && /imgur.com\/a/.test(hideout.gallery)) {
				isImgurGallery = true;
				const hideoutGallery = hideout.gallery.replace(/https:\/\/imgur.com\/a\/([a-zA-Z0-9]*)/gi, '$1');
				imgurGalleryPhotos = await app.$axios.$get(`/imgur/3/album/${hideoutGallery}/images`);
			}
			if (hideout) {
				let votes = [];
				if (store.getters['auth/username']) {
					votes = hideout.votes.filter(v => v.user._id === store.state.auth.user._id);
				}
				return {
					isImgurGallery,
					imgurGalleryPhotos,
					hideout,
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
	data () {
		return {
			hideoutFile: '',
			currentComment: '',
			editorSettings: {
				placeholder: 'Post a comment',
				modules: {
					toolbar: [
						[{ 'header': 1 }, { 'header': 2 }], // custom button values
						['bold', 'italic', 'underline', 'strike'], // toggled buttons
						['blockquote', 'code-block'],

						[{ 'list': 'ordered' }, { 'list': 'bullet' }],

						[{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown

						[{ 'color': [] }, { 'background': [] }], // dropdown with defaults from theme
						[{ 'align': [] }],

						['link'],
						['clean'] // remove formatting button
					]
				}
			}
		};
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
			const votes = this.hideout.votes.filter(v => v.user._id === this.$store.state.auth.user._id) || [];
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
	async mounted () {
		try {
			const hideoutLink = this.hideout.hideoutFileLink.replace(/https:\/\/pastebin.com\//gi, '/raw/');
			const hideoutFile = await this.$axios.$get(hideoutLink);
			this.hideoutFile = hideoutFile.replace(/\n/g, '\n');
		} catch (e) {
			console.log(e);
		}
	},
	methods: {
		strip (html) {
			var doc = new DOMParser().parseFromString(html, 'text/html');
			return doc.body.textContent || '';
		},
		onEditorChange ({ editor, html, text }) {
			this.currentComment = html;
		},
		async submitComment () {
			try {
				await this.$axios.post(`/api/comments`, { user: this.$store.state.auth.user, comment: this.currentComment, hideout: this.hideout });
				await this.$store.dispatch('auth/updateUserHideouts');
				location.reload();
			} catch (e) {
				console.log(e);
			}
		},
		async downloaded () {
			const downloaded = JSON.parse(Cookies.get('downloaded') || '[]');
			try {
				if (downloaded.indexOf(this.hideout.hideoutId) === -1) {
					downloaded.push(this.hideout.hideoutId);
					const downloads = this.hideout.downloads || 0;
					this.hideout.downloads = downloads + 1;
					await this.$axios.put(`/api/hideouts/${this.hideout._id}`, this.hideout);
					Cookies.set('downloaded', downloaded);
				}
			} catch (e) {
				console.log(e);
			}
		},
		async rateHideout () {
			try {
				if (this.checkUserHasVoted.hasVoted) {
					await this.$axios.put(`/api/votes/${this.checkUserHasVoted.id}`, { user: this.$store.state.auth.user, score: this.rating, hideout: this.hideout });
					await this.$store.dispatch('auth/updateUserHideouts');
					// location.reload();
				} else {
					await this.$axios.post(`/api/votes`, { user: this.$store.state.auth.user, score: this.rating, hideout: this.hideout });
					await this.$store.dispatch('auth/updateUserHideouts');
					location.reload();
				}
			} catch (e) {
				console.log(e);
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
