(this["webpackJsonpmaple-clicker"]=this["webpackJsonpmaple-clicker"]||[]).push([[0],{21:function(e){e.exports=JSON.parse('{"Lith Harbor":[{"name":"Snail","level":1,"health":15,"exp":3,"physicalDefence":0,"magicalDefence":0,"pdr":0.1,"attack":2,"loot":["common"],"image":"https://vignette.wikia.nocookie.net/maplestory/images/6/6c/Mob_Snail.png"}],"Henesys":[{"name":"Orange Mushroom","level":10,"health":187,"exp":23,"physicalDefence":0,"magicalDefence":10,"pdr":0.1,"attack":10,"loot":["common","low_level_gear"],"image":"https://vignette.wikia.nocookie.net/maplestory/images/0/02/Mob_Orange_Mushroom.png"},{"name":"Green Mushroom","level":10,"health":187,"exp":23,"physicalDefence":12,"magicalDefence":40,"pdr":0.05,"attack":47,"loot":["common","low_level_gear"],"image":"https://vignette.wikia.nocookie.net/maplestory/images/9/92/Mob_Green_Mushroom.png"},{"name":"Horny Mushroom","level":12,"health":262,"exp":29,"physicalDefence":30,"magicalDefence":0,"pdr":0.1,"attack":51,"loot":["common","low_level_gear"],"image":"https://vignette.wikia.nocookie.net/maplestory/images/3/3c/Mob_Horny_Mushroom.png"},{"name":"Blue Mushroom","level":14,"health":337,"exp":33,"physicalDefence":10,"magicalDefence":60,"pdr":0.1,"attack":58,"loot":["common","low_level_gear","lol"],"image":"https://vignette.wikia.nocookie.net/maplestory/images/a/ad/Mob_Blue_Mushroom.png"}]}')},22:function(e){e.exports=JSON.parse('{"common":[{"name":"meso","chance":0.5,"minAmount":50,"maxAmount":100},{"name":"red_potion","chance":0.3,"minAmount":1,"maxAmount":5}],"low_level_gear":[{"name":"wooden_buckler","chance":0.1,"minAmount":1,"maxAmount":1},{"name":"blue_cloth_pants","chance":0.1,"minAmount":1,"maxAmount":1},{"name":"green_ghetto_beanie","chance":0.1,"minAmount":1,"maxAmount":1}],"lol":[{"name":"arcane_claw","chance":1,"minAmount":1,"maxAmount":1}]}')},23:function(e){e.exports=JSON.parse('{"meso":{"itemName":"Meso","stackable":true,"type":"other","amount":0,"image":"https://vignette.wikia.nocookie.net/cxzcxzcedfeqwfdew/images/0/0e/Meso_Coin.png","sellPrice":1},"red_potion":{"itemName":"Red Potion","stackable":true,"type":"consumable","amount":0,"image":"https://vignette.wikia.nocookie.net/maplestory/images/c/cf/Use_Red_Potion.png","sellPrice":3},"wooden_buckler":{"itemName":"Wooden Buckler","stackable":false,"type":"equipment","amount":0,"image":"https://vignette.wikia.nocookie.net/maplestory/images/5/58/Eqp_Wooden_Buckler.png","sellPrice":400,"levelReq":10,"slots":7,"stars":0,"maxStars":5,"potentialTier":"none","baseStats":{"defence":10}},"blue_cloth_pants":{"itemName":"Blue Cloth Pants","stackable":false,"type":"equipment","amount":0,"image":"https://vignette.wikia.nocookie.net/maplestory/images/6/66/Eqp_Blue_Cloth_Pants_%28Male%29.png","sellPrice":300,"levelReq":10,"slots":7,"stars":0,"maxStars":5,"baseStats":{"defence":9}},"green_ghetto_beanie":{"itemName":"Green Ghetto Beanie","stackable":false,"type":"equipment","amount":0,"image":"https://vignette.wikia.nocookie.net/maplestory/images/b/b9/Eqp_Green_Ghetto_Beanie.png","sellPrice":100,"levelReq":10,"slots":7,"stars":0,"maxStars":5,"baseStats":{"defence":9}},"arcane_claw":{"itemName":"Arcane Umbra Guards","stackable":false,"type":"equipment","amount":0,"image":"https://vignette.wikia.nocookie.net/maplestory/images/6/67/Eqp_Arcane_Umbra_Guards.png","sellPrice":1,"levelReq":200,"slots":8,"stars":17,"maxStars":25,"baseStats":{"dex":100,"luk":100,"attk":149,"bossDamage":0.3,"ied":0.2},"starBonuses":{"dex":70,"luk":70,"maxHp":255,"maxMp":255,"attk":87}}}')},27:function(e,t,a){e.exports=a(50)},37:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),s=a(12),r=a.n(s),c=a(2),i=a(3),m=a(5),l=a(4),u=a(6),p=a(7),h=a(53),f=a(8),d=a(20),g=a.n(d),b=a(52),v=a(54),k=(a(37),function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"formatBasicInfo",value:function(){return{name:this.props.charInfo.basicInfo.name,class:this.props.charInfo.basicInfo.class,hp:"".concat(this.props.charInfo.basicInfo.hpCurr," / ").concat(this.props.charInfo.basicInfo.hpMax),mp:"".concat(this.props.charInfo.basicInfo.mpCurr," / ").concat(this.props.charInfo.basicInfo.mpMax)}}},{key:"formatStats",value:function(){var e={};return Object.entries(this.props.charInfo.stats).forEach((function(t){var a=Object(f.a)(t,2),n=a[0],o=a[1];e[n]="".concat(o," (").concat(o,"+0)")})),e}},{key:"createInfoRows",value:function(){return Object.values({basicInfo:this.formatBasicInfo(),stats:this.formatStats()}).map((function(e){return Object.entries(e).map((function(e){var t=Object(f.a)(e,2),a=t[0],n=t[1];return o.a.createElement(b.a,{className:"infoRow",key:Object(v.a)()},o.a.createElement("div",{className:"fieldCol",key:Object(v.a)()},a.toUpperCase()),o.a.createElement("div",{className:"valueCol",key:Object(v.a)()},n))}))}))}},{key:"render",value:function(){return o.a.createElement(g.a,{handle:".handle"},o.a.createElement("div",{className:"StatWindow",style:{position:"absolute"}},o.a.createElement("div",{className:"handle noselect"},"CHARACTER STAT"),o.a.createElement("div",{className:"infoBox"},this.createInfoRows())))}}]),a}(n.Component)),y=a(21),O=a(22),E=a(23),j=y,_=O,w=E,x=new(a(24).Chance),N=(a(43),function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={name:"",level:0,health:0,exp:0,physicalDefence:0,magicalDefence:0,pdr:0,attack:0,loot:[],image:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.summonRandomMonster()}},{key:"summonRandomMonster",value:function(){this.setState(Object(u.a)({},this.props.monsterList[Math.floor(Math.random()*this.props.monsterList.length)]))}},{key:"takeDamage",value:function(){var e=this.state.health-this.props.getPlayerDamage();e<=0?(this.setState({health:0}),this.die()):this.setState({health:e}),this.props.damagePlayer(this.state.attack)}},{key:"die",value:function(){var e=this;this.state.loot.forEach((function(t){_[t].forEach((function(t){x.weighted([!0,!1],[t.chance,1-t.chance])&&e.props.dropLoot(t.name,x.integer({min:t.minAmount,max:t.maxAmount}))}))})),this.summonRandomMonster()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Monster noselect",onClick:function(){return e.takeDamage()}},o.a.createElement("div",{className:"info"},this.state.health),o.a.createElement("br",null),o.a.createElement("img",{className:"image",src:this.state.image,alt:this.state.name}),o.a.createElement("div",{className:"info"},this.state.name))}}]),a}(n.Component));var I=a(25),S=(a(44),function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"drawStars",value:function(){if("equipment"!==this.props.item.type)return null;var e=this.props.item,t=e.stars,a=e.maxStars,n=("\u2605".repeat(t)+"\u2606".repeat(a-t)).replace(/(.{5})/g,"$1 ");return o.a.createElement("div",{className:"itemStars",key:Object(v.a)()},n)}},{key:"drawStats",value:function(){if("equipment"!==this.props.item.type)return null;var e=this.props.item,t=Object(u.a)({},e.baseStats);return e.scrollBonuses&&Object.entries(e.scrollBonuses).forEach((function(e){var a=Object(f.a)(e,2),n=a[0],o=(a[1],n);t[o]||(t[o]=0)})),e.starBonuses&&Object.entries(e.starBonuses).forEach((function(e){var a=Object(f.a)(e,2),n=a[0],o=(a[1],n);t[o]||(t[o]=0)})),Object.entries(t).map((function(t){var a,n,s=Object(f.a)(t,2),r=s[0],c=s[1],i=r,m=0,l=c;switch(r){case"str":case"dex":case"int":case"luk":i=r.toUpperCase();break;case"attk":i="Attack Power";break;case"mattk":i="Magic Attack";break;case"bossDamage":i="Boss Damage";break;case"ied":i="Ignored Enemy DEF";break;default:i=r[0].toUpperCase()+r.slice(1)}return e.scrollBonuses&&e.scrollBonuses[r]&&(m+=e.scrollBonuses[r]),e.starBonuses&&e.starBonuses[r]&&(m+=e.starBonuses[r]),l+=m,a=m?" (".concat(c," +").concat(m,")"):"",n="bossDamage"===r||"ied"===r?"".concat(100*l,"%").concat(a):"".concat(l).concat(a),o.a.createElement("div",{className:"itemExaminerStatInfo",key:Object(v.a)()},"".concat(i,": +").concat(n))}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"itemExaminer"},this.drawStars(),o.a.createElement("div",{className:"itemExaminerName"},"\u2022 ",this.props.item.itemName),o.a.createElement("hr",null),o.a.createElement("div",{className:"itemExaminerImageContainer"},o.a.createElement("img",{className:"itemExaminerImage",src:this.props.item.image,alt:this.props.item.itemName})),o.a.createElement("hr",null),this.drawStats())}}]),a}(n.Component)),D=(a(45),a(46),function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={id:Object(v.a)()},n}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"itemBox","data-tip":!0,"data-for":this.state.id},o.a.createElement("div",{className:"placementBox"},o.a.createElement("img",{className:"itemImage",src:this.props.item.image,alt:this.props.item.itemName})),this.props.item.stackable?o.a.createElement("div",{className:"placementBox"},o.a.createElement("div",{className:"itemAmount"},this.props.item.amount)):null),o.a.createElement(I.a,{className:"tooltip",id:this.state.id},o.a.createElement(S,{item:this.props.item})))}}]),a}(n.Component)),M=(a(47),function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={groundLoot:[],renderedLoot:[]},n.dropLoot=n.dropLoot.bind(Object(p.a)(n)),n}return Object(i.a)(a,[{key:"dropLoot",value:function(e,t){var a;try{a=function(e,t){if(!(e in w))throw new Error("".concat(e," does not exist."));if(t<1)throw new Error("Invalid amount.");return t>1&&!w[e].stackable&&(t=1),Object(u.a)(Object(u.a)({},w[e]),{},{amount:t})}(e,t)}catch(r){return void console.error(r)}var n=this.state.groundLoot,s=this.state.renderedLoot;n.every((function(e,t){return!a.stackable||e.itemName!==a.itemName||(e.amount+=a.amount,s[t]=o.a.createElement(D,{key:Object(v.a)(),item:e}),!1)}))&&(n.push(a),s.push(o.a.createElement(D,{key:Object(v.a)(),item:a}))),this.setState({groundLoot:n,renderedLoot:s})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(N,{monsterList:j[this.props.location],dropLoot:this.dropLoot,getPlayerDamage:this.props.getPlayerDamage,damagePlayer:this.props.damagePlayer}),o.a.createElement("div",{className:"ground noselect"},o.a.createElement("div",{className:"title"},this.props.location),this.state.renderedLoot.map((function(e){return e}))))}}]),a}(n.Component)),B=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={statWindowOpen:!1,charInfo:{basicInfo:{name:"(You)",class:"Swordsman",level:1,hpMax:1e3,mpMax:1e3,hpCurr:1e3,mpCurr:1e3},stats:{str:4,dex:4,int:4,luk:4},detailed:{damage:"54 ~ 54"}}},n.calculateDamage=n.calculateDamage.bind(Object(p.a)(n)),n.takeDamage=n.takeDamage.bind(Object(p.a)(n)),n}return Object(i.a)(a,[{key:"calculateDamage",value:function(){return 50}},{key:"takeDamage",value:function(e){var t=Object(u.a)({},this.state.charInfo),a=t.basicInfo.hpCurr-e;a<=0&&(a=0,this.die()),t.basicInfo.hpCurr=a,this.setState({charInfo:t})}},{key:"die",value:function(){console.log("You died")}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,{onClick:function(){e.setState({statWindowOpen:!e.state.statWindowOpen})}},"Stats"),this.state.statWindowOpen?o.a.createElement(k,{charInfo:this.state.charInfo}):null,o.a.createElement(M,{location:"Henesys",damagePlayer:this.takeDamage,getPlayerDamage:this.calculateDamage}))}}]),a}(n.Component),C=(a(48),a(49),function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement(B,null)}}]),a}(n.Component));r.a.render(o.a.createElement(C,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.d478bff9.chunk.js.map