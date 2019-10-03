import React from 'react';
import { Provider } from 'react-redux';
import Header from '../layouts/Header';
import Content from '../Content/Content';
import store from '../../redux/store';
import SideBar from '../layouts/SideBar/SideBar';


function Page() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Header />
        <section className="container">
          <SideBar />
          <Content />
        </section>
      </div>
    </Provider>
  );
}

export default Page;
