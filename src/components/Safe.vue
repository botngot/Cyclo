<template>
	<section class="safe"> 
		
		<header>
		<h2 @click="resetName">Safe cycling in Amsterdam</h2>
		<router-link to="/planner">
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 22.88 22.88" style="enable-background:new 0 0 22.88 22.88;" xml:space="preserve">
				<path d="M0.324,1.909c-0.429-0.429-0.429-1.143,0-1.587c0.444-0.429,1.143-0.429,1.587,0l9.523,9.539  l9.539-9.539c0.429-0.429,1.143-0.429,1.571,0c0.444,0.444,0.444,1.159,0,1.587l-9.523,9.524l9.523,9.539  c0.444,0.429,0.444,1.143,0,1.587c-0.429,0.429-1.143,0.429-1.571,0l-9.539-9.539l-9.523,9.539c-0.444,0.429-1.143,0.429-1.587,0  c-0.429-0.444-0.429-1.159,0-1.587l9.523-9.539L0.324,1.909z" fill="#FFFFFF"/>
			</svg>
		</router-link>
		</header>
		
		<p class="tekst">Cycling is the fastes and most enjoyable way to get to know the city. Amsterdam is very bicycle-friendly. And not just the city centre - the suburbs are also worth a close look, and they are never more than 20 minutes away.</p>

		<p class="tekst">Do be <span>extremeley alert</span>, because traffic - trams, all types of motorised transport, invalid's vehicles, other bicycles, pedestriants, roller-skaters, skateboarders and even horse-drawn carts - can come from unexpected directions.</p>
		<iframe width="100%" height="210" src="https://www.youtube.com/embed/sEON08d76oE" frameborder="0" allowfullscreen></iframe>
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
			        .to('.safe', 0.5, {autoAlpha:0})
			}
		} 
	} 
	
</script>

<style lang="scss" scoped> 
	.safe {
		background-color: #fff;
		width: 100%;
		height: 100vh;
		background-color: #2979ff;
		animation: fadebg 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) forwards;
		animation-delay: 0.3s; 
	}
	header {
		
    	padding: 1em;
    	
    	background-color: #2979ff;
    	h2 {
    		color: #fff;
    		margin: 0;
    		font-size: 1.5em;
    	}
    	svg {
    		width: 15px;
		    position: absolute;
		    right: 1.2em;
		    top: 1.6em;
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
		animation-delay: 1.6s; 
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