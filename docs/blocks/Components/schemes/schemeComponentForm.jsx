import React from 'react';

export const contentForm = {
    "tabs": [
      {
        "title": "General",
          "table": {
            "data":[
              [
                'Form title',
                {type: <code>Form title → input</code>, description: <>Used to add a title to the search engine block</>},
              ],
              [
                'Form subtitle',
                {type: <code>Form subtitle → input</code>, description: <>Used to add a subtitle to the search engine block</>},
              ],
              [
                'Form button text',
                {type: <code>Form button text → input</code>, description: <>Used to add text to the search block button</>},
              ],
            ]
          }
      },
    ]
}

export const form = {
    "tabs": [
      {
        "title": "General",
        "table": {
          "data": [
            [
              'Form template',
              { type: <code>Form template → select (types of forms)</code>, description: <>Used to define what type of questionnaire is going to be displayed in the block</>},
            ],
            [
              'Form template',
              { type: <code>Form template → select (types of form templates)</code>, description: <>Used to define the template of the form to be used in the block</>},
            ],
          ]
        }
      },
      {
        "title": "Title",
        "table": {
          "data": [
            [
              'Show title',
              { type: <code>Show title → select(yes / no)</code>, description: <>Used to define whether the block title will be displayed</>},
            ],
            [
              'Font size',
              { type: <code>Font size → input(number)</code>, description: <>Used to define the size of the block title letters</>},
            ],
            [
              'Alignment',
              { type: <code>Alignment → selec(horizontal positions)</code>, description: <>Used to define the horizontal position of the block at the top</>},
            ],
            [
              'Color class',
              { type: <code>Color class → select(colors)</code>, description: <>Used to define what color will be used in the title text</>},
            ],
            [
              'Color custom',
              { type: <code>Color custom → RGB</code>, description: <>Used to choose a color from RGB or Naming it with its RGB code</>},
            ],
            [
              'Classes',
              { type: <code>Classes → input</code>, description: <>Used to add classes to the title container</>},
            ],
            [
              'Styles',
              { type: <code>Styles → input</code>, description: <>Used to add styles to the block title container</>},
            ],
  
          ]
        }
      },
      {
        "title": "Subtitle",
        "table": {
          "data": [
            [
              'Show subtitle',
              { type: <code>Show subtitle→ select(yes / no)</code>, description: <>Used to define whether the block subtitle will be displayed</>},
            ],
            [
              'Font size',
              { type: <code>Font size → input(number)</code>, description: <>Used to define the size of the block subtitle letters</>},
            ],
            [
              'Alignment',
              { type: <code>Alignment → selec(horizontal positions)</code>, description: <>Used to define the horizontal position of the block at the top of the subtitle</>},
            ],
            [
              'Color class',
              { type: <code>Color class → select(colors)</code>, description: <>Used to define what color will be used in the subtitle text</>},
            ],
            [
              'Color custom',
              { type: <code>Color custom → RGB</code>, description: <>Used to choose a color from RGB or Naming it with its RGB code</>},
            ],
            [
              'Classes',
              { type: <code>Classes → input</code>, description: <>Used to add classes to the subtitle container</>},
            ],
            [
              'Styles',
              { type: <code>Styles → input</code>, description: <>Used to add styles to the block subtitle container</>},
            ],
          ]
        }
      },
      {
        "title": "Button ",
        "table": {
          "data": [
            [
              'Classes',
              { type: <code>Classes → input</code>, description: <>Used to add classes to the button container</>},
            ],
            [
              'Alignment',
              { type: <code>Alignment →  select(alignment types)</code>, description: <>Used to define what type of alignment the letters of the text of the block title have, as if it were a paragraph of the docs documents</>},
            ],
            [
              'Icon',
              { type: <code>Icon → input(bootstrap)</code>, description: <>Used to define which icon is used in the block form</>},
            ],
          ]
        }
      },
    ]
}

export const contentNews = {
    "tabs": [
      {
        "title": "General",
          "table": {
            "data":[
              [
                'Title (en)',
                {type: <code>Title → input</code>, description: <>Used to add a title at the top of the Newsletter block</>},
              ],
              [
                'Description (en)',
                {type: <code>Description → input</code>, description: <>Used to add a description at the top of the Newsletter block</>},
              ],
              [
                'Post description (en)',
                {type: <code>Post description → input</code>, description: <>Used to add text after the description at the top of the Newsletter block</>},
              ],
              [
                'Button label (en)',
                {type: <code>Button label → input</code>, description: <>Used to add text to a button at the top of the Newsletter block</>},
              ],
            ]
          }
      },
    ]
  }

  export const news = {
    "tabs": [
      {
        "title": "General",
        "table": {
          "data": [
            [
              'Newsletter Template',
              { type: <code>Newsletter Template → select</code>, description: <>Used to define the template that will be used in the Newsletter block</>},
            ],
            [
              'Classes for title',
              { type: <code>Classes for title → input</code>, description: <>Used to add classes to the Newsletter block title</>},
            ],
            [
              'Classes for description',
              { type: <code>Classes for description → input</code>, description: <>Used to add classes to the Newsletter block description</>},
            ],
            [
              'Classes for post description',
              { type: <code>Classes for post description → input</code>, description: <>Used to add classes to the post description of the Newsletter block</>},
            ],
            [
              'Classes for input',
              { type: <code>Classes for input → input</code>, description: <>Used to add classes to the input of the Newsletter block</>},
            ],
            [
              'Classes for the button',
              { type: <code>Classes for the button → input</code>, description: <>Used to add classes to the Newsletter block button</>},
            ],
          ]
        }
      },
    ]
  }

