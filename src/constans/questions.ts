import { IQuestion } from '@/types/models/question';

export const questions: IQuestion[] = [
  {
    id: 1,
    question:
      '1. Quels sont vos objectifs principaux grâce à l’investissement ?',
    answers: [
      { id: 1, answer: 'Générer des revenus complémentaires' },
      { id: 2, answer: 'Préparer une retraite confortable' },
      {
        id: 3,
        answer: 'Sécuriser mon épargne contre l’inflation et les aléas.',
      },
      {
        id: 4,
        answer: 'Réaliser un projet (achat, voyage, etc…)',
        isCorrect: true,
      },
    ],
  },
  {
    id: 2,
    question:
      '2. Quel niveau de risque êtes-vous prêt à accepter pour atteindre vos objectifs ?',
    answers: [
      {
        id: 1,
        answer:
          'Un risque faible, même si cela signifie un rendement plus modeste',
      },
      {
        id: 2,
        answer: 'Un risque modéré, pour obtenir un rendement à moyen terme',
      },
      {
        id: 3,
        answer:
          'Ouvert au risque, si cela peut maximiser mon rendement sur le long terme',
      },
      {
        id: 4,
        answer:
          'Je ne sais pas encore, j’aimerais être guidé dans cette décision',
        isCorrect: true,
      },
    ],
  },
  {
    id: 3,
    question: '3. Quel montant accorderiez-vous à cet investissement ?',
    answers: [
      { id: 1, answer: 'Moins de 20 000 €' },
      { id: 2, answer: 'Moins de 100 000 €' },
      { id: 3, answer: 'Plus de 100 000 €' },
      {
        id: 4,
        answer: 'Je ne sais pas encore, j’aimerais connaître mes possibilités.',
        isCorrect: true,
      },
    ],
  },
  {
    id: 4,
    question:
      '4. Sur quelle durée souhaitez-vous voir un retour sur investissement ?',
    answers: [
      {
        id: 1,
        answer:
          'Moins de 1 an – je cherche un rendement rapide même s’il est modeste',
      },
      {
        id: 2,
        answer:
          '1 à 5 ans – je suis prêt à attendre un peu pour obtenir de meilleurs rendements',
      },
      {
        id: 3,
        answer:
          'Plus de 5 ans - je planifie sur le long terme pour construire un capital solide',
      },
      {
        id: 4,
        answer: 'J’aimerais être conseillé sur les meilleures options.',
        isCorrect: true,
      },
    ],
  },
  {
    id: 5,
    question:
      '5. Quel est votre critère principal pour votre stratégie d’investissement ?',
    answers: [
      {
        id: 1,
        answer:
          'Assurer la sécurité de mon capital, même si le rendement est moindre.',
      },
      {
        id: 2,
        answer: 'Avoir la flexibilité de récupérer mon capital à tout moment.',
      },
      {
        id: 3,
        answer: 'Maximiser le gain, même cela implique plus de risques.',
      },
      {
        id: 4,
        answer:
          'J’aimerai en savoir plus sur les stratégies adaptées à mon profil.',
        isCorrect: true,
      },
    ],
  },
];
