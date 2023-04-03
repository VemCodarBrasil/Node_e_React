const LoginModel = require('../models/LoginModel')

exports.getLogin = ((req, res)=>{

    const login = new LoginModel()
    const ola = login.olaMundo()

    res.send(`
        <h1>Login !!</h1>
        <p>${ola}</p>
    `)
})

exports.postLogin = ((req, res)=>{

})