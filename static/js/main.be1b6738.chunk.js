(this["webpackJsonpinfinite-monkey-genetic-algorithm"]=this["webpackJsonpinfinite-monkey-genetic-algorithm"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),r=n(4),i=n.n(r),o=n(5),u=n(1),l=n(2),c=n(7),h=n(6),p=n(8),g=function(t){var e=t.text;return s.a.createElement("h1",null,e)};g.defaultProps={text:"Default Title"};var v=g,m=function(t){var e=t.text;return s.a.createElement("h5",null,e.split("\n").map((function(t,e){return s.a.createElement(s.a.Fragment,{key:"".concat(t,"-").concat(e)},t,s.a.createElement("br",null))})))};m.defaultProps={text:"Default description"};var f=m,F=function(){function t(e){Object(u.a)(this,t),this.genes=[],this.fitness=0;for(var n=0;n<e;n++)this.genes[n]=this.getRandomChar()}return Object(l.a)(t,[{key:"calculateFitness",value:function(t){for(var e=0,n=0;n<this.genes.length;n++)this.genes[n]===t.charAt(n)&&e++;this.fitness=Math.max(.01,Math.pow(e/t.length,2))}},{key:"crossover",value:function(e){for(var n=new t(this.genes.length),a=Math.floor(Math.random(this.genes.length)),s=0;s<this.genes.length;s++)n.genes[s]=s>a?this.genes[s]:e.genes[s];return n}},{key:"mutate",value:function(t){for(var e=0;e<this.genes.length;e++)Math.random()<t&&(this.genes[e]=this.getRandomChar())}},{key:"getRandomChar",value:function(){var t=32+95*Math.random();return String.fromCharCode(t)}},{key:"getFitness",value:function(){return this.fitness}},{key:"toString",value:function(){return this.genes.join("")}}]),t}(),d=function(){function t(e,n,a){Object(u.a)(this,t),this.targetPhrase=e,this.populationSize=n,this.mutationRate=a,this.generationCount=0,this.bestPhrase="",this.bestFitness=0,this.averageFitness=0,this.currentBestFitness=0,this.currentWorstFitness=0,this.targetFitness=1,this.population=[];for(var s=0;s<n;s++)this.population.push(new F(e.length))}return Object(l.a)(t,[{key:"calculateFitness",value:function(){var t=!0,e=!1,n=void 0;try{for(var a,s=this.population[Symbol.iterator]();!(t=(a=s.next()).done);t=!0){a.value.calculateFitness(this.targetPhrase)}}catch(r){e=!0,n=r}finally{try{t||null==s.return||s.return()}finally{if(e)throw n}}}},{key:"nextGeneration",value:function(){this.calculateFitness(),this.updateStatistics();for(var t=[],e=0;e<this.populationSize;e++){var n=this.getRandomDNA(),a=this.getRandomDNA(),s=n.crossover(a);s.mutate(this.mutationRate),t.push(s)}this.population=t}},{key:"updateStatistics",value:function(){this.generationCount++,this.averageFitness=this.getTotalFitness()/this.populationSize,this.currentBestFitness=0,this.currentWorstFitness=0;var t=!0,e=!1,n=void 0;try{for(var a,s=this.population[Symbol.iterator]();!(t=(a=s.next()).done);t=!0){var r=a.value,i=r.getFitness();i>this.bestFitness&&(this.bestFitness=i,this.bestPhrase=r.toString()),i>this.currentBestFitness&&(this.currentBestFitness=i),(0===this.currentWorstFitness||i<this.currentWorstFitness)&&(this.currentWorstFitness=i)}}catch(o){e=!0,n=o}finally{try{t||null==s.return||s.return()}finally{if(e)throw n}}}},{key:"getRandomDNA",value:function(){for(var t=0,e=Math.random(),n=this.getTotalFitness();e>=0;)e-=this.population[t].getFitness()/n,t++;return this.population[t-1]}},{key:"getTotalFitness",value:function(){var t=0,e=!0,n=!1,a=void 0;try{for(var s,r=this.population[Symbol.iterator]();!(e=(s=r.next()).done);e=!0){t+=s.value.getFitness()}}catch(i){n=!0,a=i}finally{try{e||null==r.return||r.return()}finally{if(n)throw a}}return t}},{key:"isFinished",value:function(){return this.bestFitness>=this.targetFitness}},{key:"getGenerationCount",value:function(){return this.generationCount}},{key:"getBestPhrase",value:function(){return this.bestPhrase}},{key:"getBestFitness",value:function(){return this.bestFitness}},{key:"getAverageFitness",value:function(){return this.averageFitness}},{key:"getCurrentBestFitness",value:function(){return this.currentBestFitness}},{key:"getCurrentWorstFitness",value:function(){return this.currentWorstFitness}},{key:"getPopulationArr",value:function(){return this.population.map((function(t){return t.toString()}))}}]),t}(),y=function(t){var e=t.onStart;return s.a.createElement("input",{className:"btn btn-primary btn-lg",type:"button",value:"Start",onClick:e})},b=function(t){var e=t.text,n=t.value;return s.a.createElement("h5",{className:"text-break"},e,": ",n)};b.defaultProps={text:"",value:0};var E=b,C=function(t){var e=t.generationCount,n=t.bestPhrase,a=t.bestFitness,r=t.averageFitness,i=t.currentBestFitness,o=t.currentWorstFitness,u=function(t){return Math.round(100*t)+"%"};return s.a.createElement("div",null,s.a.createElement(E,{text:"Generations",value:e}),s.a.createElement(E,{text:"Best phrase",value:n}),s.a.createElement(E,{text:"Best fitness",value:u(a)}),s.a.createElement(E,{text:"Average fitness",value:u(r)}),s.a.createElement(E,{text:"Current best fitness",value:u(i)}),s.a.createElement(E,{text:"Current worst fitness",value:u(o)}))};C.defaultProps={generationCount:0,bestPhrase:"",bestFitness:0,averageFitness:0,currentBestFitness:0,currentWorstFitness:0};var P=C,k=function(t){return t.populationArr.map((function(t,e){return s.a.createElement("h5",{className:"text-break",key:e},t)}))};k.defaultProps={populationArr:[]};var x=k,S=function(t){var e=t.generationCount,n=t.bestPhrase,a=t.bestFitness,r=t.averageFitness,i=t.currentBestFitness,o=t.currentWorstFitness,u=t.populationArr;return s.a.createElement("div",{className:"row justify-content-center pt-5 pb-5"},s.a.createElement("div",{className:"col-4"},s.a.createElement(P,{generationCount:e,bestPhrase:n,bestFitness:a,averageFitness:r,currentBestFitness:i,currentWorstFitness:o})),s.a.createElement("div",{className:"col-4"},s.a.createElement(x,{populationArr:u})))};S.defaultProps={generationCount:0,bestPhrase:"",bestFitness:0,averageFitness:0,currentBestFitness:0,currentWorstFitness:0,populationArr:[]};var B=S,A=function(t){var e=t.placeholder,n=t.id,a=t.onChange;return s.a.createElement("input",{type:"text",placeholder:e,id:n,onChange:a})};A.defaultProps={placeholder:"",id:""};var W=A,w=function(t){var e=t.min,n=t.max,a=t.step,r=t.defaultValue,i=t.id,o=t.onChange;return s.a.createElement("input",{type:"range",min:e,max:n,step:a,defaultValue:r,id:i,onChange:o})};w.defaultProps={min:0,max:1,step:1,defaultValue:0,id:""};var R=w,j=function(t){var e=t.onChange,n=t.targetPhrase,a=t.populationSize,r=t.mutationRate;return s.a.createElement("div",{className:"row justify-content-center pt-3 pb-3"},s.a.createElement("div",{className:"col-6 col-lg-3 align-self-center"},s.a.createElement(W,{placeholder:"Enter target phrase",id:"targetPhrase",onChange:e}),s.a.createElement(E,{text:"Target phrase",value:n})),s.a.createElement("div",{className:"col-6 col-lg-3 align-self-center"},s.a.createElement(R,{min:10,max:1e3,step:10,defaultValue:a,id:"populationSize",onChange:e}),s.a.createElement(E,{text:"Population size",value:a})),s.a.createElement("div",{className:"col-6 col-lg-3 align-self-center"},s.a.createElement(R,{min:0,max:100,step:1,defaultValue:r,id:"mutationRate",onChange:e}),s.a.createElement(E,{text:"Mutation rate",value:r+"%"})))};j.defaultProps={targetPhrase:"",populationSize:0,mutationRate:0};var N=j,z=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(c.a)(this,Object(h.a)(e).call(this,t))).updateState=function(t){n.setState(Object(o.a)({},t.target.id,t.target.value))},n.start=function(t){t.target.blur(),n.state.targetPhrase.length>0&&(n.population=new d(n.state.targetPhrase,n.state.populationSize,.01*n.state.mutationRate),n.setState({isRunning:!0}))},n.update=function(){n.state.isRunning&&(n.population.isFinished()&&n.setState({isRunning:!1}),n.population.nextGeneration(),n.setState({generationCount:n.population.getGenerationCount(),bestPhrase:n.population.getBestPhrase(),bestFitness:n.population.getBestFitness(),averageFitness:n.population.getAverageFitness(),currentBestFitness:n.population.getCurrentBestFitness(),currentWorstFitness:n.population.getCurrentWorstFitness(),populationArr:n.population.getPopulationArr()}))},n.state={targetPhrase:"",populationSize:500,mutationRate:5,generationCount:0,bestPhrase:"",bestFitness:0,averageFitness:0,currentBestFitness:0,currentWorstFitness:0,populationArr:[],isRunning:!1},n}return Object(p.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.timer=setInterval((function(){return t.update()}),1e3/60)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var t=this;return s.a.createElement("div",{className:"App container text-center pt-5"},s.a.createElement(v,{text:"Infinite Monkey Genetic Algorithm"}),s.a.createElement(f,{text:"Demonstrates the infinite monkey theorem using genetic algorithm.\nEnter your desired phrase, adjust the evolution parameters, and watch your phrase evolve."}),s.a.createElement(N,{onChange:this.updateState,targetPhrase:this.state.targetPhrase,populationSize:this.state.populationSize,mutationRate:this.state.mutationRate}),s.a.createElement(y,{onStart:function(e){return t.start(e)}}),s.a.createElement(B,{generationCount:this.state.generationCount,bestPhrase:this.state.bestPhrase,bestFitness:this.state.bestFitness,averageFitness:this.state.averageFitness,currentBestFitness:this.state.currentBestFitness,currentWorstFitness:this.state.currentWorstFitness,populationArr:this.state.populationArr}))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14),n(15);i.a.render(s.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},9:function(t,e,n){t.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.be1b6738.chunk.js.map