const db = require('../config')

exports.getHero = (res) => {
    //query data
    const sql = "SELECT * FROM `hero`"

    //execute data
    db.query(sql, (err, result) => {
        if (err) return console.log('error ', err)

        //response data
        const pageData = {
            title: "MOBILE LEGEND HERO LIST",
            data: JSON.parse(JSON.stringify(result)),
            db: "hero"
        }

        res.render('heroList', { pageData })
        res.end()
    })
}

exports.getHeroById = (id, res) => {
    const sql = `SELECT * FROM hero WHERE id = '${id}'`

    db.query(sql, (err, result) => {
        if (err) return console.log(err)

        //response data
        const hero = {
            title: "DATA HERO BY ID",
            data: JSON.parse(JSON.stringify(result)),
            db: 'hero'
        }

        res.render('heroDetail', { hero })
        res.end()
    })
}

exports.updateHeroById = (data, res) => {
    const {id, name, role} = data

    const sql = `UPDATE hero SET name = '${name}', role = '${role}' WHERE id = '${id}'`

    db.query(sql, (error, result) => {
        if (error) return console.log('error', error)
        res.redirect('/hero')
        res.end()
    })
}

exports.addHero = (data, res) => {
    const {name, role} = data
    const sql = `INSERT INTO hero (name, role) VALUES ('${name}', '${role}')`

    db.query(sql, (error, result) => {
        if (error) return console.log('error', error)
        res.redirect('/hero')
        res.end()
    })
}

exports.removeHero = (id, res) => {
    const sql = `DELETE FROM hero WHERE id='${id}'`

    db.query(sql, (err, result) => {
        if (err) return console.log(err)
        res.redirect('/hero')
        res.end()
    })
}