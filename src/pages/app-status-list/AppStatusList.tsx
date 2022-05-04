import { observer } from 'mobx-react';
import React, { useEffect } from 'react'
import { useMobx } from '../../utils/custom-hooks/useMobx';
import AppStatusItem from './AppStatusItem/AppStatusItem';
import './AppStatusList.scss';
import { AppStatusListViewModel } from './AppStatusListViewModel';

//const vm = new AppStatusListViewModel();

function AppStatusList() {
  const vm = useMobx<AppStatusListViewModel, typeof AppStatusListViewModel>(AppStatusListViewModel,[]);
  useEffect(() => {
    return ()=>{vm.stopStatusCheckSchadule()}
  },[]);
  return (
    <div className='app-status-list-page'>
      {
        vm.appList.map(app=>{
          return (
            <AppStatusItem appName={app.appName} name={app.name} icon={app.icon} connected={app.connected} key={app.appName}></AppStatusItem>
          )
        })
      }
    </div>
  )
}

export default observer(AppStatusList) 