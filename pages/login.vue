<template>
	<section class="container">
		<div class="col-md-6 offset-md-3 mt-3">
			<card-layout title="Log in">
				<form
					autocomplete="off"
					@submit.stop.prevent="handleSubmit">
					<div class="form-group">
						<label for="email">Email</label>
						<input
							id="email"
							v-model="email"
							:class="(isError)?'form-control is-invalid':'form-control'"
							type="email"
							autofocus="true"
							placeholder="Enter your email"
							required>
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
							:class="(isError)?'form-control is-invalid':'form-control'"
							label="password"
							type="password"
							autofocus="true"
							placeholder="Enter your password"
							required>
						<small
							v-if="isError"
							id="passwordHelp"
							class="form-text text-center text-danger">{{ error }}</small>
					</div>
					<div
						class="alert alert-success"
						role="alert">
						<small>If you are still encountering confirmation issues. Send an email to <a href="mailto:support@poe.house">support@poe.house</a> with the email you have registered with and I will gladly confirm your email.</small>
					</div>
					<button
						:disabled="loading"
						type="submit"
						class="btn btn-primary btn-block mt-3">Submit</button>
					<p class="text-center mt-3">
						No account yet
						<router-link
							to="/register"
							tag="a">
							Register
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
			loading: false,
			error: ''
		};
	},
	computed: {
		isError () {
			return !!this.error;
		}
	},
	methods: {
		async handleSubmit () {
			try {
				this.loading = true;
				await this.loginUser({ identifier: this.email, password: this.password });
				this.loading = false;
				this.$router.push('/');
			} catch (err) {
				this.loading = false;
				this.error = err.message || 'Incorrect email or password';
			}
		},
		...mapActions({
			loginUser: 'auth/loginUser'
		})
	}
};
</script>
