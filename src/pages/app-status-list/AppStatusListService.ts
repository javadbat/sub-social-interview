import axios from "axios"
import { addressConfig } from "../../config/address-config"

export const getAppList = async () => {
    try{
        const data  = await axios({
            method: "get",
            url: addressConfig.serviceURL+"/v1/chains/properties",
        });
        return data.data;
    }catch(e:any){
        throw new Error(e);
    }

}
export const CheckAppNetworkStatus = async (appName:string) => {
    try{
        const data  = await axios({
            method: "get",
            url: addressConfig.serviceURL+"/v1/check/"+appName,
        });
        return data.data;
    }catch(e:any){
        throw new Error(e);
    }

}