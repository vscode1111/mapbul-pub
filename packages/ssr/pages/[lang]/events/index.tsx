import * as React from 'react';
import { withRedux, useEvents } from 'stores';
import { withPage, IPageProps, IPageConfig, withLocale } from 'hocs';
import { Routes } from '@mapbul-pub/ui';
import { ListPage, ITEMS_PER_PAGE, ArticleListItem } from 'components';
import { Article } from 'models';
import { loadEventsData } from 'common';

const View: React.FC<IPageProps<Article>> = ({ route, list, title, error, hasMore, loadMore }) => {
  return (
    <ListPage
      route={route}
      list={list}
      title={title}
      error={error}
      hasMore={hasMore}
      loadMore={loadMore}
      component={ArticleListItem}
    />
  );
};

const config: IPageConfig<Article> = {
  route: Routes.events,
  loadData: loadEventsData(ITEMS_PER_PAGE),
  useList: useEvents,
};

export default withLocale(withRedux(withPage<Article>(config)(View)));
