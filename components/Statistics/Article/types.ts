import { FormInputType } from 'components/BasicComponents/FormInput/types'

export type ArticleFormType = {
  articleId?: string,
  articleTitleLabel?: FormInputType,
  articleTextLabel?: FormInputType,
  articleAuthorLabel?: FormInputType,
}

interface Article {
  id: string,
  title: string,
  text: string,
  author: string,
}

export type ArticleListType = Article[];