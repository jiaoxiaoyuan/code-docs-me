let publicUrl = 'https://www.mxnzp.com/api/'
let  appId ='2k0czxrlvdyronmd'
let  appSecret= 'emFjbkhYd2RvWnBISlowand3SElVUT09'

/**
 * 一言
 */

export const getHitokoto = async () => {
    const res = await fetch('https://v1.hitokoto.cn')
    // const res = await fetch(`${publicUrl}/daily_word/recommend?count=1&app_id=${appId}&app_secret=${appSecret}`)
    return await res.json()
}

/**
 * 节假日/万年历
 */

export const getHoliday = async (date: string) => {
    const res = await fetch(`${publicUrl}/holiday/single/${date}?ignoreHoliday=false&app_id=${appId}&app_secret=${appSecret}`)
    return await res.json()
}
/**
 * IP信息查询
 */
export const getIp = async () => {
    const res = await fetch(`${publicUrl}/ip/self?app_id=${appId}&app_secret=${appSecret}`)
    return await res.json()
}

/**
 * 全国天气查询
 */
export const getWeather = async (city: string) => {
    const res = await fetch(`${publicUrl}/weather/current/${city}?app_id=${appId}&app_secret=${appSecret}`)
    return await res.json()
}
