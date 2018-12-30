<style lang="scss">
.modal-dialog, .modal-header{
    border-radius:0px!important;
}
</style>

<template>
	<div class="row py-5">
		<div class="col-12">
			<card-layout
				title="Add Hideout">
				<form @submit.prevent="submitHideout()">
					<div class="form-row">
						<div class="form-group col-md-6">
							<label for="inputTitle">Title</label>
							<input
								v-validate="'required|max:150'"
								id="inputTitle"
								v-model="hideout.nameDescription"
								name="title"
								required
								type="input"
								class="form-control"
								placeholder="Title">
						</div>
						<div class="form-group col-md-6">
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
									v-model="hideout.hideoutFileLink"
									:disabled="pastebinSubmitted"
									name="Pastebin Link"
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
										:class="`btn btn-primary ${(!hideout.hideoutFileLink)?'disabled':''}`"
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
						</div>

						<div class="form-group col-md-12">
							<h4
								class="text-white"
								for="inputHideout">Thumbnail</h4><br>
							<img
								v-if="imageSubmitted"
								id="inputHideout"
								:src="displayedImage"
								class="img-fluid"
								alt="">
						</div>

						<div class="form-group col-md-6">
							<label for="inputScreenshot">Thumbnail link <small>(Direct link to image)</small></label>

							<div class="input-group">
								<div
									v-if="!imageSubmitted"
									class="input-group-prepend">
									<a
										:class="`btn btn-primary  ${(!pastebinSubmitted)?'disabled':''}`"
										href="#"
										@click.prevent="resolveThumbnail(true)">
										<span>
											Use default Image
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
									v-model="hideoutImage"
									:placeholder="(pastebinSubmitted)?'Link to image url':'Submit Pastebin first'"
									name="Thumbnail link"
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
							</div>
						</div>
					</div>
					<div
						class="form-group">
						<label for="inputDescription">Description</label>
						<div class="row">
							<div class="col-12">
								<textarea
									v-validate="'required|max:1550'"
									id="inputDescription"
									ref="markdownEditor"
									v-model="hideout.hideoutDescription"
									style="min-height:300px"
									class="w-100 bg-dark text-white"
									name="description"
									required
									placeholder="Description of the hideout, you can use markdown to make it look good."/>
							</div>

							<div
								id="preview"
								class="col-12">

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
										class="collapse show"
										aria-labelledby="headingOne"
										data-parent="#preview">
										<div
											class="card-body"
											v-html="renderedDescription"/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="form-row ">
						<div class="form-group col-md-6">
							<label for="inputVideo">Imgur Gallery</label>
							<input
								v-validate="'url:require_protocol'"
								id="inputGallery"
								v-model="hideout.gallery"
								name="Imgur Gallery"
								type="text"
								class="form-control"
								placeholder="Link to imgur gallery">
						</div>

						<div class="form-group col-md-6">
							<label for="inputVideo">Video link</label>
							<input
								v-validate="'url:require_protocol'"
								id="inputVideo"
								v-model="hideout.hideoutVideo"
								name="Video link"
								type="text"
								class="form-control"
								placeholder="Link to youtube url">
						</div>
						<div class="form-group col-md-12">
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

							<vue-recaptcha
								ref="recaptcha"
								size="invisible"
								sitekey="6Lce9oEUAAAAAArGCOuyLXTSjFGarewlLYCN9E_e"
								@verify="onCaptchaVerified"
								@expired="onCaptchaExpired"/>

							<button
								:disabled="status==='submitting' || !!error || !getHideoutDoodads"
								type="submit"
								class="btn btn-primary">Edit</button>
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
export default {
	async asyncData (context) {
		try {
			const hideouts = await context.app.$axios.$get(`/api/hideouts?hideoutId=${context.params.id}`);
			const hideout = hideouts[0];
			hideout.hideoutDescription = hideout.hideoutDescription.replace(/<\/?[^>]+(>|$)/g, '');
			if (hideout.user) {
				if (hideout.user.username === context.store.getters['auth/username']) {
					return {
						hideout,
						hideoutImage: hideout.hideoutScreenshot || context.store.getters.getHideout(hideout.hideoutType)['Icon'],
						pastebinData: hideout.hideoutDoodads
					};
				} else {
					context.error({ statusCode: 403, message: 'You are not the author of this hideout' });
				}
			} else {
				context.error({ statusCode: 403, message: 'You are not the author of this hideout' });
			}
		} catch (e) {
			context.error({ statusCode: 404, message: e.message });
		}
	},
	middleware: 'auth',
	components: {
		CardLayout,
		VueRecaptcha
	},
	data () {
		return {
			status: '',
			poeVersion: '3.5.1',
			pastebinData: '',
			pastebinError: false,
			pastebinProcessing: false,
			pastebinSubmitted: true,
			imageSubmitted: true,
			errorMessage: ''
		};
	},
	computed: {
		error () {
			return !!this.errors.items.length > 0;
		},
		masterMaxLevel () {
			if (this.getHideoutDoodads) {
				return this.$mastersObject(this.getHideoutDoodads);
			}
		},
		hideoutDescriptionMD () {
			return this.hideoutDescription;
		},
		imgurGallery () {
			// return false;
			// return !!/imgur/g.test(this.hideoutScreenshot) && !/.png|.jpg|.jpeg/g.test(this.hideoutScreenshot);
			return !/.png|.jpg|.jpeg/g.test(this.hideoutImage);
		},
		renderedDescription () {
			return this.$md.render(this.hideout.hideoutDescription).replace(/<img/gi, '<img class="img-fluid"');
		},
		displayedImage () {
			return this.hideoutImage;
		},
		getHideoutDoodads () {
			if (this.pastebinData['Doodads']) {
				return this.$getDoodadsFromHideout(this.$store.state.doodads, this.pastebinData['Doodads']);
			}
			if (this.pastebinData) {
				// return 'noooo';
				return this.$getDoodadsFromHideout(this.$store.state.doodads, this.pastebinData);
			}
		},
		hideoutOptions () {
			return this.$store.state.hideouts;
		}
	},
	methods: {
		submitHideout () {
			this.$refs.recaptcha.execute();
		},

		async resolveThumbnail (defaultImage = false) {
			if (this.hideoutImage) {
				this.imageSubmitted = true;
				this.hideoutImage = this.hideoutScreenshot;
			}
			if (this.pastebinData && defaultImage) {
				this.hideoutImage = this.hideoutOptions.filter(hide => parseInt(hide['Hash']) === this.hideout.hideoutType)[0]['Icon'] || '';
				this.imageSubmitted = true;
			}
		},
		async onCaptchaVerified () {
			if (!this.error && !this.pastebinError) {
				this.status = 'submitting';
				this.$refs.recaptcha.reset();
				try {
					const newHideout = this.$hideoutObject({
						author: this.hideout.author,
						downloads: this.hideout.downloads,
						views: this.hideout.views,
						hideoutId: this.hideout.hideoutId,
						hideoutDateSubmit: this.hideout.hideoutDateSubmit,
						authorEmail: this.hideout.authorEmail,
						nameDescription: this.hideout.nameDescription,
						hideoutType: this.hideout.hideoutType,
						hideoutFileLink: this.hideout.hideoutFileLink,
						hideoutDescription: this.renderedDescription,
						hideoutScreenshot: this.hideoutImage,
						hideoutVideo: this.hideoutVideo,
						hideoutDoodads: this.getHideoutDoodads,
						gallery: this.gallery,
						hideoutMasters: this.masterMaxLevel,
						user: this.$store.state.auth.user || null,
						poeVersion: this.poeVersion
					});
					await this.$axios.put(`/api/hideouts/${this.hideout._id}`, newHideout);
					this.status = '';
					this.$router.push('/');
				} catch (e) {
					alert(e);
				}
			} else {
				this.errorMessage = 'Cannot submit hideout until errors are resolved';
			}
		},
		clearPastebin () {
			this.hideout.hideoutType = '';
			this.pastebinData = '';
			this.hideout.hideoutFileLink = '';
			this.pastebinSubmitted = false;
			this.pastebinError = false;
		},
		clearImage () {
			this.hideoutImage = '';
			this.imageSubmitted = false;
		},
		async resolvePastebin () {
			const pastebin = this.hideout.hideoutFileLink;
			this.pastebinError = false;
			if (/https:\/\/pastebin.com\//gi.test(pastebin)) {
				this.pastebinProcessing = true;
				const rawPastebin = pastebin.replace(/https:\/\/pastebin.com\//gi, '/raw/');
				try {
					this.errorMessage = '';
					const { data } = await this.$axios.get(rawPastebin);
					const pastebinObject = this.$parseHideoutFile(data);
					if (pastebinObject['Hideout Hash']) {
						this.hideout.hideoutType = parseInt(pastebinObject['Hideout Hash']);
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
		}
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
