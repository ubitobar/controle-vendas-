import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({
  name: 'Vendas.db',
  location: 'default',
});

export const setupDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS Products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, quantity INTEGER, price REAL)',
    );
  });
};

export const addProduct = (name, quantity, price) => {
  db.transaction(tx => {
    tx.executeSql('INSERT INTO Products (name, quantity, price) VALUES (?, ?, ?)', [name, quantity, price]);
  });
};

export const getProducts = (callback) => {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM Products', [], (tx, results) => {
      const products = [];
      for (let i = 0; i < results.rows.length; i++) {
        products.push(results.rows.item(i));
      }
      callback(products);
    });
  });
};
