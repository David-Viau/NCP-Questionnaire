import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import React from 'react';
import { QuizResultProps } from '@/components/QuizResult/quiz-result.interface';
import FormField from '../FormField/FormField';

const QuizResult: React.FC<QuizResultProps> = ({
  countCorrectAnswers,
  countQuestions,
  onResetQuiz,
}) => {
  return (
    <Card style={{ boxShadow: 'none' }}>
      <CardContent
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5">
          Merci d&apos;avoir répondu au questionnaire
        </Typography>
        <Box
          sx={{
            marginTop: 2,
            marginBottom: 2,
          }}
        >
          <FormField />
        </Box>
      </CardContent>
      <Button onClick={onResetQuiz}>Recommencer le questionnaire</Button>
      <Typography color="green" fontWeight="bold" variant="body1">
        Nombre de réponse &quot;d&quot; : {countCorrectAnswers}
      </Typography>
    </Card>
  );
};

export default QuizResult;
