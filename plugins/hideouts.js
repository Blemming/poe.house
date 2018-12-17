import Vue from 'vue';
import uniqBy from 'lodash/uniqBy';
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
Vue.prototype.$mastersObject = (doodads) => {
	const Zana = doodads.filter(doo => doo['MasterName'] === 'Zana').map(doo => doo['MasterLevel']) || [0, 0];
	const Niko = doodads.filter(doo => doo['MasterName'] === 'Niko').map(doo => doo['MasterLevel']) || [0, 0];
	const Einhar = doodads.filter(doo => doo['MasterName'] === 'Einhar').map(doo => doo['MasterLevel']) || [0, 0];
	const Alva = doodads.filter(doo => doo['MasterName'] === 'Alva').map(doo => doo['MasterLevel']) || [0, 0];
	return {
		Zana: Math.max(...Zana, ...[0, 0]),
		Niko: Math.max(...Niko, ...[0, 0]),
		Einhar: Math.max(...Einhar, ...[0, 0]),
		Alva: Math.max(...Alva, ...[0, 0])
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
