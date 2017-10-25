<template>
	<section class="safe"> 
		<div class="navigate navigate__1">
			<img src="../assets/nav/rechts.svg" alt="" class="rechtsaf">
			<div class="navigate__inner">

				<div id="countdown">50</div>
				

			</div>
			<img src="../assets/nav/rechtsaf.png" alt="" class="nav__signal">
			<div id="message"></div>
			<router-link to="/navigatingnotification">
				<div class="volgende">Volgend scherm</div>
			</router-link>
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
		},
		mounted() { 
			  var seconds;
			  var temp;
			  var timeoutMyOswego;
			  var message = document.getElementById('message');
			  var navSignal = document.querySelector('.nav__signal');
			  var nav1 = document.querySelector('.navigate__1');
			  var volgende = document.querySelector('.volgende');
			 
			  function countdown() {
			    seconds = document.getElementById('countdown').innerHTML;
			    seconds = parseInt(seconds, 10);
			 
			    if (seconds == 20) { 
			      message.innerHTML = "Use hand signal";
			      navSignal.classList.add('signal-show');
			    } 
			    if (seconds == 0) { 
			   	  temp = document.getElementById('countdown');
			   	  volgende.classList.add('volgende__appear');
			      temp.innerHTML = "0m";
			      return;
			    }
			 
			 
			    seconds-=5;

			    temp = document.getElementById('countdown');
			    temp.innerHTML = seconds + "m";
			    timeoutMyOswego = setTimeout(countdown, 1200);
			  } 
			 
			  countdown();
		}
	} 


	
</script>

<style lang="scss" scoped> 
	.volgende {
		position: absolute;
	    bottom: 0em;
	    right: 0.5em;
	    &__appear {
			bottom: 0;
	    }
	}
	.navigate {
		background: linear-gradient(to bottom, #afd1f9 0%,#e0eefe 100%);
		&__inner {
			//padding: 1em;
		}
		.rechtsaf {
			margin-left: 37%;
		    transform: translateX(-50%);
		    margin-top: 2em;
		    height: 16em;
		}
	}
	.navigate__none {
		display: none;
	}
	#countdown {
		font-size: 4em;
		font-weight: bold;
		text-align: right;
		width: calc(100% - 2rem);
		line-height: 1;
	}
	#message {
		text-align: center;
		font-size: 2em;
		font-weight: 800;
	}
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
	.nav__signal {
		width: 100%;
		opacity: 0;
	}
	.signal-show {
		animation: signal 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
	}
	@keyframes signal {
		0% {
			transform: translateX(-30px);
		}
		100% {
			transform: translateX(0px);
			opacity: 1;
		}
	}
	.navigate {
		animation: visit 0.5s forwards;
		position: absolute;
		left: 100%;
		//background-color: #fff;
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
		color: #000;
		.navigate {
			width: 100vw;
			height: 100vh;
			//background-color: #2979ff;
			p, h2 {
				color: #000;
				text-align: center;
			}
			p {
				font-size: 2em;
			}
			&__inner {
				//padding: 1em;
				h2 {
					padding: 0.5em 1em;
					margin: 0;
				}
			}
		}
	} 

</style>