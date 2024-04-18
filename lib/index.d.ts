interface TypeCMSConfig {
    baseUrl: string;
    token: string;
    projectId: string;
}
interface EntryQuery {
    [key: string]: any;
}
declare class TypeCMS {
    private baseUrl;
    private token;
    private projectId;
    constructor(obj: TypeCMSConfig);
    getEntries(body: EntryQuery): Promise<any>;
}
export default TypeCMS;
