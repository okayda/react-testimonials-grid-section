import { ContainerStyled } from "./styles/container.styled";
import { Grid } from "./styles/Grid";
import { PersonStyled } from "./styles/person.styled";
import { PersonStatementStyled } from "./styles/person_statement.styled";

const img_one = require("../images/image-daniel.jpg");
const img_two = require("../images/image-jonathan.jpg");
const img_three = require("../images/image-jeanette.jpg");
const img_four = require("../images/image-patrick.jpg");
const img_five = require("../images/image-kira.jpg");

const Content = function () {
  return (
    <ContainerStyled>
      <Grid bg_color={"violet"} position="purple_grid">
        <PersonStyled>
          <img src={img_one} alt="Person" />
          <div className="person">
            <span className="person__name">Daniel Clifford</span>
            <span className="person__validity">Verified Graduate</span>
          </div>
        </PersonStyled>
        <PersonStatementStyled>
          <h2>
            I received a job offer mild-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny's worth.
          </h2>
          <blockquote>
            <p>
              “ I was an EMT for many years before I joined the bootcamp. I’ve
              been looking to make a transition and have heard some people who
              had an amazing experience here. I signed up for the free intro
              course and found it incredibly fun! I enrolled shortly thereafter.
              The next 12 weeks was the best - and most grueling - time of my
              life. Since completing the course, I’ve successfully switched
              careers, working as a Software Engineer at a VR startup. ”
            </p>
          </blockquote>
        </PersonStatementStyled>
      </Grid>

      <Grid bg_color={"dark_grayish_blue"} position={"gray_grid"}>
        <PersonStyled>
          <img src={img_two} alt="Person" />
          <div className="person">
            <span className="person__name">Jonathan Walters</span>
            <span className="person__validity">Verified Graduate</span>
          </div>
        </PersonStyled>
        <PersonStatementStyled>
          <h2>The team was very supportive and kept me motivated</h2>
          <blockquote>
            <p>
              “ I started as a total newbie with virtually no coding skills. I
              now work as a mobile engineer for a big company. This was one of
              the best investments I’ve made in myself. ”
            </p>
          </blockquote>
        </PersonStatementStyled>
      </Grid>

      <Grid bg_color={"white"} position={"white-first_grid"}>
        <PersonStyled colorTxt={"white"}>
          <img src={img_three} alt="Person" />
          <div className="person">
            <span className="person__name">Jeanette Harmon</span>
            <span className="person__validity">Verified Graduate</span>
          </div>
        </PersonStyled>
        <PersonStatementStyled colorTxt={"white"}>
          <h2>An overall wonderful and rewarding experience</h2>
          <blockquote>
            <p>
              “ Thank you for the wonderful experience! I now have a job I
              really enjoy, and make a good living while doing something I love.
              ”
            </p>
          </blockquote>
        </PersonStatementStyled>
      </Grid>

      <Grid bg_color={"dark_blackish_blue"} position={"black_grid"}>
        <PersonStyled>
          <img src={img_four} alt="Person" />
          <div className="person">
            <span className="person__name">Patrick Abrams</span>
            <span className="person__validity">Verified Graduate</span>
          </div>
        </PersonStyled>
        <PersonStatementStyled>
          <h2>
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experiences was
            easy.
          </h2>
          <blockquote>
            <p>
              “ The staff seem genuinely concerned about my progress which I
              find really refreshing. The program gave me the confidence
              necessary to be able to go out in the world and present myself as
              a capable junior developer. The standard is above the rest. You
              will get the personal attention you need from an incredible
              community of smart and amazing people. ”
            </p>
          </blockquote>
        </PersonStatementStyled>
      </Grid>

      <Grid bg_color={"white"} position={"white-second_grid"}>
        <PersonStyled colorTxt={"white"}>
          <img src={img_five} alt="Person" />
          <div className="person">
            <span className="person__name">Kira Whittle</span>
            <span className="person__validity">Verified Graduate</span>
          </div>
        </PersonStyled>
        <PersonStatementStyled colorTxt={"white"}>
          <h2>Such a life-changing experience. Highly recommended!</h2>
          <blockquote>
            <p>
              “ Before joining the bootcamp, I’ve never written a line of code.
              I needed some structure from professionals who can help me learn
              programming step by step. I was encouraged to enroll by a former
              student of theirs who can only say wonderful things about the
              program. The entire curriculum and staff did not disappoint. They
              were very hands-on and I never had to wait long for assistance.
              The agile team project, in particular, was outstanding. It took my
              learning to the next level in a way that no tutorial could ever
              have. In fact, I’ve often referred to it during interviews as an
              example of my developent experience. It certainly helped me land a
              job as a full-stack developer after receiving multiple offers.
              100% recommend! ”
            </p>
          </blockquote>
        </PersonStatementStyled>
      </Grid>
    </ContainerStyled>
  );
};

export default Content;
