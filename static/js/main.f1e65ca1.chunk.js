(this.webpackJsonpbingo=this.webpackJsonpbingo||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(8),r=n.n(i),s=(n(14),n(2)),u=n(3),h=n(4),o=n(1),l=n(5),k=n(6),d=(n(15),function(e){Object(k.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this,e)).handleClick=c.handleClick.bind(Object(o.a)(c)),c}return Object(h.a)(n,[{key:"handleClick",value:function(e){!0===this.props.isPlaying&&!1===this.props.checked&&this.props.check(e.target.getAttribute("number"))}},{key:"render",value:function(){var e=this.props,t=e.number,n=e.checked,c=e.isPlaying;return a.a.createElement("div",{number:t,checked:n,className:"number ".concat(n?"checked":""," ").concat(c?"":"not-playing"),onClick:this.handleClick},t)}}]),n}(c.Component)),m=(n(16),function(e){Object(k.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.number,n=e.checked,c=e.check,i=e.isPlaying;return a.a.createElement("div",{className:"bingo"},t.map((function(e,t){return a.a.createElement(d,{isPlaying:i,key:e,number:e,checked:n[t],check:c})})))}}]),n}(c.Component)),b=function(e){for(var t=Object(s.a)(e),n=t.length;n>0;){var c=Math.floor(Math.random()*n),a=t[--n];t[n]=t[c],t[c]=a}return t},f=function(e){Object(k.a)(n,e);var t=Object(l.a)(n);function n(e){var c;Object(u.a)(this,n),c=t.call(this,e);for(var a=[],i=[],r=1;r<=25;r++)a.push(r),i.push(!1);return c.state={num1:b(a),num2:b(a),checked1:[].concat(i),checked2:[].concat(i),isPlaying1:!0,isPlaying2:!1,count1:0,count2:0},c.check=c.check.bind(Object(o.a)(c)),c.resetNumber=c.resetNumber.bind(Object(o.a)(c)),c.resetChecked=c.resetChecked.bind(Object(o.a)(c)),c.checkWinner=c.checkWinner.bind(Object(o.a)(c)),c}return Object(h.a)(n,[{key:"check",value:function(e){var t=this.state.num1.findIndex((function(t){return parseInt(e)===parseInt(t)})),n=this.state.num2.findIndex((function(t){return parseInt(e)===parseInt(t)}));this.setState((function(e){return{checked1:[].concat(Object(s.a)(e.checked1.slice(0,t)),[!0],Object(s.a)(e.checked1.slice(t+1))),checked2:[].concat(Object(s.a)(e.checked2.slice(0,n)),[!0],Object(s.a)(e.checked2.slice(n+1))),isPlaying1:!e.isPlaying1,isPlaying2:!e.isPlaying2}}),this.checkWinner)}},{key:"resetNumber",value:function(){for(var e=[],t=[],n=1;n<=25;n++)e.push(n),t.push(!1);this.setState({num1:b(e),num2:b(e),checked1:[].concat(t),checked2:[].concat(t),isPlaying1:!0,isPlaying2:!1,count1:0,count2:0})}},{key:"resetChecked",value:function(){for(var e=[],t=1;t<=25;t++)e.push(!1);this.setState({checked1:[].concat(e),checked2:[].concat(e),isPlaying1:!0,isPlaying2:!1,count1:0,count2:0})}},{key:"checkWinner",value:function(){for(var e=this.state,t=e.checked1,n=e.checked2,c=0,a=0,i=[],r=[],s=[],u=[],h=0;h<25;h+=5){t.slice(h,h+5).every((function(e){return!0===e}))&&c++,n.slice(h,h+5).every((function(e){return!0===e}))&&a++}for(var o=0;o<5;o++){for(var l=[],k=[],d=o;d<25;d+=5)l.push(t[d]),k.push(n[d]);l.every((function(e){return!0===e}))&&c++,k.every((function(e){return!0===e}))&&a++}for(var m=0;m<25;m+=6)i.push(t[m]),r.push(n[m]);i.every((function(e){return!0===e}))&&c++,r.every((function(e){return!0===e}))&&a++;for(var b=4;b<=20;b+=4)s.push(t[b]),u.push(n[b]);s.every((function(e){return!0===e}))&&c++,u.every((function(e){return!0===e}))&&a++,this.setState({count1:c,count2:a})}},{key:"render",value:function(){return a.a.createElement("div",{id:"main"},a.a.createElement("h1",{id:"title"},"Bingo"),a.a.createElement("div",{className:"reset"},a.a.createElement("button",{onClick:this.resetNumber},"Reset Number"),a.a.createElement("button",{onClick:this.resetChecked},"Clear Selection")),a.a.createElement("div",{className:"turn-info"},"Player ",this.state.isPlaying1?"1":"2"," turn"),a.a.createElement("div",{className:"container"},this.state.count1,a.a.createElement(m,{isPlaying:this.state.isPlaying1,number:this.state.num1,checked:this.state.checked1,check:this.check}),a.a.createElement(m,{isPlaying:this.state.isPlaying2,number:this.state.num2,checked:this.state.checked2,check:this.check}),this.state.count2))}}]),n}(c.Component),v=function(){return a.a.createElement("div",{id:"main"},a.a.createElement(f,null))};r.a.render(a.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.f1e65ca1.chunk.js.map