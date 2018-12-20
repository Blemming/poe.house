<template>

	<table class="table table-bordered table-striped table-dark bg-secondary text-primary table-hover">
		<thead>
			<tr>
				<th/>
				<th>Quantity</th>
				<th>Name</th>
				<th v-if="list[0]['MasterLevel'] !== '0'">Level req.</th>
				<th v-if="list[0]['Cost'] !== '0'">Cost</th>
			</tr>
		</thead>
		<tbody>
			<tr
				v-for="doodad in orderedList"
				:key="doodad['Hash']">
				<td scope="row"><img
					:src="doodad['Icon']"
					alt=""></td>
				<td>{{ doodad['Count'] }}</td>
				<td>{{ doodad['Name'] }}</td>
				<td v-if="list[0]['MasterLevel'] !== '0'">{{ doodad['MasterLevel'] }}</td>
				<td v-if="list[0]['Cost'] !== '0'">{{ doodad['Cost'] }}</td>
			</tr>
		</tbody>
	</table>
</template>
<script>
import orderBy from 'lodash/orderBy';
export default {
	props: {
		list: {
			default () {
				return [];
			},
			type: Array
		}
	},
	computed: {
		orderedList () {
			return orderBy(this.list, ['MasterLevel'], 'asc');
		}
	}
};
</script>
