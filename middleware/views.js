import Cookies from 'js-cookie';
import cookieparser from 'cookieparser';

export default async function (context) {
	try {
		const hideouts = await context.app.$axios.$get(`/api/hideouts?hideoutId=${context.params.id}`);
		const hideout = hideouts[0];
		if (!process.server) {
			let viewed = [];
			const viewedCookie = Cookies.get('viewed');
			viewed = (typeof viewedCookie === 'string') ? JSON.parse(Cookies.get('viewed')) : viewed;
			if (viewed.indexOf(context.params.id) === -1) {
				viewed.push(context.params.id);
				const views = hideout.views || 0;
				hideout.views = views + 1;
				await context.app.$axios.put(`/api/hideouts/${hideout._id}`, hideout);
				Cookies.set('viewed', viewed);
			}
		} else {
			let viewed = [];
			if (context.req && context.req.headers && context.req.headers.cookie) {
				const parsed = cookieparser.parse(context.req.headers.cookie);
				viewed = parsed.viewed;
			}
			if (viewed.indexOf(context.params.id) === -1) {
				viewed.push(context.params.id);
				const views = hideout.views || 0;
				hideout.views = views + 1;
				await context.app.$axios.put(`/api/hideouts/${hideout._id}`, hideout);
				Cookies.set('viewed', viewed);
			}
		}
	} catch (e) {
		console.log(e);
	}
}
