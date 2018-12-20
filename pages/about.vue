<template>

	<div class="row py-5">
		<div class="col-12">
			<div class="card text-primary bg-secondary border border-primary">
				<div class="card-header border-bottom border-dark text-white text-center">
					<h2 class="display-4">About poe.house</h2>
				</div>
				<div
					class="card-body text-primary text-left"
					v-html="readme"/>
				<div class="card-footer d-flex justify-content-between">
					<a
						class="nav-item text-danger"
						target="_blank"
						href="https://www.patreon.com/join/blemming/checkout?rid=0">
						<i
							style="color:#f96854;"
							class="fab fa-patreon"/>
						Patreon
					</a>
					<a
						class="nav-item text-danger"
						target="_blank"
						href="https://www.paypal.me/bluelemming">
						<i
							class="fas fa-heart"/>
						Paypal Support
					</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import readme from '../README.md';
export default {
	data () {
		return {
			readme
		};
	}
};
</script>
