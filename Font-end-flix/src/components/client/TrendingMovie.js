import React from 'react';
import { Link } from "react-router-dom";

const TrendingMovie = () => {
    const movies = [
        {
            title: 'Raya and the Last Dragon',
            image: './assets/img/Images/raya1.jpg',
            rating: '9.0',
            duration: '120 mins',
            quality: 'FHD',
            link: '/detail'
        },
        {
            title: 'Venom: Let There Be Carnage',
            image: './assets/img/Images/p-4.jpg',
            rating: '9.0',
            duration: '120 mins',
            quality: 'FHD',
            link: '/detail'
        },
        {
            title: 'Deadpool 2',
            image: './assets/img/Images/p-5.jpg',
            rating: '9.0',
            duration: '120 mins',
            quality: 'FHD',
            link: '/detail'
        },
        {
            title: 'The Tomorrow War',
            image: './assets/img/Images/post-2.jpg',
            rating: '9.0',
            duration: '120 mins',
            quality: 'FHD',
            link: '/detail'
        },
        {
            title: 'Jungle Cruise',
            image: './assets/img/Images/post-3.jpg',
            rating: '9.0',
            duration: '120 mins',
            quality: 'FHD',
            link: '/detail'
        },
        {
            title: 'Dune',
            image: './assets/img/Images/post-4.jpg',
            rating: '9.0',
            duration: '120 mins',
            quality: 'FHD',
            link: '/detail'
        },
        {
            title: 'The Suicide Squad',
            image: './assets/img/Images/post-5.jpg',
            rating: '9.0',
            duration: '120 mins',
            quality: 'FHD',
            link: '/detail'
        },
        {
            title: 'No Time to Die',
            image: './assets/img/Images/post-6.jpg',
            rating: '9.0',
            duration: '120 mins',
            quality: 'FHD',
            link: '/detail'
        },
        {
            title: 'Prisoner of the Ghostland',
            image: './assets/img/Images/post-10.jpg',
            rating: '9.0',
            duration: '120 mins',
            quality: 'FHD',
            link: '/detail'
        }
    ];

    return (
        <div className="section" id="latest-section">
            <div className="section-wrapper" id="section-wrapper">
                <div className="section-header">
                    Trending Movies
                </div>

                <div className="movies-slide row">
                    {movies.map((movie, index) => (
                        <Link
                            to={movie.link}
                            className="movie-item col-3-5 m-5 s-11 to-top show-on-scroll"
                            key={index}
                        >
                            <div>
                                <img src={movie.image} alt={movie.title} />
                                <div className="movie-item-content">
                                    <div className="movie-item-title">{movie.title}</div>
                                    <div className="movies-infors-card">
                                        <div className="movies-infor">
                                            <ion-icon name="bookmark-outline"></ion-icon>
                                            <span>{movie.rating}</span>
                                        </div>
                                        <div className="movies-infor">
                                            <ion-icon name="time-outline"></ion-icon>
                                            <span>{movie.duration}</span>
                                        </div>
                                        <div className="movies-infor">
                                            <ion-icon name="cube-outline"></ion-icon>
                                            <span>{movie.quality}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="movie-item-overlay"></div>
                            <div className="movie-item-act">
                                <i className='bx bxs-right-arrow'></i>
                                <div>
                                    <i className='bx bxs-share-alt'></i>
                                    <i className='bx bxs-heart'></i>
                                    <i className='bx bx-plus-medical'></i>
                                </div>
                            </div>
                        </Link>
                    ))}

                    <div className="btn-load btn-load-tb">
                        <span>Load More</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrendingMovie;
