import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBrain, FaUsers, FaGraduationCap, FaRocket } from 'react-icons/fa';
import { 
  PageContainer, 
  PageHero, 
  PageSection, 
  IconBox, 
  ContentBox,
  ContentTitle,
  ContentText,
  ContentWrapper,
  GradientText,
  SectionTitle,
  SectionSubtitle 
} from '../styles/PageStyles';

const Career = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <PageContainer>
      <PageHero>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <GradientText>Join Our Team</GradientText>
              <ContentText>
                Be part of a team that's shaping the future of creative AI solutions.
              </ContentText>
            </Col>
          </Row>
        </Container>
      </PageHero>

      <PageSection>
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <SectionTitle>Why Join Us?</SectionTitle>
              <SectionSubtitle>
                Discover the opportunities that await you at Shape Creative
              </SectionSubtitle>
            </Col>
          </Row>
          <Row className="g-4">
            {[
              {
                icon: <FaBrain />,
                title: "Innovation First",
                description: "Work with cutting-edge AI technologies"
              },
              {
                icon: <FaUsers />,
                title: "Great Culture",
                description: "Be part of a dynamic and supportive team"
              },
              {
                icon: <FaGraduationCap />,
                title: "Growth",
                description: "Continuous learning and career development"
              },
              {
                icon: <FaRocket />,
                title: "Impact",
                description: "Make a real difference in the AI industry"
              }
            ].map((benefit, index) => (
              <Col md={6} lg={3} key={index}>
                <ContentBox>
                  <ContentWrapper>
                    <IconBox>
                      {benefit.icon}
                    </IconBox>
                    <ContentTitle>{benefit.title}</ContentTitle>
                    <ContentText>{benefit.description}</ContentText>
                  </ContentWrapper>
                </ContentBox>
              </Col>
            ))}
          </Row>
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <SectionTitle>Open Positions</SectionTitle>
              <SectionSubtitle>
                Join our team and help shape the future of AI
              </SectionSubtitle>
            </Col>
          </Row>
          <Row className="g-4">
            {[
              {
                title: "AI Engineer",
                department: "Engineering",
                location: "Remote",
                type: "Full-time"
              },
              {
                title: "UX Designer",
                department: "Design",
                location: "İzmir",
                type: "Full-time"
              },
              {
                title: "Product Manager",
                department: "Product",
                location: "Hybrid",
                type: "Full-time"
              }
            ].map((job, index) => (
              <Col md={4} key={index}>
                <ContentBox>
                  <ContentWrapper>
                    <ContentTitle>{job.title}</ContentTitle>
                    <ContentText><strong>Department:</strong> {job.department}</ContentText>
                    <ContentText><strong>Location:</strong> {job.location}</ContentText>
                    <ContentText><strong>Type:</strong> {job.type}</ContentText>
                    <form onSubmit={handleSubmit}>
                      <button 
                        type="submit"
                        className="btn btn-primary mt-3 w-100"
                        style={{
                          background: 'linear-gradient(45deg, #8B5CF6, #6366F1)',
                          border: 'none',
                          padding: '10px 20px',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        Apply Now
                      </button>
                    </form>
                  </ContentWrapper>
                </ContentBox>
              </Col>
            ))}
          </Row>
        </Container>
      </PageSection>
    </PageContainer>
  );
};

export default Career; 