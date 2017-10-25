<template>
	<section class="safepage"> 
		
		<header>
		
		
			<h2>About safe cycling in Amsterdam</h2>
			<router-link to="/planner">
			<svg @click="resetName" class="safe__arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve">
			<g>
				<path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744   L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284   c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" fill="#fff"/>
			</g>
			</svg>
		</router-link>
		</header>
		<div class="safe__wrap">
		<p class="tekst">Cycling is the fastes and most enjoyable way to get to know the city. Amsterdam is very bicycle-friendly. And not just the city centre - the suburbs are also worth a close look, and they are never more than 20 minutes away.</p>

		<p class="tekst">Do be <span>extremeley alert</span>, because traffic - trams, all types of motorised transport, invalid's vehicles, other bicycles, pedestriants, roller-skaters, skateboarders and even horse-drawn carts - can come from unexpected directions.</p>
		<iframe width="100%" height="210" src="https://www.youtube.com/embed/sEON08d76oE" frameborder="0" allowfullscreen></iframe>
		</div>
    </section>
</template>

<script>
	import { eventBus } from '../main';

	export default {
		props: { 
			userDest: String 
		},
		methods: {   
			resetName() {
				this.myName = "safe-leave";
				this.$emit('nameWasReset', this.myName);
				this.inOut = "in-out";
				this.$emit('modusInOut', this.inOut);

				const tlVueGsap = new TimelineMax() 
			        .to('.safepage', 0.5, {autoAlpha:1})
			}
		} 
	} 
	
</script>

<style lang="scss" scoped> 
	.safe {
		//background-color: #fff;
		width: 100%;
		height: 100vh;
		&__arrow {
			transform: rotate(90deg);
		}
	}
	.safe__wrap {
		padding: 0.1em 0 6em;
		background-color: #2979ff;
		animation: fadebg 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) forwards;
		animation-delay: 0.6s; 
	}
	.safepage {
		
	}
	header {
		
    	padding: 1em;
    	
    	background-color: #2979ff;
    	h2 {
    		color: #fff;
    		margin: 0;
    		font-size: 1em;
    	}
    	svg {
    		width: 15px;
		    position: absolute;
		    right: 1.2em;
		    top: 1.4em;
    	}
	}
	p {
		padding: 0 1em;
		color: #9e9e9e;
	    margin: 1em 0;
	}
	.tekst {
		animation: fadedtext 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) forwards;
		animation-delay: 1s; 
		transform: translateY(1em);
		opacity: 0;
		span {
			font-size: 1.5em;
			font-weight: bold;
			color: #000;
		}
	}
	iframe {
		animation: fadedtext 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) forwards;
		animation-delay: 1.4s; 
		transform: translateY(1em);
		opacity: 0;
	}

	@keyframes fadedtext {
		0% {
		    transform: translateY(1em);
		}
		100% {
		    transform: translateY(0);
		    opacity: 1;
		}
	}

	@keyframes fadebg {
		0% {
		    background-color: #2979ff;
		}
		100% {
		    background-color: #fff;
		}
	}

</style>