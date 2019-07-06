
export enum APPMODE {
    MOCK,
    SQLITE
}

export class Config {
    public static mockList = [
        {ID: 1, Name: "Messenger", ContactInfo: "https://www.messenger.com/t/100000492729276", Command: "https://www.messenger.com/t/100000492729276", IsShow: "Y"},
        {ID: 2, Name: "Line", ContactInfo: "https://line.me/ti/p/k74VfQel8f", Command: "https://line.me/ti/p/k74VfQel8f", IsShow: "Y"},
        {ID: 3, Name: "Instagram", ContactInfo: "https://instagram.com/jef15937", Command: "https://instagram.com/jef15937", IsShow: "Y"},
        {ID: 4, Name: "Phone", ContactInfo: "0912345678", Command: "tel:0912345678", IsShow: "Y"},
        {ID: 5, Name: "StartDate", ContactInfo: "2016-08-25", Command: "2016-08-25", IsShow: "Y"}
    ];

    public static appMode = APPMODE.MOCK;
  
}

