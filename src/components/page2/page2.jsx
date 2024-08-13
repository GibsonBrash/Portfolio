import placeholder from '../../assets/placeholder.png';
//import '../../App.css';
import './page2.css';
function page2({page2P, projectImg}){
    return(
        <>
            <div id="page2" ref={page2P}>
                <div className="title">
                    <h1>Projects</h1>
                </div>
                <div id="card-container">
                    {projectImg ?
                    <>
                        <div className='image-card'>
                            <img className="image-img" src={"https://www.wallpapertip.com/wmimgs/180-1806241_music-collage-album-covers-cover-art-art-hd.jpg"} alt="image no load"/>
                            <div className='image-text'>
                                <div>Music Cataloging Website</div>
                                <button className='image-button'>
                                    <svg viewBox="0 0 18.500001 18.49996" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_429_11072)" transform="translate(-2.75,-2.74994)">
                                            <path d="M 11,3.99994 H 4 V 17.9999 c 0,1.1046 0.89543,2 2,2 h 12 c 1.1046,0 2,-0.8954 2,-2 v -5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M 9,14.9999 20,3.99994" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="m 15,3.99994 h 5 v 5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath>
                                            <rect width="24" height="24" x="0" y="0" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Go to
                                </button>
                            </div>
                        </div>
                        <div className='image-card'>
                            <img className="image-img" src={placeholder} alt="image no load"/>
                            <div className='image-text'>
                                <div>Anime Trivia Website</div>
                                <button className='image-button'>
                                    <svg viewBox="0 0 18.500001 18.49996" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_429_11072)" transform="translate(-2.75,-2.74994)">
                                            <path d="M 11,3.99994 H 4 V 17.9999 c 0,1.1046 0.89543,2 2,2 h 12 c 1.1046,0 2,-0.8954 2,-2 v -5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M 9,14.9999 20,3.99994" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="m 15,3.99994 h 5 v 5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath>
                                                <rect width="24" height="24" x="0" y="0" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Go to
                                </button>
                            </div>
                        </div>
                    </>
                    :
                    <>
                    <div className="card">
                        <img src="https://www.wallpapertip.com/wmimgs/180-1806241_music-collage-album-covers-cover-art-art-hd.jpg" alt="image no load"/>
                        <div className="card-description">
                            A website for rating and reviewing music. It allows users to log in via their spotify account and, 
                            using spotify's vast music database, search for albums and artists they've listened to and rate and review that artists albums and songs.
                            It also allows users to follow each other and share their opinions on music with each other.
                        </div>
                        <button>
                            <svg viewBox="0 0 18.500001 18.49996" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_429_11072)" transform="translate(-2.75,-2.74994)">
                                <path d="M 11,3.99994 H 4 V 17.9999 c 0,1.1046 0.89543,2 2,2 h 12 c 1.1046,0 2,-0.8954 2,-2 v -5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M 9,14.9999 20,3.99994" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="m 15,3.99994 h 5 v 5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                            <defs>
                                <clipPath>
                                <rect width="24" height="24" x="0" y="0" />
                                </clipPath>
                            </defs>
                            </svg>
                            Go to
                        </button>
                    </div>
                    <div className="card">
                        <img src={placeholder} alt="image no load"/> 
                        <div className="card-description">
                            A website that challenges users daily to guess an anime based on six screenshots from the show/movie. Each screenshot makes it progressivly more
                            obvious what the anime is. The anime is updated everyday so users can come back and try their hand at a new challenge. If the user misses a day they can go the archive page and
                            play one of the older challenges. 
                        </div>
                        <button>
                            <svg viewBox="0 0 18.500001 18.49996" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_429_11072)" transform="translate(-2.75,-2.74994)">
                                <path d="M 11,3.99994 H 4 V 17.9999 c 0,1.1046 0.89543,2 2,2 h 12 c 1.1046,0 2,-0.8954 2,-2 v -5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M 9,14.9999 20,3.99994" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="m 15,3.99994 h 5 v 5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                            <defs>
                                <clipPath>
                                <rect width="24" height="24" x="0" y="0" />
                                </clipPath>
                            </defs>
                            </svg>
                            Go to
                        </button>
                    </div>
                    </>
                    }
                </div>
            </div>
        </>
    );
}

export default page2;