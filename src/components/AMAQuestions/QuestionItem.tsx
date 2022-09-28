import * as React from 'react'
import { format } from 'timeago.js'
import QuestionReaction from './QuestionReaction'
import EditQuestion from './EditQuestion'
import Markdown from 'react-markdown'
import AudioPlayer from '../AudioPlayer'
import { AmaQuestion } from '../../types/Ama'

interface Props {
  editable: boolean
  question: AmaQuestion
}

export const QuestionItem = React.memo((props: Props) => {
  const { question, editable } = props
  const [isEditing, setIsEditing] = React.useState(false)

  if (isEditing) {
    return (
      <EditQuestion onDone={() => setIsEditing(false)} question={question} />
    )
  }

  return (
    <div className="space-y-1 ">
      <span>
        <p className="text-lg font-medium text-primary">{question.question}</p>
      </span>

      {question.audioUrl && (
        <>
          <div className="py-4">
            <AudioPlayer
              src={question.audioUrl}
              isRecorder={false}
              id={question.id}
              waveform={question.audioWaveform}
            />
          </div>
        </>
      )}

      {question.answer && (
        <div className="prose text-tertiary">
          <Markdown>{question.answer}</Markdown>
        </div>
      )}

      <span className="flex items-center space-x-2 text-tertiary">
        <QuestionReaction question={question} />
        <span className="text-quaternary">{' · '}</span>

        <p
          className={`${
            question.answer || question.audioWaveform?.length > 0
              ? 'text-tertiary'
              : 'text-yellow-500'
          }`}
        >
          {format(question.createdAt)}
        </p>

        {editable && (
          <div className="flex space-x-2">
            <span className="text-quaternary">·</span>
            <button
              className="text-tertiary hover:text-gray-1000 dark:hover:text-gray-50"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          </div>
        )}
      </span>
    </div>
  )
})
