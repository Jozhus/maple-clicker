(this["webpackJsonpmaple-clicker"]=this["webpackJsonpmaple-clicker"]||[]).push([[0],{21:function(e,t,a){e.exports=a(34)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),o=a(11),r=a.n(o),l=a(3),s=a(4),i=a(7),u=a(6),m=(a(26),a(12)),h=a(38),f=a(18),p=a(17),d=a.n(p),b=a(36),v=a(37),O=a(39),k=(a(32),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(d.a,null,c.a.createElement("div",{className:"StatWindow",style:{position:"absolute"}},c.a.createElement("div",{className:"infoBox"},Object.values(this.props.charInfo).map((function(e){return Object.entries(e).map((function(e){var t=Object(f.a)(e,2),a=t[0],n=t[1];return c.a.createElement(b.a,{className:"infoRow",key:Object(O.a)()},c.a.createElement(v.a,{key:Object(O.a)()},c.a.createElement("div",{className:"fieldCol",key:Object(O.a)()},a)),c.a.createElement(v.a,{key:Object(O.a)()},c.a.createElement("div",{className:"valueCol",key:Object(O.a)()},n)))}))})))))}}]),a}(n.Component)),j=a(19),y={Henesys:[{name:"Orange Mushroom",level:10,health:187,physicalDefence:0,magicalDefence:10,pdr:.1,attack:10,loot:["common"]}]},g={common:[{name:"meso",chance:.5,amount:100}]},E=(a(33),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={name:"",level:0,health:0,physicalDefence:0,magicalDefence:0,pdr:0,attack:0,loot:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.summonRandomMonster()}},{key:"summonRandomMonster",value:function(){this.setState(Object(j.a)({},y[this.props.location][0]))}},{key:"takeDamage",value:function(){var e=this.state.health-this.props.getPlayerDamage();e<0?(this.setState({health:0}),this.die()):this.setState({health:e})}},{key:"die",value:function(){this.state.loot.forEach((function(e){g[e].forEach((function(e){console.log(e.name)}))})),this.summonRandomMonster()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"Monster"},c.a.createElement("div",{className:"info"},this.state.health),c.a.createElement("br",null),c.a.createElement("img",{className:"image",src:"https://vignette.wikia.nocookie.net/maplestory/images/0/02/Mob_Orange_Mushroom.png",onClick:function(){return e.takeDamage()}}))}}]),a}(n.Component)),D=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={statWindowOpen:!1,charInfo:{basicInfo:{username:"Jozhus",class:"Kinesis",level:253},stats:{str:4,dex:4,int:1283,luk:4},detailed:{damage:"10000-10000"}}},n.calculateDamage=n.calculateDamage.bind(Object(m.a)(n)),n}return Object(s.a)(a,[{key:"calculateDamage",value:function(){return 54}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{onClick:function(){e.setState({statWindowOpen:!e.state.statWindowOpen})}},"Stats"),this.state.statWindowOpen?c.a.createElement(k,{charInfo:this.state.charInfo}):null,c.a.createElement(E,{location:"Henesys",dropLoot:function(){},getPlayerDamage:this.calculateDamage,damagePlayer:function(){}}))}}]),a}(n.Component),w=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(D,null))}}]),a}(n.Component);r.a.render(c.a.createElement(w,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.7db5a4a6.chunk.js.map