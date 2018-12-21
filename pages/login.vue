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
							class="form-text text-center text-danger">Email or password incorrect.</small>
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
							class="form-text text-center text-danger">Email or password incorrect.</small>
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
			} catch (err) {
				this.loading = false;
				this.error = 'Incorrect email or password';
				this.$router.push('/');
			}
		},
		...mapActions({
			loginUser: 'auth/loginUser'
		})
	}
};
</script>
