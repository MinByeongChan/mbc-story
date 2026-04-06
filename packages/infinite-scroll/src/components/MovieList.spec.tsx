import { act, render, screen } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
import { MovieList } from './MovieList';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

describe('MovieList', () => {
  const server = setupServer();
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  const res = {
    Response: 'True',
    Search: [
      { imdbID: '1', Title: 'Avengers: Infinity War' },
      { imdbID: '2', Title: 'Avengers: Endgame' },
    ],
  };

  it('MovieList 컴포넌트가 렌더링된다.', async () => {
    server.use(
      http.get('https://omdbapi.com/', () => {
        return HttpResponse.json(res);
      }),
    );

    await act(async () => {
      render(<MovieList />);
    });

    expect(screen.getByText(res.Search[0].Title)).toBeInTheDocument();
  });
});
