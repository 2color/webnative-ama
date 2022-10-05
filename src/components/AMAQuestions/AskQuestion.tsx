import * as React from 'react'
// import toast from 'react-hot-toast'
// import { useMutation, useQueryClient } from 'react-query'
import { Textarea } from '../Input'
import { SuccessAlert } from '../Alert'
import Button from '../Button'

export default function AskQuestion() {
  const [question, setQuestion] = React.useState('')
  // const queryClient = useQueryClient()

  // const mutation = useMutation(addAMAQuestion, {
  //   onSuccess: (data, variables, context) => {
  //     // Invalidate pending questions so that the new question is rendered automatically.
  //     queryClient.invalidateQueries(['questions', 'UNANSWERED'])
  //   },
  //   onError: (error, variables, context) => {
  //     toast(`Error adding your question: ${error}`)
  //   },
  //   onSettled(data, error) {
  //     setQuestion('')
  //   },
  // })

  const onCreateAMA = React.useCallback(
    (e) => {
      e.preventDefault()
      // mutation.mutate(question)
    },
    [question],
  )

  function onQuestionChange(e: React.ChangeEvent<HTMLInputElement>) {
    // mutation.error && mutation.reset()
    return setQuestion(e.target.value)
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.keyCode === 13 && e.metaKey) {
      return onCreateAMA(e)
    }
  }

  return (
    <form className="items-stretch space-y-4" onSubmit={onCreateAMA}>
      <Textarea
        value={question}
        placeholder="Ask me anything..."
        onChange={onQuestionChange}
        onKeyDown={onKeyDown}
      />
      {question.length > 0 && (
        <div className="flex self-end">
          <Button onClick={onCreateAMA}>Ask away!</Button>
        </div>
      )}
      {/* {mutation.isError && <ErrorAlert>{mutation.error.toString()}</ErrorAlert>} */}
      { /* TODO: condition */
        <SuccessAlert>
          Thanks for asking! I’ll reply soon, so feel free to check back 👋
        </SuccessAlert>
      }
    </form>
  )
}
