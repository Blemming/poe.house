import Vue from 'vue';
import uniqBy from 'lodash/uniqBy';
import includes from 'lodash/includes';
import firebase from 'firebase/app';
// Vue.prototype.$parseHideoutFile = (string) => JSON.parse(string.replace(/^\n$/gm, '').replace(/=/gm, ':').replace(/([^ ]*?)\n/g, '$1,\n').replace(/^/g, '{\n').replace(/$/g, '\n}').replace(/(^|{|,)(.*?)\s*:/gm, '$1"$2":').replace(/"\s(.*?)"/g, '"$1"'));
Vue.prototype.$parseHideoutFile = (string) => {
	// TERRIBLE CODE TODO: Make this better
	try {
		return JSON.parse(
			string.replace(/^\n$/gm, '')
				.replace(/=/gm, ':')
				.replace(/([^ ]*?)\n/g, '$1,\n')
				.replace(/^/g, '{\n')
				.replace(/$/g, '\n]\n}')
				.replace(/(^|{|,)(.*?)\s*:/gm, '$1"$2":')
				.replace(/"\s(.*?)"/g, '"$1"')
				.replace(/(^".*?":\s)({)/gm, '$2')
				.replace(/^{"/m, '"Doodads":[{"'));
	} catch (e) {
		return e.message;
	}
};
Vue.prototype.$favorCost = (doodads) => {
	let costs = 0;
	doodads.forEach(doodad => {
		const cost = doodad.Count * parseInt(doodad.Cost);
		costs += cost;
	});
	return costs;
};
Vue.prototype.$getDoodadsFromHideout = (allDoodads = [], hideoutObjectDoodads = []) => {
	const doodads = [];
	for (const doodad of hideoutObjectDoodads) {
		const found = allDoodads.filter(doo => parseInt(doo['Hash']) === doodad['Hash'])[0];
		if (found) {
			doodads.push(found);
		}
	}
	const uniqDoodads = uniqBy(doodads, 'Hash');

	return uniqDoodads.map((doo) => {
		const numberOfCopies = doodads.filter(doodad => doodad['Hash'] === doo['Hash']).length;
		return {
			...doo,
			'Count': numberOfCopies
		};
	});
};
const _getMTX = (doodads) => {
	const nonMtxDoodads = [
		'Stash',
		'Guild Stash',
		'Waypoint',
		'Crafting Bench',
		'Blessing Font',
		'Sharpening Wheel',
		'Artisan\'s Bench',
		'Headstones',
		'Gladiator\'s Workbench',
		'Armourer\'s Workbench',
		'Map Device',
		'Navali',
		'Einhar',
		'Alva',
		'Jun',
		'Helena',
		'Niko',
		'Zana',
		'Bowmaker\'s Tools'
	];
	const noMasters = doodads.filter(doodad => doodad['MasterName'] === null);
	return noMasters.filter(item => !includes(nonMtxDoodads, item['Name']));
};
Vue.prototype.$getMTX = (doodads) => _getMTX(doodads);
Vue.prototype.$mastersObject = (doodads) => {
	const Zana = doodads.filter(doo => doo['MasterName'] === 'Zana').map(doo => doo['MasterLevel']);
	const Niko = doodads.filter(doo => doo['MasterName'] === 'Niko').map(doo => doo['MasterLevel']);
	const Einhar = doodads.filter(doo => doo['MasterName'] === 'Einhar').map(doo => doo['MasterLevel']);
	const Alva = doodads.filter(doo => doo['MasterName'] === 'Alva').map(doo => doo['MasterLevel']);
	const mtx = _getMTX(doodads).length > 0;
	return {
		Zana: Math.max(...Zana, ...[0, 0]),
		Niko: Math.max(...Niko, ...[0, 0]),
		Einhar: Math.max(...Einhar, ...[0, 0]),
		Alva: Math.max(...Alva, ...[0, 0]),
		mtx
	};
};
Vue.prototype.$hideoutObject = ({
	author = '',
	nameDescription = '',
	hideoutType = '',
	hideoutFileLink = '',
	hideoutDescription = '',
	hideoutScreenshot = '',
	hideoutVideo = '',
	hideoutId = '',
	hideoutDoodads = [],
	hideoutMasters = [],
	poeVersion = '3.5.1'
} = {}) => ({
	author,
	nameDescription,
	hideoutType,
	hideoutFileLink,
	hideoutDescription,
	hideoutScreenshot,
	hideoutVideo,
	hideoutDoodads,
	hideoutMasters,
	hideoutId,
	hideoutDateSubmit: firebase.firestore.FieldValue.serverTimestamp(),
	poeVersion
});
