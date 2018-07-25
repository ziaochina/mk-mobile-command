import { fetch } from 'mk-utils'
import config from './config'
const api = (key) => {
    var url = config.current.webapiMap['login'],
        prefix = config.current.apiPrefix

    return fetch.isMockUrl(url)
        ? url
        : (prefix ? `${prefix}${url}` : url)

}
export default {
    /*login: (option) => {
        return fetch.post(api('login'), option)
    }*/
}
