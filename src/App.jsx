
import { useEffect, useMemo, useState } from "react";
import "./App.css";

const LOGO = "/movie-wali-header-logo.png";
const WATCHLIST_KEY = "movie-wali-watchlist";

const MOVIES = [
  {
    id: 1,
    title: "Jawan",
    year: 2023,
    language: "Hindi",
    genre: "Action",
    rating: 7.0,
    poster: "https://image.tmdb.org/t/p/w500/jFt1gS4BGHlK8xt76Y81Alp4dbt.jpg",
    description:
      "A high-energy action entertainer filled with secrets, revenge and a mission that changes everything.",
  },
  {
    id: 2,
    title: "RRR",
    year: 2022,
    language: "Telugu",
    genre: "Action",
    rating: 7.8,
    poster: "https://image.tmdb.org/t/p/w500/nEufeZlyAOLqO2brrs0yeF1lgzy.jpg",
    description:
      "Two revolutionaries, an extraordinary friendship and a spectacular fight for freedom.",
  },
  {
    id: 3,
    title: "3 Idiots",
    year: 2009,
    language: "Hindi",
    genre: "Comedy",
    rating: 8.4,
    poster: "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg",
    description:
      "Three engineering students challenge expectations and discover what learning and friendship mean.",
  },
  {
    id: 4,
    title: "Dangal",
    year: 2016,
    language: "Hindi",
    genre: "Drama",
    rating: 8.3,
    poster: "https://image.tmdb.org/t/p/w500/cJRPOLEOCG7H4pB3g3U0MO2dl5i.jpg",
    description:
      "A determined father trains his daughters to become champions against the odds.",
  },
  {
    id: 5,
    title: "12th Fail",
    year: 2023,
    language: "Hindi",
    genre: "Drama",
    rating: 8.8,
    poster: "https://image.tmdb.org/t/p/w500/k3waqVXSnvCZWfJYNtdamTgTtTA.jpg",
    description:
      "A young man's journey of perseverance, setbacks and a second chance at his dream.",
  },
  {
    id: 6,
    title: "Drishyam",
    year: 2015,
    language: "Hindi",
    genre: "Thriller",
    rating: 8.2,
    poster: "https://image.tmdb.org/t/p/w500/4e1n7K7wZC2c7G1v6A9F0B9G2.jpg",
    description:
      "An ordinary family man uses extraordinary planning to protect his family.",
  },
  {
    id: 7,
    title: "Kantara",
    year: 2022,
    language: "Kannada",
    genre: "Thriller",
    rating: 8.2,
    poster: "https://image.tmdb.org/t/p/w500/8J7H8v6Q8y0x5s2X4q9d5A1m3zB.jpg",
    description:
      "A village, ancient traditions and a powerful conflict between people and the land.",
  },
  {
    id: 8,
    title: "Vikram",
    year: 2022,
    language: "Tamil",
    genre: "Action",
    rating: 8.3,
    poster: "https://image.tmdb.org/t/p/w500/6y4EV9K3n5Y8J7q2p1L0d4F6a8B.jpg",
    description:
      "A covert operation uncovers a dangerous network in a relentless action thriller.",
  },
  {
    id: 9,
    title: "Interstellar",
    year: 2014,
    language: "English",
    genre: "Sci-Fi",
    rating: 8.7,
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description:
      "A mission beyond the stars becomes a journey about time, survival and love.",
  },
  {
    id: 10,
    title: "Oppenheimer",
    year: 2023,
    language: "English",
    genre: "Drama",
    rating: 8.1,
    poster: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
    description:
      "The story of the scientist whose work changed the course of history.",
  },
  {
    id: 11,
    title: "Pushpa: The Rise",
    year: 2021,
    language: "Telugu",
    genre: "Action",
    rating: 7.6,
    poster: "https://image.tmdb.org/t/p/w500/2r3dU9f0f8x4J6t7a5K1m2N9b0C.jpg",
    description:
      "An ambitious outsider rises through a dangerous smuggling empire.",
  },
  {
    id: 12,
    title: "Zindagi Na Milegi Dobara",
    year: 2011,
    language: "Hindi",
    genre: "Drama",
    rating: 8.2,
    poster: "https://image.tmdb.org/t/p/w500/3K8F7y3f9m2q5p4d8a1b6c0e9g.jpg",
    description:
      "Three friends take a road trip that changes how they see life and each other.",
  },
  {
    id: 13,
    title: "Premam",
    year: 2015,
    language: "Malayalam",
    genre: "Romance",
    rating: 8.3,
    poster: "https://image.tmdb.org/t/p/w500/eP9s9v6Vq7V0xV0v8v4d0J8v2h.jpg",
    description:
      "A young man's experiences of love and growing up across different stages of life.",
  },
];

const LANGUAGES = [
  "All",
  "Hindi",
  "Telugu",
  "Tamil",
  "Malayalam",
  "Kannada",
  "English",
];

const GENRES = [
  "All",
  "Action",
  "Comedy",
  "Drama",
  "Thriller",
  "Sci-Fi",
  "Romance",
];

function readWatchlist() {
  try {
    const saved = JSON.parse(localStorage.getItem(WATCHLIST_KEY) || "[]");
    return Array.isArray(saved)
      ? saved.filter((id) => MOVIES.some((movie) => movie.id === id))
      : [];
  } catch {
    return [];
  }
}

function MovieCard({ movie, saved, onToggle, onOpen }) {
  const [failed, setFailed] = useState(false);

  return (
    <article className="movie-card">
      <button
        className="poster-button"
        onClick={() => onOpen(movie)}
        aria-label={`View ${movie.title} details`}
      >
        {failed ? (
          <div className="poster-fallback">
            <span className="fallback-mark">MW</span>
            <strong>{movie.title}</strong>
            <small>{movie.year} · {movie.language}</small>
          </div>
        ) : (
          <img
            className="movie-poster"
            src={movie.poster}
            alt={`${movie.title} poster`}
            loading="lazy"
            onError={() => setFailed(true)}
          />
        )}

        <span className="poster-overlay">
          <span className="play-circle">▶</span>
          <span>View film</span>
        </span>
      </button>

      <div className="movie-card-info">
        <div className="movie-title-line">
          <button className="movie-title" onClick={() => onOpen(movie)}>
            {movie.title}
          </button>

          <button
            className={`heart-button ${saved ? "is-saved" : ""}`}
            onClick={() => onToggle(movie.id)}
            aria-label={
              saved ? "Remove from watchlist" : "Add to watchlist"
            }
            aria-pressed={saved}
            title={saved ? "Remove from watchlist" : "Add to watchlist"}
          >
            {saved ? "♥" : "♡"}
          </button>
        </div>

        <p className="movie-meta">
          {movie.year} <span>·</span> {movie.language} <span>·</span>{" "}
          {movie.genre}
        </p>

        <p className="movie-rating">
          <span>★</span> {movie.rating.toFixed(1)} <small>/ 10</small>
        </p>
      </div>
    </article>
  );
}

function MovieRow({
  title,
  eyebrow,
  movies,
  watchlist,
  onToggle,
  onOpen,
  onViewAll,
}) {
  if (!movies.length) return null;

  return (
    <section className="movie-section">
      <div className="section-heading">
        <div>
          {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
          <h2>{title}</h2>
        </div>

        <button className="text-link" onClick={onViewAll}>
          View all <span>↗</span>
        </button>
      </div>

      <div className="movie-row">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            saved={watchlist.includes(movie.id)}
            onToggle={onToggle}
            onOpen={onOpen}
          />
        ))}
      </div>
    </section>
  );
}

function MovieDetails({ movie, saved, onClose, onToggle }) {
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setImageFailed(false);
  }, [movie?.id]);

  useEffect(() => {
    if (!movie) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [movie, onClose]);

  if (!movie) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <section
        className="movie-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`${movie.title} details`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close details"
        >
          ×
        </button>

        {imageFailed ? (
          <div className="poster-fallback modal-poster-fallback">
            <span className="fallback-mark">MW</span>
            <strong>{movie.title}</strong>
            <small>{movie.year} · {movie.language}</small>
          </div>
        ) : (
          <img
            className="modal-poster"
            src={movie.poster}
            alt={`${movie.title} poster`}
            onError={() => setImageFailed(true)}
          />
        )}

        <div className="modal-copy">
          <p className="section-eyebrow">MOVIE WALI · FILM DETAILS</p>
          <h2>{movie.title}</h2>

          <p className="modal-meta">
            {movie.year} · {movie.language} · {movie.genre}
          </p>

          <p className="modal-rating">
            ★ {movie.rating.toFixed(1)} <span>/ 10</span>
          </p>

          <p className="modal-description">{movie.description}</p>

          <button
            className="primary-button"
            onClick={() => onToggle(movie.id)}
          >
            {saved ? "♥ Saved to Watchlist" : "+ Add to Watchlist"}
          </button>

          <p className="demo-note">
            Movie discovery demo. Artwork requires an internet connection.
          </p>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("Home");
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("All");
  const [genre, setGenre] = useState("All");
  const [watchlist, setWatchlist] = useState(readWatchlist);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlist));
    } catch {
      // The site remains usable if browser storage is unavailable.
    }
  }, [watchlist]);

  const toggleWatchlist = (id) => {
    setWatchlist((current) =>
      current.includes(id)
        ? current.filter((movieId) => movieId !== id)
        : [...current, id]
    );
  };

  const changePage = (nextPage) => {
    setPage(nextPage);
    setSearch("");
    setLanguage("All");
    setGenre("All");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openExplore = () => {
    setPage("Explore");
    setSearch("");
    setLanguage("All");
    setGenre("All");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredMovies = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return MOVIES.filter((movie) => {
      const matchesSearch = [
        movie.title,
        movie.genre,
        movie.language,
        String(movie.year),
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedSearch);

      const matchesLanguage =
        language === "All" || movie.language === language;

      const matchesGenre = genre === "All" || movie.genre === genre;

      const matchesPage =
        page !== "Top Rated" || movie.rating >= 8.2;

      const matchesWatchlist =
        page !== "Watchlist" || watchlist.includes(movie.id);

      return (
        matchesSearch &&
        matchesLanguage &&
        matchesGenre &&
        matchesPage &&
        matchesWatchlist
      );
    });
  }, [search, language, genre, page, watchlist]);

  const featured = MOVIES[0];
  const trending = MOVIES.slice(0, 6);
  const recommended = [MOVIES[4], MOVIES[5], MOVIES[6], MOVIES[7], MOVIES[8], MOVIES[9]];
  const classics = [MOVIES[2], MOVIES[11], MOVIES[3], MOVIES[10], MOVIES[1], MOVIES[0]];

  return (
    <div className="app-shell">
      <header className="topbar">
        <button
          className="brand"
          onClick={() => changePage("Home")}
          aria-label="Movie Wali Website home"
        >
          <img src={LOGO} alt="Movie Wali Website logo" />

          <span className="brand-copy">
            <strong>
              MOVIE <i>WALI</i>
              <br />
              WEBSITE<span className="brand-dot">.</span>
            </strong>
            <small>HAR MOVIE KI APNI KAHANI.</small>
          </span>
        </button>

        <nav className="main-nav" aria-label="Main navigation">
          {["Home", "Explore", "Watchlist", "Top Rated"].map((item) => (
            <button
              key={item}
              className={page === item ? "nav-link active" : "nav-link"}
              onClick={() => changePage(item)}
            >
              {item}
              {item === "Watchlist" && watchlist.length > 0 && (
                <span className="nav-count">{watchlist.length}</span>
              )}
            </button>
          ))}
        </nav>

        <label className="search-box">
          <span aria-hidden="true">⌕</span>
          <input
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              if (event.target.value) setPage("Explore");
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") setSearch("");
            }}
            placeholder="Find a film..."
            aria-label="Search films"
          />
          <kbd>/</kbd>
        </label>
      </header>

      {page === "Home" && !search ? (
        <main>
          <section className="featured-hero">
            <div className="hero-backdrop" />
            <div className="hero-vignette" />

            <div className="hero-content">
              <p className="hero-kicker">
                <span /> THE FRONT ROW <b>VOL. 01</b>
              </p>
              <p className="hero-label">INDIAN CINEMA · SPOTLIGHT</p>

              <h1>
                Stories that
                <br />
                stay <em>with you.</em>
              </h1>

              <p className="hero-description">
                Big-screen spectacle. Quiet masterpieces. The films that
                become a part of us.
              </p>

              <div className="hero-actions">
                <button
                  className="primary-button"
                  onClick={() => setSelectedMovie(featured)}
                >
                  DISCOVER THE FILM <span>↗</span>
                </button>

                <button className="secondary-link" onClick={openExplore}>
                  EXPLORE THE COLLECTION
                </button>
              </div>

              <div className="hero-film-index">
                <strong>01</strong>
                <span />
                <b>JAWAN</b>
                <small>ATLEE · 2023</small>
              </div>
            </div>

            <div className="hero-side-note">
              A LOVE LETTER TO CINEMA <span>✳</span>
            </div>

            <div className="hero-footer">
              <span>CURATED FOR THE FILM-OBSESSED</span>
              <span>INDIAN CINEMA · WORLD CINEMA</span>
            </div>
          </section>

          <section className="welcome-band">
            <div>
              <p className="section-eyebrow">02 / MANY LANGUAGES. ONE LOVE.</p>
              <h2>
                India doesn't tell
                <br />
                just <em>one story.</em>
              </h2>
            </div>

            <p>
              From Hindi blockbusters to regional gems and world cinema —
              find the next film you'll want to talk about.
            </p>
          </section>

          <div id="collections" className="home-collections">
            <MovieRow
              title="Trending Now"
              eyebrow="THE FILMS EVERYONE'S TALKING ABOUT"
              movies={trending}
              watchlist={watchlist}
              onToggle={toggleWatchlist}
              onOpen={setSelectedMovie}
              onViewAll={openExplore}
            />

            <section className="language-section">
              <div className="section-heading">
                <div>
                  <p className="section-eyebrow">DISCOVER BY LANGUAGE</p>
                  <h2>Different worlds. One screen.</h2>
                </div>
              </div>

              <div className="language-grid">
                {[
                  ["Hindi", "हिन्दी", "Stories that stay"],
                  ["Telugu", "తెలుగు", "Larger than life"],
                  ["Tamil", "தமிழ்", "Bold & unforgettable"],
                  ["Malayalam", "മലയാളം", "Stories with soul"],
                  ["Kannada", "ಕನ್ನಡ", "Rooted in culture"],
                  ["English", "WORLD CINEMA", "Beyond boundaries"],
                ].map(([lang, native, tagline], index) => (
                  <button
                    className={`language-tile language-tile-${index + 1}`}
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setGenre("All");
                      setSearch("");
                      setPage("Explore");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <span className="language-native">{native}</span>
                    <span className="language-name">{lang}</span>
                    <span className="language-tagline">{tagline}</span>
                    <span className="language-arrow">↗</span>
                  </button>
                ))}
              </div>
            </section>

            <MovieRow
              title="Handpicked for You"
              eyebrow="YOUR NEXT FAVOURITE FILM"
              movies={recommended}
              watchlist={watchlist}
              onToggle={toggleWatchlist}
              onOpen={setSelectedMovie}
              onViewAll={openExplore}
            />

            <MovieRow
              title="Bollywood Classics"
              eyebrow="THE STORIES THAT NEVER GET OLD"
              movies={classics}
              watchlist={watchlist}
              onToggle={toggleWatchlist}
              onOpen={setSelectedMovie}
              onViewAll={openExplore}
            />
          </div>
        </main>
      ) : (
        <main className="browse-page">
          <div className="browse-heading">
            <p className="section-eyebrow">MOVIE WALI · YOUR CINEMA GUIDE</p>

            <h1>
              {search
                ? "Search results"
                : page === "Watchlist"
                  ? "Your watchlist"
                  : page === "Top Rated"
                    ? "The highest rated"
                    : "Explore the collection"}
            </h1>

            <p>Find a story worth your time.</p>
          </div>

          <div className="filter-bar">
            <div className="filter-chips">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang}
                  className={
                    language === lang
                      ? "filter-chip selected"
                      : "filter-chip"
                  }
                  onClick={() => setLanguage(lang)}
                >
                  {lang}
                </button>
              ))}
            </div>

            <span className="results-count">
              {filteredMovies.length} FILMS
            </span>
          </div>

          <div className="filter-bar">
            <div className="filter-chips">
              {GENRES.map((item) => (
                <button
                  key={item}
                  className={
                    genre === item ? "filter-chip selected" : "filter-chip"
                  }
                  onClick={() => setGenre(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {filteredMovies.length ? (
            <div className="browse-grid">
              {filteredMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  saved={watchlist.includes(movie.id)}
                  onToggle={toggleWatchlist}
                  onOpen={setSelectedMovie}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span>✳</span>
              <h2>
                {page === "Watchlist"
                  ? "Your watchlist is empty"
                  : "No films found"}
              </h2>
              <p>
                {page === "Watchlist"
                  ? "Save films using the heart button and they'll appear here."
                  : "Try another title or change your language and genre filters."}
              </p>

              <button
                className="primary-button"
                onClick={() => {
                  setSearch("");
                  setLanguage("All");
                  setGenre("All");
                  setPage("Explore");
                }}
              >
                RESET FILTERS
              </button>
            </div>
          )}
        </main>
      )}

      <footer className="site-footer">
        <div className="footer-brand">
          <strong>
            MW<span> / </span>MOVIE WALI WEBSITE
          </strong>
          <small>HAR MOVIE KI APNI KAHANI.</small>
        </div>

        <p>MADE FOR PEOPLE WHO FEEL FILMS.</p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          BACK TO TOP ↑
        </button>
      </footer>

      <MovieDetails
        key={selectedMovie?.id ?? "no-movie"}
        movie={selectedMovie}
        saved={selectedMovie ? watchlist.includes(selectedMovie.id) : false}
        onClose={() => setSelectedMovie(null)}
        onToggle={toggleWatchlist}
      />
    </div>
  );
}
