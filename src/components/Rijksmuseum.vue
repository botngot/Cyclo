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
					<!-- <img src="../assets/rijksmuseum.jpg" alt=""> -->
				</div>
				<div class="carousel-cell rijkcell2"> 
				</div>
				<div class="carousel-cell rijkcell3"> 
				</div>
			</flickity>
			<div class="visit-info"> 
				<router-link to="/connect">
					<button @click="plannerRijks">
						<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							 viewBox="0 0 270 277" enable-background="new 0 0 270 277" xml:space="preserve">
						<path id="XMLID_10_" fill="#304FFE" d="M179.1,4.4c-5.9-5.9-15.4-5.9-21.2,0c-5.9,5.9-5.9,15.4,0,21.2L207.3,75H26.5
							c-8.3,0-15,6.7-15,15v172c0,8.3,6.7,15,15,15s15-6.7,15-15V105h165.8l-49.4,49.4c-5.9,5.9-5.9,15.4,0,21.2c2.9,2.9,6.8,4.4,10.6,4.4
							s7.7-1.5,10.6-4.4l75-75c5.9-5.9,5.9-15.4,0-21.2L179.1,4.4z"/>
						</svg>
					</button>
				</router-link>
				<h1>Rijksmuseum </h1>
				<div class="visit-info__text">
					Rijksmuseum, museum of the Netherlands, in Amsterdam. Dutch art and history from the Middle Ages to the present day.
				</div>

				
			</div>
			<div class="routings">
				<p>Recommended route</p>
				<div class="planner-map__base planner-map2">
					
					<svg class="route__museum" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						 viewBox="0 0 282 64" enable-background="new 0 0 282 64" xml:space="preserve">
					<g id="Layer_1_1_">
						
							<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="276.5" y1="33" x2="5.5" y2="33" gradientTransform="matrix(1 0 0 -1 0 66)">
							<stop  offset="0" style="stop-color:#AA00FF"/>
							<stop  offset="0.9944" style="stop-color:#304FFE"/>
						</linearGradient>
						
							<path  class="path" fill="none" stroke="url(#SVGID_1_)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
							M274.5,48.5l-11-28c0,0-126,35-123,35s-77-9-77-9l-42-36l-14,22l9,8l-2,11"/>
					</g>
					</svg>
					<svg class="yellowclaw" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						 viewBox="0 0 30 36" enable-background="new 0 0 30 36" xml:space="preserve">
					<g id="marker__museum">
						<g id="place">
							<path fill="#2962FF" d="M15.6,1.7L15.6,1.7C9.1,1.7,3.8,7,3.8,13.5c0,2.3,0.7,4.5,1.8,6.3l7.7,13.4c0.5,0.9,1.5,1.3,2.4,1.3
								c0.9,0,1.9-0.4,2.4-1.3l7.7-13.4c1-1.8,1.8-3.9,1.8-6.3C27.5,7,22.2,1.7,15.6,1.7z M15.6,17c-2.4,0-4.3-1.9-4.3-4.3
								s1.9-4.3,4.3-4.3s4.3,1.9,4.3,4.3C20,15.1,18,17,15.6,17z"/>
						</g>
					</g>
					</svg>
				</div>
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
	                autoPlay: true

	                // any options from Flickity can be used
	            }
	        }
	    },
		methods: {  
			plannerRijks() {
				this.showMe = "rijks";
				this.userDest = "Rijksmuseum";
				this.$emit('ageWasEdited', this.userDest);
				this.$emit('showWasEdited', this.showMe);
				this.myName = "preview-leave";
				this.$emit('nameWasReset', this.myName);
			},
			resetName() {
				this.myName = "preview-leave";
				this.$emit('nameWasReset', this.myName);
			}
		}
	} 
	
</script>

<style lang="scss" scoped> 
	h1 {
		margin: 0;
		color: #fff;
		padding: 0.5em 1rem;
	}
	
	.routings {
		position: relative; 
		top: -22em;
		width: calc(100% - 2em);
		margin: 1em;
		p {
			color: #fff;
			margin: 0;
		}
	}
	.planner-map2 {
			background-image: url(../assets/route_rijks.png);
			//animation: appearmarker 0.5s linear forwards;
		}
		.planner-map__base {
			background-position: center center;
			background-size: cover;
			height: 13em;
			
		}
	.route__museum {
		width: 82%;
	    position: relative;
	    top: 4em;
	    left: 30px;

	}

	.yellowclaw {
		opacity: 0;
	    width: 2em;
	    position: absolute;
	    top: 122px;
	    left: 26px;
	    animation: appearmarker 0.3s cubic-bezier(0.27,0.53,0.28,1.58) forwards;
	    animation-delay: 1.3s; 
	}
	.path {
		stroke-dasharray: 2500;
		stroke-dashoffset: 2500;
		animation: dash 9s linear forwards;
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
		background-image: url('../assets/rijksmuseum.jpg');
	}

	.rijkcell2 {
		background-image: url('../assets/rijksmuseum2.jpg');
	}

	.rijkcell3 {
		background-image: url('../assets/rijksmuseum3.jpg');
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
		position: absolute;
		top: 7em;
    	&__text {
    		padding: 0em 1em;
    		color: #fff;
    	}
	}
	.visit {
		animation: visit 700ms cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards;
		position: absolute;
		left: 50%;
		background-color: #fff;
		width: 100%;
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
		height: 100vh;
		width: 100%; 
		background-size: cover;
		background-position: center center;
		&:after {
			content: '';
			background-color: black;
			width: 100%;
			height: 100%;
			opacity: 0.45;
			position: absolute;
		}
	} 
</style>