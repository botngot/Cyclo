<template> 
	<section class="intro">
		<div class="loader">
			<!-- <h1 class="loader__title">A</h1> -->
			<img src="../assets/logo.svg" alt="">
		</div>
        <flickity ref="flickity" :options="flickityOptions">
		    <div class="carousel-cell cell-first">
		    	<div class="carousel-cell__inner">
			    	
			    	<div class="intro__circle">
			    		
			    		<img src="../assets/slide1.jpg" alt="">

			    	</div>
			    	<div class="intro__text">
			    		<h2>Navigate through Amsterdam</h2>
			    		<p>This app will help you navigate safely through Amsterdam by bike.</p>
			    	</div>
		    	</div>
		    </div>
		    <div class="carousel-cell cell-second">

		    	<div class="carousel-cell__inner">
			    	<div class="intro__circle">
			    		<img src="../assets/slide2.jpg" alt="">


			    	</div>
			    	
			    	<div class="intro__text">
			    		<h2>Choose your destination</h2>
			    		<p>Tell the app where you want to go or browse through the popular destination list. Or go to a place that we suggest.</p>
			    	</div>
		    	</div>
		    </div>
		    <div class="carousel-cell cell-third">

		    	<div class="carousel-cell__inner">
			    	<div class="intro__circle">

			    		<img src="../assets/slide3.jpg" alt="">

			    	</div>
			    	
			    	<div class="intro__text">
			    		<h2>Get the best route</h2>
			    		<p>The app will plan the best route for you. The route will avoid crouwded areas, busy streets, dangerous intersections and road activities.</p>
			    	</div>
		    	</div>
		    </div>
		    <div class="carousel-cell cell-fourth">
		    	<div class="carousel-cell__inner">
			    	
					<div class="intro__circle">
			    		
			    		<img src="../assets/slide4.jpg" alt="">

			    	</div>
			    	<div class="intro__text">
			    		<h2>Follow turn by turn directions</h2>
			    		<p>Put your phone in your pocket and follow the turn by turn directions on the navigator</p>
			    	</div>
			    	<router-link to="/planner" class="intro__continue">
				    	
				    		Let's get started!
				    	
			    	</router-link>
		    	</div>
		    </div>
		</flickity> 
		<router-link to="/planner" class="intro__skip"><span >skip</span></router-link>
	</section> 
</template>

<script> 
	import Flickity from 'vue-flickity';

    export default {
		components: {
	        Flickity
	    },

	    data: function() {
	        return {
	            flickityOptions: {
	                initialIndex: 0,
	                prevNextButtons: false,	
	                pageDots: true,
	                wrapAround: false

	                // any options from Flickity can be used
	            }
	        }
	    } 
    }

    
</script>

<style lang="scss" scoped>

$c-blue : #304ffe;



.loader {
	width: 100%;
    height: 100vh;
    //background-image: linear-gradient(to top, #6a11cb 0%, #2575fc 100%);
    background-color: #fff;
    z-index: 3;
    position: absolute; 
    animation: loader 0.5s forwards;
    animation-delay: 3s; 
    &__title {
    	font-size: 15em;
    	color: #fff;
    	font-weight: bolder;
    	text-align: center;
    	line-height: 1;
    }
    img {
    	width: 60%;
    	position: absolute;
    	top: 50%;
    	left: 50%;
    	transform: translate(-50%, -50%);
    }
}
.intro {
	overflow: hidden;
	background-color: #fff;
	h2 {
		font-weight: 900;
		color: #fff;
	}
	p {
		color: #fff;
	}
	a {
		cursor: pointer;
	}
	h2, p {
		text-align: center
	}
	&__skip {
		position: absolute;
	    bottom: 1em;
	    right: 2em;
	    z-index: 2;
	    span {
	    	color: #7eafe4;
	    }
	}
	&__circle {
		width: 100%;
		//height: 50vh; 
		//background-color: #2962ff;

		margin: 0 auto;
		svg {
			width: 60%;
		    margin: 0 auto;
		    display: block;
		    margin-top: 5.5em;
		}
	}
	&__text {
		padding: 1em 2em;
	}
	&__continue {
		background: #7eafe4;
		//background-image: linear-gradient(to right, #00c6fb 0%, #005bea 100%);
	    z-index: 4;
	    position: absolute;
	    width: calc(100% - 2em);
	    margin-left: 1em;
	    text-align: center;
	    color: #fff;
	    transform: translateY(150px);
		padding: 0.5em 0;
		bottom: 1em;
		box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
	}
}
 
// .cell-first {
// 	.intro__circle {
// 		opacity: 0;
// 		animation: faded 0.5s linear forwards;
// 		animation-delay: 3.4s; 
// 	}
// 	.intro__text {
// 		animation: fadedtext 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) forwards;
// 		animation-delay: 3.60s; 
// 		transform: translateY(3em);
// 		opacity: 0;
// 	}
// }

// .cell-second {
// 	.intro__circle {
// 		opacity: 0; 
// 	}
// 	.intro__text { 
// 		opacity: 0;
// 	}
// }
// .cell-second.is-selected {
// 	.intro__circle {
// 		opacity: 0;
// 		animation: faded 0.5s linear forwards;
// 		animation-delay: 0.5s; 
// 	}
// 	.intro__text {
// 		animation: fadedtext 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) forwards;
// 		animation-delay: 0.7s; 
// 		transform: translateY(3em);
// 		opacity: 0;
// 	}
// }

// .cell-third {
// 	.intro__circle {
// 		opacity: 0; 
// 	}
// 	.intro__text { 
// 		opacity: 0;
// 	}
// }
// .cell-third.is-selected {
// 	.intro__circle {
// 		opacity: 0;
// 		animation: faded 0.5s linear forwards;
// 		animation-delay: 0.5s; 
// 	}
// 	.intro__text {
// 		animation: fadedtext 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) forwards;
// 		animation-delay: 0.7s; 
// 		transform: translateY(3em);
// 		opacity: 0;
// 	}
// }

// .cell-fourth {
// 	.intro__circle {
// 		opacity: 0; 
// 	}
// 	.intro__text { 
// 		opacity: 0;
// 	}
// }
// .cell-fourth.is-selected {
// 	.intro__circle {
// 		opacity: 0;
// 		animation: faded 0.5s linear forwards;
// 		animation-delay: 0.5s; 
// 	}
// 	.intro__text {
// 		animation: fadedtext 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) forwards;
// 		animation-delay: 0.7s; 
// 		transform: translateY(3em);
// 		opacity: 0;
// 	}
// }

@keyframes faded {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@keyframes fadedtext {
	0% {
	    transform: translateY(3em);
	}
	100% {
	    transform: translateY(0);
	    opacity: 1;
	}
}



//Flickity
.flickity-slider {
	width: 100vw;
	height: 100vh;
	//margin-top: 3em;
}
.carousel-cell {
	//background-color: #fff;
	background: linear-gradient(to bottom, #b0d1f7 62%,#84c2f9 100%);
	//margin-right: 2em;
	//height: 30em;
	height: 100vh;
	width: 100%;
	&__inner {
		//padding: 2em;
	}
	&:last-child {
		
		&.is-selected {
			.intro__continue {
				animation: showContinue 0.5s forwards;
				animation-delay: 800ms;
			}
		}
	}
} 

@keyframes showContinue {
	0% {
		
	}
	100% {  
		transform: translateY(0px);
	}
}

@keyframes loader {
	0% {
		
	}
	75% {  
		opacity: 0; 
	}
	100% {   
		visibility: hidden;
		z-index: 0;
	}
}

img {
	width: 100%;
}

</style>