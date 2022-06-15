import Article from './Article';
import Loading from '../Loading';

export default function ArticlesFeed({ articles, date }) {
  return (
    <div>
      {
        articles.length === 44348 && date ?
          articles.map((article) => (
            article.pub_date.includes(`${date}`) &&
            <Article article={article} key={article._id} />
          ))
          :
          <Loading />
      }
    </div>
  )
}