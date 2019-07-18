(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(89)},38:function(e,t,a){},40:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(27),c=a.n(s),r=(a(38),a(32)),i=a(10),u=a.n(i),l=a(11),h=a(3),k=a(4),m=a(7),p=a(5),d=a(8),j=a(6),f=(a(40),a(12)),b=a(14),v=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"JokeVote"},o.a.createElement(f.a,{className:"JokeVote-arrow JokeVote-arrow-up",icon:b.b,onClick:function(){return e.props.handleVote("up")}}),o.a.createElement("div",{className:"JokeVote-voteContainer JokeVote-voteContainer-".concat(this.props.curEmotion)},this.props.curVote),o.a.createElement(f.a,{className:"JokeVote-arrow JokeVote-arrow-down",icon:b.a,onClick:function(){return e.props.handleVote("down")}}))}}]),t}(n.Component),O=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h5",null,this.props.text))}}]),t}(n.Component),w=a(28),J=a.n(w),g=(a(46),function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"JokeIcon"},o.a.createElement(J.a,{type:this.props.curVote}))}}]),t}(n.Component)),E=(a(47),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={jokeVote:0,status:{sad:"sad",angry:"angry",ok:"yay",wow:"wow",laugh:"haha"}},a.handleVote=a.handleVote.bind(Object(d.a)(a)),a}return Object(j.a)(t,e),Object(k.a)(t,[{key:"handleVote",value:function(e){var t=this.state.jokeVote;"up"===e?t++:t--,this.setState({jokeVote:t})}},{key:"render",value:function(){var e;return e=this.state.jokeVote<-5?this.state.status.angry:this.state.jokeVote<0?this.state.status.sad:0===this.state.jokeVote?this.state.status.ok:this.state.jokeVote>5?this.state.status.laugh:this.state.status.wow,o.a.createElement("div",{className:"JokeRow"},o.a.createElement(v,{className:"JokeRow-buttons",curVote:this.state.jokeVote,curEmotion:e,handleVote:this.handleVote}),o.a.createElement(O,{className:"JokeRow-text",text:this.props.data.joke}),o.a.createElement(g,{curVote:e}))}}]),t}(n.Component)),V=a(29),y=a.n(V),N=a(30),x=a.n(N),C=a(31),S=a.n(C),M=(a(87),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={jokesObj:JSON.parse(window.localStorage.getItem("jokes")||"[]"),isLoading:!1},a.seenJokes=new Set(a.state.jokesObj.map(function(e){return e.joke})),a.fetchJokes=a.fetchJokes.bind(Object(d.a)(a)),a}return Object(j.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:0===this.state.jokesObj.length&&this.fetchJokes();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchJokes",value:function(){var e=Object(l.a)(u.a.mark(function e(){var t,a,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,this.setState({isLoading:!0}),t=[];case 3:if(!(t.length<this.props.numJokesToGet)){e.next=11;break}return e.next=6,y.a.get("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}});case 6:a=e.sent,n=a.data,this.seenJokes.has(n.joke)||t.push(a.data),e.next=3;break;case 11:this.setState({jokesObj:[].concat(Object(r.a)(this.state.jokesObj),t),isLoading:!1}),window.localStorage.setItem("jokes",JSON.stringify(t)),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),alert(e.t0),this.setState({isLoading:!1});case 19:case"end":return e.stop()}},e,this,[[0,15]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("div",{className:"JokeMachine"},o.a.createElement("div",{className:"JokeMachine-sidebar"},o.a.createElement("h1",{className:"JokeMachine-title"},o.a.createElement("span",null,"Dad")," Jokes"),o.a.createElement("img",{alt:"laughing icon",src:"https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"}),o.a.createElement("button",{className:"JokeMachine-getmore",onClick:this.fetchJokes},"Fetch Jokes")),o.a.createElement("div",{className:"JokeMachine-jokes"},this.state.isLoading?o.a.createElement("div",{className:"JokeMachine-loaderBox"},o.a.createElement(x.a,{type:"Puff",color:"#9575CD",height:"130",width:"130"})):this.state.jokesObj.map(function(e){return o.a.createElement(E,{key:S()(),data:e})})))}}]),t}(n.Component));M.defaultProps={numJokesToGet:10};var L=M;a(88);var I=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.4ef1d59e.chunk.js.map