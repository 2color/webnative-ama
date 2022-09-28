
export type AmaQuestion = {
  id: string
  createdAt: Date
  updatedAt: Date
  question: string
  answer: string | null
  status: Status
  cid: string | null
  audioUrl: string | null
  audioWaveform: number[] | null
  reactions: number
  audioPlayCount: number
}

export type Status = 'ANSWERED' | 'UNANSWERED'

export type UpdateAmaQuestion = Pick<
  AmaQuestion,
  'answer' | 'question' | 'audioUrl' | 'audioWaveform' | 'status' | 'cid'
>

export type AmaReactionsResponse = Pick<AmaQuestion, 'id' | 'reactions' | 'status'>
