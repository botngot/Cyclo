import Home from './components/Home.vue';
import Planner from './components/Planner.vue';
import Safe from './components/Safe.vue';
import Popular from './components/Popular.vue';
import Connect from './components/Connect.vue';
import Navigating from './components/Navigating.vue';
import Arrived from './components/Arrived.vue';

import Brouwerij from './components/Brouwerij.vue';
import Heineken from './components/Heineken.vue';
import Rijksmuseum from './components/Rijksmuseum.vue';


export const routes = [
	{ path: '/', component: Home },
	{ path: '/planner', component: Planner },
	{ path: '/safe', component: Safe },
	{ path: '/popular', component: Popular },
	{ path: '/connect', component: Connect },
	{ path: '/navigating', component: Navigating },
	{ path: '/arrived', component: Arrived },

	{ path: '/brouwerij', component: Brouwerij },
	{ path: '/heineken', component: Heineken },
	{ path: '/rijksmuseum', component: Rijksmuseum }
];