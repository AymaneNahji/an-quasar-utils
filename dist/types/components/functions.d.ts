export declare const findClosestCountry: (callingCode: string) => string | null;
export declare const inferClosestCountry: (phoneNumber: string) => string | null | undefined;
export declare const objectToQueryString: (obj?: Record<string, any>) => string;
export declare const objectToFormData: (obj: any, formData?: FormData, namespace?: string) => FormData;
export declare const onlyNumberCharactersRegex: RegExp;
