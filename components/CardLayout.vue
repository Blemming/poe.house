<template>
	<div class="card text-primary bg-secondary border border-primary">
		<div class="card-header border-bottom border-dark text-white text-center">
			<h2 class="display-4">{{ title }}</h2>
		</div>
		<div class="card-body">
			<slot/>
		</div>
		<div class="card-footer d-flex justify-content-between">
			<a
				class="nav-item text-danger"
				target="_blank"
				href="https://www.patreon.com/join/blemming/checkout?rid=0">
				<i
					style="color:#f96854;"
					class="fab fa-patreon"/>
				<small
					style="color:#f96854;">
					Support with Patreon
				</small>
			</a>
			<a
				class="nav-item text-danger"
				target="_blank"
				href="https://www.paypal.me/bluelemming">
				<i
					style="color:#3b7bbf;"
					class="fab fa-paypal"/>
				<small
					style="color:#3b7bbf;">
					Support with Paypal
				</small>
			</a>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		title: {
			default: '',
			type: String
		}
	}
};
</script>
