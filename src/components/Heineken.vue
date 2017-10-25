<template>
	<section class="rijksmuseum "> 
		<div class="visit">
			<img src="../assets/heineken.jpg" alt="">
			
			<div class="visit-info">
				<router-link to="/popular">
					<span @click="resetName">back</span>
				</router-link>
				<h1>Heineken</h1>
				<div class="visit-info__text">
					Rijksmuseum, museum of the Netherlands, in Amsterdam. Dutch art and history from the Middle Ages to the present day.
				</div>
				<router-link to="/planner">
					<button @click="plannerRijks">Continue</button>
				</router-link>
			</div>
		</div>
    </section>
</template>

<script>
	import { eventBus } from '../main';

	export default {
		props: { 
			userDest: String,
			showMe: String
		},
		methods: {  
			plannerRijks() {
				this.showMe = "heineken";
				this.userDest = "Heineken Experience";
				this.$emit('ageWasEdited', this.userDest);
				this.$emit('showWasEdited', this.showMe);
			},
			resetName() {
				this.myName = "ccc";
				this.$emit('nameWasReset', this.myName);
			}
		} 
	} 
	
</script>

<style lang="scss" scoped> 
	.rijksmuseum {
		h1 {
			font-weight: 900; 
		}
	}
	.visit-info {
		padding: 0 1em 1em;
	}
	.visit {
		animation: visit 0.5s forwards;
		//transform: translateY(550px);
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
			//transform: translateY(0px);
			left: 0;
		}
	}
	img {
		height: auto;
		width: 100vw;
	}
	button {
		background-color: #304ffe;
		padding: 1em;
		border: 0;
		color: #fff;
		border-radius: 0.125em;
		width: 100%;
		font-size: 1em;
		margin-top: 2em;
	}
</style>