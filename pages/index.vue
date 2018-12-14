<style lang="scss">
</style>

<template>
	<section>
		<div class="row py-5">
			<div class="col-12">
				<div class="card text-primary bg-secondary border border-primary">
					<div
						class="d-flex column align-items-center card-header border-bottom border-dark text-white">
						<div class="col-1">
							<img
								src="https://web.poecdn.com/gen/image/WzAsMSx7ImlkIjo1NzAsInNpemUiOiJhdmF0YXIifV0/0ffbaacdb5/Path_of_Exile_Gallery_Image.jpg"
								alt=""
								class="img-fluid">

						</div>
						<div class="col-8">
							<h3>Bex_GGG's Hideouts Of The Week</h3>
						</div>
						<div class="col-3 align-self-end">
							<small>Post taken from the Path of Exile <a href="https://www.pathofexile.com/forum/view-thread/1169026">website</a></small>
						</div>
					</div>
					<div class="card-body text-primary text-left">
						<div v-html="$store.state.bexPost"/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>

export default {

	components: {
	}
};
</script>
