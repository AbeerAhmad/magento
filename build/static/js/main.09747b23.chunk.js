(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{286:function(e,t,a){e.exports=a(577)},291:function(e,t,a){},352:function(e,t){},354:function(e,t){},390:function(e,t){},391:function(e,t){},577:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),l=(a(291),a(59)),s=a(17),o=a(19),m=a(22),u=a(20),p=a(23),d=a(77),h=a(58),y=a(581),g=a(586),E=a(189),b=a(9),f=function(e){return r.a.createElement("div",null,r.a.createElement(E.b,{mode:"inline",onSelect:function(t){var a=t.key;return e.changeProfRoute(a)},style:{height:"100%"},theme:"dark",defaultSelectedKeys:["appDashboard"]},r.a.createElement(E.b.Item,{key:"appDashboard"},r.a.createElement(b.a,{type:"dashboard"}),r.a.createElement("span",{className:"nav-text"},"Dashboard")),r.a.createElement(E.b.Item,{key:"appSales",onClick:e.openDrawer},r.a.createElement(b.a,{type:"dollar"}),r.a.createElement("span",{className:"nav-text"},"Sales")),r.a.createElement(E.b.Item,{key:"appCategories",onClick:e.openDrawer},r.a.createElement(b.a,{type:"file-search"}),r.a.createElement("span",{className:"nav-text"},"Categories")),r.a.createElement(E.b.Item,{key:"appAccounts",onClick:e.openDrawer},r.a.createElement(b.a,{type:"user"}),r.a.createElement("span",{className:"nav-text"},"Accounts")),r.a.createElement(E.b.Item,{key:"appFeatures",onClick:e.openDrawer},r.a.createElement(b.a,{type:"ordered-list"}),r.a.createElement("span",{className:"nav-text"},"App Features")),r.a.createElement(E.b.Item,{key:"appTheme",onClick:e.openDrawer},r.a.createElement(b.a,{type:"bg-colors"}),r.a.createElement("span",{className:"nav-text"},"Theme")),r.a.createElement(E.b.Item,{key:"appStores",onClick:e.openDrawer},r.a.createElement(b.a,{type:"appstore"}),r.a.createElement("span",{className:"nav-text"},"Stores")),r.a.createElement(E.b.Item,{key:"appLayout",onClick:e.openDrawer},r.a.createElement(b.a,{type:"layout"}),r.a.createElement("span",{className:"nav-text"},"Layout")),r.a.createElement(E.b.Item,{key:"appReports",onClick:e.openDrawer},r.a.createElement(b.a,{type:"fund"}),r.a.createElement("span",{className:"nav-text"},"Reports")),r.a.createElement(E.b.Item,{key:"appSettings",onClick:e.openDrawer},r.a.createElement(b.a,{type:"setting"}),r.a.createElement("span",{className:"nav-text"},"Settings"))))},C=a(578),v=a(34),k=a(579),S=a(98),w=a(53),N=a(585),O=a(580),A=a(582),I=a(271),x=a.n(I),j=[{_id:1,appName:"App A",appUrl:"http://app-A.com",img:"/images/A.png",appFeatures:{paymentOptions:["easypaisa","konnect"],isDistributionEnabled:!0,branches:[{id:1,name:"Branch A",type:"branch",stuff:{},incharge:"Account A"}]},theme:{ads:[{url:"some",position:"top",source:null}]}},{_id:2,appName:"App B",appUrl:"http://app-B.com",img:"/images/B.png"},{_id:3,appName:"App C",appUrl:"http://app-C.com",img:"/images/C.jpg"},{_id:4,appName:"App D",appUrl:"http://app-D.com",img:"/images/D.png"},{_id:7,appName:"App E",appUrl:"http://app-E.com"},{_id:8,appName:"App F",appUrl:"http://app-F.com"},{_id:9,appName:"App G",appUrl:"http://app-G.com"}],M=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,H=function e(){var t=this;Object(s.a)(this,e),this.categories=[{_id:1,appName:"App A",name:"Category A",currencies:[{variation:[{size:"small",price:125}],currencyName:"Currency A",currencyPrice:"100",key:1,isAvailable:!0}]},{_id:2,appName:"App A",name:"Category B",currencies:[{variation:[{size:"small",price:152},{size:"large",price:245}],currencyName:"Currency B",currencyPrice:"100",isAvailable:!0,key:2}]},{_id:3,appName:"App B",name:"Category C",currencies:[{variation:[{size:"small",price:500},{size:"medium",price:1e3},{size:"large",price:1500}],currencyName:"Currency C",currencyPrice:"100",isAvailable:!0,key:3}]},{_id:4,appName:"App B",name:"Category D",currencies:[{variation:[{size:"small",price:200},{size:"medium",price:300},{size:"large",price:400}],currencyName:"Currency D",currencyPrice:"100",isAvailable:!1,key:4}]},{_id:5,appName:"App B",name:"Category E",currencies:[{variation:[{size:"small",price:180},{size:"medium",price:405},{size:"large",price:900}],currencyName:"Currency E",currencyPrice:"100",isAvailable:!1,key:5}]}],this.currencyVariationList=["small","medium","large"],this.getCategory=function(e){return t.categories.filter(function(t){return t.appName===e})},this.addNewCategory=function(e){e._id=t.categories.length+1,t.categories.push(e),console.log(t.categories)},this.editCategory=function(e){t.categories=t.categories.map(function(t){return t.name===e.name&&(t.currencies=e.currencies),t})}},D=(new function e(){var t=this;Object(s.a)(this,e),this.users=[{email:"test@test.com",password:"password",name:"Admin",noc:"abcdef"}],this.addAccount=function(e){return t.users.push(e),e},this.login=function(e){return t.users.find(function(t){return t.email===e.email&&t.password===e.password})}},new function e(){var t=this;Object(s.a)(this,e),this.accounts=[{id:1,appName:"App A",name:"Account A",role:"Admin",password:"1256318",isSuspended:!1},{id:2,name:"Account B",appName:"App A",role:"Sales_Man",isSuspended:!1,password:"1526985"},{id:3,appName:"App A",name:"Account C",role:"Admin",password:"1256398",isSuspended:!1},{id:4,appName:"App B",name:"Account D",role:"Admin",password:"4589654",isSuspended:!0},{id:5,appName:"App B",name:"Account E",role:"Sales_Man",password:"1254693",isSuspended:!0}],this.getAccounts=function(e){return t.accounts.filter(function(t){return t.appName===e})},this.removeAccount=function(e){t.accounts=t.accounts.filter(function(t){return t.id!==Number(e)})},this.suspendAccount=function(e,a){t.accounts=t.accounts.map(function(t){return t.id===e&&(t.isSuspended=a),t})},this.addAccount=function(e){e.id=t.accounts.length+1,t.accounts.unshift(e)}}),V=function(){var e=localStorage.getItem("token");if(!e)return null;var t=x.a.decode(e);return t.exp>Date.now()/1e3?t:null},B=a(41),z=a(587),P=a(143),L=a(272),R=a.n(L),T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).cancelHandler=function(){a.resetState(),a.props.closeModal()},a.resetState=function(){return a.setState({name:"",role:"",password:""})},a.generateRandomPassword=function(){a.setState({password:R.a.generate(8)})},a.onChangeHandler=function(e){return a.setState(Object(B.a)({},e.target.name,e.target.value))},a.okHandler=function(){a.props.addAccount({name:a.state.name,password:a.state.password,appName:a.props.appName,role:a.state.role}),a.resetState(),a.props.closeModal(),a.props.updateAccountTable()},a.state={name:"",password:"",role:""},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g.a,{visible:this.props.isModalOpen,title:"Add Account",onCancel:this.cancelHandler,maskClosable:!1,width:"80%",onOk:this.okHandler},r.a.createElement(S.a,null,r.a.createElement(w.a,{span:24},r.a.createElement(z.a,{type:"text",name:"name",value:this.state.name,onChange:this.onChangeHandler,addonBefore:"Account Name",placeholder:"Enter Account Name"}))),r.a.createElement(S.a,{style:{marginTop:"10px"},gutter:16},r.a.createElement(w.a,{span:12},r.a.createElement(z.a,{value:this.state.password,name:"name",type:"password",addonBefore:"password",disabled:!0})),r.a.createElement(w.a,{span:12},r.a.createElement(v.a,{onClick:this.generateRandomPassword}," Generate Password"))),r.a.createElement(S.a,{className:"input-top-margin"},r.a.createElement(w.a,{style:{display:"flex"},span:24},r.a.createElement("div",{style:{marginRight:"10px"}},r.a.createElement("b",{style:{marginLeft:"2px"}},"Role")),r.a.createElement("div",null,r.a.createElement(P.a,{onChange:this.onChangeHandler,checked:"admin"===this.state.role,value:"admin",name:"role"},"Admin"),r.a.createElement(P.a,{onChange:this.onChangeHandler,checked:"sales_man"===this.state.role,value:"sales_man",name:"role"},"Sales Man"))))))}}]),t}(n.Component),G=(r.a.Component,a(97)),F=a(590),_=a(94),U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).tableColumns=[{key:"name",title:"Currency Name",dataIndex:"currencyName"},{key:"price",title:"Currency Price",dataIndex:"currencyPrice"},{key:"variations",title:"Variation",dataIndex:"variation",render:function(e){return r.a.createElement("span",null,a.props.currencyVariationList.map(function(t){return r.a.createElement("div",{key:t},r.a.createElement(S.a,{style:{marginBottom:"5px"}},r.a.createElement(w.a,{span:12},r.a.createElement(F.a,{color:e.find(function(e){return e.size===t})?"green":"red",value:t},t.toUpperCase())),r.a.createElement(w.a,{style:{display:e.find(function(e){return e.size===t})?"block":"none",maxWidth:"100px"},span:12},r.a.createElement(z.a,{type:"number",onChange:a.priceChageHandler,min:0,disabled:!0,placeholder:"price","currency-size":t,addonBefore:"$",size:"small",defaultValue:e.find(function(e){return e.size===t})?e.find(function(e){return e.size===t}).price:0}))))}))}},{key:"action",title:"Action",render:function(e){return r.a.createElement(v.a,{onClick:function(){return a.removeCurrency(e.currencyName)},type:"danger",size:"small"},r.a.createElement(b.a,{type:"delete"}),"Remove")}}],a.resetSate=function(){return a.setState({categoryName:"",categoryVariation:[],addCurrency:!1,currencyName:"",currencyPrice:"",currencies:[]})},a.inputChangehandler=function(e){return a.setState(Object(B.a)({},e.target.name,e.target.value))},a.checkboxHandler=function(e){e.target.checked?a.setState(function(t){return{categoryVariation:[].concat(Object(G.a)(t.categoryVariation),[e.target.name])}}):a.setState(function(t){return{categoryVariation:t.categoryVariation.filter(function(t){return t!==e.target.name})}})},a.addCurrencyHandler=function(){var e=a.state.categoryVariation.map(function(e){return{size:e,price:0}});console.log(e),a.setState(function(e){return{addCurrency:!e.addCurrency}},function(){a.state.addCurrency||(console.log("save currency"),a.setState(function(t){return{currencies:[].concat(Object(G.a)(t.currencies),[{variation:e,currencyName:a.state.currencyName,currencyPrice:a.state.currencyPrice,key:a.state.currencies.length+1}]),currencyName:"",currencyPrice:"",categoryVariation:[]}}))})},a.cancelHandler=function(){a.resetSate(),a.props.closeModal()},a.onOkHandler=function(){a.props.addCategory({name:a.state.categoryName,currencies:a.state.currencies}),a.resetSate()},a.removeCurrency=function(e){a.setState(function(t){return{currencies:t.currencies.filter(function(t){return t.currencyName!==e})}})},a.state={categoryName:"",categoryVariation:[],addCurrency:!1,currencyName:"",currencyPrice:"",currencies:[]},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g.a,{visible:this.props.isModalOpen,onCancel:this.cancelHandler,title:"Add New Category",destroyOnClose:!0,maskClosable:!1,width:"80%",onOk:this.onOkHandler},r.a.createElement(S.a,null,r.a.createElement(w.a,{span:24},r.a.createElement(z.a,{addonBefore:"Category Name",name:"categoryName",placeholder:"Enter Category Name",value:this.state.categoryName,onChange:this.inputChangehandler,type:"text"}))),r.a.createElement("div",{style:{display:this.state.addCurrency?"block":"none",transition:"height 3s linear"}},r.a.createElement(O.a,null,"Add Currency"),r.a.createElement(S.a,{gutter:16},r.a.createElement(w.a,{className:"input-top-margin"},r.a.createElement(z.a,{type:"text",addonBefore:"Name",placeholder:"Enter Currency Name",name:"currencyName",value:this.state.currencyName,onChange:this.inputChangehandler}))),r.a.createElement(S.a,{className:"input-top-margin"},r.a.createElement(w.a,{style:{display:"flex"},span:24},r.a.createElement("div",{style:{marginRight:"10px"}},r.a.createElement("b",{style:{marginLeft:"2px"}},"Variation")),r.a.createElement("div",null,r.a.createElement(_.a,{onChange:this.checkboxHandler,checked:this.state.categoryVariation.includes("small"),name:"small"},"Small"),r.a.createElement(_.a,{checked:this.state.categoryVariation.includes("medium"),onChange:this.checkboxHandler,name:"medium"},"Medium"),r.a.createElement(_.a,{checked:this.state.categoryVariation.includes("large"),onChange:this.checkboxHandler,name:"large"},"Large"))))),r.a.createElement(S.a,{type:"flex",justify:"end"},r.a.createElement(w.a,{className:"input-top-margin"},r.a.createElement(v.a,{onClick:this.addCurrencyHandler,type:"primary",size:"small"},this.state.addCurrency?"Save Currency":"Add Currency"))),0!==this.state.currencies.length&&r.a.createElement(S.a,null,r.a.createElement(w.a,{span:24},r.a.createElement(A.a,{className:"input-top-margin",scroll:{x:500},pagination:!1,dataSource:this.state.currencies,columns:this.tableColumns})))))}}]),t}(r.a.Component),K=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).getCurrency=function(e){return a.state.currencies.filter(function(t){return t.currencyName===e})[0]},a.priceChageHandler=function(e){var t=a.getCurrency(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.getAttribute("data-currency")),n=e.target.getAttribute("currency-size");t.variation.map(function(t){return t.size===n&&(t.price=e.target.value),t})},a.onVariationChange=function(e){return function(t){var n=a.state.currencies,r=t.target.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.getAttribute("data-currency"),c=t.target.getAttribute("value"),i=a.getCurrency(r),l=n.findIndex(function(e){return e.currencyName===r});e?(i.variation=i.variation.filter(function(e){return e.size!==c}),n[l]=i):(i.variation.push({size:c,price:0}),n[l]=i),a.setState({currencies:n})}},a.currencyAvailabliyHandler=function(e){return function(){var t=a.state.currencies.map(function(t){return t.currencyName===e.currencyName&&(t.isAvailable=!t.isAvailable),t});a.setState({currencies:t})}},a.tableColumns=[{key:"name",title:"Currency Name",dataIndex:"currencyName"},{key:"price",title:"Currency Price",dataIndex:"currencyPrice"},{key:"variations",title:"Variation",dataIndex:"variation",render:function(e,t){return r.a.createElement("div",{className:t.isAvailable?"":"disabled"},a.props.currencyVariationList.map(function(t){return r.a.createElement("div",{key:t},r.a.createElement(S.a,{style:{marginBottom:"5px"}},r.a.createElement(w.a,{span:12},r.a.createElement(F.a,{onClick:a.onVariationChange(Boolean(e.find(function(e){return e.size===t}))),color:e.find(function(e){return e.size===t})?"green":"red",value:t},t.toUpperCase())),r.a.createElement(w.a,{style:{display:e.find(function(e){return e.size===t})?"block":"none",maxWidth:"100px"},span:12},r.a.createElement(z.a,{type:"number",onChange:a.priceChageHandler,min:0,placeholder:"price","currency-size":t,addonBefore:"$",size:"small",defaultValue:e.find(function(e){return e.size===t})?e.find(function(e){return e.size===t}).price:0}))))}))}},{key:"action",title:"Action",render:function(e){return r.a.createElement(v.a,{"data-currency":e.currencyName,onClick:function(){return a.removeCurrency(e.currencyName)},type:"danger",size:"small"},r.a.createElement(b.a,{type:"delete"}),"Remove")}},{key:"availablity",title:"Availablity",render:function(e){return r.a.createElement("span",{key:e.key},r.a.createElement(k.a,{checked:e.isAvailable,onChange:a.currencyAvailabliyHandler(e)}))}}],a.resetSate=function(){return a.setState({categoryName:"",categoryVariation:[],addCurrency:!1,currencyName:"",currencyPrice:"",currencies:[],isModalInitialized:!1})},a.inputChangehandler=function(e){return a.setState(Object(B.a)({},e.target.name,e.target.value))},a.checkboxHandler=function(e){e.target.checked?a.setState(function(t){return{categoryVariation:[].concat(Object(G.a)(t.categoryVariation),[e.target.name])}}):a.setState(function(t){return{categoryVariation:t.categoryVariation.filter(function(t){return t!==e.target.name})}})},a.addCurrencyHandler=function(){a.setState(function(e){return{addCurrency:!e.addCurrency}},function(){a.state.addCurrency||(console.log("save currency"),a.setState(function(e){return{currencies:[].concat(Object(G.a)(e.currencies),[{variation:a.state.categoryVariation,currencyName:a.state.currencyName,currencyPrice:a.state.currencyPrice,key:a.state.currencies.length+1,isAvailable:!0}]),currencyName:"",currencyPrice:"",categoryVariation:[]}}))})},a.cancelHandler=function(){a.resetSate(),a.props.closeEditModal()},a.onOkHandler=function(){a.props.editCategory({name:a.state.categoryName,currencies:a.state.currencies}),a.resetSate(),a.props.closeEditModal()},a.removeCurrency=function(e){a.setState(function(t){return{currencies:t.currencies.filter(function(t){return t.currencyName!==e})}})},a.state={categoryName:"",categoryVariation:[],addCurrency:!1,currencyName:"",currencyPrice:"",currencies:[],isModalInitialized:!1},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g.a,{visible:this.props.isEditModalOpen,onCancel:this.cancelHandler,title:"Edit Category",maskClosable:!1,width:"80%",onOk:this.onOkHandler},r.a.createElement(S.a,null,r.a.createElement(w.a,{span:24},r.a.createElement(z.a,{addonBefore:"Category Name",name:"categoryName",disabled:!0,placeholder:"Enter Category Name",value:this.state.categoryName,onChange:this.inputChangehandler,type:"text"}))),r.a.createElement(S.a,{style:{marginTop:"10px"}},r.a.createElement(w.a,null,r.a.createElement("b",{className:"toUppercase"},"Total Currencies : "),r.a.createElement("span",{style:{marginLeft:"10px"}},this.state.currencies?this.state.currencies.length:0))),r.a.createElement(S.a,{style:{marginTop:"10px"}},r.a.createElement(w.a,null,r.a.createElement("b",{className:"toUppercase"},"Available Currencies : "),r.a.createElement("span",{style:{marginLeft:"10px"}},this.state.currencies&&this.state.currencies.filter(function(e){return e.isAvailable}).length))),r.a.createElement("div",{style:{display:this.state.addCurrency?"block":"none"}},r.a.createElement(O.a,null,"Add Currency"),r.a.createElement(S.a,{gutter:16},r.a.createElement(w.a,{className:"input-top-margin",sm:24,md:12},r.a.createElement(z.a,{type:"text",addonBefore:"Name",placeholder:"Enter Currency Name",name:"currencyName",value:this.state.currencyName,onChange:this.inputChangehandler})),r.a.createElement(w.a,{className:"input-top-margin",sm:24,md:12},r.a.createElement(z.a,{type:"number",min:"1",disabled:!0,value:this.state.currencyPrice,addonBefore:"Price",placeholder:"Enter Currency Name",name:"currencyPrice",onChange:this.inputChangehandler}))),r.a.createElement(S.a,{style:{marginTop:"5px"}},r.a.createElement(w.a,{style:{display:"flex"},span:24},r.a.createElement("div",{style:{marginRight:"10px"}},r.a.createElement("b",{style:{marginLeft:"2px"}},"Variation")),r.a.createElement("div",null,r.a.createElement(_.a,{onChange:this.checkboxHandler,checked:this.state.categoryVariation.includes("small"),name:"small"},"Small"),r.a.createElement(_.a,{checked:this.state.categoryVariation.includes("medium"),onChange:this.checkboxHandler,name:"medium"},"Medium"),r.a.createElement(_.a,{checked:this.state.categoryVariation.includes("large"),onChange:this.checkboxHandler,name:"large"},"Large"))))),r.a.createElement(S.a,{type:"flex",justify:"end"},r.a.createElement(w.a,{className:"input-top-margin"},r.a.createElement(v.a,{onClick:this.addCurrencyHandler,type:"primary",size:"small"},this.state.addCurrency?"Save Currency":"Add Currency"))),this.state.currencies&&0!==this.state.currencies.length&&r.a.createElement(S.a,null,r.a.createElement(w.a,{span:24},r.a.createElement(A.a,{bordered:!0,scroll:{x:!0},onRow:function(e){if(!e.isAvailable)return{style:{backgroundColor:"#F5F5F5"}}},style:{marginTop:"5px"},pagination:!1,dataSource:this.state.currencies,columns:this.tableColumns})))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return!t.isModalInitialized&&e.isEditModalOpen?Object(l.a)({},t,{isModalInitialized:!0,categoryName:e.category.name,currencies:e.category.currencies}):t}}]),t}(r.a.Component),W=(r.a.Component,a(584)),$=function(e){return r.a.createElement(v.a,{onClick:function(){e.customizingHandler()}},e.isCustomizing?"Save":"Customize")},J=a(588),Q=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).topChangeHandler=function(e){},a.rightBannerHandler=function(e){},a.leftBannerHandler=function(e){},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(J.a,{visible:this.props.isDrawerOpen,title:"Customization Options",placement:"left",mask:!1,width:"210px",closable:!1},r.a.createElement(S.a,null,r.a.createElement(w.a,{span:18},r.a.createElement(N.a.Text,null,"Top Banner")),r.a.createElement(w.a,{span:6},r.a.createElement(k.a,{onChange:this.topChangeHandler}))),r.a.createElement(S.a,{className:"input-top-margin"},r.a.createElement(w.a,{span:18},r.a.createElement(N.a.Text,null,"Right Banner")),r.a.createElement(w.a,{span:6},r.a.createElement(k.a,{onChange:this.rightBannerHandler}))),r.a.createElement(S.a,{className:"input-top-margin"},r.a.createElement(w.a,{span:18},r.a.createElement(N.a.Text,null,"Left Banner")),r.a.createElement(w.a,{span:6},r.a.createElement(k.a,{onChange:this.leftBannerHandler}))))}}]),t}(r.a.Component),Z=(r.a.Component,function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).removeBranch=function(e){a.props.app.appFeatures.branches=a.props.app.appFeatures.branches.filter(function(t){return t.id!==e.id}),a.props.updateBranches()},a.tableColumns=[{key:"name",title:"Name",dataIndex:"name"},{key:"type",title:"Type",dataIndex:"type"},{key:"incharg",title:"Incharge",dataIndex:"incharge"},{key:"action",title:"Remove",render:function(e){return r.a.createElement(C.a,{onConfirm:function(){return a.removeBranch(e)},title:'Are you sure you want to remove "'.concat(e.name,'"')},r.a.createElement(v.a,{size:"small",type:"danger",icon:"delete"},"Remove"))}}],a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(A.a,{rowKey:function(e){return e.id},scroll:{x:400},dataSource:this.props.branches,columns:this.tableColumns,pagination:!1})}}]),t}(r.a.Component)),q=a(112),X=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).onChangeHandler=function(e){e.target?"branchName"===e.target.name?a.setState(Object(B.a)({},e.target.name,e.target.value)):a.setState({branchType:e.target.name}):a.setState({branchUser:e})},a.resetState=function(){a.setState({branchName:"",branchUser:"",branchType:""})},a.addBranchHandler=function(){var e={id:a.props.app.appFeatures.branches.length+1,name:a.state.branchName,type:a.state.branchType,stuff:{},incharge:a.state.branchUser};j.find(function(e){return e.appName===a.props.app.appName}).appFeatures.branches.unshift(e),a.props.closeModal(),a.resetState()},a.onCancelHandler=function(){a.props.closeModal(),a.resetState()},a.state={branchName:"",branchUser:"",branchType:""},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(g.a,{width:"80%",maskClosable:!1,onOk:this.addBranchHandler,visible:this.props.isModalOpen,title:"Add Branch",onCancel:this.props.closeModal},r.a.createElement(S.a,null,r.a.createElement(w.a,null,r.a.createElement(z.a,{type:"text",addonBefore:"Name",placeholder:"Enter branch name here",value:this.state.branchName,onChange:this.onChangeHandler,name:"branchName"}))),r.a.createElement(S.a,{className:"input-top-margin"},r.a.createElement(w.a,null,r.a.createElement("b",{style:{marginRight:"20px"}},"Type"),r.a.createElement(P.a,{name:"branch",onChange:this.onChangeHandler,checked:"branch"===this.state.branchType},"Branch"),r.a.createElement(P.a,{name:"godown",onChange:this.onChangeHandler,checked:"godown"===this.state.branchType},"Godown"))),r.a.createElement(S.a,{className:"input-top-margin"},r.a.createElement(w.a,null,r.a.createElement(q.a,{placeholder:"Select User",className:"input-top-margin",style:{width:"100%"},onChange:this.onChangeHandler},D.getAccounts(this.props.app.appName).map(function(e){return r.a.createElement(q.a.Option,{value:e.name,key:e.id},e.name)})))))}}]),t}(r.a.Component),Y=(r.a.Component,function(){return r.a.createElement(E.b,{mode:"inline",style:{height:"100%"}},r.a.createElement(E.b.Item,null,"Products"),r.a.createElement(E.b.Item,null,"Categories"))}),ee=function(){return r.a.createElement(E.b,{mode:"inline",style:{height:"100%"}},r.a.createElement(E.b.Item,null,"All Customers"),r.a.createElement(E.b.Item,null,"Now Online"),r.a.createElement(E.b.Item,null,"Customer Groups"))},te=function(){return r.a.createElement(S.a,null,r.a.createElement(w.a,{span:12},r.a.createElement(E.b,{mode:"inline"},r.a.createElement(E.b.ItemGroup,{key:"g1",title:"Promotions",style:{marginBottom:"50px"}},r.a.createElement(E.b.Item,{key:"1"},"Catalog Price Rule"),r.a.createElement(E.b.Item,{key:"2"},"Cart Price Rules")),r.a.createElement(E.b.ItemGroup,{key:"g2",title:"Communications",style:{marginBottom:"50px"}},r.a.createElement(E.b.Item,{key:"3"},"Email Templates"),r.a.createElement(E.b.Item,{key:"4"},"Newsletter Template"),r.a.createElement(E.b.Item,{key:"5"},"Newsletter Queue"),r.a.createElement(E.b.Item,{key:"6"},"Newsletter Subscribers")),r.a.createElement(E.b.ItemGroup,{key:"g3",title:"Social"},r.a.createElement(E.b.Item,{key:"7"},"Connect to Facebook")))),r.a.createElement(w.a,{span:12},r.a.createElement(E.b,{mode:"inline"},r.a.createElement(E.b.ItemGroup,{key:"g4",title:"SEO & Search",style:{marginBottom:"50px"}},r.a.createElement(E.b.Item,{key:"8"},"URL Rewrites"),r.a.createElement(E.b.Item,{key:"9"},"Search Terms"),r.a.createElement(E.b.Item,{key:"10"},"Search Synonyms"),r.a.createElement(E.b.Item,{key:"11"},"Site Map")),r.a.createElement(E.b.ItemGroup,{key:"g5",title:"User Content",style:{marginBottom:"50px"}},r.a.createElement(E.b.Item,{key:"5"},"Reviews")),r.a.createElement(E.b.ItemGroup,{key:"g6",title:"Marketing Automation"},r.a.createElement(E.b.Item,{key:"12"},"Automation Studio"),r.a.createElement(E.b.Item,{key:"13"},"Exclusion Rules")))))},ae=function(){return r.a.createElement("div",null,"App Theme Menu")},ne=function(){return r.a.createElement(S.a,null,r.a.createElement(w.a,{span:12},r.a.createElement(E.b,{mode:"inline"},r.a.createElement(E.b.ItemGroup,{key:"g1",title:"Settings",style:{marginBottom:"50px"}},r.a.createElement(E.b.Item,{key:"1"},"All Stores"),r.a.createElement(E.b.Item,{key:"2"},"Configuration"),r.a.createElement(E.b.Item,{key:"4"},"Terms & Conditions"),r.a.createElement(E.b.Item,{key:"5"},"Order Status")),r.a.createElement(E.b.ItemGroup,{key:"g2",title:"Taxes",style:{marginBottom:"50px"}},r.a.createElement(E.b.Item,{key:"6"},"Tax Rules"),r.a.createElement(E.b.Item,{key:"7"},"Tax Zones and Rates")),r.a.createElement(E.b.ItemGroup,{key:"g3",title:"Currency"},r.a.createElement(E.b.Item,{key:"8"},"Currency Rate"),r.a.createElement(E.b.Item,{key:"9"},"Currency Symbols")))),r.a.createElement(w.a,{span:12},r.a.createElement(E.b,{mode:"inline"},r.a.createElement(E.b.ItemGroup,{key:"g1",title:"Attributes",style:{marginBottom:"50px"}},r.a.createElement(E.b.Item,{key:"1"},"Product"),r.a.createElement(E.b.Item,{key:"2"},"Attribute Set"),r.a.createElement(E.b.Item,{key:"3"},"Rating")),r.a.createElement(E.b.ItemGroup,{key:"g2",title:"Shipping"},r.a.createElement(E.b.Item,{key:"4"},"Carriers"),r.a.createElement(E.b.Item,{key:"5"},"Location"),r.a.createElement(E.b.Item,{key:"6"},"Packaging")))))},re=function(e){return console.log(e),r.a.createElement(E.b,{mode:"inline"},r.a.createElement(E.b.Item,null,"Oders"),r.a.createElement(E.b.Item,null,"Invoices"),r.a.createElement(E.b.Item,null,"Shipments"),r.a.createElement(E.b.Item,null,"Dispatches"),r.a.createElement(E.b.Item,null,"Credit Memos"),r.a.createElement(E.b.Item,null,"Billing Agreements"),r.a.createElement(E.b.Item,null,"Transactions"))},ce=function(){return r.a.createElement(E.b,{mode:"inline"},r.a.createElement(E.b.ItemGroup,{key:"g1",title:"Elements",style:{marginBottom:"50px"}},r.a.createElement(E.b.Item,{key:"1"},"Pages"),r.a.createElement(E.b.Item,{key:"2"},"Blocks"),r.a.createElement(E.b.Item,{key:"3"},"Widgets")),r.a.createElement(E.b.ItemGroup,{key:"g2",title:"Design"},r.a.createElement(E.b.Item,{key:"4"},"Configuration"),r.a.createElement(E.b.Item,{key:"5"},"Themes"),r.a.createElement(E.b.Item,{key:"6"},"Schedule")))},ie=function(){return r.a.createElement("div",null,"App Report Menu")},le=function(){return r.a.createElement("div",null,"App Setting Menu")},se=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).showCategories=function(){return"appCategories"===a.props.selectedMenu?r.a.createElement(Y,a.props):"appAccounts"===a.props.selectedMenu?r.a.createElement(ee,a.props):"appFeatures"===a.props.selectedMenu?r.a.createElement(te,a.props):"appTheme"===a.props.selectedMenu?r.a.createElement(ae,a.props):"appStores"===a.props.selectedMenu?r.a.createElement(ne,a.props):"appSales"===a.props.selectedMenu?r.a.createElement(re,a.props):"appLayout"===a.props.selectedMenu?r.a.createElement(ce,a.props):"appReports"===a.props.selectedMenu?r.a.createElement(ie,a.props):"appSettings"===a.props.selectedMenu?r.a.createElement(le,a.props):void 0},a.state={title:"Title"},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(J.a,{placement:"left",getContainer:"#menuDrawer",mask:!1,title:this.state.title,onClose:this.props.closeMenuDetailDrawer,visible:this.props.isOpen,width:400},this.showCategories()))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a="Title";return"appCategories"===e.selectedMenu?a="Categories":"appAccounts"===e.selectedMenu?a="Account":"appFeatures"===e.selectedMenu?a="Features":"appTheme"===e.selectedMenu?a="Theme":"appStores"===e.selectedMenu?a="Store":"appSales"===e.selectedMenu?a="Sales":"appLayout"===e.selectedMenu?a="Layout":"appReports"===e.selectedMenu?a="Reports":"appSettings"===e.selectedMenu&&(a="Settings"),Object(l.a)({},t,{title:a})}}]),t}(r.a.Component),oe=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).openMenuDetailDrawer=function(){return a.setState({menuDetailDrawerisOpen:!0})},a.closeMenuDetailDrawer=function(){return a.setState({menuDetailDrawerisOpen:!1})},a.changeTheme=function(e,t){var n=j.find(function(t){return t.appName===e});n.selectedTheme=t,a.setState({app:n})},a.changeProfRoute=function(e){return a.setState({selectedKey:e})},a.openAndroidModal=function(){return a.setState({isAndroidModalOpen:!0})},a.closeAndroidModal=function(){return a.setState({isAndroidModalOpen:!1})},a.openAppleModal=function(){return a.setState({isAppleModalOpen:!0})},a.closeAppleModal=function(){return a.setState({isAppleModalOpen:!1})},a.collapseSidebar=function(e){return a.setState({isCollapsed:e})},a.ProfRouteRenderer=function(e){var t=e.component;a.setState({SelectedComponent:t})},a.state={app:{},selectedKey:"appDashboard",menuDetailDrawerisOpen:!1,SelectedComponent:""},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=j.find(function(e){return"App A"===e.appName});this.setState({app:e})}},{key:"render",value:function(){var e=this.state.SelectedComponent;return r.a.createElement("div",null,r.a.createElement(y.a,{style:{minHeight:"100vh"}},r.a.createElement(y.a.Sider,{style:{zIndex:this.state.menuDetailDrawerisOpen?"":"2000"},collapsed:!0},r.a.createElement(f,{openDrawer:this.openMenuDetailDrawer,changeProfRoute:this.changeProfRoute})),r.a.createElement(y.a.Content,null,r.a.createElement(y.a.Header,null),r.a.createElement("div",{style:{marginLeft:"5px"}},e),r.a.createElement("div",{id:"menuDrawer"},r.a.createElement(se,{app:this.state.app,openMenuDetailDrawer:this.openMenuDetailDrawer,closeMenuDetailDrawer:this.closeMenuDetailDrawer,isOpen:this.state.menuDetailDrawerisOpen,selectedMenu:this.state.selectedKey,changeRoute:this.ProfRouteRenderer})))),r.a.createElement(g.a,{title:"Android",visible:this.state.isAndroidModalOpen,onCancel:this.closeAndroidModal}),r.a.createElement(g.a,{title:"IOS",visible:this.state.isAppleModalOpen,onCancel:this.closeAppleModal}))}}]),t}(r.a.Component),me=a(583),ue=a(74),pe=function(e){return{type:"LOGIN_FAILED",errMess:e}},de=function(e){return{type:"LOGIN_SUCCESS",user:e}},he=a(589),ye=a(280),ge=a.n(ye),Ee=function(e){return function(t){t({type:"LOGIN_LOADING"}),ge.a.post("http://localhost:5000/users/login",e).then(function(e){if(200===e.status){localStorage.setItem("token",e.data.token);var a=V();a?(t(de(a)),he.a.success("Hello "+a.name)):(he.a.error("Some thing went wrong........."),t(pe("Some thing went wrong")))}}).catch(function(){he.a.error("Some thing went wrong........."),t(pe("Some thing went wrong"))})}},be=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).onChangeValidator=function(e,t){switch(e){case"password":""===t.trim()?a.setState({passwordValidateStatus:"error",passwordHelp:"Enter your password!",passwordIsValid:!1}):a.setState({passwordValidateStatus:"success",passwordHelp:"",passwordIsValid:!0});break;case"email":M.test(t)?a.setState({emailValidateStatus:"success",emailHelp:"",emailIsValid:!0}):a.setState({emailValidateStatus:"error",emailHelp:"Enter a valid Email address!",emailIsValid:!1});break;default:return}},a.onChangeHandler=function(e){var t=e.target,n=t.name,r=t.value,c=t.checked;"rememberMe"!==n?a.setState(Object(B.a)({},n,r),function(){return a.onChangeValidator(n,r)}):a.setState(Object(B.a)({},n,c))},a.onSubmitHandler=function(e){e.preventDefault();var t=!0;if(a.state.emailIsValid||(t=!1,a.setState({emailValidateStatus:"error",emailHelp:"Enter your Email !"})),a.state.passwordIsValid||(t=!1,a.setState({passwordIsValid:!1,passwordHelp:"Enter your password !",passwordValidateStatus:"error"})),t){var n=a.state,r=n.email,c=n.password,i=n.rememberMe;a.props.dispatch(Ee({username:r,password:c,rememberMe:i})),console.log({email:r,password:c,rememberMe:i})}else console.log("Validation Error")},a.state={email:"test@test.com",emailIsValid:!0,emailHelp:"",emailValidateStatus:"success",password:"password",passwordIsValid:!0,passwordHelp:"",passwordValidateStatus:"success",rememberMe:!1},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"login-container"},r.a.createElement(W.a,{className:this.props.login.isLoading?"disabled":"",bordered:!0,style:{borderRadius:"10px"}},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(N.a.Title,{level:1},"SIGN IN")),r.a.createElement(me.a,{colon:!1,onSubmit:this.onSubmitHandler},r.a.createElement(me.a.Item,{validateStatus:this.state.emailValidateStatus,help:this.state.emailHelp,hasFeedback:!0,label:"Email"},r.a.createElement(z.a,{type:"email",name:"email",value:this.state.email,onChange:this.onChangeHandler,prefix:r.a.createElement(b.a,{type:"user",style:{color:"rgba(0,0,0,0.25)"}}),autoComplete:"true",placeholder:"Enter your Email"})),r.a.createElement(me.a.Item,{validateStatus:this.state.passwordValidateStatus,help:this.state.passwordHelp,hasFeedback:!0,label:"Password"},r.a.createElement(z.a,{value:this.state.password,onChange:this.onChangeHandler,type:"password",name:"password",autoComplete:"true",prefix:r.a.createElement(b.a,{type:"lock",style:{color:"rgba(0,0,0,0.25)"}}),placeholder:"Enter your password"})),r.a.createElement(me.a.Item,{wrapperCol:{span:24}},r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(_.a,{name:"rememberMe",onChange:this.onChangeHandler,checked:this.state.rememberMe},"Remember me"),r.a.createElement("a",{href:"/"},"Forgot Password")),r.a.createElement("div",null,r.a.createElement(v.a,{loading:this.props.login.isLoading,disabled:this.props.login.isLoading,style:{width:"100%"},htmlType:"submit",type:"primary"},"Sign In")),r.a.createElement("div",null,"Or ",r.a.createElement(ue.b,{to:"/"},"Create Account !"))))))}}]),t}(n.Component),fe=Object(h.b)(function(e){return{login:e.Login}})(be),Ce=a(144),ve=Object(h.b)(function(e){return{user:e.Login.user}})(function(e){var t=e.user,a=(e.path,Object(Ce.a)(e,["user","path"]));return t?r.a.createElement(d.b,a):r.a.createElement(d.a,{to:"/"})}),ke=Object(h.b)(function(e){return{user:e.Login.user}})(function(e){var t=e.user,a=Object(Ce.a)(e,["user"]);return t?r.a.createElement(d.a,{to:"/dashboard"}):r.a.createElement(d.b,a)}),Se=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={selectedKey:""},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=V();e&&this.props.dispatch(function(t){return t(de(e))})}},{key:"render",value:function(){y.a.Header,y.a.Content;return r.a.createElement(d.d,null,r.a.createElement(ve,{exact:!0,path:"/dashboard",component:oe}),r.a.createElement(ke,{exact:!0,path:"/",component:fe}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=["/dashboard","/"].find(function(t){return e.location.pathname.toLowerCase().startsWith(t)});return Object(l.a)({},t,{selectedKey:a})}}]),t}(r.a.Component),we=Object(d.f)(Object(h.b)(function(e){return{user:e.Login.user}})(Se)),Ne=a(96),Oe=a(283),Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,errMess:null,user:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_LOADING":return Object(l.a)({},e,{isLoading:!0,errMess:null,user:null});case"LOGIN_FAILED":return Object(l.a)({},e,{isLoading:!1,errMess:t.errMess,user:null});case"LOGIN_SUCCESS":return Object(l.a)({},e,{isLoading:!1,errMess:null,user:t.user});default:return e}},Ie=Object(Ne.d)(Object(Ne.c)({Login:Ae}),Object(Ne.a)(Oe.a));var xe=function(){return r.a.createElement(ue.a,null,r.a.createElement(h.a,{store:Ie},r.a.createElement(we,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(xe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[286,1,2]]]);
//# sourceMappingURL=main.09747b23.chunk.js.map