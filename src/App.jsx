import "./app.css";
import { useState, useEffect, useMemo } from "react";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "На производстве каких продуктов специализируется компания Rolex?",
      answers: [
        {
          text: "Телефоны",
          correct: false,
        },
        {
          text: "Часы",
          correct: true,
        },
        {
          text: "Еда",
          correct: false,
        },
        {
          text: "Косметика",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Когда был запушен сайт Facebook?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Кто сыграл героя Гарри Поттера в одноименной серии фильмов?",
      answers: [
        {
          text: "Джони Депп",
          correct: false,
        },
        {
          text: "Леонардо Ди Каприо",
          correct: false,
        },
        {
          text: "Дензел Вашингтон",
          correct: false,
        },
        {
          text: "Дениел Редклифф",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question:
        "Как называют микроавтобусы, совершающие поездки по определённым маршрутам?",
      answers: [
        {
          text: "Рейсовка",
          correct: false,
        },
        {
          text: "Путевка",
          correct: false,
        },
        {
          text: "Курсовка",
          correct: false,
        },
        {
          text: "Маршрутка",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question:
        "О чём писал Грибоедов, отмечая, что он «нам сладок и приятен» ?",
      answers: [
        {
          text: "Дым Отечества ",
          correct: true,
        },
        {
          text: "Дух купечества ",
          correct: false,
        },
        {
          text: "Дар пророчества",
          correct: false,
        },
        {
          text: "Пыл девичества",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question:
        "Какой специалист занимается изучением неопознанных летающих объектов?",
      answers: [
        {
          text: "Кинолог",
          correct: false,
        },
        {
          text: "Уфолог",
          correct: true,
        },
        {
          text: "Сексопатолог",
          correct: false,
        },
        {
          text: "Психиатр",
          correct: false,
        },
      ],
    },

    {
      id: 7,
      question:
        "Как называется разновидность воды, в которой атом водорода замещён его изотопом дейтерием?",
      answers: [
        {
          text: "Лёгкая",
          correct: false,
        },
        {
          text: "Средняя",
          correct: false,
        },
        {
          text: "Тяжёлая",
          correct: true,
        },
        {
          text: "Невесомая",
          correct: false,
        },
      ],
    },

    {
      id: 8,
      question:
        "Что такое десница?",
      answers: [
        {
          text: " Бровь",
          correct: false,
        },
        {
          text: "Глаз",
          correct: false,
        },
        {
          text: "Шея",
          correct: false,
        },
        {
          text: "Рука",
          correct: true,
        },
      ],
    },


    
    {
      id: 9,
      question:
        "В какое море впадает река Урал? ",
      answers: [
        {
          text: "Азовское",
          correct: false,
        },
        {
          text: "Чёрное",
          correct: false,
        },
        {
          text: "Средиземное",
          correct: false,
        },
        {
          text: "Каспийское",
          correct: true,
        },
      ],
    },


    {
      id: 10,
      question:
        "Как назывался каменный монолит, на котором установлен памятник Петру I в Санкт-Петербурге?",
      answers: [
        {
          text: "Дом-камень",
          correct: false,
        },
        {
          text: "Гром-камень",
          correct: true,
        },
        {
          text: "Гора-камень",
          correct: false,
        },
        {
          text: "Разрыв-камень",
          correct: false,
        },
      ],
    },

    {
      id: 11,
      question:
        "Как Пётр Ильич Чайковский назвал свою серенаду для скрипки с оркестром си-бемоль минор?",
      answers: [
        {
          text: "Флегматическая",
          correct: false,
        },
        {
          text: "Меланхолическая",
          correct: true,
        },
        {
          text: "Холерическая",
          correct: false,
        },
        {
          text: "Сангвиническая",
          correct: false,
        },
      ],
    },


    {
      id: 12,
      question:
        "Какого ордена не было у первого советского космонавта Юрия Гагарина? ",
      answers: [
        {
          text: " «Ожерелье Нила» (Египет)",
          correct: false,
        },
        {
          text: "«Крест Грюнвальда» (Польша)",
          correct: false,
        },
        {
          text: "«Плайя Хирон» (Куба)",
          correct: false,
        },
        {
          text: "«Орден двойного дракона» (Китай)",
          correct: true,
        },
      ],
    },

    {
      id: 13,
      question:
        "Какое животное имеет второе название — кугуар? ",
      answers: [
        {
          text: "Оцелот",
          correct: false,
        },
        {
          text: "Леопард",
          correct: false,
        },
        {
          text: "Пума",
          correct: true,
        },
        {
          text: "Пантера",
          correct: false,
        },
      ],
    },
   

    {
      id: 14,
      question:
        "Что в России 19 века делали в дортуаре? ",
      answers: [
        {
          text: "Ели",
          correct: false,
        },
        {
          text: "Спали",
          correct: true,
        },
        {
          text: "Ездили верхом" ,
          correct: false,
        },
        {
          text: "Купались",
          correct: false,
        },
      ],
    }, 
    

  
    {
      id: 15,
      question:
        "Какой химический элемент назван в честь злого подземного гнома?",
      answers: [
        {
          text: "Гафний",
          correct: false,
        },
        {
          text: "Кобальт",
          correct: true,
        },
        {
          text: "Бериллий",
          correct: false,
        },
        {
          text: "Теллур",
          correct: false,
        },
      ],
    }, 

  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1000" },
        { id: 6, amount: "$ 2000" },
        { id: 7, amount: "$ 4000" },
        { id: 8, amount: "$ 8000" },
        { id: 9, amount: "$ 16000" },
        { id: 10, amount: "$ 32000" },
        { id: 11, amount: "$ 64000" },
        { id: 12, amount: "$ 125000" },
        { id: 13, amount: "$ 250000" },
        { id: 14, amount: "$ 500000" },
        { id: 15, amount: "$ 1000000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">Вы выйграли: {earned} </h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
