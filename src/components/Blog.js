import React from 'react'
import { BlogCard } from './BlogCard'
import { ContentCard } from './ContentCard'
import BlogHeading from './BlogHeading'
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'

const Blog = ({ _id, title, publishedTime,publishedDate, contents, readTime, conclusion, comments }) => {
  return (
    <>
      <Wrapper>
        <BlogHeading
          title={title}
          publishedTime = {publishedTime}
            publishedDate = {publishedDate}
          readTime={readTime}
        />
        <ContentCard contents={contents} _id={_id} />
        {contents &&
          contents.map((content, index) => (
            <BlogCard
              key={index}
              id = {`${_id}-${index}`}
              subTitle={content.subTitle}
              subBody={content.subBody}
            />
          ))
        }
        <BlogCard
              subTitle="Conclusion"
              subBody={conclusion}
            />

      </Wrapper>
    </>
  )
}

export default Blog

const Wrapper = styled.div`
  margin-bottom:150px;
  display:flex;
  flex-direction:column;
  width: 600px;
  align-items:center;
`
