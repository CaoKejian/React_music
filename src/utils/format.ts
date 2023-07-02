export function CountFormat(count:number){
  if(count >= 100000){
    return Math.floor(count / 10000) + '万'
  }else{
    return count
  }
}

export function imgFormat(url:string,width:number,height = width){
  return url + `?param=${width}x${height}`
}