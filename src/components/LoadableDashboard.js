import loadable from "@loadable/component";
import React from 'react';
import {  Route } from 'react-router';
const loadingComponent =()=>{
  return (
      <div>loading</div>
  ) 
}
const LoadableComponent = loadable(() => import('pages/Home.js'), {
  fallback: loadingComponent
});
export default LoadableComponent