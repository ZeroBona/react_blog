'use strict'

const controller = require('../controller/default/home')

module.exports = app => {
    const {router, controller} = app
    router.get('/default/index', controller.default.home.index)
    router.get('/default/getArticleList', controller.default.home.getArticleList)
}