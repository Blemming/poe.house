<template>
	<div class="col form-group">
		<label for="inputState">{{ label }}</label>
		<select
			id="inputState"
			v-model="hideoutType"
			class="form-control custom-select border-primary text-primary">
			<option
				value=""
				selected>All</option>
			<option
				v-for="hideout in hideouts"
				:value="hideout['Hash']"
				:key="hideout['Hash']">{{ hideout['Name'] }}</option>
		</select>
	</div>
</template>
<script>
export default {
	props: {
		label: {
			default: 'Type',
			type: String
		},
		hideouts: {
			default () {
				return [
					{ Hash: 1234, Name: 'abc' }
				];
			},
			type: Array
		}
	}
};
</script>
