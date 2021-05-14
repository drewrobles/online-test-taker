export default function Content(props) {
  if (props.questionIndex == -1) {
    return <Cover
            quizTitle={props.quizTitle}
            quizDescription={props.quizDescription}
            estimatedTime={props.estimatedTime}
            difficultyLevel={props.difficultyLevel}
          />
  } else {
    return <>
      <Question 
        quizQuestionData={props.quizQuestionData}
        questionIndex={props.questionIndex}
        selectQuestionOption={props.selectQuestionOption}
      />
    </>
  }
}

function Cover(props) {
  return <div>
    <p>{props.quizDescription}</p>
    <ul>
      <li>Est. Time: {props.estimatedTime}</li>
      <li>Difficulty level: {props.difficultyLevel}</li>
    </ul>
  </div>
}

function Question(props) {
  const text = props.quizQuestionData[props.questionIndex]
  const options = props.quizQuestionData[props.questionIndex].options

  return <div>
    <p>{ text.question }</p>
    <ul>
        {options.map(currOption => <Option 
          optionId={currOption.id} 
          name={currOption.name}
          questionIndex={props.questionIndex}
          selectQuestionOption={props.selectQuestionOption}
        />)}
    </ul>
    <br/>
  </div>
}

function Option(props) {
  const selectRadioButton = () => {
    // Record answer in question state
    props.selectQuestionOption(props.questionIndex, props.optionId)
  }
  return <>
    <input 
      type="radio" 
      id={props.optionId} 
      name="quiz" 
      value={props.optionId} 
      onClick={selectRadioButton}
      key={props.questionIndex}
    />
    <label for={props.optionId}>{props.name}</label>
    <br/>
  </>
}