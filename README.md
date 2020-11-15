# JS30
30 Day Vanilla JS Challenge with responsive layout and some minor muutations

Here you can find the JS30 challenges that I'm doing so far. you can visit Web Bos's website and Join the 30 days challenge It's for FREE! www.javascript30.com
Starter Files: https://github.com/wesbos/JavaScript30

Day 1: Drum Kit
    Issue: If we press a key repeatedly too quickly...for some reason the '.playing' class is not removed from the key.
    It can be fixed by not checking for propertyName of transitionend event(e.propertyName !== 'transform') inside removeTransition function.
    So, the function becomes :
    function removeTransition () {
       this.classList.remove('playing');
    }
