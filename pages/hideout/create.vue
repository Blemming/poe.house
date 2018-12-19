<style lang="scss">
</style>

<template>

	<div class="row py-5">
		<div class="col-12">

			<div class="card text-primary bg-secondary border border-primary">
				<div class="card-header border-bottom border-dark text-white text-center">
					<h2 class="display-4">Add Hideout</h2>
				</div>
				<div class="card-body text-primary text-left">
					<form @submit.prevent="submitHideout()">
						<div class="form-row">
							<div class="form-group col-md-6">
								<label for="inputTitle">Title</label>
								<input
									v-validate="'required|max:150'"
									id="inputTitle"
									v-model="nameDescription"
									name="title"
									required
									type="input"
									class="form-control"
									placeholder="Title">
							</div>
							<div class="form-group col-md-6">
								<label for="inputPastebin">Pastebin link</label>

								<div class="input-group">
									<input
										v-validate="{ required: true, regex: /https:\/\/pastebin.com\// }"
										id="inputPastebin"
										v-model="hideoutFileLink"
										:disabled="pastebinSubmitted"
										name="Pastebin Link"
										required
										type="text"
										placeholder="Link to pastebin"
										class="form-control">
									<div
										v-if="pastebinSubmitted"
										class="input-group-append">
										<a
											href="#"
											class="btn btn-danger"
											@click.prevent="clearPastebin()">
											<span>
												<i class="fas fa-ban"/>
											</span>
										</a>
									</div>
									<div
										v-else
										class="input-group-append">
										<a
											:class="`btn btn-primary ${(!hideoutFileLink|| error)?'disabled':''}`"
											href="#"
											@click.prevent="resolvePastebin()">
											<span v-if="!pastebinProcessing">
												Process
											</span>
											<span v-else>
												<i class="fas fa-spinner-third fa-spin"/>
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
									<markdown-editor
										v-validate="'required|max:1550'"
										id="inputDescription"
										ref="markdownEditor"
										v-model="hideoutDescription"
										name="description"
										required
										placeholder="Description of the hideout, you can use markdown to make it look good."/>
								</div>
							</div>
						</div>
						<div class="form-row justify-content-between">
							<div class="form-group col-md-6">
								<label for="inputVideo">Imgur Gallery</label>
								<input
									v-validate="'url:require_protocol'"
									id="inputGallery"
									v-model="gallery"
									name="Imgur Gallery"
									type="text"
									class="form-control"
									placeholder="Link to imgur gallery">
							</div>
							<div class="form-group col-md-6">
								<label for="inputScreenshot">Thumbnail link <small>(Direct link to image)</small></label>

								<div class="input-group">
									<div
										class="input-group-prepend">
										<a
											:class="`btn btn-primary  ${(!pastebinSubmitted||error)?'disabled':''}`"
											href="#"
											@click.prevent="resolveThumbnail(true)">
											<span>
												Use default Image
											</span>
										</a>
									</div>
									<input
										v-validate="{ required: true, regex: /^https:\/\/(.*)(.jpg$|.png$)/ }"
										id="inputScreenshot"
										:disabled="!pastebinSubmitted"
										v-model="hideoutScreenshot"
										:placeholder="(pastebinSubmitted)?'Link to image url':'Submit Pastebin first'"
										name="Thumbnail link"
										type="text"
										class="form-control">
									<div
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
								</div>
							</div>

							<div class="form-group col-md-6">
								<label for="inputVideo">Video link</label>
								<input
									v-validate="'url:require_protocol'"
									id="inputVideo"
									v-model="hideoutVideo"
									name="Video link"
									type="text"
									class="form-control"
									placeholder="Link to youtube url">
							</div>
							<div class="w-100"/>
							<div class="form-group col-col-md-6">
								<label for="inputAuthor">Author</label>
								<input
									id="inputAuthor"
									v-model="author"
									type="text"
									class="form-control"
									placeholder="Author name">
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
									class="btn btn-primary">Submit</button>
							</div>
							<div class="form-group col-md-12">
								<h4
									class="text-white"
									for="inputHideout">Thumbnail</h4><br>
								<!-- <div
									v-if="imgurGallery">
									<blockquote
										:data-id="`a/${hideoutImage}`"
										class="imgur-embed-pub"
										lang="en"><a :href="`//imgur.com/${hideoutImage}`"/>
									</blockquote>
									<script
										async
										src="//s.imgur.com/min/embed.js"
										charset="utf-8"/>
								</div> -->
								<img
									v-if="!imgurGallery"
									id="inputHideout"
									:src="displayedImage"
									class="img-fluid"
									alt="">
							</div>

							<!-- <div class="form-group col-md-2">
								<label for="inputState">Path of exile version</label>
								<select
									id="inputState"
									disabled
									class="form-control">
									<option selected>3.5.1</option>
								</select>
							</div> -->
						</div>
						<div class="row">
							<div
								id="preview"
								class="col-12">

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

								<div
									id="collapseOne"
									class="collapse show"
									aria-labelledby="headingOne"
									data-parent="#preview">
									<div class="card bg-secondary">
										<div
											id="headingOne"
											class="card-header"/>
										<div
											class="card-body"
											v-html="renderedDescription"/>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div
								id="doodads"
								class="col-12">
								<h5 class="mb-0">
									<a
										href="#"
										class="text-white"
										data-toggle="collapse"
										data-target="#collapseTwo"
										aria-expanded="true"
										aria-controls="collapseTwo">
										Click to see doodads list
									</a>
								</h5>
								<div
									id="collapseTwo"
									class="collapse"
									aria-labelledby="headingOne"
									data-parent="#doodads">
									<div class="card bg-secondary">
										<table class="table table-bordered table-striped table-dark bg-secondary text-primary ">
											<tbody>
												<tr
													v-for="doodad in getHideoutDoodads"
													:key="doodad['Hash']">
													<th scope="row"><img
														:src="doodad['Icon']"
														alt=""></th>
													<td>{{ doodad['Count'] }}</td>
													<td>{{ doodad['Name'] }}</td>
													<td>{{ doodad['MasterName'] }}</td>
													<td>{{ doodad['MasterLevel'] }}</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<script>

import VueRecaptcha from 'vue-recaptcha';
export default {
	components: {
		VueRecaptcha
	},
	data () {
		return {
			author: '',
			nameDescription: '',
			hideoutType: '',
			hideoutFileLink: '',
			hideoutImage: '',
			hideoutDescription: '',
			status: '',
			gallery: '',
			hideoutScreenshot: '',
			hideoutVideo: '',
			hideoutDoodads: [],
			poeVersion: '3.5.1',
			pastebinData: '',
			pastebinProcessing: false,
			pastebinSubmitted: false,
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
		submitHideout () {
			this.$refs.recaptcha.execute();
		},
		async resolveThumbnail (defaultImage = false) {
			if (this.hideoutScreenshot) {
				try {
					const resultImage = await this.$axios.get(this.hideoutScreenshot);
					console.log(resultImage);
					if (/imgur/gi.test(this.hideoutScreenshot)) {
						this.hideoutImage = this.hideoutScreenshot.replace(/https:\/\/imgur\.com\/a\//gi, '');
					} else {
						this.hideoutImage = this.hideoutScreenshot;
					}
				} catch (e) {
					this.errorMessage = 'The image you submitted is not valid, default hideout image used';
					this.hideoutImage = this.hideoutOptions.filter(hide => parseInt(hide['Hash']) === this.hideoutType)[0]['Icon'] || '';
				}
			}
			if (this.pastebinData && defaultImage) {
				this.hideoutImage = this.hideoutOptions.filter(hide => parseInt(hide['Hash']) === this.hideoutType)[0]['Icon'] || '';
			}
		},
		async onCaptchaVerified () {
			if (!this.error) {
				this.status = 'submitting';
				this.$refs.recaptcha.reset();
				try {
					// const hideoutRef = this.$fireStore.collection('hideouts').doc();
					// const newID = hideoutRef.id;
					const newHideout = this.$hideoutObject({
						author: this.author,
						nameDescription: this.nameDescription,
						hideoutType: this.hideoutType,
						hideoutFileLink: this.hideoutFileLink,
						hideoutDescription: this.renderedDescription,
						hideoutScreenshot: this.hideoutImage,
						hideoutVideo: this.hideoutVideo,
						hideoutDoodads: this.getHideoutDoodads,
						gallery: this.gallery,
						hideoutMasters: this.masterMaxLevel,
						poeVersion: this.poeVersion
					});
					// await hideoutRef.set(newHideout);
					await this.$axios.post(`/api/hideouts/`, newHideout);
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
			this.hideoutType = '';
			this.pastebinData = '';
			this.hideoutFileLink = '';
			this.pastebinSubmitted = false;
		},
		async resolvePastebin () {
			const pastebin = this.hideoutFileLink;
			if (/https:\/\/pastebin.com\//gi.test(pastebin)) {
				this.pastebinProcessing = true;
				const rawPastebin = pastebin.replace(/https:\/\/pastebin.com\//gi, '/raw/');
				try {
					this.errorMessage = '';
					const { data } = await this.$axios.get(rawPastebin);
					const pastebinObject = this.$parseHideoutFile(data);
					if (pastebinObject['Hideout Hash']) {
						this.hideoutType = parseInt(pastebinObject['Hideout Hash']);
						this.pastebinData = this.$parseHideoutFile(data);
						this.pastebinProcessing = false;
						this.pastebinSubmitted = true;
					} else {
						this.errorMessage = 'Not a valid hideout file';
						this.pastebinProcessing = false;
					}
				} catch (e) {
					this.pastebinProcessing = false;
					return e;
				}
			} else {
				this.pastebinData = 'Not a pastebin link';
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
