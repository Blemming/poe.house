<template>
	<div class=" text-primary">
		<div class="row py-5 justify-content-center">
			<div class="col-8">
				<div class="card text-primary bg-secondary border border-primary">
					<div class="card-header">
						<h2 class="display-4">Login to add hideout</h2>
					</div>
					<div class="card-body">
						<form @submit.prevent="login">
							<div class="form-group">
								<label>Email</label>
								<div class="control">
									<input
										:class="{ 'danger': invalidEmail }"
										v-model="email"
										class="form-control"
										type="email"
										required
										placeholder="Account Email">
								</div>
								<p
									v-if="invalidEmail"
									class="text-danger">This email is invalid</p>
							</div>

							<div class="form-group">
								<label>Password</label>
								<div class="control">
									<input
										:class="{ 'danger': invalidPassword }"
										v-model="password"
										class="form-control"
										type="password"
										required
										placeholder="Password">
								</div>
								<p
									v-if="invalidPassword"
									class="text-danger">This password is invalid</p>
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
									<nuxt-link
										to="/account/register"
										type="submit"
										class="btn btn-primary">Register</nuxt-link>
								</div>
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
