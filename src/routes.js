import Home from './components/Home.vue';
import Planner from './components/Planner.vue';
import Safe from './components/Safe.vue';
import Popular from './components/Popular.vue';
import Connect from './components/Connect.vue';
import Navigating from './components/Navigating.vue';
import Navigatingleft from './components/Navigatingleft.vue';
import Navigatingnotification from './components/Navigatingnotification.vue';
import Arrived from './components/Arrived.vue';
import Thankyou from './components/Thankyou.vue';

import Artis from './components/Artis.vue';
import Heineken from './components/Heineken.vue';
import Rijksmuseum from './components/Rijksmuseum.vue';
import Vangogh from './components/Vangogh.vue';


export const routes = [
	{ path: '/', component: Home },
	{ path: '/planner', component: Planner },
	{ path: '/safe', component: Safe },
	{ path: '/popular', component: Popular },
	{ path: '/connect', component: Connect },
	{ path: '/navigating', component: Navigating },
	{ path: '/navigatingleft', component: Navigatingleft },
	{ path: '/navigatingnotification', component: Navigatingnotification },
	{ path: '/arrived', component: Arrived },
	{ path: '/thankyou', component: Thankyou },

	{ path: '/artis', component: Artis },
	{ path: '/heineken', component: Heineken },
	{ path: '/vangogh', component: Vangogh },
	{ path: '/rijksmuseum', component: Rijksmuseum }
];