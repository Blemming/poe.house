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
								<input
									id="inputPastebin"
									v-model="hideoutFileLink"
									type="text"
									placeholder="Link to pastebin"
									class="form-control"
									@change="resolvePastebin()">
							</div>
						</div>
						<div class="form-group">
							<label for="inputDescription">Description</label>
							<textarea
								v-validate="'required|max:550'"
								id="inputDescription"
								v-model="hideoutDescription"
								name="description"
								required
								type="textarea"
								class="form-control"
								placeholder="Description of the hideout, you can use markdown to make it look good."/>
						</div>
						<div class="form-row justify-content-between">
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
							<div class="form-group col-md-6">
								<label for="inputScreenshot">Screenshot link</label>
								<input
									v-validate="'url:require_protocol'"
									id="inputScreenshot"
									v-model="hideoutScreenshot"
									name="Screenshot link"
									type="text"
									placeholder="Link to image url"
									class="form-control">
							</div>
							<div class="form-group col-md-4">
								<label for="inputHideout">Hideout</label>
								<img
									id="inputHideout"
									:src="hideoutImage"
									alt="">
							</div>
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
										Doodads +
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
								<!-- <pre class="text-primary">
                                    <code>
                                        {{ pastebinData }}
                                    </code>
								</pre> -->
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
						<div class="form-row">
							<div class="form-group col-md-6">
								<label for="inputAuthor">Author</label>
								<input
									id="inputAuthor"
									type="text"
									class="form-control"
									placeholder="Author name">
							</div>
						</div>
						<div
							v-if="error"
							class="row">
							<div class="col-12">
								<span
									v-for="error in errors.items"
									:key="error.id"
									class="badge badge-danger">{{ error.msg }}</span>
							</div>
							<div class="col-12">
								<span
									v-if="errorMessage"
									class="badge badge-danger">{{ errorMessage }}</span>
							</div>
						</div>
						<div class="form-row justify-content-between my-3">
							<div class="col">
								<button
									type="submit"
									class="btn btn-primary">Submit</button>
							</div>
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
											v-html="$md.render(hideoutDescriptionMD)"/>
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
export default {
	data () {
		return {
			author: '',
			nameDescription: '',
			hideoutType: '',
			hideoutFileLink: '',
			hideoutDescription: '',
			hideoutScreenshot: '',
			hideoutVideo: '',
			hideoutDoodads: [],
			poeVersion: '3.5.1',
			pastebinData: '',
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
		hideoutImage () {
			if (this.pastebinData) {
				return this.hideoutScreenshot || this.hideoutOptions.filter(hide => parseInt(hide['Hash']) === this.hideoutType)[0]['Icon'];
			}
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
		async submitHideout () {
			if (!this.error) {
				const hideoutRef = this.$fireStore.collection('hideouts').doc();
				try {
					await hideoutRef.set(this.$hideoutObject({
						author: this.author,
						nameDescription: this.nameDescription,
						hideoutType: this.hideoutType,
						hideoutFileLink: this.hideoutFileLink,
						hideoutDescription: this.hideoutDescription,
						hideoutScreenshot: this.hideoutImage,
						hideoutVideo: this.hideoutVideo,
						hideoutDoodads: this.getHideoutDoodads,
						hideoutMasters: this.masterMaxLevel,
						poeVersion: this.poeVersion
					}));
					this.$route.push('/hideout');
				} catch (e) {
					alert(e);
				}
			} else {
				this.errorMessage = 'Cannot submit hideout until errors are resolved';
			}
		},
		async resolvePastebin () {
			const pastebin = this.hideoutFileLink;
			if (/https:\/\/pastebin.com\//gi.test(pastebin)) {
				const rawPastebin = pastebin.replace(/https:\/\/pastebin.com\//gi, '/raw/');
				try {
					const { data } = await this.$axios.get(rawPastebin);
					const pastebinObject = this.$parseHideoutFile(data);
					this.hideoutType = parseInt(pastebinObject['Hideout Hash']);
					this.pastebinData = this.$parseHideoutFile(data);
				} catch (e) {
					return e;
				}
			} else {
				this.pastebinData = 'Not a pastebin link';
			}
		}
	}
};
</script>
