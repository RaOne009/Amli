(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){},176:function(e,t,a){},178:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(16),c=a.n(l),o=(a(101),a(103),a(105),a(107),a(18)),s=a(19),m=a(20),i=a(21),u=a(13),d=a(2),f=a(6),E=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))},h=E,p="http://localhost:3001/",g=a(25);function b(e){var t=e.leaders,a=e.isLoading,n=e.errMess;return a?r.a.createElement(h,null):n?r.a.createElement("h4",null,n):r.a.createElement(d.s,{list:!0},r.a.createElement(g.Stagger,{in:!0},t.map(function(e){return r.a.createElement(g.Fade,{in:!0},r.a.createElement(v,{key:e.id,leader:e}))})))}function v(e){var t=e.leader;return r.a.createElement("div",{className:"col-12 m-1"},r.a.createElement(d.s,{tag:"li"},r.a.createElement(d.s,{left:!0,middle:!0},r.a.createElement(d.s,{object:!0,src:p+t.image,alt:t.name})),r.a.createElement(d.s,{body:!0,className:"ml-5"},r.a.createElement(d.s,{heading:!0},t.name),r.a.createElement("p",null,t.designation),r.a.createElement("p",null,t.description))))}var N=function(e){var t=r.a.createElement(b,{leaders:e.leaders.leaders,isLoading:e.leaders.isLoading,errMess:e.leaders.errMess});return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d.a,null,r.a.createElement(d.b,null,r.a.createElement(f.b,{to:"/home"},"Home")),r.a.createElement(d.b,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(d.d,null,r.a.createElement(d.f,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(d.e,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(d.d,null,r.a.createElement(d.e,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},t)))},y=a(17),O=a(8);function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(i.a)(this,a)}}var M=function(e){return e&&e.length},k=function(e){return function(t){return!t||t.length<=e}},L=function(e){return function(t){return t&&t.length>=e}},S=function(e){return!isNaN(Number(e))},j=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},D=function(e){Object(m.a)(a,e);var t=w(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(y.a)(n)),n}return Object(s.a)(a,[{key:"handleSubmit",value:function(e){console.log("Submitting feedback: "+JSON.stringify(e)),this.props.postFeedback(e),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d.a,null,r.a.createElement(d.b,null,r.a.createElement(f.b,{to:"/home"},"Home")),r.a.createElement(d.b,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info",href:"skype:MySkypeName?call"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us your feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(O.Form,{model:"feedback",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.r,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(d.l,{md:10},r.a.createElement(O.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:M,minLength:L(3),maxLength:k(15)}}),r.a.createElement(O.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.r,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(d.l,{md:10},r.a.createElement(O.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:M,minLength:L(3),maxLength:k(15)}}),r.a.createElement(O.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.r,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(d.l,{md:10},r.a.createElement(O.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:M,minLength:L(3),maxLength:k(15),isNumber:S}}),r.a.createElement(O.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.r,{htmlFor:"email",md:2},"Email"),r.a.createElement(d.l,{md:10},r.a.createElement(O.Control.text,{model:".email",type:"tel",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:M,validEmail:j}}),r.a.createElement(O.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid email address"}}))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.l,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(d.r,{check:!0},r.a.createElement(O.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(d.l,{md:{size:3,offset:1}},r.a.createElement(O.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.r,{htmlFor:"message",md:2},"Your Feedback"),r.a.createElement(d.l,{md:10},r.a.createElement(O.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"}))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.l,{md:{size:10,offset:2}},r.a.createElement(d.c,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),a}(n.Component);function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(i.a)(this,a)}}var x=function(e){return function(t){return!t||t.length<=e}},R=function(e){Object(m.a)(a,e);var t=C(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isModalOpen:!1},n.handleSubmit=n.handleSubmit.bind(Object(y.a)(n)),n.toggleModal=n.toggleModal.bind(Object(y.a)(n)),n}return Object(s.a)(a,[{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"render",value:function(){var e,t=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(d.v,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement(d.u,null,r.a.createElement(O.LocalForm,{onSubmit:function(e){return t.handleSubmit(e)}},r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.r,{htmlFor:"rating",md:2},"Rating"),r.a.createElement(d.l,{md:10},r.a.createElement(O.Control.select,{model:".rating",id:"rating",name:"rating",className:"form-control"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",{selected:!0},"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5")))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.r,{htmlFor:"author",md:2},"Your Name"),r.a.createElement(d.l,{md:10},r.a.createElement(O.Control.text,{model:".author",id:"author",name:"author",placeholder:"Your Name",className:"form-control",validators:{minLength:(e=3,function(t){return t&&t.length>=e}),maxLength:x(15)}}),r.a.createElement(O.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.r,{htmlFor:"comment",md:2},"Comment"),r.a.createElement(d.l,{md:10},r.a.createElement(O.Control.textarea,{model:".comment",id:"comment",name:"comment",rows:"6",className:"form-control"}))),r.a.createElement(d.B,{className:"form-group"},r.a.createElement(d.l,{md:{size:10,offset:2}},r.a.createElement(d.c,{type:"submit",color:"primary"},"Submit")))))),r.a.createElement(d.c,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-pencil fa-lg"})," Submit Comment"))}}]),a}(n.Component);function F(e){var t=e.dish;return r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(g.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(d.d,null,r.a.createElement(d.g,{width:"100%",src:p+t.image,alt:t.name}),r.a.createElement(d.e,null,r.a.createElement(d.k,null,t.name),r.a.createElement(d.j,null,t.description)))))}function A(e){var t=e.comments,a=e.postComment,n=e.dishId;if(null!=t){var l=t.map(function(e){return r.a.createElement(g.Fade,{in:!0},r.a.createElement("li",{key:e.id},r.a.createElement("p",null,e.comment),r.a.createElement("p",null,"-- ",e.author,", ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date))))))});return r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement("h4",null,"Comments"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(g.Stagger,{in:!0},l)),r.a.createElement(R,{dishId:n,postComment:a}))}return r.a.createElement("div",null)}var I=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(E,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d.a,null,r.a.createElement(d.b,null,r.a.createElement(f.b,{to:"/home"},"Home")),r.a.createElement(d.b,null,r.a.createElement(f.b,{to:"/menu"},"Menu")),r.a.createElement(d.b,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement(F,{dish:e.dish}),r.a.createElement(A,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id}))):r.a.createElement("div",null)};var T=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(f.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(f.b,{to:"/aboutus"},"About Us")),r.a.createElement("li",null,r.a.createElement(f.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(f.b,{to:"/contactus"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))};function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(i.a)(this,a)}}var _=function(e){Object(m.a)(a,e);var t=P(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(y.a)(n)),n.toggleModal=n.toggleModal.bind(Object(y.a)(n)),n.handleLogin=n.handleLogin.bind(Object(y.a)(n)),n}return Object(s.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password:"+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.y,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(d.A,{onClick:this.toggleNav}),r.a.createElement(d.z,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(d.m,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(d.w,{navbar:!0},r.a.createElement(d.x,null,r.a.createElement(f.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(d.x,null,r.a.createElement(f.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),r.a.createElement(d.x,null,r.a.createElement(f.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(d.x,null,r.a.createElement(f.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us")))),r.a.createElement(d.w,{className:"ml-auto",navbar:!0},r.a.createElement(d.x,null,r.a.createElement(d.c,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login"))))),r.a.createElement(d.q,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante Con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))),r.a.createElement(d.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(d.v,{toggle:this.toggleModal},"Login"),r.a.createElement(d.u,null,r.a.createElement(d.n,{onSubmit:this.handleLogin},r.a.createElement(d.o,null,r.a.createElement(d.r,{htmlFor:"username"},"Username"),r.a.createElement(d.p,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})),r.a.createElement(d.o,null,r.a.createElement(d.r,{htmlFor:"password"},"Password"),r.a.createElement(d.p,{type:"text",id:"password",name:"password",innerRef:function(t){return e.password=t}})),r.a.createElement(d.o,{check:!0},r.a.createElement(d.r,{check:!0},r.a.createElement(d.p,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me")),r.a.createElement(d.c,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),a}(n.Component);function q(e){var t=e.item,a=e.isLoading,n=e.errMess;return a?r.a.createElement(h,null):n?r.a.createElement("h4",null,n):r.a.createElement(g.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(d.d,null,r.a.createElement(d.g,{src:p+t.image,alt:t.name}),r.a.createElement(d.e,null,r.a.createElement(d.k,null,t.name),t.designation?r.a.createElement(d.i,null,t.designation):null,r.a.createElement(d.j,null,t.description))))}var B=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(q,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(q,{item:e.promotion,isLoading:e.promosLoading,errMess:e.promosErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(q,{item:e.leader,isLoading:e.leadersLoading,errMess:e.leadersErrMess}))))};function H(e){var t=e.dish;e.onClick;return r.a.createElement(d.d,null,r.a.createElement(f.b,{to:"/menu/".concat(t.id)},r.a.createElement(d.g,{width:"100%",src:p+t.image,alt:t.name}),r.a.createElement(d.h,null,r.a.createElement(d.k,null,t.name))))}var G=function(e){var t=e.dishes.dishes.map(function(e){return r.a.createElement("div",{key:e.id,className:"col-12 col-md-5 m-1"},r.a.createElement(H,{dish:e}))});return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(E,null))):e.dishes.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.dishes.errMess))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d.a,null,r.a.createElement(d.b,null,r.a.createElement(f.b,{to:"/home"},"Home")),r.a.createElement(d.b,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},t))},U=a(23),W=a(10),Y=function(){return{type:"DISHES_LOADING"}},z=function(e){return{type:"DISHES_FAILED",payload:e}},K=function(e){return{type:"ADD_DISHES",payload:e}},J=function(e){return{type:"COMMENTS_FAILED",payload:e}},Z=function(e){return{type:"ADD_COMMENTS",payload:e}},$=function(){return{type:"PROMOS_LOADING"}},Q=function(e){return{type:"PROMOS_FAILED",payload:e}},V=function(e){return{type:"ADD_PROMOS",payload:e}},X=function(){return{type:"LEADERS_LOADING"}},ee=function(e){return{type:"LEADERS_FAILED",payload:e}},te=function(e){return{type:"ADD_LEADERS",payload:e}},ae=a(54);function ne(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(i.a)(this,a)}}var re=function(e){Object(m.a)(a,e);var t=ne(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(_,null),r.a.createElement(ae.TransitionGroup,null,r.a.createElement(ae.CSSTransition,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(f.f,null,r.a.createElement(f.e,{path:"/home",component:function(){return r.a.createElement(B,{dish:e.props.dishes.dishes.filter(function(e){return e.featured})[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter(function(e){return e.featured})[0],promosLoading:e.props.promotions.isLoading,promosErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter(function(e){return e.featured})[0],leadersLoading:e.props.leaders.isLoading,leadersErrMess:e.props.leaders.errMess})}}),r.a.createElement(f.e,{exact:!0,path:"/aboutus",component:function(){return r.a.createElement(N,{leaders:e.props.leaders})}}),r.a.createElement(f.e,{exact:!0,path:"/menu",component:function(){return r.a.createElement(G,{dishes:e.props.dishes})}}),r.a.createElement(f.e,{path:"/menu/:dishId",component:function(t){var a=t.match;return r.a.createElement(I,{dish:e.props.dishes.dishes.filter(function(e){return e.id===parseInt(a.params.dishId,10)})[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter(function(e){return e.dishId===parseInt(a.params.dishId,10)}),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(f.e,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(D,{postFeedback:e.props.postFeedback,resetFeedbackForm:e.props.resetFeedbackForm})}}),r.a.createElement(f.d,{to:"/home"})))),r.a.createElement(T,null))}}]),a}(n.Component),le=Object(f.g)(Object(U.connect)(function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}},function(e){return{postComment:function(t,a,n,r){return e(function(e,t,a,n){return function(r){var l={author:a,comment:n,dishId:e,rating:t};return l.date=(new Date).toISOString(),fetch(p+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then(function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(e){return r({type:"ADD_COMMENT",payload:e})}).catch(function(e){console.log("Post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)})}}(t,a,n,r))},fetchDishes:function(){e(function(e){return e(Y(!0)),fetch(p+"dishes").then(function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(t){return e(K(t))}).catch(function(t){return e(z(t.message))})})},resetFeedbackForm:function(){e(O.actions.reset("feedback"))},fetchComments:function(){e(function(e){return fetch(p+"comments").then(function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(t){return e(Z(t))}).catch(function(t){return e(J(t.message))})})},fetchPromos:function(){e(function(e){return e($(!0)),fetch(p+"promotions").then(function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(t){return e(V(t))}).catch(function(t){return e(Q(t.message))})})},fetchLeaders:function(){e(function(e){return e(X(!0)),fetch(p+"leaders").then(function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(t){return e(te(t))}).catch(function(t){return e(ee(t.message))})})},postFeedback:function(t){return e(function(e){return function(){var t=Object(W.a)({date:(new Date).toISOString()},e);return fetch(p+"feedback",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then(function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(e){return alert("Thank you for your feedback! "+JSON.stringify(e))}).catch(function(e){console.log("Post feedback",e.message),alert("Your feedback could not be posted\nError: "+e.message)})}}(t))}}})(re)),ce=(a(176),a(24)),oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENTS":return Object(W.a)({},e,{isLoading:!1,errMess:null,comments:t.payload});case"COMMENTS_FAILED":return Object(W.a)({},e,{isLoading:!1,errMess:t.payload,comments:[]});case"ADD_COMMENT":var a=t.payload;return Object(W.a)({},e,{comments:e.comments.concat(a)});default:return e}},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DISHES":return Object(W.a)({},e,{isLoading:!1,errMess:null,dishes:t.payload});case"DISHES_LOADING":return Object(W.a)({},e,{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object(W.a)({},e,{isLoading:!1,errMess:t.payload,dishes:[]});default:return e}},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LEADERS":return Object(W.a)({},e,{isLoading:!1,errMess:null,leaders:t.payload});case"LEADERS_LOADING":return Object(W.a)({},e,{isLoading:!0,errMess:null,leaders:[]});case"LEADERS_FAILED":return Object(W.a)({},e,{isLoading:!1,errMess:t.payload,leaders:[]});default:return e}},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PROMOS":return Object(W.a)({},e,{isLoading:!1,errMess:null,promotions:t.payload});case"PROMOS_LOADING":return Object(W.a)({},e,{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(W.a)({},e,{isLoading:!1,errMess:t.payload,promotions:[]});default:return e}},ue=a(94),de=a.n(ue),fe=a(95),Ee=a.n(fe),he={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""};function pe(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(i.a)(this,a)}}var ge=Object(ce.createStore)(Object(ce.combineReducers)(Object(W.a)({comments:oe,dishes:se,leaders:me,promotions:ie},Object(O.createForms)({feedback:he}))),Object(ce.applyMiddleware)(de.a,Ee.a)),be=function(e){Object(m.a)(a,e);var t=pe(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(U.Provider,{store:ge},r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement(le,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},96:function(e,t,a){e.exports=a(178)}},[[96,2,1]]]);
//# sourceMappingURL=main.197f18df.chunk.js.map