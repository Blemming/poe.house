<style lang="scss">
.modal-dialog, .modal-header{
    border-radius:0px!important;
}
// .card-header {
//     z-index: 3;
//     top: 0px;
//     left: 0px;
//     height: 80px;
//     width: 100%;
//     position: absolute;
//     background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
//     border-bottom: 0px;
//   }
//   .image-container {
//     z-index: 1;
//     position: relative;
//     .card-subheader {
//       bottom: 0px;
//       text-align: center;
//       width: 100%;
//       background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
//       position: absolute;
//       h3{
//           padding-top:40px;
//   text-shadow:
//    -1px -1px 0 #000,
//     1px -1px 0 #000,
//     -1px 1px 0 #000,
//      1px 1px 0 #000;
//       }
//     }
//   }
</style>
<template>
	<div class="row py-5">
		<div class="col-12">
			<card-layout
				title="Add Hideout">
				<form @submit.prevent="submitHideout()">
					<div class="form-row">
						<div class="form-group col-md-12 ">
							<h3 class="text-white bg-dark pl-3 pb-1  border-left border-primary">About</h3>
						</div>
						<div class="form-group col-md-10 ml-auto">
							<label for="Title">Title</label>
							<input
								v-validate="{required:true,max:150}"
								id="nameDescription"
								v-model="nameDescription"
								name="Title"
								required
								type="input"
								class="form-control"
								placeholder="Title">
							<span
								v-if="errors.first('Title')"
								class="badge badge-danger">{{ errors.first('Title') }}</span>
						</div>
						<div
							class="form-group col-md-10 ml-auto">
							<label for="inputDescription">Description</label>
							<div
								id="inputDescription"
								class="row">
								<div class="col-12">
									<no-ssr>
										<div
											v-quill:myQuillEditor="editorSettings"
											ref="markdownEditor"
											:content="hideoutDescription"
											class="w-100 bg-dark text-white"
											style="height:200px;"
											name="description"
											required
											@change="onEditorChange($event)"/>

									</no-ssr>
								</div>

							</div>
						</div>
						<div
							v-if="!$store.getters['auth/username']"
							class="form-group col-6 col-lg-4 ml-auto">
							<label for="inputAuthor">Author</label>
							<input
								id="inputAuthor"
								v-model="author"
								type="text"
								class="form-control"
								placeholder="Author name">
						</div>
						<div
							v-if="!$store.getters['auth/username']"
							class="form-group col-6 col-lg-4 ml-auto">
							<label for="inputAuthor">Email</label>
							<input
								v-validate="'email'"
								id="inputAuthor"
								v-model="authorEmail"
								name="authorEmail"
								type="email"
								class="form-control"
								placeholder="Author Email">
							<span
								v-if="errors.first('authorEmail')"
								class="badge badge-danger">{{ errors.first('authorEmail') }}</span>
							<p>

								<small class="text-muted">
									If you decide to create an account, you will be able to link the hideout to your account.
								</small>
							</p>
						</div>

					</div>
					<div class="form-row justify-content-end">
						<div class="form-group col-12">
							<h3 class="text-white bg-dark pl-3 pb-1  border-left border-primary">Details</h3>
						</div>

						<div class="form-group col-md-5">
							<label for="inputPastebin">Pastebin link</label>

							<div class="input-group">
								<div
									v-if="pastebinSubmitted"
									class="input-group-prepend">
									<a
										href="#"
										class="btn btn-success"
										disabled
										@click.prevent="">
										<span>
											<i class="fas fa-check"/>
										</span>
									</a>
								</div>
								<div
									v-if="pastebinError"
									class="input-group-prepend">
									<a
										href="#"
										class="btn btn-danger"
										disabled
										@click.prevent="">
										<span>
											<i class="fas fa-times"/>
										</span>
									</a>
								</div>
								<input
									v-validate="{ required: true, regex: /https:\/\/pastebin.com\// }"
									id="inputPastebin"
									v-model="hideoutFileLink"
									:disabled="pastebinSubmitted"
									name="pastebinLink"
									required
									type="text"
									placeholder="Link to pastebin"
									class="form-control">
								<div
									v-if="pastebinSubmitted || pastebinError"
									class="input-group-append">
									<a
										href="#"
										class="btn btn-danger"
										@click.prevent="clearPastebin()">
										<span>
											<i class="far fa-trash-alt"/>
										</span>
									</a>
								</div>
								<div
									v-else
									class="input-group-append">
									<a
										:class="`btn btn-primary ${(!hideoutFileLink)?'disabled':''}`"
										href="#"
										@click.prevent="resolvePastebin()">
										<span v-if="!pastebinProcessing">
											Process
										</span>
										<span v-else>
											<i class="fas fa-cog fa-spin"/>
										</span>
									</a>
								</div>
							</div>

							<span
								v-if="errors.first('pastebinLink')"
								class="badge badge-danger">{{ errors.first('pastebinLink') }}</span>
						</div>
						<div class="form-group col-md-5">
							<label for="Imgur Gallery">Imgur Gallery</label>
							<div class="input-group">
								<div
									v-if="gallery && !errors.first('Imgur Gallery')"
									class="input-group-prepend">
									<a
										href="#"
										class="btn btn-success"
										disabled
										@click.prevent="">
										<span>
											<i class="fas fa-check"/>
										</span>
									</a>
								</div>
								<input
									v-validate="{ regex: /https:\/\/imgur.com\// }"
									id="inputGallery"
									v-model="gallery"
									name="Imgur Gallery"
									type="text"
									class="form-control"
									placeholder="Link to imgur gallery">

								<div
									v-if="gallery && !errors.first('Imgur Gallery')"
									class="input-group-append">
									<a
										href="#"
										class="btn btn-danger"
										@click.prevent="gallery=''">
										<span>
											<i class="far fa-trash-alt"/>
										</span>
									</a>
								</div>
							</div>
							<span
								v-if="errors.first('Imgur Gallery')"
								class="badge badge-danger">{{ errors.first('Imgur Gallery') }}</span>
						</div>
						<div class="w-100"/>
						<div class="form-group col-md-5">
							<label for="thumbnail">Thumbnail link <small>(Direct link to image)</small></label>

							<div class="input-group">
								<div
									v-if="!imageSubmitted"
									class="input-group-prepend">
									<a
										:class="`btn btn-primary border-left  ${(!pastebinSubmitted )?'disabled':''}`"
										href="#"
										@click.prevent="resolveThumbnail(true)">
										<span>
											Use default Image
										</span>
									</a>
								</div>
								<div
									v-if="!imageSubmitted"
									class="input-group-prepend">
									<a
										:class="`btn btn-primary  ${(!pastebinSubmitted || !gallery|| imgueGalleryError)?'disabled':''}`"
										href="#"
										@click.prevent="getThumbnailFromGallery()">
										<span>
											Gallery image
										</span>
									</a>
								</div>
								<div
									v-if="imageSubmitted"
									class="input-group-prepend">
									<a
										href="#"
										class="btn btn-success"
										disabled
										@click.prevent="">
										<span>
											<i class="fas fa-check"/>
										</span>
									</a>
								</div>
								<input
									v-validate="{ required: true, regex: /^https:\/\/(.*)(.jpg$|.png$)/ }"
									id="inputScreenshot"
									:disabled="!pastebinSubmitted || imageSubmitted"
									v-model="hideoutScreenshot"
									:placeholder="(pastebinSubmitted)?'Link to image url':'Submit Pastebin first'"
									name="thumbnail"
									type="text"
									class="form-control">
								<div
									v-if="!imageSubmitted"
									class="input-group-append">
									<a
										:class="`btn btn-primary ${(!pastebinSubmitted||error)?'disabled':''}`"
										href="#"
										@click.prevent="resolveThumbnail()">
										<span>
											Process
										</span>
									</a>
								</div>
								<div
									v-if="imageSubmitted"
									class="input-group-append">
									<a
										href="#"
										class="btn btn-danger"
										@click.prevent="clearImage()">
										<span>
											<i class="far fa-trash-alt"/>
										</span>
									</a>
								</div>
								<small class="text-muted">
									Setting the thumbnail to <strong>default</strong> or <strong>not</strong> setting one will prevent your hideout from showing up on the default homepage.
								</small>
							</div>
							<span
								v-if="errors.first('thumbnail')"
								class="badge badge-danger">{{ errors.first('thumbnail') }}</span>
						</div>

						<div class="form-group col-md-5">
							<label for="inputVideo">Video link</label>
							<input
								v-validate="'url:require_protocol'"
								id="inputVideo"
								v-model="hideoutVideo"
								name="videoLink"
								type="text"
								class="form-control"
								placeholder="Link to youtube url">
							<span
								v-if="errors.first('videoLink')"
								class="badge badge-danger">{{ errors.first('videoLink') }}</span>
						</div>
					</div>
					<div
						class="form-row ">

						<!-- <div
							v-if="$store.getters['auth/username']"
							class="form-group col-6 col-lg-6">
							<div class="custom-control custom-checkbox">
								<input
									id="contestParticipation"
									:disabled="!pastebinSubmitted"
									v-model="isCommunityContest"
									type="checkbox"
									class="custom-control-input">
								<label
									class="custom-control-label"
									for="contestParticipation">Participate in community hideout contest {{ !pastebinSubmitted?'( Submit pastebin first )':'' }}</label>
							</div>
							<div
								v-if="isCommunityContest && pastebinSubmitted"
								class="mt-3 alert alert-warning"
								role="alert">
								<h4>Rules:</h4>
								<ul>
									<li>Contest starts on February 22nd.</li>
									<li>Must be built around map device.</li>
									<li :class="{'text-danger':isImageDefault}">Must provide thumbnail.</li>
									<li :class="{'text-danger':hideoutCost.number>5000000}">5M favor limit.</li>
									<li :class="{'text-danger':isMtx}">No mtx/trophies/old crafting benches/supporter pack hideouts</li>
									<li>No supporter pack decorations </li>
									<li>Deadline is March 22, 23:59 UTC</li>
									<li>Voting will be from March 23, 0:00 to March 29, 23:59 UTC</li>
								</ul>
							</div>
						</div> -->
						<!-- <div class="form-group col-md-12">
							<div
								v-if="error || errorMessage"
								class="row">
								<div
									v-for="error in errors.items"
									:key="error.id"
									class="col-12 mt-1">
									<span
										class="badge badge-danger">{{ error.msg }}</span>
								</div>
								<div class="col-12">
									<span
										v-if="errorMessage"
										class="badge badge-danger">{{ errorMessage }}</span>
								</div>
							</div>

						</div> -->
					</div>
					<div
						v-if="pastebinSubmitted"
						class="form-row justify-content-center">
						<div class="col-12">
							<h3 class="text-white bg-dark pl-3 pb-1  border-left border-primary">Preview</h3>
						</div>
						<div
							v-if="pastebinSubmitted || pastebinError"
							class="col-6">
							<div class="form-group col-md-12 p-relative">
								<h4
									class="text-white"
									for="inputHideout">Thumbnail</h4><br>
								<div
									class="image-container">
									<img
										v-if="!imgurGallery"
										id="inputHideout"
										:src="$getThumbnail(displayedImage)"
										style="height: 272px; object-fit: cover;"
										class="img-fluid"
										alt="">
									<div class="card-subheader">
										<!-- <h4 class="text-white text-capitalize">{{ nameDescription }}</h4> -->
									</div>
								</div>
							</div>
							<div class="col-md-12">
								<h4 class="text-white text-capitalize">{{ nameDescription }}</h4>
							</div>
							<table
								class="table table-sm table-striped table-dark bg-secondary text-primary ">

								<tbody>
									<tr>
										<th scope="row">Type</th>
										<td class="text-white"><strong>{{ getHideout(hideoutType) }}</strong></td>
									</tr>
									<tr>
										<th scope="row">Favour required</th>
										<td class="text-white"><strong>{{ hideoutCost.string }}</strong></td>
									</tr>
									<tr>
										<th scope="row">Unique decorations</th>
										<td class="text-white"><strong>{{ getHideoutDoodads.length }}</strong></td>
									</tr>
									<tr>
										<th scope="row">MTX</th>
										<td class="text-white"><strong>{{ isMtx?'Yes':'No' }}</strong></td>
									</tr>
								</tbody>
							</table>
							<div
								id="preview"
								class="col-6 mt-3">

								<div class="card bg-secondary">

									<div
										id="headingOne"
										class="card-header">
										<h5 class="mb-0">
											<a
												href="#"
												class="text-white"
												data-toggle="collapse"
												data-target="#collapseOne"
												aria-expanded="true"
												aria-controls="collapseOne">
												Preview
											</a>
										</h5>
									</div>
									<div
										id="collapseOne"
										class="collapse show  border border-primary bg-dark"
										aria-labelledby="headingOne"
										data-parent="#preview">
										<div class="ql-editor">
											<div
												class="card-body"
												style="max-width:1066px;"
												v-html="hideoutDescription"/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						v-if="!error && getHideoutDoodads && !contestRulesBroken"
						class="form-row justify-content-center mt-5">
						<div class="col-12">
							<h3 class="text-white bg-dark pl-3 pb-1  border-left border-primary">
								Submit
							</h3>
						</div>
						<div class="col-6 ml-auto">
							<vue-recaptcha
								ref="recaptcha"
								size="invisible"
								sitekey="6Lce9oEUAAAAAArGCOuyLXTSjFGarewlLYCN9E_e"
								@verify="onCaptchaVerified"
								@expired="onCaptchaExpired"/>

							<button
								:disabled="status==='submitting' || !!error || !getHideoutDoodads || contestRulesBroken"
								type="submit"
								class="btn btn-primary">Submit</button>
						</div>
					</div>
				</form>
			</card-layout>
		</div>
	</div>
</template>
<script>
import CardLayout from '~/components/CardLayout.vue';

import VueRecaptcha from 'vue-recaptcha';

import { mapActions } from 'vuex';
export default {
	components: {
		CardLayout,
		VueRecaptcha
	},
	data () {
		return {
			author: '',
			authorEmail: '',
			nameDescription: '',
			hideoutType: '',
			hideoutFileLink: '',
			hideoutImage: '',
			hideoutDescription: '',
			isCommunityContest: false,
			status: '',
			gallery: '',
			hideoutScreenshot: '',
			hideoutVideo: '',
			hideoutDoodads: [],
			poeVersion: '3.5.1',
			pastebinData: '',
			isImageDefault: false,
			pastebinError: false,
			pastebinProcessing: false,
			pastebinSubmitted: false,
			imageSubmitted: false,
			editorSettings: {
				placeholder: 'Description of the hideout',
				modules: {
					toolbar: [
						[{ 'header': 1 }, { 'header': 2 }], // custom button values
						['bold', 'italic', 'underline', 'strike'], // toggled buttons
						['blockquote', 'code-block'],

						[{ 'list': 'ordered' }, { 'list': 'bullet' }],

						[{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown

						[{ 'color': [] }, { 'background': [] }], // dropdown with defaults from theme
						[{ 'align': [] }],

						['link', 'image'],
						['clean'] // remove formatting button
					]
				}
			},
			errorMessage: ''
		};
	},
	computed: {
		error () {
			return this.errors.any();
		},
		masterMaxLevel () {
			if (this.getHideoutDoodads) {
				return this.$mastersObject(this.getHideoutDoodads);
			}
		},
		isMtx () {
			return !!this.masterMaxLevel['mtx'];
		},
		imgueGalleryError () {
			return !!this.errors.items.filter(err => err.field === 'Imgur Gallery').length;
		},
		hideoutCost () {
			return {
				string: this.$favorCost(this.$favorCostNotString(this.getHideoutDoodads)),
				number: this.$favorCostNotString(this.getHideoutDoodads)
			};
		},
		hideoutDescriptionMD () {
			return this.hideoutDescription;
		},
		contestTime () {
			const now = this.$moment.tz(this.$moment(), 'GMT').format();
			const start = this.$moment.tz('2019-02-22', 'GMT').format();
			const end = this.$moment.tz('2019-03-22', 'GMT').format();
			return {
				started: this.$moment(now).isAfter(start),
				ended: this.$moment(now).isAfter(end)
			};
		},
		contestRulesBroken () {
			if (this.isCommunityContest) {
				if (!this.contestTime.started) {
					return true;
				}
				if (this.contestTime.ended) {
					return true;
				}
				if (this.isImageDefault) {
					return true;
				}
				if (this.hideoutCost.number > 5000000 || this.isMtx) {
					return true;
				}
				return false;
			} else {
				return false;
			}
		},
		imgurGallery () {
			// return false;
			// return !!/imgur/g.test(this.hideoutScreenshot) && !/.png|.jpg|.jpeg/g.test(this.hideoutScreenshot);
			return !/.png|.jpg|.jpeg/g.test(this.hideoutImage);
		},
		renderedDescription () {
			return this.$md.render(this.hideoutDescription).replace(/<img/gi, '<img class="img-fluid"');
		},
		displayedImage () {
			return this.hideoutImage;
		},
		getHideoutDoodads () {
			if (this.pastebinData) {
				return this.$getDoodadsFromHideout(this.$store.state.doodads, this.pastebinData['Doodads']);
			}
		},
		hideoutOptions () {
			return this.$store.state.hideouts;
		}
	},
	methods: {
		getHideout (hash) {
			return this.$store.getters.getHideout(hash)['Name'];
		},
		strip (html) {
			var doc = new DOMParser().parseFromString(html, 'text/html');
			return doc.body.textContent || '';
		},
		onEditorChange ({ editor, html, text }) {
			this.hideoutDescription = html;
		},
		submitHideout () {
			this.$refs.recaptcha.execute();
		},
		async getThumbnailFromGallery () {
			if (this.gallery && /imgur.com\/a/.test(this.gallery)) {
				const hideoutGallery = this.gallery.replace(/https:\/\/imgur.com\/a\/([a-zA-Z0-9]*)/gi, '$1');
				const imgurGalleryPhotos = await this.$axios.$get(`/imgur/3/album/${hideoutGallery}/images`);
				this.hideoutScreenshot = imgurGalleryPhotos.data[0].link;
				this.resolveThumbnail();
			}
		},
		async resolveThumbnail (defaultImage = false) {
			this.isImageDefault = defaultImage;
			if (this.hideoutScreenshot) {
				this.imageSubmitted = true;
				this.hideoutImage = this.hideoutScreenshot;
			}
			if (this.pastebinData && defaultImage) {
				this.hideoutImage = this.hideoutOptions.filter(hide => parseInt(hide['Hash']) === this.hideoutType)[0]['Icon'] || '';
			}
		},
		async onCaptchaVerified () {
			if (!this.error && !this.pastebinError && !this.contestRulesBroken) {
				this.status = 'submitting';
				this.$refs.recaptcha.reset();
				try {
					const newHideout = this.$hideoutObject({
						author: this.$store.getters['auth/username'] || this.author,
						authorEmail: this.authorEmail,
						nameDescription: this.nameDescription,
						hideoutType: this.hideoutType,
						isCommunityContest: this.isCommunityContest,
						hideoutFileLink: this.hideoutFileLink,
						hideoutDescription: this.hideoutDescription,
						hideoutScreenshot: this.hideoutImage,
						hideoutVideo: this.hideoutVideo,
						hideoutDoodads: this.getHideoutDoodads,
						gallery: this.gallery,
						decorationsCost: this.$favorCostNotString(this.getHideoutDoodads),
						uniqueDecorations: this.getHideoutDoodads.length,
						dateSubmitted: this.$moment().toDate(),
						hideoutMasters: this.masterMaxLevel,
						user: this.$store.state.auth.user || null,
						poeVersion: this.poeVersion
					});
					// await hideoutRef.set(newHideout);
					await this.$axios.post(`/api/hideouts/`, newHideout);
					this.status = '';
					if (this.$store.getters['auth/username']) {
						this.updateUserHideouts();
					}
					if (this.isCommunityContest) {
						this.$router.push('/contest');
					} else {
						this.$router.push('/');
					}
				} catch (e) {
					console.log(e);
				}
			} else {
				this.errorMessage = 'Cannot submit hideout until errors are resolved';
			}
		},
		clearPastebin () {
			this.hideoutType = '';
			this.pastebinData = '';
			this.hideoutFileLink = '';
			this.pastebinSubmitted = false;
			this.pastebinError = false;
		},
		clearImage () {
			this.hideoutScreenshot = '';
			this.hideoutImage = '';
			this.imageSubmitted = false;
		},
		async resolvePastebin () {
			const pastebin = this.hideoutFileLink;
			this.pastebinError = false;
			if (/https:\/\/pastebin.com\//gi.test(pastebin)) {
				this.pastebinProcessing = true;
				const rawPastebin = pastebin.replace(/https:\/\/pastebin.com\//gi, '/raw/');
				try {
					this.errorMessage = '';
					const data = await this.$axios.$get(rawPastebin);
					const pastebinObject = this.$parseHideoutFile(data);
					if (pastebinObject['Hideout Hash']) {
						this.hideoutType = parseInt(pastebinObject['Hideout Hash']);
						this.pastebinData = this.$parseHideoutFile(data);
						this.pastebinProcessing = false;
						this.pastebinSubmitted = true;
					} else {
						this.errorMessage = 'Not a valid hideout file';
						this.pastebinError = true;
						this.pastebinProcessing = false;
					}
				} catch (e) {
					this.pastebinProcessing = false;
					this.pastebinError = true;
					return e;
				}
			} else {
				this.pastebinProcessing = false;
				this.pastebinError = true;
				this.errorMessage = 'Not a pastebin link';
			}
		},
		onCaptchaExpired () {
			this.$refs.recaptcha.reset();
		},
		...mapActions({
			updateUserHideouts: 'auth/updateUserHideouts'
		})
	},
	head () {
		return {
			script: [
				{ type: 'text/javascript', src: 'https://www.google.com/recaptcha/api.js', body: true }
			]
		};
	}
};
</script>
