Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    "completeText": "Finish",
    "pageNextText": "Continue",
    "pagePrevText": "Previous",
 "pages": [
//   {
//    "name": "page0",
//    "elements": [
//     {
//      "type": "panel",
//      "name": "panel1",
//      "elements": [
//       {
//        "type": "html",
//        "name": "income_intro",
//        "html": "<article class='intro'>    <h1 class='intro__heading intro__heading--income title'>                     Income              </h1>    <div class='intro__body wysiwyg'>       <p>In this section, you will be asked about your current employment and any other way you and your partner currently receive income.</p>       <p>It will be handy to have the following in front of you:</p>       <ul>        \t<li>        \t\tPayslip (for employment details)        \t</li>        \t<li>        \t\t<p>A current Centrelink Schedule for any account based pension from super, annuities, or other income stream products that you own</p>        \t\t<p>        \t\t\tIf you don't have a current one you can get these schedules by contacting your income stream provider        \t\t</p>        \t</li>        \t<li>        \t\tLatest statement from any payments (from Centrelink or other authority)        \t</li>       </ul>         </div> </article>"
//       }
//      ]
//     }
//    ]
//   },
  {
   "name": "page1",
   "elements": [
    {
     "type": "checkbox",
     "name": "question5",
     "title": "Before we start please accept the following statement: \"I am an Indian resident, and I understand that this survey is completely voluntary, anonymous, and I can quit anytime. I can use the bottom right up/down arrows to go back to previous questions should I want to. I am happy to be part of furthering our understanding of COVID19\".",
     "choices": [
      {
       "value": "item1",
       "text": "I accept"
      },
      {
       "value": "item2",
       "text": "I do not accept"
      }
     ]
    }
   ]
  },
  {
   "name": "page2",
   "elements": [
    {
     "type": "text",
     "name": "question1",
     "title": "Age in Years"
    }
   ]
  },
  {
   "name": "page3",
   "elements": [
    {
     "type": "checkbox",
     "name": "question2",
     "title": "Your gender (at birth)",
     "choices": [
      {
       "value": "item1",
       "text": "Male"
      },
      {
       "value": "item2",
       "text": "Female"
      }
     ]
    }
   ]
  },
  {
   "name": "page4",
   "elements": [
    {
     "type": "text",
     "name": "question3",
     "title": "Your Pincode of where you are living in India (six numbers)"
    }
   ]
  },
  {
   "name": "page5",
   "elements": [
    {
     "type": "checkbox",
     "name": "question4",
     "title": "To the best of your knowledge In the last 12 weeks, were you (check all that apply):",
     "choices": [
      {
       "value": "item1",
       "text": "Travelling Internationally"
      },
      {
       "value": "item2",
       "text": "In contact with someone who is a suspected/probable case of COVID-19"
      },
      {
       "value": "item3",
       "text": "In contact with someone who had traveled abroad"
      },
      {
       "value": "item4",
       "text": "In contact with a healthcare professional who may have been in contact with a COVID19 suspeccted person"
      },
      {
       "value": "item5",
       "text": "I don't think so/ I don't know"
      }
     ]
    }
   ]
  }
 ],
 "showQuestionNumbers": "off",
 "storeOthersAsComment": false,
 "pagePrevText": "Previous",
 "pageNextText": "Next",
 "completeText": "Finish",
 "requiredText": "",
    "showQuestionNumbers": "off",
    "storeOthersAsComment": false
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElement").Survey({model: survey});