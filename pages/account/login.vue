<template>
	<div class=" text-primary">
		<div class="row justify-content-center">
			<div class="col-6 text-center ">
				<h1 class="display-3">Poe.house login</h1>
				<h2 class="lead">Login to add hideout</h2>
			</div>
		</div>
		<div class="row justify-content-center">
			<div class="col-6 ">
				<form @submit.prevent="login">
					<div class="form-group">
						<label>Email</label>
						<div class="control">
							<input
								:class="{ 'danger': invalidEmail }"
								v-model="email"
								class="form-control"
								type="email"
								placeholder="Account Email">
						</div>
						<p
							v-if="invalidEmail"
							class="bg-danger text-white">This email is invalid</p>
					</div>

					<div class="form-group">
						<label>Password</label>
						<div class="control">
							<input
								:class="{ 'danger': invalidPassword }"
								v-model="password"
								class="form-control"
								type="password"
								placeholder="Password">
						</div>
						<p
							v-if="invalidPassword"
							class="bg-danger text-white">This password is invalid</p>
					</div>

					<div class="form-group">
						<div
							v-if="formError.length > 0"
							class="flash flash-error"
							v-text="formError"/>
					</div>

					<div class="form-row justify-content-between">
						<div class="col text-center">
							<button
								type="submit"
								class="btn btn-primary">Log In</button>
						</div>
						<div class="col text-center">
							<button
								type="submit"
								class="btn btn-primary">Register</button>

						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			email: '',
			password: '',
			formError: ''
		};
	},
	computed: {
		invalidEmail () {
			return !this.email.includes('@');
		},
		invalidPassword () {
			return !this.password.length > 6;
		}
	},
	methods: {
		resetForm () {
			this.email = '';
			this.password = '';
		},
		login () {
			this.formError = '';
			this.$store.dispatch('userLogin', {
				email: this.email,
				password: this.password
			})
				.then(() => {
					this.email = '';
					this.password = '';
					this.$router.push('/');
				})
				.catch((error) => {
					this.formError = error.message;
				});
		}
	}
};
</script>
