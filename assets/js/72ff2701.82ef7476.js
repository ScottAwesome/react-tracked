(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),s=(n(0),n(93)),a=n(97),l=n(98),c={id:"tutorial-03",title:"Tutorial with createContainer - ToDo App with useState",sidebar_label:"ToDo App (useState+Immer)"},u={unversionedId:"tutorial-03",id:"tutorial-03",isDocsHomePage:!1,title:"Tutorial with createContainer - ToDo App with useState",description:"This tutorial shows example code with useState, Immer and custom hooks.",source:"@site/docs/tutorial-03.md",slug:"/tutorial-03",permalink:"/docs/tutorial-03",version:"current",sidebar_label:"ToDo App (useState+Immer)",sidebar:"docs",previous:{title:"Tutorial with createContainer - ToDo App with useReducer",permalink:"/docs/tutorial-02"},next:{title:"Tutorial with createContainer - ToDo App with Async Actions",permalink:"/docs/tutorial-04"}},i=[{value:"src/components/App.js",id:"srccomponentsappjs",children:[]},{value:"src/store.js",id:"srcstorejs",children:[]},{value:"src/hooks/useTodoList.js",id:"srchooksusetodolistjs",children:[]},{value:"src/hooks/useAddTodo.js",id:"srchooksuseaddtodojs",children:[]},{value:"src/hooks/useDeleteTodo.js",id:"srchooksusedeletetodojs",children:[]},{value:"src/hooks/useToogleTodo.js",id:"srchooksusetoogletodojs",children:[]},{value:"src/hooks/useQuery.js",id:"srchooksusequeryjs",children:[]},{value:"src/components/TodoList.js",id:"srccomponentstodolistjs",children:[]},{value:"src/components/TodoItem.js",id:"srccomponentstodoitemjs",children:[]},{value:"src/components/NewTodo.js",id:"srccomponentsnewtodojs",children:[]},{value:"src/utils.js",id:"srcutilsjs",children:[]},{value:"CodeSandbox",id:"codesandbox",children:[]}],d={toc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This tutorial shows example code with useState, ",Object(s.b)("a",{parentName:"p",href:"https://immerjs.github.io/immer/"},"Immer")," and custom hooks."),Object(s.b)("h2",{id:"srccomponentsappjs"},"src/components/App.js"),Object(s.b)(a.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(s.b)(l.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\n\nimport { Provider } from '../store';\nimport TodoList from './TodoList';\n\nconst App = () => (\n  <Provider>\n    <TodoList />\n  </Provider>\n);\n\nexport default App;\n\n"))),Object(s.b)(l.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-typescript"},"import React from 'react';\n\nimport { Provider } from '../store';\nimport TodoList from './TodoList';\n\nconst App: React.FC = () => (\n  <Provider>\n    <TodoList />\n  </Provider>\n);\n\nexport default App;\n\n")))),Object(s.b)("p",null,"This is the root component.\nIt wraps TodoList with Provider."),Object(s.b)("h2",{id:"srcstorejs"},"src/store.js"),Object(s.b)(a.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(s.b)(l.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"import { useState, useCallback } from 'react';\nimport { createContainer } from 'react-tracked';\nimport produce from 'immer';\n\nconst initialState = {\n  todos: [\n    { id: 1, title: 'Wash dishes' },\n    { id: 2, title: 'Study JS' },\n    { id: 3, title: 'Buy ticket' },\n  ],\n  query: '',\n};\n\nconst useValue = () => useState(initialState);\n\nconst { Provider, useTrackedState, useUpdate: useSetState } = createContainer(\n  useValue,\n);\n\nconst useSetDraft = () => {\n  const setState = useSetState();\n  return useCallback(\n    (draftUpdater) => {\n      setState(produce(draftUpdater));\n    },\n    [setState],\n  );\n};\n\nexport { Provider, useTrackedState, useSetDraft };\n\n"))),Object(s.b)(l.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-typescript"},"import { useState, useCallback } from 'react';\nimport { createContainer } from 'react-tracked';\nimport produce, { Draft } from 'immer';\n\ntype TodoType = {\n  id: number;\n  title: string;\n  completed?: boolean;\n};\n\nexport type State = {\n  todos: TodoType[];\n  query: string;\n};\n\nconst initialState: State = {\n  todos: [\n    { id: 1, title: 'Wash dishes' },\n    { id: 2, title: 'Study JS' },\n    { id: 3, title: 'Buy ticket' },\n  ],\n  query: '',\n};\n\nconst useValue = () => useState(initialState);\n\nconst { Provider, useTrackedState, useUpdate: useSetState } = createContainer(\n  useValue,\n);\n\nconst useSetDraft = () => {\n  const setState = useSetState();\n  return useCallback(\n    (draftUpdater: (draft: Draft<State>) => void) => {\n      setState(produce(draftUpdater));\n    },\n    [setState],\n  );\n};\n\nexport { Provider, useTrackedState, useSetDraft };\n\n")))),Object(s.b)("p",null,"The store is created by useState.\nuseUpdate is renamed to useSetState,\nand based on it, useSetDraft with Immer is exported."),Object(s.b)("h2",{id:"srchooksusetodolistjs"},"src/hooks/useTodoList.js"),Object(s.b)(a.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(s.b)(l.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"import { useTrackedState } from '../store';\n\nexport const useTodoList = () => {\n  const state = useTrackedState();\n  return state.todos;\n};\n\n"))),Object(s.b)(l.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-typescript"},"import { useTrackedState } from '../store';\n\nexport const useTodoList = () => {\n  const state = useTrackedState();\n  return state.todos;\n};\n\n")))),Object(s.b)("p",null,"This is a custom hook to simply return ",Object(s.b)("inlineCode",{parentName:"p"},"todos"),"."),Object(s.b)("h2",{id:"srchooksuseaddtodojs"},"src/hooks/useAddTodo.js"),Object(s.b)(a.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(s.b)(l.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"import { useCallback } from 'react';\n\nimport { useSetDraft } from '../store';\n\nlet nextId = 100;\n\nexport const useAddTodo = () => {\n  const setDraft = useSetDraft();\n  return useCallback(\n    (title) => {\n      setDraft((draft) => {\n        draft.todos.push({ id: nextId++, title });\n      });\n    },\n    [setDraft],\n  );\n};\n\n"))),Object(s.b)(l.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-typescript"},"import { useCallback } from 'react';\n\nimport { useSetDraft } from '../store';\n\nlet nextId = 100;\n\nexport const useAddTodo = () => {\n  const setDraft = useSetDraft();\n  return useCallback(\n    (title) => {\n      setDraft((draft) => {\n        draft.todos.push({ id: nextId++, title });\n      });\n    },\n    [setDraft],\n  );\n};\n\n")))),Object(s.b)("p",null,"This is a custom hook to return ",Object(s.b)("inlineCode",{parentName:"p"},"addTodo")," function."),Object(s.b)("h2",{id:"srchooksusedeletetodojs"},"src/hooks/useDeleteTodo.js"),Object(s.b)(a.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(s.b)(l.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"import { useCallback } from 'react';\n\nimport { useSetDraft } from '../store';\n\nexport const useDeleteTodo = () => {\n  const setDraft = useSetDraft();\n  return useCallback(\n    (id) => {\n      setDraft((draft) => {\n        const index = draft.todos.findIndex((todo) => todo.id === id);\n        if (index >= 0) draft.todos.splice(index, 1);\n      });\n    },\n    [setDraft],\n  );\n};\n\n"))),Object(s.b)(l.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-typescript"},"import { useCallback } from 'react';\n\nimport { useSetDraft } from '../store';\n\nexport const useDeleteTodo = () => {\n  const setDraft = useSetDraft();\n  return useCallback(\n    (id: number) => {\n      setDraft((draft) => {\n        const index = draft.todos.findIndex((todo) => todo.id === id);\n        if (index >= 0) draft.todos.splice(index, 1);\n      });\n    },\n    [setDraft],\n  );\n};\n\n")))),Object(s.b)("p",null,"This is a custom hook to return ",Object(s.b)("inlineCode",{parentName:"p"},"deleteTodo")," function."),Object(s.b)("h2",{id:"srchooksusetoogletodojs"},"src/hooks/useToogleTodo.js"),Object(s.b)(a.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(s.b)(l.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"import { useCallback } from 'react';\n\nimport { useSetDraft } from '../store';\n\nexport const useToggleTodo = () => {\n  const setDraft = useSetDraft();\n  return useCallback(\n    (id) => {\n      setDraft((draft) => {\n        const todo = draft.todos.find((todo) => todo.id === id);\n        if (todo) todo.completed = !todo.completed;\n      });\n    },\n    [setDraft],\n  );\n};\n\n"))),Object(s.b)(l.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-typescript"},"import { useCallback } from 'react';\n\nimport { useSetDraft } from '../store';\n\nexport const useToggleTodo = () => {\n  const setDraft = useSetDraft();\n  return useCallback(\n    (id: number) => {\n      setDraft((draft) => {\n        const todo = draft.todos.find((todo) => todo.id === id);\n        if (todo) todo.completed = !todo.completed;\n      });\n    },\n    [setDraft],\n  );\n};\n\n")))),Object(s.b)("p",null,"This is a custom hook to return ",Object(s.b)("inlineCode",{parentName:"p"},"toggleTodo")," function."),Object(s.b)("h2",{id:"srchooksusequeryjs"},"src/hooks/useQuery.js"),Object(s.b)(a.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(s.b)(l.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"import { useCallback } from 'react';\n\nimport { useTrackedState, useSetDraft } from '../store';\n\nexport const useQuery = () => {\n  const state = useTrackedState();\n  const getQuery = () => state.query;\n  const setDraft = useSetDraft();\n  const setQuery = useCallback(\n    (query) => {\n      setDraft((draft) => {\n        draft.query = query;\n      });\n    },\n    [setDraft],\n  );\n  return { getQuery, setQuery };\n};\n\n"))),Object(s.b)(l.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-typescript"},"import { useCallback } from 'react';\n\nimport { useTrackedState, useSetDraft } from '../store';\n\nexport const useQuery = () => {\n  const state = useTrackedState();\n  const getQuery = () => state.query;\n  const setDraft = useSetDraft();\n  const setQuery = useCallback(\n    (query: string) => {\n      setDraft((draft) => {\n        draft.query = query;\n      });\n    },\n    [setDraft],\n  );\n  return { getQuery, setQuery };\n};\n\n")))),Object(s.b)("p",null,"This is a custom hook to return getQuery and setQuery.\nIt doesn't return ",Object(s.b)("inlineCode",{parentName:"p"},"state.query")," directly, because\nit will be used conditionally."),Object(s.b)("h2",{id:"srccomponentstodolistjs"},"src/components/TodoList.js"),Object(s.b)(a.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(s.b)(l.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\n\nimport { useTodoList } from '../hooks/useTodoList';\nimport { useQuery } from '../hooks/useQuery';\nimport TodoItem from './TodoItem';\nimport NewTodo from './NewTodo';\n\nconst TodoList = () => {\n  const { getQuery, setQuery } = useQuery();\n  const todos = useTodoList();\n  return (\n    <div>\n      <ul>\n        {todos.map(({ id, title, completed }) => (\n          <TodoItem key={id} id={id} title={title} completed={completed} />\n        ))}\n        <NewTodo />\n      </ul>\n      <div>\n        Highlight Query for incomplete items:\n        <input value={getQuery()} onChange={(e) => setQuery(e.target.value)} />\n      </div>\n    </div>\n  );\n};\n\nexport default TodoList;\n\n"))),Object(s.b)(l.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-typescript"},"import React from 'react';\n\nimport { useTodoList } from '../hooks/useTodoList';\nimport { useQuery } from '../hooks/useQuery';\nimport TodoItem from './TodoItem';\nimport NewTodo from './NewTodo';\n\nconst TodoList: React.FC = () => {\n  const { getQuery, setQuery } = useQuery();\n  const todos = useTodoList();\n  return (\n    <div>\n      <ul>\n        {todos.map(({ id, title, completed }) => (\n          <TodoItem key={id} id={id} title={title} completed={completed} />\n        ))}\n        <NewTodo />\n      </ul>\n      <div>\n        Highlight Query for incomplete items:\n        <input value={getQuery()} onChange={(e) => setQuery(e.target.value)} />\n      </div>\n    </div>\n  );\n};\n\nexport default TodoList;\n\n")))),Object(s.b)("p",null,"This component is to show the list of ",Object(s.b)("inlineCode",{parentName:"p"},"TodoItem"),"s,\n",Object(s.b)("inlineCode",{parentName:"p"},"NewTodo")," to create a new item, and\nClear button to reset notes in all items."),Object(s.b)("h2",{id:"srccomponentstodoitemjs"},"src/components/TodoItem.js"),Object(s.b)(a.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(s.b)(l.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\n\nimport { useQuery } from '../hooks/useQuery';\nimport { useDeleteTodo } from '../hooks/useDeleteTodo';\nimport { useToggleTodo } from '../hooks/useToggleTodo';\nimport { useFlasher } from '../utils';\n\nconst renderHighlight = (title, query) => {\n  if (!query) return title;\n  const index = title.indexOf(query);\n  if (index === -1) return title;\n  return (\n    <>\n      {title.slice(0, index)}\n      <b>{query}</b>\n      {title.slice(index + query.length)}\n    </>\n  );\n};\n\nconst TodoItem = ({ id, title, completed }) => {\n  const { getQuery } = useQuery();\n  const deleteTodo = useDeleteTodo();\n  const toggleTodo = useToggleTodo();\n  return (\n    <li ref={useFlasher()}>\n      <input\n        type=\"checkbox\"\n        checked={!!completed}\n        onChange={() => toggleTodo(id)}\n      />\n      <span\n        style={{\n          textDecoration: completed ? 'line-through' : 'none',\n        }}\n      >\n        {completed ? title : renderHighlight(title, getQuery())}\n      </span>\n      <button onClick={() => deleteTodo(id)}>Delete</button>\n    </li>\n  );\n};\n\nexport default React.memo(TodoItem);\n\n"))),Object(s.b)(l.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-typescript"},"import React from 'react';\n\nimport { useQuery } from '../hooks/useQuery';\nimport { useDeleteTodo } from '../hooks/useDeleteTodo';\nimport { useToggleTodo } from '../hooks/useToggleTodo';\nimport { useFlasher } from '../utils';\n\nconst renderHighlight = (title, query) => {\n  if (!query) return title;\n  const index = title.indexOf(query);\n  if (index === -1) return title;\n  return (\n    <>\n      {title.slice(0, index)}\n      <b>{query}</b>\n      {title.slice(index + query.length)}\n    </>\n  );\n};\n\ntype Props = {\n  id: number;\n  title: string;\n  completed?: boolean;\n};\n\nconst TodoItem: React.FC<Props> = ({ id, title, completed }) => {\n  const { getQuery } = useQuery();\n  const deleteTodo = useDeleteTodo();\n  const toggleTodo = useToggleTodo();\n  return (\n    <li ref={useFlasher()}>\n      <input\n        type=\"checkbox\"\n        checked={!!completed}\n        onChange={() => toggleTodo(id)}\n      />\n      <span\n        style={{\n          textDecoration: completed ? 'line-through' : 'none',\n        }}\n      >\n        {completed ? title : renderHighlight(title, getQuery())}\n      </span>\n      <button onClick={() => deleteTodo(id)}>Delete</button>\n    </li>\n  );\n};\n\nexport default React.memo(TodoItem);\n\n")))),Object(s.b)("p",null,"This is the TodoItem component.\nWe prefer primitive props for memoized components."),Object(s.b)("p",null,"If you want to use object props for memoized components,\nyou need to use a special ",Object(s.b)("a",{parentName:"p",href:"./api#memo"},"memo")," instead of ",Object(s.b)("inlineCode",{parentName:"p"},"React.memo"),".\nSee ",Object(s.b)("a",{parentName:"p",href:"https://github.com/dai-shi/react-tracked/tree/master/examples/09_reactmemo"},"example/09")," for the usage."),Object(s.b)("h2",{id:"srccomponentsnewtodojs"},"src/components/NewTodo.js"),Object(s.b)(a.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(s.b)(l.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"import React, { useState } from 'react';\n\nimport { useAddTodo } from '../hooks/useAddTodo';\nimport { useFlasher } from '../utils';\n\nconst NewTodo = () => {\n  const addTodo = useAddTodo();\n  const [text, setText] = useState('');\n  return (\n    <li ref={useFlasher()}>\n      <input\n        value={text}\n        placeholder=\"Enter title...\"\n        onChange={(e) => setText(e.target.value)}\n      />\n      <button\n        onClick={() => {\n          addTodo(text);\n          setText('');\n        }}\n      >\n        Add\n      </button>\n    </li>\n  );\n};\n\nexport default React.memo(NewTodo);\n\n"))),Object(s.b)(l.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-typescript"},"import React, { useState } from 'react';\n\nimport { useAddTodo } from '../hooks/useAddTodo';\nimport { useFlasher } from '../utils';\n\nconst NewTodo: React.FC = () => {\n  const addTodo = useAddTodo();\n  const [text, setText] = useState('');\n  return (\n    <li ref={useFlasher()}>\n      <input\n        value={text}\n        placeholder=\"Enter title...\"\n        onChange={(e) => setText(e.target.value)}\n      />\n      <button\n        onClick={() => {\n          addTodo(text);\n          setText('');\n        }}\n      >\n        Add\n      </button>\n    </li>\n  );\n};\n\nexport default React.memo(NewTodo);\n\n")))),Object(s.b)("p",null,"This is the NewTodo component to create a new item.\nIt uses a local state for the text field."),Object(s.b)("h2",{id:"srcutilsjs"},"src/utils.js"),Object(s.b)(a.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(s.b)(l.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"import { useRef, useEffect } from 'react';\n\nexport const useFlasher = () => {\n  const ref = useRef(null);\n  useEffect(() => {\n    if (!ref.current) return;\n    ref.current.setAttribute(\n      'style',\n      'box-shadow: 0 0 2px 1px red; transition: box-shadow 100ms ease-out;',\n    );\n    setTimeout(() => {\n      if (!ref.current) return;\n      ref.current.setAttribute('style', '');\n    }, 300);\n  });\n  return ref;\n};\n\n"))),Object(s.b)(l.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-typescript"},"import { useRef, useEffect } from 'react';\n\nexport const useFlasher = () => {\n  const ref = useRef<HTMLLIElement>(null);\n  useEffect(() => {\n    if (!ref.current) return;\n    ref.current.setAttribute(\n      'style',\n      'box-shadow: 0 0 2px 1px red; transition: box-shadow 100ms ease-out;',\n    );\n    setTimeout(() => {\n      if (!ref.current) return;\n      ref.current.setAttribute('style', '');\n    }, 300);\n  });\n  return ref;\n};\n\n")))),Object(s.b)("p",null,"This is a util function to show which components render."),Object(s.b)("h2",{id:"codesandbox"},"CodeSandbox"),Object(s.b)("p",null,"You can try ",Object(s.b)("a",{parentName:"p",href:"https://codesandbox.io/s/infallible-firefly-yzwxc"},"working example"),"."))}p.isMDXComponent=!0},92:function(e,t,n){"use strict";function o(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),i=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=i(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(n),m=o,b=d["".concat(a,".").concat(m)]||d[m]||p[m]||s;return n?r.a.createElement(b,l(l({ref:t},u),{},{components:n})):r.a.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<s;u++)a[u]=n[u];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";var o=n(0),r=n(96);t.a=function(){const e=Object(o.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},96:function(e,t,n){"use strict";var o=n(0);const r=Object(o.createContext)(void 0);t.a=r},97:function(e,t,n){"use strict";var o=n(0),r=n.n(o),s=n(95),a=n(92),l=n(55),c=n.n(l);const u=37,i=39;t.a=function(e){const{lazy:t,block:n,defaultValue:l,values:d,groupId:p,className:m}=e,{tabGroupChoices:b,setTabGroupChoices:f}=Object(s.a)(),[T,j]=Object(o.useState)(l),y=o.Children.toArray(e.children),h=[];if(null!=p){const e=b[p];null!=e&&e!==T&&d.some((t=>t.value===e))&&j(e)}const g=e=>{const t=e.target,n=h.indexOf(t),o=y[n].props.value;j(o),null!=p&&(f(p,o),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:o,right:r}=e.getBoundingClientRect(),{innerHeight:s,innerWidth:a}=window;return t>=0&&r<=a&&o<=s&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((()=>t.classList.remove(c.a.tabItemActive)),2e3))}),150))},v=e=>{var t;let n;switch(e.keyCode){case i:{const t=h.indexOf(e.target)+1;n=h[t]||h[0];break}case u:{const t=h.indexOf(e.target)-1;n=h[t]||h[h.length-1];break}}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(a.a)("tabs",{"tabs--block":n},m)},d.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,className:Object(a.a)("tabs__item",c.a.tabItem,{"tabs__item--active":T===e}),key:e,ref:e=>h.push(e),onKeyDown:v,onFocus:g,onClick:g},t)))),t?Object(o.cloneElement)(y.filter((e=>e.props.value===T))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}},98:function(e,t,n){"use strict";var o=n(0),r=n.n(o);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);