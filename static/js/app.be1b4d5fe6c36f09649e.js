webpackJsonp([1],{NHnr:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=o("VU/8")({name:"App"},s,!1,function(e){o("gsu9")},null,null).exports,r=o("/ocq"),i=o("mvHQ"),u=o.n(i),c={name:"ToDo",data:function(){return{message:"Hello Ben",todos:[]}},created:function(){console.log("Hey there");var e=localStorage.getItem("todos")||"[]";this.todos=JSON.parse(e)},methods:{addToDo:function(){if(this.message){var e={text:this.message};this.todos.push(e);var t=u()(this.todos);localStorage.setItem("todos",t),this.message=""}return!1},removeTodo:function(e){}}},l={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"todo"}},[o("h1",[e._v("To-Do List "+e._s(e.message)+" ")]),e._v(" "),o("form",{on:{submit:e.addToDo}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{type:"text"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),e._v(" "),o("ul",e._l(e.todos,function(t,n){return o("li",[e._v("\n\t\t\t"+e._s(t.text)+"\n\t\t\t"),o("button",{on:{click:function(t){e.removeTodo(n)}}},[e._v("Remove")])])}))])},staticRenderFns:[]};var d=o("VU/8")(c,l,!1,function(e){o("h+z5")},null,null).exports;n.a.use(r.a);var m=new r.a({routes:[{path:"/",name:"ToDo",component:d}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:m,components:{App:a},template:"<App/>"})},gsu9:function(e,t){},"h+z5":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.be1b4d5fe6c36f09649e.js.map