type AppStage = 'dev' | 'prod' | 'test';

class AddressConfig{
    appStage:AppStage;
    constructor(appStage:AppStage){
        this.appStage = appStage;
    }
    get serviceURL(){
        switch(this.appStage){
            case 'dev':
                return 'https://sub.id/api';
            case 'prod':
                return 'https://sub.id/api';
            case 'test':
                //TODO: add mock test url;
                return '';
            default:
                return 'NOT_VALID_APP_STAGE';
        }
    }
}
export const addressConfig = new AddressConfig('dev');