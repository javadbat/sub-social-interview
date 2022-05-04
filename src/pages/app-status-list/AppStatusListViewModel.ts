import { action, makeObservable, observable } from "mobx";
import { CheckAppNetworkStatus, getAppList } from "./AppStatusListService";
import {addressConfig} from "../../config/address-config";
import {MobxStore} from '../../utils/mobx-store';
type ServerAppData = {
    connected: boolean
    icon: string
    name: string
    node: string
    paraId: number
    relayChain: string
    ss58Format: number,
    tokenDecimals: number[],
    tokenSymbols: string[],
}
type AppItem = {
    appName: string
    connected: boolean
    icon: string
    name: string
    node: string
    paraId: number
    relayChain: string
    ss58Format: number
}
export class AppStatusListViewModel implements MobxStore {
    appList:AppItem[] = [];
    checkStatusInterval?: NodeJS.Timer = undefined;
    constructor(name:string) {
        makeObservable(this, {
            appList: observable,
            updateAppConnectionStatus:action,
            initData:action,
        });
        this.initData();
    }
    async initData() {
        const serverappObject = await getAppList();
        const appList:AppItem[] = [];
        Object.keys(serverappObject).forEach(key => {
            const serverData:ServerAppData = serverappObject[key];
            if(this.isDisplayableApp(serverData)){
                appList.push(this.mapServrerDataItemToAppItem(key,serverData));
            }
        });
        this.appList = appList;
        this.initStatusCheckSchadule();
    }
    isDisplayableApp(serverData:ServerAppData):boolean{
        return serverData.tokenDecimals&& serverData.tokenDecimals.length>0 && serverData.tokenSymbols &&serverData.tokenSymbols.length>0;
    }
    mapServrerDataItemToAppItem(appName:string,serverData:ServerAppData):AppItem{
        return {
            appName: appName,
            connected: serverData.connected,
            icon: addressConfig.imageCDNURL+ '/' + serverData.icon,
            name: serverData.name,
            node: serverData.node,
            paraId: serverData.paraId,
            relayChain: serverData.relayChain,
            ss58Format: serverData.ss58Format,
        }
    }
    initStatusCheckSchadule(){
        //check every 5 min
        const interval  = 5*60*1000;
        //for test
        //const interval  = 10000;
        this.checkStatusInterval =  setInterval(() => {
            this.appList.forEach(app => {
                this.updateAppConnectionStatus(app);
            });
        },interval);
    }
    async updateAppConnectionStatus(app:AppItem){
        const status = await CheckAppNetworkStatus(app.appName);
        action(()=>{app.connected = status})
    }
    stopStatusCheckSchadule(){
        if(this.checkStatusInterval){
            clearInterval(this.checkStatusInterval);
        }
    }
}