import React from 'react';
<<<<<<< Updated upstream
=======
import { useState } from 'react';

export default function Article({article}) {
  // const [currentArticle, setCurrentArticle] = useState({
  //   headline: article.headline,
  //   abstract: article.abstract,
  //   web_url: article.web_url
  // })
>>>>>>> Stashed changes

export default function Article() {
  return (
    <div className="article">
      <a href="https://www.nytimes.com/2000/01/01/technology/visions-technology-will-dust-survive-and-other-nagging-questions.html" className="headline">
        Will Dust Survive? And Other Nagging Questions
      </a>
      <p className="abstract">
        Henry Fountain article on whether in the century ahead science will succeed in reviving bodies frozen in liquid nitrogen, colonizing outer space, eliminating dust mites, improving fabrics used in clothing and making it impossible to be alone; photos (M)
      </p>
      <a href="https://www.nytimes.com/2000/01/01/technology/visions-technology-will-dust-survive-and-other-nagging-questions.html" className="link">
        https://www.nytimes.com/2000/01/01/technology/visions-technology-will-dust-survive-and-other-nagging-questions.html
      </a>
    </div>
  )
}