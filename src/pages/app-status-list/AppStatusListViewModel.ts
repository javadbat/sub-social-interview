import { makeObservable, observable } from "mobx";
import { getAppList } from "./AppStatusListService";
import {addressConfig} from "../../config/address-config";
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
export class AppStatusListViewModel {
    appList:AppItem[] = [];
    constructor() {
        makeObservable(this, {
            appList: observable,
        });
        this.initData();
    }
    async initData() {
        const serverappObject = await getAppList();
        const appList:AppItem[] = [];
        Object.keys(serverappObject).forEach(key => {
            const serverData:ServerAppData = serverappObject[key];
            if(serverData.tokenDecimals&& serverData.tokenDecimals.length>0 && serverData.tokenSymbols &&serverData.tokenSymbols.length>0){
                appList.push({
                    appName: key,
                    connected: serverData.connected,
                    icon: addressConfig.imageCDNURL+ '/' + serverData.icon,
                    name: serverData.name,
                    node: serverData.node,
                    paraId: serverData.paraId,
                    relayChain: serverData.relayChain,
                    ss58Format: serverData.ss58Format,
                });
            }
        });
        this.appList = appList;
    }
}