<template>
  <div id="app">
    <transition :name="name" :mode="modus">
      <router-view 
        @nameWasReset1="name = $event"
        @nameWasReset="name = $event" 
        @ageWasEdited="destination = $event" 
        @showWasEdited="show = $event"
        @modusInOut="modus = $event"
        @inOutModus="modus = $event"
        :userDest="destination"
        :showMe="show"
        >
      
      </router-view>
    </transition>
  </div>
</template>

<script>
  import { eventBus } from './main';
  import TweenMax from './TweenMax'; 

  export default {
    data: function() {
        return {
            name: 'fadeout',
            modus: 'out-in',
            destination: 'Where do you want to go?',
            show: 'temp'
        }
    }
  }

</script>

<style lang="scss">

$c-blue : #2979ff;

::-webkit-scrollbar { 
display: none; 
}
.slick-slide, .slick-slide *{ outline: none !important; }
html, body {
    padding: 0;
    margin: 0;
    line-height: 1.5;
    font-weight: 500;
}
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #9e9e9e;
}

h1 {
  font-weight: 900;
} 

h1, h2 { 
  font-size: 2em;
  font-family: 'Roboto';
  color: #2979ff;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  text-decoration: none;
  color: $c-blue;
  font-weight: bold;
}


// transitions 

.fadeout-leave { 

}

.fadeout-leave-active { 
  animation: fadeout 0.5s forwards;
}

.fadeout-enter {
  opacity: 0;
}

.fadeout-enter-active { 
  animation: enter 0.5s forwards;
}

.bbb-leave-active { 
  animation: venue 0.5s forwards;
}

.bbb-enter-active { 
  animation: venue2 0.5s forwards;
}



.whereto-leave-active { 
  transition: all 0.5s linear;
  .planner__input {
    top: 0 !important;
    transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    animation-fill-mode: forwards; 
    
  }
}




.safe-leave-active { 
  animation: fadeoutcd 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards ;
  //z-index: 3;
  .planner-instructions {
    // height: 56px;
    // z-index: 3;
    animation: fadeoutc 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  }
}

.safe-leave-leave-active { 
    height: 56px;
    z-index: 3;
    animation: fadeoutce 0.75s forwards;
    position: absolute;
    bottom: 0;
}

.safe-enter-active { 
  
}

.preview-leave-active { 
    animation: fadeoutce1 1s cubic-bezier(0.6, 0.04, 0.98, 0.335) forwards;
}

.preview-leave-connect-leave-active { 
    animation: gotoconnect 0.4s cubic-bezier(0.6, 0.04, 0.98, 0.335) forwards;
    .routings {

      transform: translateY(100px);
      opacity: 0;
      transition: all 0.4s cubic-bezier(0.6, 0.04, 0.98, 0.335);
    }
    .flickity-viewport {
      position: relative;
      transform: translateY(-100px);
      opacity: 0;
      transition: all 0.4s cubic-bezier(0.6, 0.04, 0.98, 0.335);
    }
    .visit-info {
      position: relative;
      transform: translateY(100px);
      opacity: 0;
      transition: all 0.4s cubic-bezier(0.6, 0.04, 0.98, 0.335);
    }
    .visit {
      background-color: transparent;
    }
}

.preview-leave-leave-active { 
    animation: previewLeave 0.5s cubic-bezier(0.6, 0.04, 0.98, 0.335) forwards;
    //opacity: 0;
    .visit {
      animation: previewLeave 0.5s cubic-bezier(0.6, 0.04, 0.98, 0.335) forwards;
      position: absolute;
      left: 0;
      background-color: #fff;
      //opacity: 0;
    }
    .navigate {
      animation: previewLeave 0.5s cubic-bezier(0.6, 0.04, 0.98, 0.335) forwards;
      position: absolute;
      left: 0;
      background-color: #fff;
    }
}

@keyframes gotoconnect {
    0% {
      opacity: 1;
      //left: 0;
    }
    100% {
      opacity: 1;
      //left: 100%;
    }
  }

@keyframes previewLeave {
    0% {
      opacity: 1;
      left: 0;
    }
    100% {
      opacity: 1;
      left: 100%;
    }
  }

@keyframes fadeoutc {
  0% {
      
  }

  100% {
      margin: 0;
      width: 100%;
      border-radius: 0;
  }
}

@keyframes fadeoutce {
  0% { 
      
      height: 100vh; 
  }
  100% {
      margin: 0 0.5em;
      width: calc(100% - 1em);
      height: 56px;
      bottom: -4em;
      transition: all 0.75s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }
}

@keyframes fadeout {
  0% {

  }
  100% {
      //transform: translateX(-150px);
      opacity: 0;
  }
}

@keyframes enter {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes venue {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    //transform: translateX(150px);
  }
}

@keyframes venue2 {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    //transform: translateX(150px);
  }
}
.intro {
  

  .flickity-page-dots {
    position: absolute;
    width: 100%;
    bottom: 4.5em;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
    line-height: 1;
    z-index: 2;
  }

  .flickity-rtl .flickity-page-dots { direction: rtl; }

  .flickity-page-dots .dot {
    height: 4px;
    width: 4px;
    display: inline-block; 
    margin: 0 3px;
    //background: #333;
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 50%;
    opacity: 0.25;
    cursor: pointer;
    bottom: 2px;
    position: relative;
    transition: width 200ms, height 200ms, bottom 200ms;
  }

  .flickity-page-dots .dot.is-selected {
    opacity: 1;
    height: 8px;
    width: 8px;
    bottom: 0px;
    position: relative;
    transition: width 200ms, height 200ms, bottom 200ms;
  }

  /* dots are lines */
  .flickity-page-dots .dot {
    
  }
  .flickity-page-dots .dot.is-selected {
    //background: $c-blue;
    background-color: transparent;
    border: 2px solid #fff;
  }

  .flickity-viewport {
    height: 100vh !important;
    z-index: 2;
      position: relative;
  }
}

.popular {
  .flickity-slider {
    margin-left: 1em;
    .planner-popular__item {
      margin-right: 0.5rem;
    }
  }
}
</style>
