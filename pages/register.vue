<template>
	<section class="container">
		<div class="col-md-6 offset-md-3 mt-3">
			<card-layout title="Register">
				<form
					autocomplete="off"
					@submit.stop.prevent="handleSubmit">
					<div class="form-group">
						<label for="username">Username</label>
						<input
							id="username"
							v-model="username"
							class="form-control"
							type="username"
							autofocus="true"
							placeholder="Enter your username"
							required>
					</div>
					<div class="form-group">
						<label for="email">Email</label>
						<input
							id="email"
							v-model="email"
							class="form-control"
							type="email"
							autofocus="true"
							placeholder="Enter your email"
							required>
						<small
							id="emailHelp"
							class="form-text text-muted">We'll never share your email with anyone else.</small>
					</div>
					<div class="form-group">
						<label for="password">Password</label>
						<input
							id="password"
							v-model="password"
							label="password"
							type="password"
							class="form-control"
							autofocus="true"
							placeholder="Enter your password"
							required>
					</div>
					<div class="form-group">
						<label for="password">Confirm Password</label>
						<input
							id="rePassword"
							v-model="rePassword"
							label="rePassword"
							type="password"
							class="form-control"
							autofocus="true"
							placeholder="Retype your password"
							required>
						<div
							class="mt-3"
							style="height:50px">
							<small
								v-if="noPasswordMatchError"
								id="passwordHelp"
								class="form-text text-center text-danger m-0">{{ noPasswordMatchError }}</small>
						</div>
					</div>
					<button
						:disabled="loading"
						type="submit"
						class="btn btn-primary btn-block mt-3">Submit</button>
					<p class="text-center mt-3">
						Already have an account?
						<router-link
							to="/user/login"
							tag="a">
							Login
						</router-link>
					</p>
				</form>
			</card-layout>
		</div>
	</section>
</template>

<script>
import CardLayout from '~/components/CardLayout.vue';
import { mapActions } from 'vuex';

export default {
	components: {
		CardLayout
	},
	data () {
		return {
			email: '',
			password: '',
			username: '',
			rePassword: '',
			error: '',
			loading: false
		};
	},
	computed: {
		isError () {
			return !!this.error || !!this.noPasswordMatchError;
		},
		passwordsMatch () {
			return this.password === this.rePassword;
		},
		noPasswordMatchError () {
			if (!this.passwordsMatch) {
				return 'Password does not match';
			} else {
				return '';
			}
		}
	},
	methods: {
		async handleSubmit () {
			try {
				if (this.passwordsMatch) {
					this.loading = true;
					await this.registerUser({ username: this.username, email: this.email, password: this.password });
					this.loading = false;
				}
			} catch (err) {
				this.loading = false;
				alert(err.message || 'An error occurred.');
			}
		},
		...mapActions({
			registerUser: 'auth/registerUser'
		})
	}
};
</script>
