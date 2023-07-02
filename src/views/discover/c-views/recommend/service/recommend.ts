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