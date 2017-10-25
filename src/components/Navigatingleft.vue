<template>
	<section class="safe"> 
		<div class="navigate navigate__1">
			<img src="../assets/nav/links.svg" alt="" class="rechtsaf">
			<div class="navigate__inner">

				<div id="countdown1">50</div>
				

			</div>
			<img src="../assets/nav/linksaf.png" alt="" class="nav__signal1">
			<div id="message1"></div>
			<router-link to="/arrived">
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
			  var seconds1;
			  var temp1;
			  var timeoutMyOswego1;
			  var message1 = document.getElementById('message1');
			  var navSignal1 = document.querySelector('.nav__signal1');
			  var nav11 = document.querySelector('.navigate__1');
			  var volgende1 = document.querySelector('.volgende');
			 
			  function countdown1() {
			    seconds1 = document.getElementById('countdown1').innerHTML;
			    seconds1 = parseInt(seconds1, 10);
			 
			    if (seconds1 === 20) { 
			      message1.innerHTML = "Use hand signal";
			      navSignal1.classList.add('signal-show');
			    } 
			    if (seconds1 === 0) { 
			   	  temp1 = document.getElementById('countdown1');
			   	  volgende1.classList.add('volgende__appear');
			      temp1.innerHTML = "0m";
			      return;
			    }
			 
			 
			    seconds1-=5;

			    temp1 = document.getElementById('countdown1');
			    temp1.innerHTML = seconds1 + "m";
			    timeoutMyOswego1 = setTimeout(countdown1, 1200);
			  } 
			 
			  countdown1();
		}
	} 


	
</script>

<style lang="scss" scoped> 
	.volgende {
		position: absolute;
	    bottom: 0;
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
	#countdown1 {
		font-size: 4em;
		font-weight: bold;
		text-align: right;
		width: calc(100% - 2rem);
		line-height: 1;
	}
	#message1 {
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
	.nav__signal1 {
		width: 100%;
		opacity: 0;
	}
	.signal-show {
		animation: signal 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
	}
	@keyframes signal {
		0% {
			transform: translateX(30px);
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