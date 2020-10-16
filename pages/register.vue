<template>
	<section class="container">
		<div class="col-md-6 offset-md-3 mt-3">
			<card-layout title="Register">
				<form
					v-if="!registered"
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
						<small
							v-if="isError"
							id="passwordHelp"
							class="form-text text-center text-danger">{{ error }}</small>
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
						<small
							v-if="isError"
							id="passwordHelp"
							class="form-text text-center text-danger">{{ error }}</small>
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
						<small
							v-if="isError"
							id="passwordHelp"
							class="form-text text-center text-danger">{{ error }}</small>
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
							to="/login"
							tag="a">
							Login
						</router-link>
					</p>
				</form>
				<div v-else>
					<h4>Account not confirmed, check your email to confirm account. </h4>
					<p>If it does not show up check the spam folder. If after 24 hours you still have not received the confirmation email contact
						<a
							class="text-white"
							href="mailto:support@poe.house">support@poe.house</a> with your registered email.
					</p>
				</div>
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
			registered: false || !!this.$store.getters['auth/username'],
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
					this.registered = true;
				}
			} catch (err) {
				this.loading = false;
				console.log(err);
				this.error = err;
			}
		},
		...mapActions({
			registerUser: 'auth/registerUser'
		})
	}
};
</script>
