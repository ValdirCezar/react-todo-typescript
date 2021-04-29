import React, { Component } from 'react'
import Footer from './Footer';
import Header from './Header'
import TodoList from './TodoList/TodoList';

const App = () => {
  return (
    <div>
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
