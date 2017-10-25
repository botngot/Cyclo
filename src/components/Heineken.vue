<template>
	<section class="rijksmuseum"> 
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
				<div class="carousel-cell rijkcell1"> 
				</div>
				<div class="carousel-cell rijkcell2"> 
				</div>
				<div class="carousel-cell rijkcell3"> 
				</div>
			</flickity>
			<div class="visit-info"> 
				
				<h1 class="ani-title">Heineken Experience</h1>
				<h2 class="ani-subtitle">Brewery</h2>

				<router-link to="/connect">
					<button  class="ani-button" @click="plannerRijks">
						Plan
					</button>
				</router-link>
				<!-- <div class="visit-info__text">
					Rijksmuseum, museum of the Netherlands, in Amsterdam. Dutch art and history from the Middle Ages to the present day.
				</div> -->

				
			</div>
			<div class="routings">
				<!-- <p>Recommended route</p> -->
				<div class="ani-map planner-map__base planner-map2">
					
					<svg class="route__museum" version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 282 64" enable-background="new 0 0 282 64" xml:space="preserve">
<g id="Layer_1">
	<g id="Layer_1_1_">
		
			<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="273.5" y1="992.1667" x2="76.1667" y2="992.1667" gradientTransform="matrix(1 0 0 1 0 -958)">
			<stop  offset="0" style="stop-color:#AA00FF"/>
			<stop  offset="0.9944" style="stop-color:#304FFE"/>
		</linearGradient>
		
			<path class="path" fill="none" stroke="url(#SVGID_1_)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
			M271.5,25.5l-6.8-14l-19.9,17.1c0,0-87.9,28.2-85.9,28.2c3,0-80.8-7.7-80.8-7.7"/>
		<circle fill="#AA00FF" stroke="#FFFFFF" stroke-miterlimit="10" cx="272.2" cy="26.7" r="6.4"/>
	</g>
</g>
</svg>
					<svg class="yellowclaw" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						 viewBox="0 0 30 36" enable-background="new 0 0 30 36" xml:space="preserve">
					<g id="marker__museum">
						<g id="place">
							<path fill="#AA00FF" d="M15.6,1.7L15.6,1.7C9.1,1.7,3.8,7,3.8,13.5c0,2.3,0.7,4.5,1.8,6.3l7.7,13.4c0.5,0.9,1.5,1.3,2.4,1.3
								c0.9,0,1.9-0.4,2.4-1.3l7.7-13.4c1-1.8,1.8-3.9,1.8-6.3C27.5,7,22.2,1.7,15.6,1.7z M15.6,17c-2.4,0-4.3-1.9-4.3-4.3
								s1.9-4.3,4.3-4.3s4.3,1.9,4.3,4.3C20,15.1,18,17,15.6,17z"/>
						</g>
					</g>
					</svg>
				</div>
				<div class="specs__wrap">
					<div class="routeby">Route made possible by Amsterdam local: J. Kras</div>
					<div class="specs">Rating: 90% 👍</div>
					<div class="specs">Distance: 0.7km</div>
				</div>
				<p class="ani-info">The Heineken Experience is a self guided interactive journey through the world of Heineken(R). You can discover the history of the company, the 4 natural ingredients of our beer, the brewing process, a tasting room and the Heineken(R) brand. At the end of the tour you can enjoy 2 Heinekens(R) or learn how to draught the perfect Heineken(R).</p>
			</div>
		</div>
    </section>
</template>

<script>
	import { eventBus } from '../main';
	import Flickity from 'vue-flickity';

	export default {
		components: {
	        Flickity
	    },
		props: { 
			userDest: String,
			showMe: String
		},
		data: function() {
	        return {
	            flickityOptions: {
	                // initialIndex: 3,
	                prevNextButtons: false,	
	                pageDots: false,
	                wrapAround: false,
	                autoPlay: 6000

	                // any options from Flickity can be used
	            }
	        }
	    },
		methods: {  
			plannerRijks() {
				// this.showMe = "rijks";
				// this.userDest = "Rijksmuseum";
				// this.$emit('ageWasEdited', this.userDest);
				// this.$emit('showWasEdited', this.showMe);
				this.myName = "preview-leave-connect";
				this.$emit('nameWasReset', this.myName);
				this.inOut = "in-out";
				this.$emit('modusInOut', this.inOut);
			},
			resetName() {
				this.myName = "preview-leave";
				this.$emit('nameWasReset', this.myName);
			}
		},
		mounted () { 
	      const tlVueGsap = new TimelineMax()
	        .from('.ani-title', 0.4, {y: 15, autoAlpha:0, ease: Quint.easeOut, delay: 1} )
	        .from('.ani-subtitle', 0.4, {y: 20, autoAlpha:0, ease: Quint.easeOut}, '-=0.4' )
	        
	        .from('.ani-map', 0.4, {autoAlpha:0, ease: Circ.easeOut}, '-=0.3' )
	        .from('.specs__wrap', 0.4, {y: 15, autoAlpha:0, ease: Quint.easeOut}, '-=0.4' )
	        .from('.ani-info', 0.4, {y: 20, autoAlpha:0, ease: Quint.easeOut}, '-=0.2' )
	        .from('.ani-button', 0.3, {y: 10, autoAlpha:0, ease: Power4.easeOut}, '-=1' )
	        // .from('.pp2', 0.7, {y: 100, autoAlpha:0, ease: Power4.easeOut}, '-=0.5')
	        // .from('.pp3', 0.7, {y: 100, autoAlpha:0, ease: Power4.easeOut}, '-=0.5')

	        // .from('.pp4', 0.7, {y: 100, autoAlpha:0, ease: Power4.easeOut}, '-=0.7')
	        // .from('.pp5', 0.7, {y: 100, autoAlpha:0, ease: Power4.easeOut}, '-=0.5')
	        // .from('.pp6', 0.7, {y: 100, autoAlpha:0, ease: Power4.easeOut}, '-=0.5')

	        // .from('.headtitle', 0.5, {autoAlpha:0, ease: Power4.easeOut}, 0.2)
	        // .from('.exploretitle', 0.6, {autoAlpha:0, ease: Power4.easeOut}, 0.3)
	    }
	} 
	
</script>

<style lang="scss" scoped> 
	.routeby {
		width: 100%;
		font-size: 0.6rem;
		margin-left: 1rem;
		color: #cdcdcd;
	}
	.specs {
		display: inline-block;
		padding: 0.4rem 1rem;
		font-size: 0.8rem;
		color: #4f4f4f;
		&:last-of-type {
			margin-left: 5em;
		}
		&__wrap {
			border-bottom: 1px solid #eeeeee;
			background-color: #f9f9f9;
		}
	}
	h1 {
		margin: 0;
		color: #000;
		padding: 0.5em 1rem 0;
	}
	h2 {
		margin: 0;
		padding: 0 1rem;
		font-size: 1rem;
		color: #9e9e9e;
	}
	
	.routings {
		position: relative;
		width: 100%;
		margin: 1.4em 0;
		p {
			color: #212121;
			margin: 1em;
		}
	}
	.planner-map2 {
			background-image: url(../assets/route_rijks.png);
			//animation: appearmarker 0.5s linear forwards;
		}
		.planner-map__base {
			background-position: center center;
			background-size: cover;
			height: 8em;
			box-shadow: 0 0.25em 1em 0 rgba(0, 0, 0, 0.15);
			margin: 1em 0 0.5em;
		}
	.route__museum {
		width: 82%;
	    position: relative;
	    top: 1.9em;
    	left: 35px;

	}

	.yellowclaw {
		opacity: 0;
	    width: 2em;
	    position: absolute;
		top: 70px;
    	left: 99px;
	    animation: appearmarker 0.3s cubic-bezier(0.27,0.53,0.28,1.58) forwards;
	    animation-delay: 1.3s; 
	}
	.path {
		stroke-dasharray: 2500;
		stroke-dashoffset: 2500;
		animation: dash 7s linear forwards;
		animation-delay: 2.5s; 
	}

	@keyframes appearmarker {
		0% {
			opacity: 0;
			transform: translateY(20px) scale(0);
		}
		100% {
			opacity: 1;
			transform: translateY(0px) scale(1);
		}
	}

	@keyframes dash {
		0% {
			opacity: 0;
		}
		10% {
			opacity: 1;
		}
		100% {
			stroke-dashoffset: 0;
		}
	}
	.rijkcell1 {
		background-image: url('../assets/heineken.jpg');
	}

	.rijkcell2 {
		background-image: url('../assets/heineken1.jpg');
	}

	.rijkcell3 {
		background-image: url('../assets/heineken2.jpg');
	}

	.arrow {
		width: 2.5em;
		height: 2.5em;
		background-color: rgba(0, 0, 0, 0.25);
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
			//height: 100vh;
			//background-color: #fff;
		}
	}
	.visit-info { 
		// position: absolute;
		// top: 7em;
    	&__text {
    		padding: 0em 1em;
    		color: #000;
    	}
	}
	.visit {
		animation: visit 700ms cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards;
		position: absolute;
		left: 50%;
		background-color: #fff;
		width: 100%;
		overflow-x: hidden;
	}

	@keyframes visit {
		0% {
			opacity: 0;
		}
		80% {
			opacity: 1;
		}
		100% {
			
			left: 0;
		}
	}
	button {
		background-color: #304ffe;
	    padding: 10px 20px;
	    border: 0;
	    color: #fff;
	    //border-radius: 50%;
	    font-size: 1em;
	    //width: 47px;
	    //height: 47px;
	    //position: absolute;
	    //right: 30px;
	    //top: -25px;
	    box-shadow: 0 0.25em 1em 0 rgba(0, 0, 0, 0.15);
	    float: right;
	    position: relative;
	    right: 1em;
	    top: -2em;
	}
	.carousel-cell {
		background-color: #fff; 
		height: 40vh;
		width: 100%; 
		background-size: cover;
		background-position: center center;
	} 
</style>