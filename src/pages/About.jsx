import profileImag from '../assets/maggiemccausland.jpg';

function About() {
    return(
        <main>
        <section id="about">
        <h2>About Me</h2>
        <div>
          <img src={profileImag} alt="Maggie McCausland Profile Image" />
          <p>
            I am from Utah, born and raised. I have earned my Associates Degree
            in University Studies in Science. I am working on furthering my
            education by attending the University of Utah Bootcamp for coding.
            Currently, I'm working for small motorcycle dealership located in
            Springville. In my free time I enjoy spending time in the outdoors,
            spending time with family and friends, and going to the movies.
          </p>
        </div>
      </section>
      </main>
    );
}
export default About;
