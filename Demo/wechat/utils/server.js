"use strict";

var URI = "http://127.0.0.1:3000/api";

var fetchApi = (method, path, params) => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: URI + '/' + path,
            method:method,
            data: Object.assign({}, params),
            header: {'Content-Type': 'application/json'},
            success: resolve,
            fail:reject,
        });
    });
}

var uploadApi = (path, filePath, name) => {
    return new Promise((resolve, rejcet) => {
        wx.uploadFile({
            url: URI + '/' +path,
            filePath: filePath,
            name:name,
            formData:{
                "user":"test"
            },
            success:resolve,
            fail:reject
        })
    });
}

var insertBook = (params) => {
    console.log(params);
    return fetchApi('POST', 'book', params).then(res => {
        return res.data;
    });
}

var findBooks = (params) => {
    return fetchApi('GET', 'books', params).then(res => {
        return res.data;
    });
}

var deleteBook = (id) => {
    return fetchApi('DELETE', 'book/'+id).then(res => {
        return res.data;
    });
}


var findBook = (id) => {
    return fetchApi('GET', 'book/'+id).then(res => {
        return res.data;
    });
}

module.exports = {
    findBooks: findBooks,
    deleteBook:deleteBook,
    findBook:findBook,
    insertBook:insertBook
};