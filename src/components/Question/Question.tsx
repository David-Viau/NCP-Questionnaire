import React from 'react';
import { QuestionProps } from '@/components/Question/question.interface';
import { useActor } from '@xstate/react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from '@mui/material';
import Answer from '@/components/Answer/Answer';

const Question: React.FC<QuestionProps> = ({ service }) => {
  const [state, send] = useActor(service);

  const { question, answers, selectedAnswer, prevQuestionIndex } =
    state.context;

  return (
    <>
      <Card
        elevation={0}
        sx={{
          padding: 2,
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            fontWeight="500"
            color="text.primary"
            gutterBottom
          >
            {question}
          </Typography>
          {answers.map((answer, index) => {
            return (
              <Answer
                onClick={() => {
                  send({
                    type: 'ANSWER',
                    answer: answer,
                  });
                }}
                key={answer.id}
                content={answer.answer}
                index={index}
                selected={selectedAnswer?.id === answer.id}
              />
            );
          })}
        </CardContent>
        <CardActions>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Button
                style={{ color: '#11c77b' }}
                sx={{
                  visibility:
                    prevQuestionIndex === undefined ? 'hidden' : 'visible',
                }}
                onClick={() => {
                  send('PREV');
                }}
                size="large"
              >
                Précédente
              </Button>
            </Grid>
            <Grid item>
              <Button
                style={{ color: '#11c77b' }}
                disabled={!selectedAnswer}
                onClick={() => {
                  send('NEXT');
                }}
                size="large"
              >
                Suivante
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </>
  );
};

export default Question;
