import moment from 'moment-timezone';

export default (ctx, inject) => {
	moment.locale('en-us');
	ctx.$moment = moment;
	inject('moment', moment);
};
