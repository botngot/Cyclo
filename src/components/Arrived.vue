<template>
	<section class="arrived"> 
		<div class="navigate">
			<div class="navigate__inner">
					
					<h2>You have arrived at your destination!</h2>

					<p class="rate-text">How would you rate the route?</p>
					<div class="emoji"><span>😫</span><span>😕</span><span>😐</span><span>🙂</span><span>😄</span></div>
					<textarea name="" id="" cols="30" rows="10" placeholder="Comment"></textarea>
					<router-link to="/thankyou">
						<button class="planner-along__btn">Submit</button>
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
	.navigate {
		margin-top: 4em;
	}
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
	textarea {
		width: 98%;

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
	.arrived {
		background: linear-gradient(to bottom, #afd1f9 0%,#e0eefe 100%);
		padding: 1em;
		height: 100vh;
		h2 {
			margin: 0;
			text-align: center;
		}
	}
	.rate {
		width: 5em;
		&__like {
			
		}
		&-text {
			text-align: center;
			color: #fff;
			font-size: 1.5em;
		}
	}
</style>