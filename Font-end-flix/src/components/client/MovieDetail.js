const MovieDetail = () => {
    return (
        <>
            <section className="movie-banner">
                <div className="hero-wrapper">
                    <div className="movie-banner-item">
                        <img src="./assets/img/Images/raya3.jpg" alt="Movie Banner" />
                    </div>

                    <div className="movie-card">
                        <img src="assets/img/Images/raya1.jpg" alt="Raya and the Last Dragon" />

                        <div className="movie-card-content">
                            <h2>Raya and the Last Dragon</h2>

                            <ul className="movie-card-btns">
                                <li className="movie-card-btn">Family</li>
                                <li className="movie-card-btn">Fantasy</li>
                                <li className="movie-card-btn">Animation</li>
                                <li className="movie-card-btn">Action</li>
                                <li className="movie-card-btn">Adventure</li>
                            </ul>

                            <p className="movie-card-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quas, possimus eius. Deserunt non odit, cum vero reprehenderit
                                laudantium odio vitae autem quam, incidunt molestias ratione mollitia accusantium,
                                facere ab suscipit.
                            </p>

                            <h3>Screen Shots</h3>
                            <div className="movie-casts">
                                <div className="movie-cast-item">
                                    <img src="./assets/img/Movie-Data/Pirates-of-the-Caribbean-Salazar's-Revenge/screenshot-1.jpg" alt="Screenshot 1" />
                                </div>
                                <div className="movie-cast-item">
                                    <img src="./assets/img/Movie-Data/Pirates-of-the-Caribbean-Salazar's-Revenge/screenshot-2.jpg" alt="Screenshot 2" />
                                </div>
                                <div className="movie-cast-item">
                                    <img src="./assets/img/Movie-Data/Pirates-of-the-Caribbean-Salazar's-Revenge/screenshot-3.jpg" alt="Screenshot 3" />
                                </div>
                                <div className="movie-cast-item">
                                    <img src="./assets/img/Movie-Data/Pirates-of-the-Caribbean-Salazar's-Revenge/screenshot-4.jpg" alt="Screenshot 4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="international-trailer">
                <div className="trailer-title">
                    <h3>International Trailer</h3>
                </div>
                <div className="international-vid">
                    <iframe
                        width="560"
                        height="515"
                        src="https://www.youtube.com/embed/3UFWsEY8Hdc"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            <section className="international-trailer margin">
                <div className="trailer-title">
                    <h3>Official Trailer</h3>
                </div>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube-nocookie.com/embed/1VIZ89FEjYI"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </section>

            <section className="international-trailer margin">
                <div className="trailer-title">
                    <h3>Teaser Trailer</h3>
                </div>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube-nocookie.com/embed/9BPMTr-NS9s"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </section>
        </>
    );
};

export default MovieDetail;
