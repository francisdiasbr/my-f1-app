import Button from '@mui/joy/button'
import { Block } from '@xprog/prensa'
import axios from 'axios'
import { first, get, map } from 'lodash'
import React, { useState } from 'react'

import { FormInput } from '../../BasicComponents/FormInput'
import Table from './Table'
import TextArea from '../../BasicComponents/TextArea'
import Title from '../../BasicComponents/Title'
import CustomAlert from '../../BasicComponents/MUIAlert'
import { titleStrings } from '../../BasicComponents/Title/data'
import { articleFormFields, headCells } from './data'
import { blockDispositionProps, inputWrapProps, sectionWrapperProps } from './styles'
import { ArticleFormType, ArticleListType } from './types'

const Articles = () => {
  const [formValues, setFormValues] = useState<ArticleFormType>({})
  const [articleList, setArticleList] = useState<ArticleListType>([])
  const [formIncomplete, setFormIncomplete] = useState<boolean>(false)

  const parseArticleFromApi = (item) => {
    return {
      id: item._id,
      title: item.articleTitle,
      text: item.articleText,
      author: item.articleAuthor,
    }
  }

  const loadArticleFromApi = async () => {
    const requestArticles = await axios.post('http://localhost:3001/articles/filter')
    const resultArticles = get(requestArticles, 'data', [])
    const parsedArticles = map(resultArticles, (item) => parseArticleFromApi(item))
    setArticleList(parsedArticles)
  }

  const loadArticleById = async (id) => {
    const requestFilter = { filters: { _id: id } }
    const requestArticles = await axios.post('http://localhost:3001/articles/filter', requestFilter)
    const resultArticles = get(requestArticles, 'data', [])
    const parsedArticles = map(resultArticles, (item) => parseArticleFromApi(item))
    const articleSelected = first(parsedArticles)
    setFormValues({
      ...formValues,
      articleId: articleSelected.id,
      articleTitleLabel: articleSelected.title,
      articleTextLabel: articleSelected.text,
      articleAuthorLabel: articleSelected.author,
    })
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event?.target?.name
    const value = event?.target?.value
    setFormValues({
      ...formValues,
      [`${name}`]: value
    })
  }

  const handleEditItem = async (id) => {
    await loadArticleById(id)
  }

  const handleFormSubmit = async () => {
    if (!formValues?.articleTitleLabel || !formValues?.articleTextLabel || !formValues?.articleAuthorLabel) {
      setFormIncomplete(true);
      return;
    }
    setFormIncomplete(false);
    const articleBody = {
      _id: formValues?.articleId,
      articleTitle: formValues?.articleTitleLabel,
      articleText: formValues?.articleTextLabel,
      articleAuthor: formValues?.articleAuthorLabel,
    }
    const result = await axios.post('http://localhost:3001/articles/save', articleBody)
    loadArticleFromApi()
  }

  React.useEffect(() => {
    loadArticleFromApi()
  }, [])

  return (
    <Block
      className='sectionWrapper'
      css={sectionWrapperProps}>
      <Title value={titleStrings.articlesTitle} />
      <Block
        className='blockDisposition'
        css={blockDispositionProps}>
        <Block
          className='inputWrap'
          css={inputWrapProps}>
          {map(articleFormFields, (item, key) =>
            item.type === 'textarea' ? (
              <TextArea
                {...item}
                key={key}
                onChange={handleInputChange}
                title='Matéria'
                value={formValues[`${item.name}`]}
              />
            ) : (
              <FormInput
                {...item}
                key={key}
                onChange={handleInputChange}
                value={formValues[`${item.name}`]}
              />
            )
          )}
        </Block>
        <Button
          onClick={handleFormSubmit}
          color='info'
          variant='soft'
        >
          Enviar
        </Button>
        {formIncomplete && (
          <CustomAlert
            message='Todos os campos são obrigatórios.'
            onClose={() => {
              setFormIncomplete(false);
            }}
          />
        )}
      </Block>
      <Table
        headCells={headCells}
        handleEditItem={handleEditItem}
        rows={articleList}
      />
    </Block>
  )
}

export default Articles