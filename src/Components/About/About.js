import React, { useEffect } from 'react';

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return(
        <section className="About">
            <div className='heading-primary'>
                <span className="heading-primary--main">Glaiza wagner</span>
                <span className="heading-primary--sub">Full stack web developer</span>
            </div>
            <div className="about">
                <p className="about-desc">I began my career as an IT Analyst, moving up to an IT Instructor, and eventually being recruited to work in Singapore as an IT Executive.</p>
                <p className="about-desc">I started web developing, without any prior knowledge. My love of creative, intuitive smartphone apps inspired me to take this training to get to a new level and build apps. </p>
                <p className="about-desc">It’s like a dream turning into reality. I will always be grateful and honored that I found Thinkful and for the opportunity they gave me. Thinkful helped me unlock my potential as well as encouraging me that I can achieve my dream.</p>
                
                <h3 className="about-interest">
                                        Interest/Hobbies
                </h3>
                    <ul className="interest-desc">
                        <li><i className="fas fa-caret-right"></i>Eating new foods</li>
                        <li><i className="fas fa-caret-right"></i>Playing snooker and bowling</li>
                        <li><i className="fas fa-caret-right"></i>Traveling in nearby places or out of the country</li>
                        <li><i className="fas fa-caret-right"></i>New experiences and adventures</li>
                        <li><i className="fas fa-caret-right"></i>Baking/cooking when I have lots of extra time</li>
                    </ul>
            </div>
        </section>
    )
}
export default About;