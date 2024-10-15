import React, { useState, useEffect } from 'react';

const Slider = () => {
    const slides = [
        {
            id: 1,
            image: './assets/img/Images/p-2.jpg',
            title: 'Pirate Caribbean',
            rating: '9.5',
            duration: '120 mins',
            quality: 'FHD',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, possimus eius. Deserunt non odit, cum vero reprehenderit laudantium odio vitae autem quam, incidunt molestias ratione mollitia accusantium, facere ab suscipit.',
            trailerLink: 'https://www.youtube.com/watch?v=Hgeu5rhoxxY&t=10s',
        },
        {
            id: 2,
            image: './assets/img/Images/p-6.jpg',
            title: 'Black Widow',
            rating: '9.5',
            duration: '120 mins',
            quality: 'FHD',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, possimus eius. Deserunt non odit, cum vero reprehenderit laudantium odio vitae autem quam, incidunt molestias ratione mollitia accusantium, facere ab suscipit.',
            trailerLink: 'https://www.youtube.com/watch?v=ybji16u608U',
        },
        {
            id: 3,
            image: './assets/img/Images/transformer-banner.jpg',
            title: 'Transformer',
            rating: '9.5',
            duration: '120 mins',
            quality: 'FHD',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, possimus eius. Deserunt non odit, cum vero reprehenderit laudantium odio vitae autem quam, incidunt molestias ratione mollitia accusantium, facere ab suscipit.',
            trailerLink: 'https://www.youtube.com/watch?v=Q3VKie4pChs',
        },
        {
            id: 4,
            image: './assets/img/Images/p-3.jpg',
            title: 'BloodShot',
            rating: '9.5',
            duration: '120 mins',
            quality: 'FHD',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, possimus eius. Deserunt non odit, cum vero reprehenderit laudantium odio vitae autem quam, incidunt molestias ratione mollitia accusantium, facere ab suscipit.',
            trailerLink: 'https://www.youtube.com/watch?v=vOUVVDWdXbo',
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    // Chuyển slide sau mỗi 3 giây
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) =>
                prevSlide === slides.length - 1 ? 0 : prevSlide + 1
            );
        }, 5000); // 3000ms = 3 giây

        // Clear interval khi component bị unmount
        return () => clearInterval(slideInterval);
    }, [slides.length]);

    return (
        <div className="big-section" id="big-section">
            <div className="slide-container" id="big-slider">
                {slides.map((slide, index) => (
                    <div
                        className={`big-slide-item ${index === currentSlide ? 'active' : ''}`}
                        key={slide.id}
                        style={{ display: index === currentSlide ? 'block' : 'none' }}
                    >
                        <img src={slide.image} alt="Poster" />
                        <div className="big-slide-item-content">
                            <div className="item-content-wrapper">
                                <div className="item-content-title">{slide.title}</div>
                                <div className="movies-infors">
                                    <div className="movies-infor">
                                        <ion-icon name="bookmark-outline"></ion-icon>
                                        <span>{slide.rating}</span>
                                    </div>
                                    <div className="movies-infor">
                                        <ion-icon name="time-outline"></ion-icon>
                                        <span>{slide.duration}</span>
                                    </div>
                                    <div className="movies-infor">
                                        <ion-icon name="cube-outline"></ion-icon>
                                        <span>{slide.quality}</span>
                                    </div>
                                </div>
                                <div className="item-content-description">{slide.description}</div>
                            </div>
                        </div>
                        <div className="play-movies">
                            <div className="ring"></div>
                            <a href={slide.trailerLink}>
                                <i className="bx bxs-right-arrow"></i>
                            </a>
                            <div className="btn-watch">
                                <span>watch trailer</span>
                            </div>
                        </div>
                    </div>
                ))}
                <ul className="slide-control">
                    <li className="slide-prev" onClick={() => setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}>
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </li>
                    <li className="slide-next" onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}>
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Slider;
