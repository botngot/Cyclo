<template>
	<section class="connect">
		<div class="visit">
			<!-- <img src="../assets/rijksmuseum.jpg" alt=""> -->
			<!-- <router-link to="/planner" class="connect__back">
				<div class="arrow" @click="resetName">
					<svg viewBox="0 0 31.49 31.49" style="enable-background:new 0 0 31.49 31.49;" xml:space="preserve">
					<path d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111
						C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587
						c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"/>
					</svg>
				</div>
			</router-link> -->
			<div class="visit-info">
				<div class="intro__circle">
					<img src="../assets/connect.jpg" alt="">
				</div>
				<h1 class="visit-info__title">Please place your phone on the mount</h1>
				<div class="visit-info__text">
					<ul>
						<li>1. For your and others' safety mount the phone on your steering wheel</li>
						<li>2. Phone will be on 'Do not distract'-mode</li>
						<li>3. Use hand signals and safe cycling!</li>
						
							<router-link to="/navigating"><button class="planner-along__btn">Start navigating</button></router-link>
						
					</ul>
				</div> 
			</div> 
		</div>
    </section>
</template>

<script>
	import { eventBus } from '../main';

	export default {
		props: { 
			userDest: String,
			//showMe: Boolean
		},
		methods: {  
			// plannerRijks() {
			// 	this.showMe = false;
			// 	this.userDest = "Rijksmuseum";
			// 	this.$emit('ageWasEdited', this.userDest);
			// 	this.$emit('showWasEdited', this.showMe);
			// },
			resetName() {
				this.myName = "preview-leave";
				this.$emit('nameWasReset', this.myName);
			}
		} 
	} 
	
</script>

<style lang="scss" scoped> 
	.arrow {
		position: absolute;
		    top: 1em;
		left: 1em;
		width: 20px;
		transform: rotate(180deg);
		svg {
			fill: #bdbdbd;
		}
	}
	h1 {
		color: #2979ff;
		text-align: center;
	}
	.intro__circle {
		width: 100%;
		//height: 50vh; 
		//background-color: #2962ff;
		margin: 0 auto;
		opacity: 0;
		animation: fadein 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
		animation-delay: 0.5s; 
		svg {
			width: 60%;
		    margin: 0 auto;
		    display: block;
		    margin-top: 5em;
    		margin-bottom: 4em;
		}
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
	@keyframes fadein {
		0% {
			opacity: 0;
			transform: translateY(50px);
		}
		40% {
			opacity: 1;
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
	.connect {
		position: absolute;
		top: 0;
		width: 100vw;
		
		z-index: 2; 
		.visit {
			width: 100vw;
			height: 100vh;
			background-color: #fff;
		}
	}
	.visit-info {
		&__text {
			padding: 0 1em 1em;
			animation: fadein 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
			animation-delay: 0.75s; 
			opacity: 0;

			li {
				display: block;
			}
		}
		&__title {
			opacity: 0;
			animation: fadein 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
			animation-delay: 0.7s; 
			padding: 0 1em;
			margin: 0.5em 0 0;
		}
	}
	.visit {
		//animation: visit 0.5s forwards;
		//transform: translateY(550px);
		//position: absolute;
		//left: 100%;
		background-color: #fff;
		opacity: 1;
	}

	@keyframes visit {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 1;
			//transform: translateY(0px);
			left: 0;
		}
	}
	img {
		height: auto;
		width: 100vw;
	}
	button {
		background-color: #2979ff;
		padding: 1em;
		border: 0;
		color: #fff;
		border-radius: 0.125em;
		width: 100%;
		font-size: 1em;
		margin-top: 2em;
	}
</style>