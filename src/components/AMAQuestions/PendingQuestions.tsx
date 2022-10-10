import React from 'react'
import Divider from '../Divider'
import { QuestionItem } from './QuestionItem'
import { AmaQuestion } from '../../types/Ama'
// import LoadingSpinner from '../LoadingSpinner'
// import { getQuestions } from '~/lib/api'
// import { useQuery } from 'react-query'

export default function PendingQuestion() {
  const pendingQuestions: AmaQuestion[] = [
    {
      id: 'GBqXMxobnCqpKHCju5L2',
      createdAt: new Date('2021-10-25T22:00:00.000Z'),
      updatedAt: new Date('2022-09-28T12:37:52.329Z'),
      question: 'What developer tools do you like?',
      answer: '',
      status: 'UNANSWERED',
      cid: '',
      audioUrl: '',
      audioWaveform: null,
      reactions: 0,
      audioPlayCount: 0,
    },
  ]
  // const { isLoading, data: questions } = useQuery(
  //   ['questions', 'UNANSWERED'],
  //   () => getQuestions(false),
  //   {
  //     staleTime: 1000 * 60 * 5,
  //   }
  // )

  // if (isLoading) {
  //   return (
  //     <div className="flex items-center justify-center w-full">
  //       <LoadingSpinner />
  //     </div>
  //   )
  // }

  // if (!questions) return null

  return (
    <div className=" space-y-8">
      {pendingQuestions.map((question) => (
        <QuestionItem editable={true} key={question.id} question={question} />
      ))}

      <Divider />
    </div>
  )
}
