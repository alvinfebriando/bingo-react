(this.webpackJsonpbingo=this.webpackJsonpbingo||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),s=n.n(c),i=(n(14),n(6)),l=n(2),u=n(3),o=n(1),h=n(4),m=n(5),d=(n(15),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleClick=a.handleClick.bind(Object(o.a)(a)),a}return Object(u.a)(n,[{key:"handleClick",value:function(e){!0===this.props.isPlaying&&!1===this.props.selected&&this.props.select(e.target.getAttribute("number"))}},{key:"render",value:function(){var e=this.props,t=e.number,n=e.selected,a=e.isPlaying;return r.a.createElement("div",{number:t,selected:n,className:"number ".concat(n?"selected":""," ").concat(a?"":"not-playing"),onClick:this.handleClick},t)}}]),n}(a.Component)),f=(n(16),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.number,n=e.selected,a=e.select,c=e.isPlaying;return r.a.createElement("div",{className:"bingo"},t.map((function(e,t){return r.a.createElement(d,{isPlaying:c,key:e,number:e,selected:n[t],select:a})})))}}]),n}(a.Component)),b=function(e){for(var t=Object(i.a)(e),n=t.length;n>0;){var a=Math.floor(Math.random()*n),r=t[--n];t[n]=t[a],t[a]=r}return t},p=(n(17),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Info"},r.a.createElement("div",null,r.a.createElement("p",{className:"Info-player-data"},this.props.name),r.a.createElement("p",{className:"Info-player-data"},"Score: ",this.props.score)))}}]),n}(a.Component)),y=(n(18),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;Object(l.a)(this,n),a=t.call(this,e);for(var r=[],c=[],s=1;s<=25;s++)r.push(s),c.push(!1);return a.state={num1:b(r),num2:b(r),selected1:[].concat(c),selected2:[].concat(c),isPlaying1:!0,isPlaying2:!1,score1:0,score2:0},a.select=a.select.bind(Object(o.a)(a)),a.resetNumber=a.resetNumber.bind(Object(o.a)(a)),a.resetChecked=a.resetChecked.bind(Object(o.a)(a)),a.checkWinner=a.checkWinner.bind(Object(o.a)(a)),a}return Object(u.a)(n,[{key:"select",value:function(e){var t=this.state.num1.findIndex((function(t){return parseInt(e)===parseInt(t)})),n=this.state.num2.findIndex((function(t){return parseInt(e)===parseInt(t)}));this.setState((function(e){return{selected1:[].concat(Object(i.a)(e.selected1.slice(0,t)),[!0],Object(i.a)(e.selected1.slice(t+1))),selected2:[].concat(Object(i.a)(e.selected2.slice(0,n)),[!0],Object(i.a)(e.selected2.slice(n+1))),isPlaying1:!e.isPlaying1,isPlaying2:!e.isPlaying2}}),this.checkWinner)}},{key:"resetNumber",value:function(){for(var e=[],t=[],n=1;n<=25;n++)e.push(n),t.push(!1);this.setState({num1:b(e),num2:b(e),selected1:[].concat(t),selected2:[].concat(t),isPlaying1:!0,isPlaying2:!1,score1:0,score2:0})}},{key:"resetChecked",value:function(){for(var e=[],t=1;t<=25;t++)e.push(!1);this.setState({selected1:[].concat(e),selected2:[].concat(e),isPlaying1:!0,isPlaying2:!1,score1:0,score2:0})}},{key:"checkWinner",value:function(){for(var e=this,t=this.state,n=t.selected1,a=t.selected2,r=0,c=0,s=[],i=[],l=[],u=[],o=0;o<25;o+=5){n.slice(o,o+5).every((function(e){return!0===e}))&&r++,a.slice(o,o+5).every((function(e){return!0===e}))&&c++}for(var h=0;h<5;h++){for(var m=[],d=[],f=h;f<25;f+=5)m.push(n[f]),d.push(a[f]);m.every((function(e){return!0===e}))&&r++,d.every((function(e){return!0===e}))&&c++}for(var b=0;b<25;b+=6)s.push(n[b]),i.push(a[b]);s.every((function(e){return!0===e}))&&r++,i.every((function(e){return!0===e}))&&c++;for(var p=4;p<=20;p+=4)l.push(n[p]),u.push(a[p]);l.every((function(e){return!0===e}))&&r++,u.every((function(e){return!0===e}))&&c++,this.setState((function(){return{score1:r,score2:c}}),(function(){e.state.score1>=5&&e.state.score1===e.state.score2?(alert("Draw"),e.resetNumber()):e.state.score1>=5?(alert("Player 1 win"),e.resetNumber()):e.state.score2>=5&&(alert("Player 2 win"),e.resetNumber())}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Game"},r.a.createElement("h1",{id:"title"},"Bingo"),r.a.createElement("div",{className:"reset"},r.a.createElement("button",{onClick:this.resetNumber},"Reset Number"),r.a.createElement("button",{onClick:this.resetChecked},"Clear Selection")),r.a.createElement("div",{className:"turn-info"},"Player ",this.state.isPlaying1?"1":"2"," turn"),r.a.createElement("div",{className:"container"},r.a.createElement(p,{name:"Player 1",score:this.state.score1}),r.a.createElement(f,{isPlaying:this.state.isPlaying1,number:this.state.num1,selected:this.state.selected1,select:this.select}),r.a.createElement(f,{isPlaying:this.state.isPlaying2,number:this.state.num2,selected:this.state.selected2,select:this.select}),r.a.createElement(p,{name:"Player 2",score:this.state.score2})))}}]),n}(a.Component)),v=function(){return r.a.createElement("div",{id:"App"},r.a.createElement(y,null))};s.a.render(r.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.03dc3fba.chunk.js.map