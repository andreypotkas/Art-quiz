import { header, main, btnSettings, applicationContainer, btnArtistsQuiz, btnPicturesQuiz, questions,  artistsQuizContainer} from "./constants";
  

  console.log(questions.categoryQuestionsByAuthor);               //категории
  console.log(questions.categoryQuestionsByAuthor[1]);            //картины в категории 10 шт
  console.log(questions.categoryQuestionsByAuthor[1][0]);         //картина обьект
  console.log(questions.categoryQuestionsByAuthor[0][0].author); // имя автора
  console.log(questions.categoryQuestionsByAuthor[0][0].name);   // имя картины
  console.log(questions.categoryQuestionsByAuthor[0][0].year);   // год
  console.log(questions.categoryQuestionsByAuthor[0][0].imageNum); //номер

  