import Vue from 'vue';

Vue.prototype.$hideoutObject = ({
	author = '',
	nameDescription = '',
	hideoutType = '',
	hideoutFileLink = '',
	hideoutDescription = '',
	hideoutScreenshot = '',
	hideoutVideo = '',
	hideoutDoodads = [],
	hideoutDateSubmit = 12132018,
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
	hideoutDateSubmit,
	poeVersion
});
