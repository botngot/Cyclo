<template>
	<section class="rijksmuseum "> 
		<div class="visit">
			<router-link to="/popular"> 
				<div class="arrow" @click="resetName">
					<svg viewBox="0 0 31.49 31.49" style="enable-background:new 0 0 31.49 31.49;" xml:space="preserve">
					<path d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111
						C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587
						c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"/>
					</svg>
				</div>
			</router-link>
			<flickity ref="flickity" :options="flickityOptions">
				<div class="carousel-cell artiscell1"> 
				</div>
				<div class="carousel-cell artiscell2"> 
				</div>
				<div class="carousel-cell artiscell3"> 
				</div>
			</flickity>
			<div class="visit-info"> 
				<router-link to="/planner">
					<button @click="plannerRijks">
						<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 270 277" enable-background="new 0 0 270 277" xml:space="preserve">
<path id="XMLID_10_" fill="#304FFE" d="M179.1,4.4c-5.9-5.9-15.4-5.9-21.2,0c-5.9,5.9-5.9,15.4,0,21.2L207.3,75H26.5
	c-8.3,0-15,6.7-15,15v172c0,8.3,6.7,15,15,15s15-6.7,15-15V105h165.8l-49.4,49.4c-5.9,5.9-5.9,15.4,0,21.2c2.9,2.9,6.8,4.4,10.6,4.4
	s7.7-1.5,10.6-4.4l75-75c5.9-5.9,5.9-15.4,0-21.2L179.1,4.4z"/>
</svg>
					</button>
				</router-link>
				<h1>Artis Zoo</h1>
				<div class="visit-info__text">
					Artis, short for Natura Artis Magistra, is a zoo in the centre of Amsterdam. It is the oldest zoo in the Netherlands and one of the oldest zoos of mainland Europe. Artis Royal Zoo is not just a zoo, it also contains an aquarium and a planetarium.
				</div>
				
			</div>
		</div>
    </section>
</template>

<script>
	import { eventBus } from '../main';
	// import Flickity from 'vue-flickity';

	// export default {
	// 	components: {
	//         Flickity
	//     },
	// 	props: { 
	// 		userDest: String,
	// 		showMe: String
	// 	},
	// 	data: function() {
	//         return {
	//             flickityOptions: {
	//                 // initialIndex: 3,
	//                 prevNextButtons: false,	
	//                 pageDots: false,
	//                 wrapAround: false,
	//                 autoPlay: true

	//                 // any options from Flickity can be used
	//             }
	//         }
	//     },
	// 	methods: {  
	// 		plannerRijks() {
	// 			this.showMe = "rijks";
	// 			this.userDest = "Rijksmuseum";
	// 			this.$emit('ageWasEdited', this.userDest);
	// 			this.$emit('showWasEdited', this.showMe);
	// 		},
	// 		resetName() {
	// 			this.myName = "preview-leave";
	// 			this.$emit('nameWasReset', this.myName);
	// 		}
	// 	}
	// } 
	
</script>

<style lang="scss" scoped> 
	h1 {
		margin: 0;
		color: #fff;
		background-color: #2979ff;
		    padding: 0.5em 1rem;
	}

	.artiscell1 {
		background-image: url('../assets/artis.jpg');
	}
	.artiscell2 {
		background-image: url('../assets/artis2.jpg');
	}
	.artiscell3 {
		background-image: url('../assets/artis3.jpg');
	}

	.arrow {
		width: 2.5em;
		height: 2.5em;
		background-color: rgba(0, 0, 0, 0.25);;
		border-radius: 50%;
		position: absolute;
		z-index: 2;
		top: 1em;
		left: 1em;
		svg { 
			width: 1em;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%) rotate(180deg);
		}
		path {
			//stroke: white;
   			fill: white;

		}
	}
	.rijksmuseum {
		position: absolute;
		top: 0;
		width: 100vw;
		
		z-index: 4;
		h1 {
			font-weight: 900; 
		}
		.visit {
			height: 100vh;
			background-color: #fff;
		}
	}
	.visit-info {
		
		position: relative;
    	//margin-top: 28em;
    	background: white;
    	&__text {
    		padding: 2em 1em;
    	}
	}
	.visit {
		animation: visit 0.5s forwards;
		position: absolute;
		left: 100%;
		background-color: #fff;
	}

	@keyframes visit {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 1;
			left: 0;
		}
	}
	img {
		height: 70vh; 
    	object-fit: cover;
    	position: fixed;
	}
	button {
		background-color: #fff;
	    padding: 15px;
	    border: 0;
	    color: #304ffe;
	    border-radius: 50%;
	    font-size: 1em;
	    width: 47px;
	    height: 47px;
	    position: absolute;
	    right: 30px;
	    top: -25px;
	    box-shadow: 0 0.25em 1em 0 rgba(0, 0, 0, 0.15);
	}
	.carousel-cell {
		background-color: #fff; 
		height: 70vh;
		width: 100%; 
		background-size: cover;
		background-position: center center;
	} 
</style>