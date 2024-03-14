import resume from '../assets/mccausland-resume.pdf'
function Resume() {
    return (
        <main>
            <section id="resume">
                <h2>Resume</h2>
                <p>Download my <a href={resume} download>resume</a></p>

                <h3>Front-end Proficiencies</h3>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Response Design</li>
                <li>React</li>
                <li>Bootstrap</li>

                <h3>Back-end Proficiencies</h3>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </section>
        </main>
    );
}
export default Resume;
