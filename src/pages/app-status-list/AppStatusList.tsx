import { observer } from 'mobx-react';
import React from 'react'
import './AppStatusList.scss';
import { AppStatusListViewModel } from './AppStatusListViewModel';

const vm = new AppStatusListViewModel();

function AppStatusList() {
  return (
    <div className='app-status-list-page'>
      {
        vm.appList.map(app=>{
          return (
            <div key={app.appName} className={"app-item "+(app.connected?'--connected':'--disconnected')}>
              <div className="app-item-icon"><img alt={app.name} src={app.icon}></img></div>
              <div className="app-item-name">{app.name}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default observer(AppStatusList) 