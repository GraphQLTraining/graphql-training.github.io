import React from "react";
import Helmet from "react-helmet";
import { ButtonLinkSolid } from "../components/Button";
import { PageHeaderPage } from "../components/PageHeader";
import { Section, RowCenter } from "../components/LayoutHelpers";
import Footer from "../components/Footer";
import {
  ApproachSection,
  BioSection,
  SplitColumn,
} from "../components/PageElements";
import Layout from "../components/Layout";

const Index = () => (
  <Layout>
    <div>
      <Helmet
        title={`GraphQL Training for teams in London, Manchester, Berlin and Beyond`}
        meta={[
          {
            name: "description",
            content:
              "GraphQL training for full stack developers and teams in London, Manchester, Berlin and Europe",
          },
          {
            name: "keywords",
            content:
              "GraphQL, Schema, API, Full Stack, Nodejs, Node, Training, Teach, Learn, London, Berlin",
          },
        ]}
      />
      <PageHeaderPage
        title={
          <div>
            GraphQL for Fullstack
            <br /> Developers & Teams
          </div>
        }
      />
      <Section className="bg-almost-black white">
        <div className="row">
          <div className="col-xs-12">
            <div className="flex flex-column items-center">
              <h3 className="divider-center">
                2 Day GraphQL course <br /> for full stack <br /> developers &
                teams
              </h3>
              <h4 className="divider-center">Updated for 2019</h4>
              <p>
                GraphQL is a revolutionary API technology combining intuitively
                structured data with a strong type system and powerful tooling,
                enabling engineers to quickly produce reliable and performant
                applications.
              </p>

              <p>
                This course gives full stack engineers and cross-discipline
                teams the experience and intuitions to create high performance
                GraphQL applications/APIs rapidly and on the right footing. We
                recommend that 3 days are allocated to this course, but we can
                also deliver a more intensive version over 2 days.
              </p>
              <p>
                The course starts by giving frontend and backend engineers the
                fundamental knowledge they need to use GraphQL well, introducing
                them to the GraphQL type system, terminology, and how to
                collaborate with it; how to write queries and mutations; and how
                to use GraphQL fragments to reduce repetition and increase
                performance. It goes on to outline some GraphQL best practices
                applicable to frontend development.
              </p>
              <p>
                Having mastered the fundamentals, participants will go on to
                acquire the knowledge needed to architect reliable GraphQL APIs.
                Participants will build knowledge in areas such as common
                architectural patterns; schema design patterns and best
                practices; serving GraphQL over HTTP; authentication and
                determining whether GraphQL is a good fit for a particular
                problem. Significant time will be spent learning about and
                practicing schema design, which will give participants a good
                overview of many of the crucial aspects needed to build an
                efficient, effective and maintainable schema.
              </p>
              <h3 className="divider-center mt5">Target Audience</h3>
              <ul>
                <li>
                  Project leaders, backend and full-stack engineers evaluating
                  GraphQL for upcoming projects.
                </li>
                <li>
                  Frontend engineers who wish to understand backend concerns
                  related to implementing GraphQL servers.
                </li>
                <li>
                  Teams looking to solidify their understanding and approach to
                  GraphQL development.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <section className="bg-almost-black pb0 pt0">
        <div className="container mw8">
          <RowCenter className="bg-white">
            <h3 className="divider-center mb5 mb6-l mt5">Syllabus</h3>
          </RowCenter>
          <div className="row bg-white">
            <SplitColumn>
              <h5>GraphQL History and Mission</h5>
              <ul>
                <li>Why did Facebook invent GraphQL?</li>
                <li>Are the problems it solves unique to Facebook?</li>
                <li>Thinking with graphs.</li>
                <li>
                  How does GraphQL solve issues like developer onboarding,
                  scaling teams, API performance, maintainability, and
                  preventing bugs and regressions?
                </li>
                <li>GraphQL schema responsibilities.</li>
              </ul>
              <h5>GraphQL Fundamentals</h5>
              <ul>
                <li>GraphQL terminology.</li>
                <li>Anatomy of a query/mutation.</li>
                <li>GraphQL type system.</li>
                <li>Composing GraphQL documents with fragments.</li>
                <li>Querying a local GraphQL schema.</li>
                <li>Tools for exploring/understanding a GraphQL API.</li>
                <li>Best practices for GraphQL consumers.</li>
                <li>When to use GraphQL.</li>
              </ul>
              <h5>GraphQL Architecture</h5>
              <ul>
                <li>Where GraphQL fits in the application stack.</li>
                <li>GraphQL resolvers.</li>
                <li>
                  How GraphQL executes a query, mutation and subscription.
                </li>
                <li>The N+1 problem, and solutions to it.</li>
                <li>Common patterns.</li>
              </ul>
            </SplitColumn>
            <SplitColumn>
              <h5>Designing a GraphQL Schema</h5>
              <ul>
                <li>Fundamentals.</li>
                <li>
                  How backend and frontend developers can iterate in harmony.
                </li>
                <li>Getting started quickly with a mocked schema.</li>
                <li>Where does the business logic live?</li>
                <li>How to handle common requirements.</li>
                <li>
                  Client-side caches, synchronisation, global identifiers.
                </li>
                <li>The Relay GraphQL specifications.</li>
                <li>Versionless API design.</li>
                <li>Guiding API consumers onto the &ldquo;happy path&rdquo;</li>
              </ul>
              <h5>Serving a GraphQL Schema</h5>
              <ul>
                <li>Understanding that GraphQL is not tied to HTTP.</li>
                <li>Basics: parsing, validation and execution.</li>
                <li>Authentication and authorization.</li>
                <li>Query batching.</li>
                <li>Persisted queries.</li>
                <li>Protecting your server.</li>
              </ul>
              <h5>Advanced GraphQL Topics</h5>
              <ul>
                <li>GraphQL introspection.</li>
                <li>Database performance (including DataLoaders).</li>
                <li>Tooling available to build APIs faster.</li>
                <li>Common GraphQL directives.</li>
                <li>Realtime GraphQL.</li>
              </ul>
            </SplitColumn>
          </div>
          <div className="row bg-white">
            <div className="col-xs-12 flex flex-column items-center">
              <ButtonLinkSolid
                className="w5-ns w-100 mh2-ns mb6-l mb5 mt0 mt4-l"
                href="mailto:info@graphql-training"
                title="Email GraphQL Training"
              >
                Sign Up
              </ButtonLinkSolid>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-almost-black white">
        <div className="row">
          <div className="col-xs-12">
            <div className="flex flex-column items-center">
              <h3 className="divider-center">Audience Requirements</h3>
              <p>
                All attendees must bring a laptop with the latest version of
                Google Chrome installed. The learnings are transferrable between
                different languages but from time to time we‘ll be performing
                examples with the GraphQL reference implementation so a good
                understanding of modern JavaScript (ES2017) will be very
                helpful. If you prefer another environment, you should come to
                with your favourite stack and GraphQL libraries pre-installed.
                Those attendees wishing to follow along with the JS code
                examples should have Node.js v10 or higher with a suitable
                package manager; we recommend <code>yarn</code> but{" "}
                <code>npm</code> should suffice.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <BioSection />
      <ApproachSection />
      <Footer />
    </div>
  </Layout>
);

export default Index;
