interface data {
  name: string,
  nativeName: string
}

interface dataObj {
  [name: string] : data
}

interface codesObj extends data {
  code: string,
}
