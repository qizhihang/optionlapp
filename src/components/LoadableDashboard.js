import loadable from "@loadable/component";
import React from 'react';
import {routers} from '../routers/routers'
import { Route} from 'react-router-dom';
const loadingComponent =()=>{
  return (
      <div>loading</div>
  ) 
}
const combinationRouting= (list, parentPath) =>{


    let portMenu = [];
    list.forEach((item) => {
      const path = parentPath ? parentPath + item.path : item.path;
  
      const obj = {
        url:item.url,
        path,
        component: ()=>import(`pages/${path}`),
        name: item.name,
      };
      // 是否存在子级
      if (item.children && item.children.length > 0) {
        const result= combinationRouting(item.children, item.url);
        portMenu = portMenu.concat(result);
      }
      if (!parentPath) {
        portMenu.push(obj);
      }
    });
    return portMenu;
}
let routes=combinationRouting(routers)
console.log(routes)
class Routes extends React.Component{
render() {
  return (
    routes.map((k,i)=>(
      <Route path={k.url} component={loadable(k.component, {
        fallback: loadingComponent
      })}></Route>
    )
    )
  );
}
}
export default Routes