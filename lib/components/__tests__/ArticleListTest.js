import React from 'react';
import ArticleList from '../ArticleList';
import renderer from 'react-test-renderer';

describe('ArticleList', () => {

  const testProps = {
    articles: {
      a: {id: 'a'},
      b: {id: 'b'},
    },
    articleActions: {
      lookupAuthor: jest.fn(() => ({}))
    },
  };

  it('renders correctly', function () {
    const tree = renderer.create(
      <ArticleList
        {...testProps}
      />
    ).toJSON();
    expect(tree.children.length).toBe(2);
  });
});
