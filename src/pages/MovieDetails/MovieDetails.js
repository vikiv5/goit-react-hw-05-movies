import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import { IoPeopleOutline, IoNewspaperOutline } from 'react-icons/io5';
import { BsArrowLeftCircle } from 'react-icons/bs';

import { getMovieById } from 'services/API';

import { Notification } from 'components/Notification';
import { Loader } from 'components/Loader';

import {
  Section,
  Container,
  MovieWrapper,
  Title,
  GenreWrapper,
  Genre,
  AdditionalInfo,
  NavItem,
} from './MovieDetails.styled';

import defaultPicture from '../../images/no-poster.jpg';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const location = useLocation();

  useEffect(() => {
    setStatus(Status.PENDING);
    getMovieById(movieId)
      .then(movieInfo => {
        if (!Object.keys(movieInfo).length) {
          setError(
            'We are sorry, but we did not find any information about movie :('
          );
          setStatus(Status.REJECTED);
          return;
        }
        setMovie(movieInfo);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  const goBack = location.state?.from ?? '/';

  return (
    <main>
      <Section>
        <Container>
          <NavItem to={goBack}>
            <BsArrowLeftCircle size={24} outline="#0000a0" />
            <span>Go back</span>
          </NavItem>
          {status === Status.PENDING && <Loader />}
          {status === Status.REJECTED && <Notification message={error} />}
          {status === Status.RESOLVED && (
            <>
              <MovieWrapper>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : defaultPicture
                  }
                  alt={movie.title}
                />
                <div>
                  <Title>
                    {movie.title} ({new Date(movie.release_date).getFullYear()})
                  </Title>
                  <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
                  <h2>Overview</h2>
                  <p>{movie.overview}</p>
                  <h2>Genres</h2>
                  <GenreWrapper>
                    {movie.genres.map(({ name }) => (
                      <Genre key={name}>{name}</Genre>
                    ))}
                  </GenreWrapper>
                </div>
              </MovieWrapper>
              <AdditionalInfo>
                <h2>Additional information</h2>
                <ul>
                  <li>
                    <NavItem to="cast" state={{ from: goBack }}>
                      <IoPeopleOutline size={24} outline="#0000a0" />
                      <span>Cast</span>
                    </NavItem>
                  </li>
                  <li>
                    <NavItem to="reviews" state={{ from: goBack }}>
                      <IoNewspaperOutline size={24} outline="#0000a0" />
                      <span>Reviews</span>
                    </NavItem>
                  </li>
                </ul>
              </AdditionalInfo>
              <Suspense fallback={null}>
                <Outlet />
              </Suspense>
            </>
          )}
        </Container>
      </Section>
    </main>
  );
};

export default MovieDetails;