import hyRequest from "@/service"

export function getBanner() {
  return hyRequest.get({
    url: "/banner"
  })
}

export function getHotRecommend(limit=30) {
  return hyRequest.get({
    url: "/personalized",
    params:{
      limit
    }
  })
}


export function getNewDosc(limit=20) {
  return hyRequest.get({
    url: "/album/newest",
    params:{
      limit
    }
  })
}

export function getRanking(id:number) {
  return hyRequest.get({
    url: "/playlist/detail",
    params:{
      id:id
    }
  })
}

export function getHotArtist(offset:number,limit:number) {
  return hyRequest.get({
    url: "/top/artists",
    params:{
      offset:offset,
      limit:limit
    }
  })
}


