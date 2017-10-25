<template>
	<section class="safe"> 
		<div class="navigate">
			<!-- <router-link to="/connect" class="connect__back">
				<div class="arrow" @click="resetName">
					<svg viewBox="0 0 31.49 31.49" style="enable-background:new 0 0 31.49 31.49;" xml:space="preserve">
					<path d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111
						C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587
						c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"/>
					</svg>
				</div>
			</router-link> -->
			<div class="navigate__inner">
				<router-link to="/planner">
					<h2>NAVIGATING</h2>
					<p>Put your phone in standby mode so you can start your ride</p>
				</router-link>
			</div>
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
	.navigate {
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
	.safe {
		&__back {
			padding: 1em;
			position: relative;
    		top: 1rem;
		}
		position: absolute;
		top: 0;
		width: 100vw;
		
		z-index: 4; 
		color: #fff;
		.navigate {
			width: 100vw;
			height: 100vh;
			background-color: #2979ff;
			p, h2 {
				color: #fff;
				text-align: center;
			}
			p {
				font-size: 2em;
			}
			&__inner {
				padding: 1em;
			}
		}
	}

</style>