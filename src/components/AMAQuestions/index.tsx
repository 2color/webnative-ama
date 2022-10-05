import * as React from 'react'
import { QuestionItem } from './QuestionItem'
import AskQuestion from './AskQuestion'
import PendingQuestions from './PendingQuestions'
import { AmaQuestion } from '../../types/Ama'

const QuestionsList = () => {
  const questions: AmaQuestion[] = [
    {
      id: 'GBqXMxobnCqpKHCju5L2',
      createdAt: new Date('2021-10-25T22:00:00.000Z'),
      updatedAt: new Date('2022-09-28T12:37:52.329Z'),
      question: 'How did you build this AMA page?',
      answer:
        'With Next.js, React Query, Prisma with The Prisma Data Proxy, MySQL, and Cloudinary for uploading and serving the audio.\n\n',
      status: 'ANSWERED',
      cid: 'bafkreihdir56pvjamuzoxd6mvjpaht2uyoumyfyhfpnsky2cvjhkzewtcq',
      audioUrl:
        'https://bafkreihdir56pvjamuzoxd6mvjpaht2uyoumyfyhfpnsky2cvjhkzewtcq.ipfs.w3s.link',
      audioWaveform: [
        0.0023650280623311788, 0.0005242836423840549, 0.0019306015633637288,
        0.0004789042578673092, 0.1597908885826806, 0.4599161178283841,
        0.27542320617642946, 0.14955066310725004, 0.3658745172008857,
        0.6260590719013086, 0.7716662635680827, 0.27936010293427244,
        0.5201432032180542, 0.05586527143601835, 0.03736078769605447,
        0.4430033375059296, 0.6381448584533526, 0.17241056569211263,
        0.39250237960596834, 0.4777543073987801, 0.45667476642369703,
        0.35312739677486776, 0.28276199228196147, 0.20663877067776587,
        0.27037572194468806, 0.5805262286127741, 0.2567429879836064,
        0.15064116793051385, 0.5537835894652814, 0.03593009676258659,
        0.5726057357830412, 0.6273066549719912, 0.6113363035441136,
        0.17701528349863854, 0.27697270635061283, 0.6112518858648007,
        0.34748341303880886, 0.593450124973776, 0.392325845777289, 1,
        0.10182927478377378, 0.9202701609909124, 0.2691419731926378,
        0.6053418281422832, 0.9460488812317284, 0.7753513160827625,
        0.21243382899690047, 0.3511715542745358, 0.2799324726342475,
        0.47102263104688896, 0.4357907327487444, 0.5236482863572626,
        0.6355713335462864, 0.4169039548341364, 0.4898506536595785,
        0.13327188078141772, 0.5596433652580443, 0.3657023337116808,
        0.3581643384595852, 0.485052286180861, 0.3741075748093524,
        0.2652669095598845, 0.3638112522384853, 0.07077686484561195,
      ],
      reactions: 132,
      audioPlayCount: 0,
    },
    {
      id: 'i7QvpXiVBwY9LSEUOypW',
      createdAt: new Date('2021-10-24T22:00:00.000Z'),
      updatedAt: new Date('2022-09-28T12:27:52.708Z'),
      question: 'What is zero-cost type safety?',
      answer:
        "Type safety with databases is a way to ensure that application code interacting with the database can only do so safely. Moreover, the return type for the query is always inferred for you, even when fetching relations.\n\nFor example, attempting to query a non-existent column will immediately raise a type error:\n\n![demo](https://i.imgur.com/bMifTx7.gif)\n\n[Prisma](https://www.prisma.io/) gives you type safety at zero cost by generating TypeScript types for you. That way, you don't have burden of manually defining types based on your database schema.",
      status: 'ANSWERED',
      cid: null,
      audioUrl: null,
      audioWaveform: null,
      reactions: 177,
      audioPlayCount: 0,
    },
  ]
  return (
    <div className="mt-8 space-y-8 ">
      <AskQuestion />

      {<PendingQuestions />}

      <div className="space-y-16">
        {questions.map((question) => (
          <QuestionItem editable={true} key={question.id} question={question} />
        ))}
      </div>

      {questions.length === 0 && <p>No questions yet!</p>}
    </div>
  )
}

export default QuestionsList
