import React from 'react';
import './App.css';
import Layout from './Layout/Layout';
import AppStatusList from './pages/app-status-list/AppStatusList';

function App() {
  return (
    <div className="App">
      <Layout>
          <AppStatusList></AppStatusList>
      </Layout>
    </div>
  );
}

export default App;
