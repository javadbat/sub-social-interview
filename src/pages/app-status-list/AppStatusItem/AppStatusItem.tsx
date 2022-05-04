import React from 'react'
import PropTypes from 'prop-types'
import './AppStatusItem.scss';

type AppStatusItemProps = {
    appName: string,
    name: string,
    icon: string,
    connected: boolean
}

function AppStatusItem(props:AppStatusItemProps) {
    return (
        <div key={props.appName} className={"app-status-item-component " + (props.connected ? '--connected' : '--disconnected')}>
            <div className="app-status-item-icon"><img alt={props.name} src={props.icon}></img></div>
            <div className="app-status-item-name">{props.name}</div>
        </div>
    )
}

AppStatusItem.propTypes = {
    appName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    connected: PropTypes.bool.isRequired
}

export default AppStatusItem
