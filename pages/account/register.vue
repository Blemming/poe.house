<template>
	<div class=" text-primary">
		<div class="row py-5 justify-content-center">
			<div class="col-8">
				<div class="card text-primary bg-secondary border border-primary">
					<div class="card-header">
						<h2 class="display-4">Register to add hideout</h2>
					</div>
					<div class="card-body">
						<form @submit.prevent="signup">
							<div class="form-group">
								<label>Username</label>
								<div class="control">
									<input
										v-model="username"
										required
										class="form-control"
										type="input"
										placeholder="Username">
								</div>
								<p
									v-if="invalidEmail"
									class="help is-danger">This email is invalid</p>
							</div>
							<div class="form-group">
								<label>Email</label>
								<div class="control">
									<input
										v-model="email"
										required
										class="form-control"
										type="email"
										placeholder="New Account Email">
								</div>
								<p
									v-if="invalidEmail"
									class="help is-danger">This email is invalid</p>
							</div>

							<div class="form-group">
								<label>Password</label>
								<div class="control">
									<input
										v-model="password"
										required
										class="form-control"
										type="password"
										placeholder="New Account Password">
								</div>
								<label>Retype Password</label>
								<div class="control">
									<input
										v-model="rePassword"
										required
										class="form-control"
										type="password"
										placeholder="New Account Password">
								</div>
								<p
									v-if="invalidPassword"
									class="help is-danger">This password is invalid</p>
								<p
									v-if="passwordNoMatch"
									class="help is-danger">Your password doesn't match</p>
							</div>

							<div class="form-checkbox">
								<label>
									<input
										type="checkbox"
										name="terms">
									<span>I accept the terms and conditions</span>
								</label>
							</div>

							<div class="form-group">
								<p><nuxt-link to="/account/login">I already have an account</nuxt-link></p>
							</div>

							<div class="form-group">
								<div
									v-if="formError.length > 0"
									class="flash flash-error"
									v-text="formError"/>
							</div>

							<div class="form-actions">
								<button
									type="submit"
									class="btn btn-primary">Sign Up</button>
							</div>
						</form>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>
<script>
export default {

	data () {
		return {
			username: '',
			email: '',
			password: '',
			rePassword: '',
			formError: ''
		};
	},
	computed: {
		invalidEmail () {
			return false; // !this.email.includes('@')
		},
		invalidPassword () {
			return false;// !this.password.length > 12
		},
		passwordNoMatch () {
			return this.password !== this.rePassword;
		}
	},
	methods: {
		signup () {
			this.formError = '';
			if (!this.passwordNoMatch) {
				this.$store.dispatch('createUser', {
					email: this.email,
					username: this.username,
					password: this.password
				})
					.then(() => {
						this.$router.push('/account');
					})
					.catch((error) => {
						console.log(error);
						this.formError = error.message;
					});
			} else {
				this.formError = 'Password doesn\'t match';
			}
		}
	}
};
</script>
