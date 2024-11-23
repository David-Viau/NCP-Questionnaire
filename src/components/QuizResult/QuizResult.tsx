import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import React, { useState } from 'react';
import { QuizResultProps } from '@/components/QuizResult/quiz-result.interface';
import FormField from '../FormField/FormField';

const QuizResult: React.FC<QuizResultProps> = ({
  countCorrectAnswers,
  onResetQuiz,
}) => {
  const [selected, setSelected] = useState(false);

  const handleFinishSimulation = () => {
    setSelected(true); // Met à jour l'état pour afficher le formulaire
  };

  return (
    <Card style={{ boxShadow: 'none' }}>
      {/* Affichage conditionnel selon `selected` ou `countCorrectAnswers` */}
      {countCorrectAnswers >= 2 && !selected ? (
        <CardContent
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography fontWeight={'bold'} variant="h5" sx={{ marginBottom: 2 }}>
            Votre profil est éligible à un rendez-vous <u>offert</u> avec
            l&apos;un de nos conseillers.
          </Typography>
          <Box
            paddingX={2}
            paddingY={1}
            marginY={3}
            sx={{
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: 'grey.300',
              borderRadius: 4,
              width: '100%',
              maxWidth: '600px',
              color: 'black',
              backgroundColor: 'grey.200',
            }}
          >
            <Typography
              variant="body1"
              sx={{ textAlign: 'center', fontSize: '20px' }}
            >
              Quelles seraient vos disponibilités ?
            </Typography>
          </Box>
          <Box
            paddingX={2}
            paddingY={1}
            marginY={3}
            sx={{
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: 'grey.300',
              borderRadius: 4,
              width: '100%',
              maxWidth: '600px',
              color: 'black',
              backgroundColor: 'grey.200',
            }}
          >
            {/* Calendly iframe */}
            <iframe
              src="https://calendly.com/viau-davidp/testRDV"
              width="100%"
              height="600px"
              style={{
                border: 'none',
                borderRadius: '4px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              }}
              title="Calendrier Calendly"
              loading="lazy"
            ></iframe>
          </Box>
          <Box
            paddingX={2}
            paddingY={1}
            marginY={3}
            sx={{
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: 'grey.300',
              borderRadius: 4,
              maxWidth: '600px',
              width: '100%',
              color: 'black',
              backgroundColor: 'grey.200',
              '&:hover': {
                cursor: 'pointer',
                backgroundColor: '#11c77b',
                color: 'white',
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{ textAlign: 'center', fontSize: '20px' }}
              onClick={handleFinishSimulation}
            >
              Non merci, je souhaiterais finir la simulation.
            </Typography>
          </Box>
        </CardContent>
      ) : (
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
      )}
      <Button onClick={onResetQuiz}>Recommencer le questionnaire</Button>
    </Card>
  );
};

export default QuizResult;
