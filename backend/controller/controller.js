const mysql = require('mysql');
const dotenv = require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    database: 'mydb'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

const getContacts = (req, res) => {
    connection.query('SELECT * FROM gift', (error, results, fields) => {
        if (error) {
            res.status(500).json({ error: 'Не удалось получить список контактов' });
        } else {
            res.status(200).json(results);
        }
    });
};

const createContact = (req, res) => {
    const { title, descirption } = req.body;
    connection.query('INSERT INTO gift (title, descirption) VALUES (?, ?)', [title, descirption], (error, results, fields) => {
        if (error) {
            res.status(500).json({ error: 'Не удалось создать новый контакт' });
        } else {
            res.status(201).json({ message: 'Контакт успешно создан' });
        }
    });
};

const getContact = (req, res) => {
    const giftId = req.params.id;
    connection.query('SELECT * FROM gift WHERE id = ?', [giftId], (error, results, fields) => {
        if (error) {
            res.status(500).json({ error: 'Не удалось получить контакт' });
        } else if (results.length === 0) {
            res.status(404).json({ error: 'Контакт не найден' });
        } else {
            res.status(200).json(results[0]);
        }
    });
};

const updateContact = (req, res) => {
    const giftId = req.params.id;
    const { title, descirption } = req.body;
    connection.query('UPDATE gift SET title = ?, descirption = ? WHERE id = ?', [title, descirption, giftId], (error, results, fields) => {
        if (error) {
            res.status(500).json({ error: 'Не удалось обновить контакт' });
        } else {
            res.status(200).json({ message: 'Контакт успешно обновлен' });
        }
    });
};

const deleteContact = (req, res) => {
    const giftId = req.params.id;
    connection.query('DELETE FROM gift WHERE id = ?', [giftId], (error, results, fields) => {
        if (error) {
            res.status(500).json({ error: 'Не удалось удалить контакт' });
        } else {
            res.status(200).json({ message: 'Контакт успешно удален' });
        }
    });
};

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};
