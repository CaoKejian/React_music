import { createSlice } from "@reduxjs/toolkit"

interface IPlayerState {
  currentSong: any
}
const initialState: IPlayerState = {
  currentSong: { "name": "情歌 (Live)", "id": 866049366, "pst": 0, "t": 0, "ar": [{ "id": 28085239, "name": "徐暐翔", "tns": [], "alias": [] }], "alia": [], "pop": 100, "st": 0, "rt": null, "fee": 1, "v": 13, "crbt": null, "cf": "", "al": { "id": 71747366, "name": "2018中国好声音 第1期", "picUrl": "https://p2.music.126.net/4wgdiJ3tcxFAJnIxIvmOnQ==/109951163409765276.jpg", "tns": [], "pic_str": "109951163409765276", "pic": 109951163409765280 }, "dt": 250851, "h": { "br": 320000, "fid": 0, "size": 10036845, "vd": -36614, "sr": 48000 }, "m": { "br": 192000, "fid": 0, "size": 6022125, "vd": -33982, "sr": 48000 }, "l": { "br": 128000, "fid": 0, "size": 4014765, "vd": -32242, "sr": 48000 }, "sq": { "br": 893261, "fid": 0, "size": 28009526, "vd": -36563, "sr": 48000 }, "hr": null, "a": null, "cd": "01", "no": 8, "rtUrl": null, "ftype": 0, "rtUrls": [], "djId": 0, "copyright": 0, "s_id": 0, "mark": 73728, "originCoverType": 0, "originSongSimpleData": null, "tagPicList": null, "resourceState": true, "version": 13, "songJumpInfo": null, "entertainmentTags": null, "awardTags": null, "single": 0, "noCopyrightRcmd": null, "rtype": 0, "rurl": null, "mv": 0, "mst": 9, "cp": 0, "publishTime": 1531411200000 }
}
const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {}
})

export default playerSlice.reducer