import {Flex} from '@components/Flex';
import {Footer} from '@components/Footer';
import {H2, Paragraph, Title} from '@components/Typography';
import {styled} from '@stitches';
import type {NextPage} from 'next';
import Image from 'next/image';

const Container = styled('main', {
  width: 'min(1200px, 90%)',
  marginX: 'auto',
  display: 'grid',
  gridTemplateRows: '100px 1fr 50px',
  gap: '$8',
});

const ImageContainer = styled('div', {
  position: 'relative',
});

const Button = styled('button', {
  border: 'none',
  backgroundColor: 'rgba(51,51,51,1)',
  color: '#fff',
  textTransform: 'uppercase',
  padding: '$5 $6',
  fontWeight: '$600',
  userSelect: 'none',
  '&:hover': {
    backgroundColor: 'rgba(51,51,51,0.8)',
  },
});

const Home: NextPage = () => {
  return (
    <Container>
      <Flex as="header" cross="center">
        <Title>404 NOT FOUND</Title>
      </Flex>

      <Flex flow="row" wrap="wrap" main="spaceBtw" css={{gap: '10%'}}>
        <ImageContainer
          css={{
            flexBasis: '100%',
            alignSelf: 'center',
            '@bp3': {
              flexBasis: '45%',
            },
          }}
        >
          <Image
            src="/Scarecrow.png"
            alt="scare Crow"
            width={500}
            height={400}
            priority
          />
        </ImageContainer>

        <Flex
          as="section"
          flow="col"
          cross="start"
          gap="4"
          css={{
            flexBasis: '100%',
            '@bp3': {
              flexBasis: '45%',
            },
          }}
        >
          <H2
            css={{
              fontSize: 'clamp(2.875rem, 4vw + 1.25rem, 4rem)',
              width: 'min(15ch, 100%)',
              letterSpacing: '$tight',
              color: 'rgba(51, 51, 51, 1)',
            }}
          >
            I have a bad news for you
          </H2>
          <Paragraph
            css={{
              fontSize: 'clamp(1.25rem, 1vw + 1.25rem, 2.25rem)',
              width: 'min(25ch,100%)',
              color: 'rgba(79, 79, 79, 1)',
            }}
          >
            The page you are looking for might be removed or temporarily
            unavailable
          </Paragraph>
          <Button>Back to homepage</Button>
        </Flex>
      </Flex>
      <Footer />
    </Container>
  );
};

export default Home;
