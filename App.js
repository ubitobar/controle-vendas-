import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { setupDatabase } from './database';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';

const App = () => {
  useEffect(() => {
    setupDatabase();
  }, []);

  return (
    <SafeAreaView>
      <AddProduct />
      <ProductList />
    </SafeAreaView>
  );
};

export default App;
