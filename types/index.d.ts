declare module 'iso-639-1-jp' {
  interface ISO6391JP {
    getName: (code: string) => string;
    getAllNames: () => string[];
    getNativeName: (code: string) => string;
    getAllNativeNames: () => string[];
    getCode: (name: string) => string;
    getAllCodes: () => string[];
    validate: (code: string) => boolean;
    getLanguages: (codes: string[]) => { code: string; name: string; nativeName: string }[];
  }

  let localeCode: ISO6391JP;

  export default localeCode;
}
