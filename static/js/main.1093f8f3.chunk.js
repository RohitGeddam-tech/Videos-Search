(this["webpackJsonpyt-videos"]=this["webpackJsonpyt-videos"]||[]).push([[0],{44:function(e,t,i){},45:function(e,t,i){},46:function(e,t,i){"use strict";i.r(t);var n=i(0),s=i(2),c=i.n(s),a=i(17),r=i.n(a),o=i(8),l=i.n(o),d=i(18),u=i(3),j=i(4),m=i(6),b=i(5),h=function(e){Object(m.a)(i,e);var t=Object(b.a)(i);function i(){var e;Object(u.a)(this,i);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.atSubmit(e.state.term)},e.onInputChange=function(t){e.setState({term:t.target.value})},e}return Object(j.a)(i,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"searchbar ui segment",style:{margin:"20px 10px",background:"purple"},children:Object(n.jsx)("form",{onSubmit:this.onFormSubmit,className:"ui form",children:Object(n.jsxs)("div",{className:"field",style:{background:"purple"},children:[Object(n.jsx)("label",{style:{textAlign:"center",color:"white",marginTop:"5px"},children:Object(n.jsx)("i",{children:" Video Search "})}),Object(n.jsx)("input",{type:"text",value:this.state.term,onChange:this.onInputChange})]})})})}}]),i}(c.a.Component),v=i(19),p=i.n(v).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,key:"AIzaSyC6kz2V5NO8xu0L1B--PFhkF9MdPYVvGXk"}}),x=(i(44),function(e){var t=e.videos,i=e.onselect;return Object(n.jsxs)("div",{onClick:function(){return i(t)},className:"video-item item",children:[Object(n.jsx)("img",{className:"ui image",alt:t.snippet.title,src:t.snippet.thumbnails.medium.url}),Object(n.jsx)("div",{className:"content",children:Object(n.jsx)("div",{className:"header",style:{color:"white"},children:t.snippet.title})})]})}),O=function(e){var t=e.video,i=e.onselect,s=t.map((function(e){return Object(n.jsx)(x,{onselect:i,videos:e},e.id.videoId)}));return Object(n.jsx)("div",{className:"ui relaxed divided list",children:s})},f=function(e){var t=e.videos;if(!t)return Object(n.jsx)("div",{style:{color:"white"},children:"Loading.."});var i="https://www.youtube.com/embed/".concat(t.id.videoId);return Object(n.jsxs)("div",{style:{color:"white"},children:[Object(n.jsx)("div",{className:"ui embed",children:Object(n.jsx)("iframe",{title:"video player",src:i})}),Object(n.jsxs)("div",{className:"ui segment",children:[Object(n.jsx)("h4",{className:"ui header",children:t.snippet.title}),Object(n.jsx)("p",{style:{color:"black"},children:t.snippet.description})]})]})},y=function(e){Object(m.a)(i,e);var t=Object(b.a)(i);function i(){var e;Object(u.a)(this,i);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={videos:[],selectedVideo:null},e.onTermSubmit=function(){var t=Object(d.a)(l.a.mark((function t(i){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.get("/search",{params:{q:i}});case 2:n=t.sent,console.log(n.data.items),e.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){console.log("log",t),e.setState({selectedVideo:t})},e}return Object(j.a)(i,[{key:"componentDidMount",value:function(){this.onTermSubmit("Mobiles")}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"ui container",children:[Object(n.jsx)(h,{atSubmit:this.onTermSubmit}),Object(n.jsx)("div",{className:"ui grid",children:Object(n.jsxs)("div",{className:"ui row",children:[Object(n.jsx)("div",{className:"eleven wide column",children:Object(n.jsx)(f,{videos:this.state.selectedVideo})}),Object(n.jsx)("div",{className:"five wide column",children:Object(n.jsx)(O,{onselect:this.onVideoSelect,video:this.state.videos})})]})})]})}}]),i}(c.a.Component);i(45);r.a.render(Object(n.jsx)(y,{}),document.querySelector("#root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.1093f8f3.chunk.js.map