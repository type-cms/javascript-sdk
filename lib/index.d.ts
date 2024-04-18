interface TypeCMSConfig {
    baseUrl: string;
    token: string;
    projectId: string;
}
interface EntryQuery {
    [key: string]: any;
}
interface EntryOptions {
    format?: 'json' | 'html';
}
declare class TypeCMS {
    private baseUrl;
    private token;
    private projectId;
    constructor(obj: TypeCMSConfig);
    getEntries(body: EntryQuery, options?: EntryOptions): Promise<any>;
}
export default TypeCMS;
