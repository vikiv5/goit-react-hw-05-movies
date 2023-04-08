import { useState, useEffect } from 'react';

import { getTrendingMovies } from '../../services/API';

import { MovieList} from 'components/MovieList';
import { Notification } from 'components/Notification';
import { Loader } from 'components/Loader';

import { Section, Container, Heading } from './Home.styled';

const Status = {
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.PENDING);

  useEffect(() => {
    getTrendingMovies()
      .then(({ results }) => {
        if (!results.length) {
          setStatus(Status.REJECTED);
          setError(
            "Oops, something went wrong... We can't load trending movies :("
          );
          return;
        }
        setMovies(results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, []);

  return (
    <main>
      <Section>
        <Container>
          <Heading>Trending today</Heading>
          {status === Status.PENDING && <Loader />}
          {status === Status.REJECTED && <Notification message={error} />}
          {status === Status.RESOLVED && <MovieList items={movies} />}
        </Container>
      </Section>
    </main>
  );
};

export default Home;