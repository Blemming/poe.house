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
						<div class="form-group col-md-12 ">
							<h3 class="text-white bg-dark pl-3 pb-1  border-left border-primary">About</h3>
						</div>
						<div class="form-group col-md-10 ml-auto">
							<label for="Title">Title</label>
							<input
								v-validate="{required:true,max:150}"
								id="nameDescription"
								v-model="hideout.nameDescription"
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
											:content="hideout.hideoutDescription"
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
								v-model="hideout.author"
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
								v-model="hideout.authorEmail"
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
									v-model="hideout.hideoutFileLink"
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
									v-if="hideout.gallery && !errors.first('Imgur Gallery')"
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
									v-model="hideout.gallery"
									name="Imgur Gallery"
									type="text"
									class="form-control"
									placeholder="Link to imgur gallery">

								<div
									v-if="hideout.gallery && !errors.first('Imgur Gallery')"
									class="input-group-append">
									<a
										href="#"
										class="btn btn-danger"
										@click.prevent="hideout.gallery=''">
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
										:class="`btn btn-primary  ${(!pastebinSubmitted || !hideout.gallery|| imgueGalleryError)?'disabled':''}`"
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
									v-model="hideout.hideoutScreenshot"
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
								v-model="hideout.hideoutVideo"
								name="videoLink"
								type="text"
								class="form-control"
								placeholder="Link to youtube url">
							<span
								v-if="errors.first('videoLink')"
								class="badge badge-danger">{{ errors.first('videoLink') }}</span>
						</div>
					</div>
					<!--
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
					</div> -->
					<!-- <div
						class="form-group">
						<label for="inputDescription">Description</label>
						<div class="row">
							<div class="col-12">

								<no-ssr>
									<div
										v-validate="'required'"
										v-quill:myQuillEditor="editorSettings"
										ref="markdownEditor"
										:content="textDescription"
										class="w-100 bg-dark text-white"
										style="height:200px;"
										name="description"
										required
										@change="onEditorChange($event)"/>

								</no-ssr>
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
											style="max-width:1066px;">

											<div class="ql-editor">
												<div
													v-html="textDescription"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div> -->
					<!-- <div class="form-row ">
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
					</div> -->

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
								<h4 class="text-white text-capitalize">{{ hideout.nameDescription }}</h4>
							</div>
							<table
								class="table table-sm table-striped table-dark bg-secondary text-primary ">

								<tbody>
									<tr>
										<th scope="row">Type</th>
										<td class="text-white"><strong>{{ getHideout(hideout.hideoutType) }}</strong></td>
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
										<td class="text-white"><strong>{{ hideout.isMtx?'Yes':'No' }}</strong></td>
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
												v-html="hideout.hideoutDescription"/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						v-if="!error && getHideoutDoodads "
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
								:disabled="status==='submitting' || !!error || !getHideoutDoodads "
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
			if (hideout.user) {
				if (hideout.user.username === context.store.getters['auth/username'] || context.store.getters['auth/role'] === 'Administrator') {
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
			textDescription: '',
			imageSubmitted: true,
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

		hideoutCost () {
			return {
				string: this.$favorCost(this.$favorCostNotString(this.getHideoutDoodads)),
				number: this.$favorCostNotString(this.getHideoutDoodads)
			};
		},
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
	mounted () {
		this.textDescription = this.hideout.hideoutDescription;
	},
	methods: {

		getHideout (hash) {
			return this.$store.getters.getHideout(hash)['Name'];
		},
		strip (html) {
			var doc = new DOMParser().parseFromString(html, 'text/html');
			return doc.body.textContent || '';
		},
		submitHideout () {
			this.$refs.recaptcha.execute();
		},
		onEditorChange ({ editor, html, text }) {
			this.textDescription = html;
		},
		resolveThumbnail (defaultImage = false) {
			if (this.hideoutImage) {
				this.imageSubmitted = true;
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
				let user = this.$store.state.auth.user;
				if (this.$store.state.auth.user.role.name === 'Administrator') {
					user = this.hideout.user;
				}
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
						hideoutDescription: this.textDescription,
						hideoutScreenshot: this.hideoutImage,
						hideoutVideo: this.hideout.hideoutVideo,
						decorationsCost: this.$favorCostNotString(this.getHideoutDoodads),
						uniqueDecorations: this.getHideoutDoodads.length,
						dateSubmitted: this.hideout.dateSubmitted,
						hideoutDoodads: this.getHideoutDoodads,
						gallery: this.hideout.gallery,
						hideoutMasters: this.masterMaxLevel,
						user: user || null
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
