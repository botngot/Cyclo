<template>
	<section class="thankyou"> 
		<div class="navigate">
			<div class="navigate__inner">
					
					<h2>Thanks for your feedback!</h2>
					
					<router-link to="/">
						<button>App opnieuw starten</button>
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

	.emoji {
		font-size: 2em;
		display: flex;
    	justify-content: center;
    	padding: 0 0 1em;
    	margin: 0;
    	span {
    		padding: 0 0.5em;
    	}
	}

	.thankyou {
		background: linear-gradient(to bottom, #afd1f9 0%,#e0eefe 100%);
		padding: 1em;
		height: 100vh;
		position: relative;
		h2 {
			margin: 0;
			font-size: 3em;
			text-align: center;
			position: absolute;
			top: 3em;
			left: 0;
		}
	}
	.rate {
		width: 5em;
		&__like {
			
		}
		&-text {
			text-align: left;
			color: #fff;
			font-size: 1.5em;
		}
	}
	button {
		position: absolute;
		bottom: 8rem;
		background-color: #2979ff;
		padding: 1em;
		border: 0;
		color: #fff;
		border-radius: 0.125em;
		width: calc(100% - 2em);
		font-size: 1em;
		margin-top: 2em;
		left: 1em;
	}
</style>