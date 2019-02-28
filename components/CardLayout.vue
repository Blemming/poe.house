<template>
	<div class="card text-primary bg-secondary border border-dark">
		<div class="card-header border-bottom border-dark text-white text-center">
			<h2
				v-if="title === 'PoE.house' ||title === 'Community Hideout Contest' "
				class="main-title display-3 font-cinzel">{{ title }}</h2>
			<h2
				v-else
				class="title display-4 ">{{ title }}</h2>
		</div>
		<div class="card-body p-relative">
			<slot/>
		</div>
		<div class="card-footer d-flex flex-wrap justify-content-between">
			<a
				class="nav-item text-danger"
				target="_blank"
				href="https://www.patreon.com/blemming">
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

			<div class="w-100 d-flex justify-content-end pt-4">
				<small class="text-muted">background image by
					<strong>

						<a
							class="text-muted"
							target="_BLANK"
							href="https://www.artstation.com/refiend">Max Suleimanov</a>
					</strong>
				</small>
			</div>
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
