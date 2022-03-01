export const fetchService = (url, options) => {
    options['url'] = url;
    if (options.hasOwnProperty("body")) {
        if (MNV_ENCODE === 1) {
            options['body'] = Encode(options['body']);
        }
        else {
            options['body'] = JSON.stringify(options['body'])
        }
    }
    else {
        if (options["method"] == "POST" || options["method"] == "PUT") {
            return false
        }
    }
    return fetch(url, options).then(handleResponseText)
}

/**
 * create url for request to server api
 * @params {*} url: response from getUrl()
 * @params {*} data: params from dispatch
 * @return {*} url full request to server api 
 */
function getUrl(url, data = {}) {

    // console.log('url:',url);

    var strUrl = url;
    var first = true;
    for (var key in data) {
        if (data[key] != null && data[key] != undefined && data[key] !== '') {
            strUrl = strUrl + (first ? '?' : '&') + (key + '=' + data[key]);
            first = false;
        }
    }
    // console.log('strUrl', strUrl);
    return strUrl;
}

function handleResponseText(response) {

    // fail 
    if (!response.ok) {
        var content = response.status + ' ' + response.statusText;
        let error = {
            success: false,
            detail: ""
        }
        if (response.status >= 500) {
            console.error("Lỗi server");
        }
        return Promise.reject(error);
    }

    // success 
    return response.json().then(data => {
        if (data && data.success === false) {
            window.localStorage.clear();
            window.location.replace('/login')
        } else {
            return data
        }

    }).catch(e => console.log(e));
}