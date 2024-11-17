import { useMachine } from '@xstate/react';
import { quizMachine } from '@/features/Quiz/quiz-machine';
import { questions as data } from '@/constans/questions';
import Question from '@/components/Question/Question';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Swiper as BaseSwier } from 'swiper';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import {
  Box,
  CircularProgress,
  Typography,
  LinearProgress,
} from '@mui/material';
import { useEffect, useState } from 'react';
import QuizResult from '@/components/QuizResult/QuizResult';

const SLIDE_SPEED = 400;

const Quiz = () => {
  const [controlledSwiper, setControlledSwiper] = useState<BaseSwier | null>(
    null,
  );

  const [state, send] = useMachine(quizMachine, {
    services: {
      fetchQuestions: async () => {
        return data;
      },
    },
  });

  const { currentQuestionIndex, questions, countCorrectAnswers } =
    state.context;

  // Calcul de la progression en pourcentage
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const renderQuestions = () => {
    return (
      <>
        <Swiper
          modules={[Controller, Pagination]}
          style={{
            maxWidth: '800px',
          }}
          slidesPerView={1}
          spaceBetween={30}
          onSwiper={setControlledSwiper}
          allowTouchMove={false}
        >
          {questions.map((question, index) => {
            return (
              <SwiperSlide key={index}>
                <Question service={question} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    );
  };

  const renderQuizResult = () => {
    return (
      <QuizResult
        countQuestions={questions.length}
        countCorrectAnswers={countCorrectAnswers}
        onResetQuiz={() => {
          send('RESET');
        }}
      />
    );
  };

  const renderLoading = () => {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress />
      </Box>
    );
  };

  useEffect(() => {
    if (!controlledSwiper) {
      return;
    }

    if (currentQuestionIndex !== controlledSwiper.activeIndex) {
      controlledSwiper.slideTo(currentQuestionIndex, SLIDE_SPEED);
    }
  }, [currentQuestionIndex, controlledSwiper]);

  return (
    <Box
      sx={{
        maxWidth: '800px',
      }}
      marginTop={5}
      marginX={'auto'}
    >
      {/* Progress Bar */}
      <Box sx={{ position: 'relative', width: '100%', mb: 4 }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 30,
            borderRadius: 15,
            backgroundColor: '#f0f0f0',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#11c77b',
              borderRadius: 15,
            },
          }}
        />
        {/* Pourcentage centré */}
        <Typography
          variant="body1"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontWeight: 'bold',
            color: progress > 50 ? '#fff' : '#11c77b', // Blanc si progress > 50, sinon vert
            transition: 'color 0.3s ease', // Transition fluide de la couleur
          }}
        >
          {Math.round(progress)}%
        </Typography>
      </Box>

      {/* Quiz Content */}
      {state.matches('idle') && renderLoading()}
      {['reading', 'result'].some(state.matches) && renderQuestions()}
      {state.matches('checking') && <div>Checking...</div>}
      {state.matches('showingResults') && renderQuizResult()}
    </Box>
  );
};

export default Quiz;
