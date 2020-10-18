/*! For license information please see 202.main.js.LICENSE.txt */
(self.webpackChunkskeleton_webcomponent_loader_homepage=self.webpackChunkskeleton_webcomponent_loader_homepage||[]).push([[202],{202:(e,s,t)=>{"use strict";t.r(s),t.d(s,{nb_skeleton:()=>a});var n,r=t(732),o=(function(e){!function(){var s={}.hasOwnProperty;function t(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=t.apply(null,r);i&&e.push(i)}else if("object"===o)for(var a in r)s.call(r,a)&&r[a]&&e.push(a)}}return e.join(" ")}e.exports?(t.default=t,e.exports=t):window.classNames=t}()}(n={path:undefined,exports:{},require:function(e,s){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}}),n.exports);const i=["progress","progress-dark","pulse","false"],a=class{constructor(e){(0,r.r)(this,e),this.count=1,this.appearance="",this.animation="progress",this.customStyles={},this.showWarnings=!0,this.items=[]}componentWillLoad(){if(this.items.length=this.count,this.items.fill(1),i.includes(this.animation)||(this.showWarnings&&console.warn(`\`Skeleton\` need to receive 'animation' as: ${i.join(", ")}. Forcing default to "progress".`),this.animation="progress"),this.customStyles&&"string"==typeof this.customStyles)try{this.customStyles=JSON.parse(this.customStyles)}catch(e){this.showWarnings&&console.warn("can't parse styles",this.customStyles)}}get style(){return"object"==typeof this.customStyles?this.customStyles:{}}render(){return this.items.map(((e,s)=>(0,r.h)("span",{key:s,class:o(["skeleton",{circle:"circle"===this.appearance,progress:"progress"===this.animation,"progress-dark":"progress-dark"===this.animation,pulse:"pulse"===this.animation}]),"aria-busy":"true","aria-valuemin":"0","aria-valuemax":"100","aria-valuetext":"Loading...",role:"progressbar",tabindex:"0",style:this.style})))}};a.style=".skeleton.sc-nb-skeleton{box-sizing:border-box;outline:none;overflow:hidden;position:relative;background:var(--skeleton-background, #eff1f6) no-repeat;border-radius:var(--skeleton-border-radius, 4px);width:var(--skeleton-width, 100%);height:var(--skeleton-height, 20px);display:inline-block;margin-bottom:var(--skeleton-margin-bottom, 10px);will-change:transform}.skeleton.sc-nb-skeleton:after,.skeleton.sc-nb-skeleton:before{box-sizing:border-box}.skeleton.circle.sc-nb-skeleton{width:var(--skeleton-width, 40px);height:var(--skeleton-height, 40px);margin:var(--skeleton-margin-bottom, 5px);border-radius:var(--skeleton-border-radius, 50%)}.skeleton.progress.sc-nb-skeleton,.skeleton.progress-dark.sc-nb-skeleton{animation:progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;background-size:200px 100%}.skeleton.progress.sc-nb-skeleton{background-image:linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0))}.skeleton.progress-dark.sc-nb-skeleton{background-image:linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.2), transparent)}.skeleton.pulse.sc-nb-skeleton{animation:pulse 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;animation-delay:0.5s}@media (prefers-reduced-motion: reduce){.skeleton.pulse.sc-nb-skeleton,.skeleton.progress-dark.sc-nb-skeleton,.skeleton.progress.sc-nb-skeleton{animation:none}.skeleton.progress.sc-nb-skeleton,.skeleton.progress-dark.sc-nb-skeleton{background-image:none}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}"}}]);