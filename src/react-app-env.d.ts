/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_BASE_URL: string;
  }
}

export type IHotRecommend = {
    id: number,
    type: number,
    name: string,
    copywriter: string,
    picUrl: string,
    canDislike: boolean,
    trackNumberUpdateTime: number,
    playCount: number,
    trackCount: number,
    highQuality: boolean,
    alg: string
}