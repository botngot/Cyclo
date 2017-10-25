<template>
	<section class="planner"> 
<!-- 		<div class="planner__input">
	        <svg class="planner__icon" 
				 width="561px" height="561px" viewBox="0 0 561 561" style="enable-background:new 0 0 561 561;" xml:space="preserve">
				<g>
					<g id="gps-fixed">
						<path d="M280.5,178.5c-56.1,0-102,45.9-102,102c0,56.1,45.9,102,102,102c56.1,0,102-45.9,102-102
							C382.5,224.4,336.6,178.5,280.5,178.5z M507.45,255C494.7,147.9,410.55,63.75,306,53.55V0h-51v53.55
							C147.9,63.75,63.75,147.9,53.55,255H0v51h53.55C66.3,413.1,150.45,497.25,255,507.45V561h51v-53.55
							C413.1,494.7,497.25,410.55,507.45,306H561v-51H507.45z M280.5,459C181.05,459,102,379.95,102,280.5S181.05,102,280.5,102
							S459,181.05,459,280.5S379.95,459,280.5,459z"/>
					</g>
				</g> 
			</svg>
			<input type="text" placeholder="Starting point">
		</div> -->
		<router-link to="/popular" class="planner__inputlink">
			<div class="planner__input" id="ct" @click="inOutModus"> 
				<svg class="planner__icon" 
					 width="510px" height="510px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">
					<g>
						<g id="place">
							<path d="M255,0C155.55,0,76.5,79.05,76.5,178.5C76.5,311.1,255,510,255,510s178.5-198.9,178.5-331.5C433.5,79.05,354.45,0,255,0z
								 M255,242.25c-35.7,0-63.75-28.05-63.75-63.75s28.05-63.75,63.75-63.75s63.75,28.05,63.75,63.75S290.7,242.25,255,242.25z"/>
						</g>
					</g>
				</svg> 
				<div class="planner__dest">
					{{userDest}}
				</div>
		        
	        </div>
        </router-link>

		

		<div v-if="showMe === 'rijks'" class="planner__booked"> 
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
			<div class="planner-along">
				<p class="planner-along__p">The following places are along the route. Want to add to the route?</p>
				<div class="planner-popular__item pp2 planner__brouwerij">
					<div class="planner-popular__img">
						<div class="planner-popular__text">
							<router-link to="/heineken">
								<h2 class="planner-popular__title">Heineken Experience</h2>
							</router-link>
							<div class="planner-popular__distance">1.2km</div>
						</div>
					</div> 
				</div>
				<router-link to="/connect"><button class="planner-along__btn">Confirm this route</button></router-link>
			</div>
		</div> 

		<div v-else-if="showMe === 'heineken'" class="planner__booked"> 
			<div class="planner-map__base planner-map__heineken">
				
				<svg class="route__museum"
					 viewBox="0 0 282 64" style="enable-background:new 0 0 282 64;" xml:space="preserve">
 
				<g id="Layer_1_1_">
					
						<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="276.5" y1="33" x2="5.5" y2="33" gradientTransform="matrix(1 0 0 -1 0 66)">
						<stop  offset="0" style="stop-color:#AA00FF"/>
						<stop  offset="0.9944" style="stop-color:#304FFE"/>
					</linearGradient>
					<path class="st0" d="M274.5,48.5l-11-28c0,0-126,35-123,35s-77-9-77-9l-42-36l-14,22l9,8l-2,11"/>
				</g>
				<!-- <g id="marker__museum">
					<g id="place">
						<path class="st1" d="M14.6,20.7L14.6,20.7C8.1,20.7,2.8,26,2.8,32.5c0,2.3,0.7,4.5,1.8,6.3l7.7,13.4c0.5,0.9,1.5,1.3,2.4,1.3
							c0.9,0,1.9-0.4,2.4-1.3l7.7-13.4c1-1.8,1.8-3.9,1.8-6.3C26.5,26,21.2,20.7,14.6,20.7z M14.6,36c-2.4,0-4.3-1.9-4.3-4.3
							s1.9-4.3,4.3-4.3s4.3,1.9,4.3,4.3C19,34.1,17,36,14.6,36z"/>
					</g>
				</g> -->
				</svg>

			</div>
			<div class="planner-along">
				<!-- <p>The following places are along the route. Want to add to the route?</p> -->
				<router-link to="/connect"><button class="planner-along__btn">Next</button></router-link>
			</div>
		</div> 

		<div v-else-if="showMe === 'brouwerij'" class="planner__booked"> 
			<div class="planner-map__base planner-map__brouwerij">
				
				
			</div>
			<div class="planner-along">
				<!-- <p>The following places are along the route. Want to add to the route?</p> -->
				<router-link to="/connect"><button class="planner-along__btn">Next</button></router-link>
			</div>
		</div> 

		<div v-else class="planner-map">
			<!-- <img src="../assets/marker.svg" class="planner-map__marker"> -->
			<div class="circle">
				
			</div>
			<div class="circle1"></div>
		</div> 
		
		
		<div v-if="showMe === 'rijks'"> 
			
		</div>

		<div v-else>
			<router-link to="/safe">
				<div class="planner-instructions"  @click="safe">
					<h2>Safe cycling in Amsterdam</h2>
				</div>
			</router-link>
		</div>
		
		
    </section>
</template>

<script>
	import { eventBus } from '../main';

	import Popular from '../components/Popular.vue';
	import Rijksmuseum from '../components/Rijksmuseum.vue';

	export default {
		data: function() {
	        return {
	            destination: 'Where to?'
	        }
	    }, 
		props: { 
			userDest: String,
			showMe: String
		},
		methods: { 
			goHome() {
				this.myName = "bbb";
				this.$emit('nameWasReset1', this.myName);
			},
			safe() {
				this.myName = "safe";
				this.$emit('nameWasReset1', this.myName);
				const tlVueGsap = new TimelineMax() 
			        .to('.planner-instructions', 1, {css:{height:"100vh"}, ease: Expo.easeOut}) 
			},
			inOutModus() {
				this.inOut = "out-in";
				this.$emit('inOutModus', this.inOut);
				this.myName = "whereto";
				this.$emit('nameWasReset1', this.myName);
			}
		},
		created() { 
		},
		components: {
    		popular: Popular,
    		rijksmuseum: Rijksmuseum
    	},
    	mounted () { 
	      const tlVueGsap = new TimelineMax()
	        .from('.planner__input', 1, {scale:0.6, top: -200, delay: 0.5})
	        .from('.planner-instructions', 1, {bottom: -200}, '-=0.75')
	        .from('.planner-map', 0.5, {autoAlpha:0, scaleX:1.1, scaleY:1.1}, '-=1.5')

	      const tlVueGsap2 = new TimelineMax()
	        .from('.planner-along__p', 1, {top: -200, delay: 0.5})
	    }
	} 
</script>

<style lang="scss" scoped> 

	.route__museum {
		width: 82%;
	    position: relative;
	    top: 7em;
	    left: 30px;

	}
	.planner-popular__item {
	    box-shadow: 0 0.25em 1em 0 rgba(0, 0, 0, 0.15);
	    border-radius: 0.2em;
	    margin: 0 0 2em 1em;
	    display: inline-block;
	    width: 150px;
	}
	.planner-popular__img {
	    height: 7em;
	    background-size: cover;
	    position: relative;
	}
	.planner__brouwerij {
		.planner-popular__img {
			background-image: url('../assets/heineken.jpg');
		}
	}
	.planner-popular__text  {
	    padding: 0.75em 0.5em 0.3em;
	    position: absolute;
	    bottom: 0;
	    z-index: 1;
	}

	.planner-popular__title  {
		font-size: 1rem;
		font-weight: 900;
		margin: 0;
		color: #fff;
	}
	.planner-popular__distance {
	    color: #fff;
	    font-size: 0.75em;
	}

	.yellowclaw {
		opacity: 0;
	    width: 2em;
	    position: absolute;
	    top: 135px;
	    left: 30px;
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

	.planner { 
		&-map {
			background-image: url(../assets/home.png);
			background-size: cover;
			height: 100%;
			width: 100%;
			position: absolute;
			top: 0;
			&__marker {
				width: 4em;
				position: absolute;
				left: 42%;
	    		top: 45%;
			} 
			//animation: plannermap 0.5s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards;
    		animation-delay: 0s;  
    		//transform: scale(1.5);
    		@keyframes plannermap {
				0% {
					
				}
				100% {
					transform: scale(1);
				}
			}
		}
		&-map2 {
			background-image: url(../assets/route_rijks.png);
			//animation: appearmarker 0.5s linear forwards;
		}
		&-map__base {
			background-position: center center;
			background-size: cover;
			height: 20em;
			width: 100%;
			position: relative;  
		}
		&-map__brouwerij {
			background-image: url(../assets/route_brouwerij.png);
			
			animation: appearmarker 0.5s linear forwards;
		}
		&-map__heineken {
			background-image: url(../assets/route_rijks.png);

			animation: appearmarker 0.5s linear forwards;
		}
		&__booked {
			height: 100%;
			width: 100%;
			position: absolute;
			top: 0;
		}
		&-instructions {
			padding: 0 1em;
			position: absolute;
    		bottom: 0em;
    		background-color: #4392F1;
    		margin: 0 0.5em;
    		width: calc(100% - 3em);
    		box-shadow: 0 0.125em 0.25em 0 rgba(0,0,0,0.10);
    		border-top-left-radius: 0.3em;
    		border-top-right-radius: 0.3em;
    		z-index: 4;
    		h2 {
    			margin: 1em 0;
    			font-size: 1em;
    			color: #f5f5f5;
    		}
    		//animation: instructions 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
    		//animation-delay: 1.25s; 
    		@keyframes instructions {
				0% {
				
				}
				100% {
					bottom: -1em;
				}
			}
		}
	}

	.planner {
		//overflow: hidden;
		//height: 100vh;
		&__input {
			//display: flex;
			//align-items: flex-end;
			width: calc(100% - 4em);
			padding: 1em;
			margin: 0 auto;
			background-color: #fff;
			z-index: 2;
			position: relative;
			top: 2em;
			//box-shadow: 0 0.125em 0.25em 0 rgba(0,0,0,0.10);
			box-shadow: 0 0.25em 1em 0 rgba(0, 0, 0, 0.15);

			//animation: planner 0.75s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
    		animation-delay: 0.75s; 
    		opacity: 1;
    		@keyframes planner {
				0% {
					
				}
				100% {
					top: 2em;
					opacity: 1;
				}
			}

		}
		&__icon {
			width: 0.8em;
			height: 1em;
			fill: #757575;
			position: relative;
			//top: 0.5em;
			//padding: 1em;
			opacity: 0.5;
			display: inline-block;
			top: 3px;
    		left: -3px;
		}
		&__dest {
			display: inline-block;
			color: #9e9e9e;
		}
		// &__rijksmuseum {
		// 	.planner-popular__img {
		// 		background-image: url('../assets/rijksmuseum.jpg');
		// 	}
		// }
		// &__heineken {
		// 	.planner-popular__img {
		// 		background-image: url('../assets/heineken.jpg');
		// 	}
		// }
		&-along {
			//padding: 0 1em;
			&__btn {
				background-color: #2979ff;
				padding: 1em;
				border: 0;
				color: #fff;
				border-radius: 0.125em;
				width: 100%;
				font-size: 1em;
				margin-top: 2em;
				width: calc(100% - 2em);
    			margin-left: 1em;
			}
			p {
				padding: 0 1em;
			}
		}
		// &-popular {
		// 	overflow-x: hidden;
		// 	width: 100em;
		// 	padding-bottom: 2em;
		// 	&__item { 
		// 		//height: 15em;
		// 		width: 15em;
		// 		box-shadow: 0 0.125em 0.25em 0 rgba(0,0,0,0.35);
		// 		border-radius: 0.2em;
		// 		margin-left: 1em; 
		// 		float: left;
		// 		margin-bottom: 1em;
		// 	}
		// 	&__info {
		// 		padding: 0.75em 0.5em;
		// 	}
		// 	&__title {
		// 		font-size: 1.25rem;
		// 		font-weight: 900;
		// 		margin: 0;
		// 		margin-left: 1rem;
		// 	}
		// 	&__distance {
		// 		color: #9e9e9e;
		// 		font-size: 0.75em;
		// 	}
		// 	&__img {
		// 		height: 10em;
		// 		background-size: cover;
		// 	}
			
		// }
	}

	input {
		border: 0;
		border-bottom: 0.063em solid #e0e0e0;
		width: calc(100% - 10em);
		padding: 0.5em 0;
		&::placeholder {
			font-size: 1.2em;
		}
	}

	.circle {
	  width: 50px;
	  height: 50px;
	  background-color: #ED6A5A;
	  position: relative;
	  left: 50%;
	  margin-left: -25px;
	  top: 50%;
	  margin-top: -25px;
	  border-radius: 50%;
	  //border: 2px solid #fff;
	  animation: radar 2s infinite; 
	  transition: all linear;
	}

	.circle1 {
		width: 10px;
	    height: 10px;
	    background-color: #ED6A5A;
	    position: absolute;
	    left: 50%;
	    top: 50%;
	    border-radius: 50%;
	    transform: translate(-60%, -50%);
	}

	@keyframes radar {
	  0% {
	    width: 10px;
	    height: 10px;
	    margin-left: -5px;
	    margin-top: -5px;
	    border-color: #bbb;
	  }
	  100% {
	    width: 80px;
	    height: 80px;
	    margin-left: -40px;
	    margin-top: -40px;
	    border-color: #333;
	    opacity: 0;
	  }
	}
</style>