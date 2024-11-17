import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Quiz from '@/features/Quiz/Quiz';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <Quiz />
      </Container>
      <Footer />
    </>
  );
}
