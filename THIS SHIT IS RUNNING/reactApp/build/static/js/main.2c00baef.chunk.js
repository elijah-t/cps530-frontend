(this["webpackJsonptodolist-frontend"]=this["webpackJsonptodolist-frontend"]||[]).push([[0],{31:function(e,t,a){e.exports=a(64)},37:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(9),r=a.n(c),i=(a(36),a(37),a(12)),l=a(13),s=a(15),m=a(14),d=a(16),u=a(10),p=a(74),h=a(66),f=a(67),v=a(68),b=a(69),g=a(70),E=a(71),O=a(72),y=a(73);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,o=t.value;"checkbox"===e.target.type&&(o=e.target.checked);var c=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(Object(a),!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.state.activeItem,Object(u.a)({},n,o));a.setState({activeItem:c})},a.state={activeItem:a.props.activeItem},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.toggle,n=t.onSave;return o.a.createElement(p.a,{isOpen:!0,toggle:a},o.a.createElement(h.a,{toggle:a}," Todo Item "),o.a.createElement(f.a,null,o.a.createElement(v.a,null,o.a.createElement(b.a,null,o.a.createElement(g.a,{for:"title"},"Title"),o.a.createElement(E.a,{type:"text",name:"title",value:this.state.activeItem.title,onChange:this.handleChange,placeholder:"Enter Todo Title"})),o.a.createElement(b.a,null,o.a.createElement(g.a,{for:"description"},"Description"),o.a.createElement(E.a,{type:"text",name:"description",value:this.state.activeItem.description,onChange:this.handleChange,placeholder:"Enter Todo description"})),o.a.createElement(b.a,{check:!0},o.a.createElement(g.a,{for:"completed"},o.a.createElement(E.a,{type:"checkbox",name:"completed",checked:this.state.activeItem.completed,onChange:this.handleChange}),"Completed")))),o.a.createElement(O.a,null,o.a.createElement(y.a,{color:"success",onClick:function(){return n(e.state.activeItem)}},"Save")))}}]),t}(n.Component),w=a(11),I=a.n(w),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).refreshList=function(){I.a.get("http://localhost:8000/api/todos/").then((function(e){return a.setState({todoList:e.data})})).catch((function(e){return console.log(e)}))},a.displayCompleted=function(e){return e?a.setState({viewCompleted:!0}):a.setState({viewCompleted:!1})},a.renderTabList=function(){return o.a.createElement("div",{className:"my-5 tab-list"},o.a.createElement("span",{onClick:function(){return a.displayCompleted(!0)},className:a.state.viewCompleted?"active":""},"complete"),o.a.createElement("span",{onClick:function(){return a.displayCompleted(!1)},className:a.state.viewCompleted?"":"active"},"Incomplete"))},a.renderItems=function(){var e=a.state.viewCompleted;return a.state.todoList.filter((function(t){return t.completed===e})).map((function(e){return o.a.createElement("li",{key:e.id,className:"list-group-item d-flex justify-content-between align-items-center"},o.a.createElement("span",{className:"todo-title mr-2 ".concat(a.state.viewCompleted?"completed-todo":""),title:e.description},e.title),o.a.createElement("span",null,o.a.createElement("button",{onClick:function(){return a.editItem(e)},className:"btn btn-secondary mr-2"}," ","Edit"," "),o.a.createElement("button",{onClick:function(){return a.handleDelete(e)},className:"btn btn-danger"},"Delete"," ")))}))},a.toggle=function(){a.setState({modal:!a.state.modal})},a.handleSubmit=function(e){a.toggle(),e.id?I.a.put("http://localhost:8000/api/todos/".concat(e.id,"/"),e).then((function(e){return a.refreshList()})):I.a.post("http://localhost:8000/api/todos/",e).then((function(e){return a.refreshList()}))},a.handleDelete=function(e){I.a.delete("http://localhost:8000/api/todos/".concat(e.id)).then((function(e){return a.refreshList()}))},a.createItem=function(){a.setState({activeItem:{title:"",description:"",completed:!1},modal:!a.state.modal})},a.editItem=function(e){a.setState({activeItem:e,modal:!a.state.modal})},a.state={viewCompleted:!1,activeItem:{title:"",description:"",completed:!1},todoList:[]},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.refreshList()}},{key:"render",value:function(){return o.a.createElement("main",{className:"content"},o.a.createElement("h1",{className:"text-white text-uppercase text-center my-4"},"Todo app"),o.a.createElement("div",{className:"row "},o.a.createElement("div",{className:"col-md-6 col-sm-10 mx-auto p-0"},o.a.createElement("div",{className:"card p-3"},o.a.createElement("div",{className:""},o.a.createElement("button",{onClick:this.createItem,className:"btn btn-primary"},"Add task")),this.renderTabList(),o.a.createElement("ul",{className:"list-group list-group-flush"},this.renderItems())))),this.state.modal?o.a.createElement(j,{activeItem:this.state.activeItem,toggle:this.toggle,onSave:this.handleSubmit}):null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.2c00baef.chunk.js.map