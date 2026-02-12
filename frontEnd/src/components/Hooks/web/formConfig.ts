export type ConfigKey = "input" | "text" | "message";
export const fromConfig = {
  input :{
    numberOfLines: 1,
    placeholder: "名前を入力",
    resize: false,
    fromType: "text",
    newLine: false
  },
  text :{
    numberOfLines: 6,
    placeholder: "内容を入力",
    resize: false,
    fromType: "textarea",
    newLine: true
  },
  message :{
    numberOfLines: 2,
    placeholder: "メッセージを入力",
    resize: true,
    fromType: "textarea",
    newLine: true
  }
};

export const defaultConfig: fromConfigType = {
  numberOfLines: 1,
  placeholder: "",
  resize: false,
  width: null,
  fromType: "textarea",
};

export interface fromConfigType {
  numberOfLines: number,
  placeholder: string,
  resize: boolean,
  fromType: string,
  width: number | null,
}

export type inputfromConfig = fromConfigType & {
  configType:ConfigKey,
};
