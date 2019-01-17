<style lang="scss">
.hideout-card {
  position: relative;
  .card-header {
    z-index: 3;
    top: 0px;
    left: 0px;
    height: 80px;
    width: 100%;
    position: absolute;
    background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    border-bottom: 0px;
  }
  .image-container {
    z-index: 1;
    position: relative;
    .card-subheader {
      bottom: 0px;
      text-align: center;
      width: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
      position: absolute;
      h3{
          padding-top:40px;
  text-shadow:
   -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
     1px 1px 0 #000;
      }
    }
  }
}
</style>

<template>
	<div
		style="height:655px;"
		class="card hideout-card bg-secondary">
		<div class="card-header text-white"/>
		<div
			class="image-container">
			<div
				style="height:272px;"
				class="card-img-top bg-dark d-flex justify-content-center"
				alt="Card image cap">
				<i class="text-secondary align-self-center fas fa-cog fa-spin fa-4x"/>
			</div>
			<div class="card-subheader">
				<h4 class="text-white text-capitalize"/>
			</div>
		</div>

		<div class="card-body">
			<div class="row">
				<div
					class="col-12">
					<table
						class="table table-sm table-striped table-dark bg-secondary text-primary "/>

				</div>
			</div>
			<div class="row justify-content-between">
				<div class="col-6 col-md-4 col-lg3"/>
				<div class="col-6 col-md-4 col-lg3 text-right"/>
			</div>
		</div>
		<div class="card-footer">
			<div class="row justify-content-between">
				<div class="col">
					<small class="text-muted "/>
				</div>
				<div class="col text-right">
					<small class="text-muted "/>
					<span
						class="text-muted "
					/>
				</div>

			</div>
		</div>
	</div>
</template>
<script>
export default {

};
</script>
