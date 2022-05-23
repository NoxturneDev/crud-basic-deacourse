const db = require('../config')

exports.getItem = (res) => {
    //query data
    const sql = "SELECT * FROM `item`"

    //execute data
    db.query(sql, (err, result) => {
        if (err) return console.log('error ', err)

        //response data
        const pageData = {
            title: "MOBILE LEGEND ITEM LIST",
            data: JSON.parse(JSON.stringify(result)),
            db: "item"
        }

        res.render('itemList', { pageData })
        res.end()
    })
}

exports.getItemById = (id, res) => {
    const sql = `SELECT * FROM item WHERE id = '${id}'`

    db.query(sql, (err, result) => {
        if (err) return console.log(err)

        //response data
        const item = {
            title: "DATA ITEM BY ID",
            data: JSON.parse(JSON.stringify(result)),
            db: 'item'
        }

        res.render('itemDetail', { item })
        res.end()
    })
}

exports.updateItemById = (data, res) => {
    const { id, name, price } = data


    const sql = `UPDATE item SET name = '${name}', price = '${price}' WHERE id = '${id}'`

    db.query(sql, (error, result) => {
        if (error) return console.log('error', error)
        res.redirect('/item')
        res.end()
    })
}

exports.addItem = (data, res) => {
    const { name, price } = data
    const sql = `INSERT INTO item (name, price) VALUES ('${name}', '${price}')`

    db.query(sql, (error, result) => {
        if (error) return console.log('error', error)
        res.redirect('/item')
        res.end()
    })
}

exports.removeItem = (id, res) => {
    const sql = `DELETE FROM item WHERE id='${id}'`

    db.query(sql, (err, result) => {
        if (err) return console.log(err)
        res.redirect('/item')
        res.end()
    })
}