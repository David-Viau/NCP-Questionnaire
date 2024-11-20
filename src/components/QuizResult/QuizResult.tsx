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
        <Typography fontWeight={'bold'} variant="h5" sx={{ marginBottom: 2 }}>
          Vos résultats à notre simulateur sont <u>prêts</u>.
        </Typography>
        <Typography fontSize={20} variant="body1" color="#11c77b">
          Veuillez entrer vos informations pour les recevoir:
        </Typography>
        <Box
          sx={{
            marginTop: 2,
            marginBottom: 2,
          }}
        >
          <FormField />
        </Box>
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          Déjà <b>1 237</b> résultats générés grâce à notre simulateur.
        </Typography>
      </CardContent>
      <Button onClick={onResetQuiz}>Recommencer le questionnaire</Button>
    </Card>
  );
};

export default QuizResult;
