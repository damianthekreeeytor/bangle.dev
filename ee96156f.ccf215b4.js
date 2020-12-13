(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(7),o=(n(0),n(129)),i={title:"@banglejs/react-menu",sidebar_label:"@banglejs/react-menu",packageName:"@banglejs/react-menu",id:"react_menu"},l={unversionedId:"api/react_menu",id:"api/react_menu",isDocsHomePage:!1,title:"@banglejs/react-menu",description:"This package provides you with tools to help build flexible yet powerful menus using React.",source:"@site/docs/api/react_menu.md",slug:"/api/react_menu",permalink:"/bangle-play/docs/api/react_menu",editUrl:"https://github.com/kepta/bangle-play/edit/master/_bangle-website/docs/docs/api/react_menu.md",version:"current",sidebar_label:"@banglejs/react-menu",sidebar:"docs",previous:{title:"@banglejs/react",permalink:"/bangle-play/docs/api/react"},next:{title:"@banglejs/markdown-front-matter",permalink:"/bangle-play/docs/api/markdown_front_matter"}},p=[{value:"Installation",id:"installation",children:[]},{value:"floatingMenu: Component",id:"floatingmenu-component",children:[{value:"plugins({ ... }): Plugins",id:"plugins---plugins",children:[]},{value:"commands: CommandObject",id:"commands-commandobject",children:[]},{value:"defaultKeys: KeybindingsObject",id:"defaultkeys-keybindingsobject",children:[]}]},{value:"FloatingMenu: React.Element",id:"floatingmenu-reactelement",children:[{value:"Props",id:"props",children:[]}]}],b={rightToc:p};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This package provides you with tools to help build flexible yet powerful menus using React."),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"# peer deps\nnpm install @banglejs/core @banglejs/react @banglejs/tooltip\nnpm install @banglejs/react-menu\n")),Object(o.b)("h2",{id:"floatingmenu-component"},"floatingMenu: ",Object(o.b)("a",Object(a.a)({parentName:"h2"},{href:"/docs/api/core/#component"}),"Component")),Object(o.b)("p",null,"A component for creating menus that float somewhere in the editor, most likely around the selection. By default it contains three types of menus:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"floatingMenu")," Regular tooltip showing the basic formatting options.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"floatingLinkMenu")," The link menu tooltip which allows editing and visiting of the link.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"null")," No menu tooltip shown."))),Object(o.b)("p",null,"See ",Object(o.b)("inlineCode",{parentName:"p"},"calculateType")," below for adding more types."),Object(o.b)("h3",{id:"plugins---plugins"},"plugins({ ... }): ",Object(o.b)("a",Object(a.a)({parentName:"h3"},{href:"/docs/api/core/#plugins"}),"Plugins")),Object(o.b)("p",null,"Named parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"key:")," ?",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://prosemirror.net/docs/ref/#state.PluginKey"}),"Prosemirror.PluginKey"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"keybindings"),": ?",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/core/#keybindingsobject"}),"KeybindingsObject"),"=","defaultKeys",Object(o.b)("br",{parentName:"p"}),"\n","For a list of allowed keys see ",Object(o.b)("strong",{parentName:"p"},"defaultKeys")," below.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"getScrollContainer:")," ?fn(view: EditorView) -> dom.Node",Object(o.b)("br",{parentName:"p"}),"\n","The dom Node which contains the scrollbar. This will be used to prevent the tooltip from overflowing. This defaults to using the parent dom Node of the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://prosemirror.net/docs/ref/#view.EditorView"}),"Prosemirror.EditorView"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"calculateType:")," ?fn(state: EditorState, prevType: string | null) -> string | null",Object(o.b)("br",{parentName:"p"}),"\n","A function to calculate the type of floating menu to show whenever the editor's selection changes. Note that this will ",Object(o.b)("em",{parentName:"p"},"not")," be called if the type is changed via the ",Object(o.b)("inlineCode",{parentName:"p"},"updateFloatingTooltipType")," command. The default value calculates the tooltip type based on the following conditions:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"floatingLinkMenu"),": If the the selection is inside a link mark")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"null")," : If the above do not match and the selection is empty.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"floatingMenu"),": If the above conditions do not match."))))),Object(o.b)("h3",{id:"commands-commandobject"},"commands: ",Object(o.b)("a",Object(a.a)({parentName:"h3"},{href:"/docs/api/core/#commandobject"}),"CommandObject")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"focusFloatingMenuInput"),"(key: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://prosemirror.net/docs/ref/#state.PluginKey"}),"Prosemirror.PluginKey"),"): ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/core/#command"}),"Command"),Object(o.b)("br",{parentName:"p"}),"\n","Sets the focus on the ",Object(o.b)("inlineCode",{parentName:"p"},"input")," element in the floating menu. Bangle uses this internally to set focus on the input element when a user press keyboard shortcut to set a link.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"toggleFloatingLinkMenu"),"(key: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://prosemirror.net/docs/ref/#state.PluginKey"}),"Prosemirror.PluginKey"),"): ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/core/#command"}),"Command"),Object(o.b)("br",{parentName:"p"}),"\n","Toggles the ",Object(o.b)("inlineCode",{parentName:"p"},"floatingLinkMenu")," tooltip.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"updateFloatingTooltipType"),"(key: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://prosemirror.net/docs/ref/#state.PluginKey"}),"Prosemirror.PluginKey"),", type: string | null): ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/core/#command"}),"Command"),Object(o.b)("br",{parentName:"p"}),"\n","Manually set the floating menu's current type. Set type to ",Object(o.b)("inlineCode",{parentName:"p"},"null")," to hide the floating menu tooltip.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"queryIsMenuActive"),"(key: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://prosemirror.net/docs/ref/#state.PluginKey"}),"Prosemirror.PluginKey"),"): ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#querycommand"}),"QueryCommand"),"<","boolean",">",Object(o.b)("br",{parentName:"p"}),"\n","Query if the menu is active."))),Object(o.b)("h3",{id:"defaultkeys-keybindingsobject"},"defaultKeys: ",Object(o.b)("a",Object(a.a)({parentName:"h3"},{href:"/docs/api/core/#keybindingsobject"}),"KeybindingsObject")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"hide")," = ",Object(o.b)("inlineCode",{parentName:"p"},"'Escape'"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"toggleLink")," = ",Object(o.b)("inlineCode",{parentName:"p"},"'Meta-k'")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Usage")),Object(o.b)("p",null,"\ud83d\udcd6 See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/examples/react-floating-menu"}),"FloatingMenu example")),Object(o.b)("h2",{id:"floatingmenu-reactelement"},"FloatingMenu: ",Object(o.b)("a",Object(a.a)({parentName:"h2"},{href:"https://reactjs.org/docs/react-api.html#reactcomponent"}),"React.Element")),Object(o.b)("h3",{id:"props"},"Props"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"menuKey"),": ?",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://prosemirror.net/docs/ref/#state.PluginKey"}),"Prosemirror.PluginKey"),Object(o.b)("br",{parentName:"p"}),"\n","The plugin key of the floatingMenu.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"renderMenuType:")," ?fn({ type, menuKey }) -> ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/react-api.html#reactcomponent"}),"React.Element"),Object(o.b)("br",{parentName:"p"}),"\n","Return the type of floating menu to render based on the type. Default to using:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"<Menu />")," for the type ",Object(o.b)("inlineCode",{parentName:"p"},"floatingMenu"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"<LinkMenu />")," for ",Object(o.b)("inlineCode",{parentName:"p"},"floatingLinkMenu"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"null")," for everything else which essentially hides the menu."))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Usage")),Object(o.b)("p",null,"\ud83d\udcd6 See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/examples/react-floating-menu"}),"FloatingMenu example")))}c.isMDXComponent=!0},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),c=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,j=m["".concat(i,".").concat(u)]||m[u]||s[u]||o;return n?r.a.createElement(j,l(l({ref:t},b),{},{components:n})):r.a.createElement(j,l({ref:t},b))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);