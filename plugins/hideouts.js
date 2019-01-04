import Vue from 'vue';
import uniqBy from 'lodash/uniqBy';
import meanBy from 'lodash/meanBy';
import includes from 'lodash/includes';
// import firebase from 'firebase/app';
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
Vue.prototype.$getRatingScale = (hideout = {}, rating) => {
	return (5 * rating / 10) + 5 * (1 - Math.pow(Math.E, -hideout.votes.length / 10));
};
Vue.prototype.$getThumbnail = (imgLink) => {
	if (/imgur/gi.test(imgLink)) {
		return imgLink.replace(/(.jpg|.png)/i, 'h$1');
	}
	return imgLink;
};
Vue.prototype.$calculateVotes = (votes = []) => {
	return meanBy(votes, (v) => v.score) || 0;
};
Vue.prototype.$favorCost = (doodads = []) => {
	let costs = 0;
	doodads = doodads || [];
	doodads.forEach(doodad => {
		const cost = doodad.Count * parseInt(doodad.Cost);
		costs += cost;
	});
	return costs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
Vue.prototype.$getDoodadsFromHideout = (allDoodads = [], hideoutObjectDoodads = []) => {
	const doodads = [];
	for (const doodad of hideoutObjectDoodads) {
		const found = allDoodads.filter(doo => parseInt(doo['Hash']) === parseInt(doodad['Hash']))[0];
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
function makeid () {
	var text = '';
	var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (var i = 0; i < 8; i++) { text += possible.charAt(Math.floor(Math.random() * possible.length)); }
	return text;
}
function makeTimeStamp () {
	const nanoseconds = (new Date()).getTime();
	return {
		seconds: Math.round(nanoseconds / 1000),
		nanoseconds
	};
}
Vue.prototype.$hideoutObject = ({
	author = '',
	user = '',
	nameDescription = '',
	hideoutType = 13485,
	hideoutFileLink = '',
	hideoutDescription = '',
	hideoutScreenshot = '',
	hideoutVideo = '',
	gallery = '',
	views = 0,
	downloads = 0,
	hideoutId = '',
	authorEmail = '',
	hideoutDateSubmit = '',
	hideoutDoodads = [],
	hideoutMasters = [],
	poeVersion = '3.5.1'
} = {}) => ({
	author,
	user,
	nameDescription,
	hideoutType,
	hideoutFileLink,
	hideoutDescription,
	hideoutScreenshot,
	hideoutVideo,
	gallery,
	hideoutDoodads,
	hideoutMasters,
	authorEmail,
	hideoutId: hideoutId || makeid(),
	downloads,
	views,
	hideoutDateSubmit: hideoutDateSubmit || makeTimeStamp(),
	poeVersion
});
