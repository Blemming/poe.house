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
									id="inputTitle"
									v-model="nameDescription"
									required
									type="input"
									class="form-control"
									placeholder="Title">
							</div>
						</div>
						<div class="form-group">
							<label for="inputDescription">Description</label>
							<textarea
								id="inputDescription"
								v-model="hideoutDescription"
								required
								type="textarea"
								class="form-control"
								placeholder="Description of the hideout, you can use markdown to make it look good."/>
						</div>
						<div class="form-row justify-content-between">
							<div class="form-group col-md-6">
								<label for="inputVideo">Video link</label>
								<input
									id="inputVideo"
									v-model="hideoutVideo"
									type="text"
									class="form-control"
									placeholder="Link to youtube url">
							</div>
							<div class="form-group col-md-6">
								<label for="inputScreenshot">Screenshot link</label>
								<input
									id="inputScreenshot"
									v-model="hideoutScreenshot"
									type="text"
									placeholder="Link to image url"
									class="form-control">
							</div>
							<div class="form-group col-md-4">
								<label for="inputState">Hideout</label>
								<select
									id="inputState"
									v-model="hideoutType"
									required
									class="form-control">
									<option
										value=""
										selected>Choose...</option>
									<option
										v-for="hideout in hideoutOptions"
										:value="hideout.Hash"
										:key="hideout.Hash">{{ hideout.Name }}</option>
								</select>
							</div>
							<div class="form-group col-md-6">
								<label for="inputPastebin">Pastebin link</label>
								<input
									id="inputPastebin"
									v-model="hideoutFileLink"
									type="text"
									placeholder="Link to pastebin"
									class="form-control">
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
import firebase from 'firebase/app';
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
			hideoutDateSubmit: 12132018,
			poeVersion: '3.5.1',
			errorMessage: ''
		};
	},
	computed: {
		error () {
			return !!this.errorMessage;
		},
		hideoutDescriptionMD () {
			return this.hideoutDescription;
		},
		hideoutOptions () {
			return this.$store.state.hideouts;
		}
	},
	methods: {
		async submitHideout () {
			const hideoutRef = this.$fireStore.collection('hideouts').doc();
			try {
				await hideoutRef.set(this.$hideoutObject({
					author: this.author,
					nameDescription: this.nameDescription,
					hideoutType: this.hideoutType,
					hideoutFileLink: this.hideoutFileLink,
					hideoutDescription: this.hideoutDescription,
					hideoutScreenshot: this.hideoutScreenshot,
					hideoutVideo: this.hideoutVideo,
					hideoutDoodads: this.hideoutDoodads,
					hideoutDateSubmit: firebase.firestore.FieldValue.serverTimestamp(),
					poeVersion: this.poeVersion
				}));
			} catch (e) {
				alert(e);
				return;
			}
			alert('Success.');
		}
	}
};
</script>
