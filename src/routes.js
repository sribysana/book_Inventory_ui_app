import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import BookContainer from './components/book/BookPageContainer';
import bookDetailPageContainer from './components/bookDetail/bookDetailPageContainer';
import AuthorPageContainer from './components/author/AuthorPageContainer';
import authorDetailPageContainer from './components/authorDetail/authorDetailPageContainer';
import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="fuel-savings" component={FuelSavingsPage} />
    <Route path="book" component={BookContainer} />
    <Route path="book/:id" component={bookDetailPageContainer} />
    <Route path="author" component={AuthorPageContainer} />
    <Route path="author/:id" component={authorDetailPageContainer} />
    <Route path="about" component={AboutPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
