import image from './assets/KIKO.jpeg'
import {TitleBlock, TextBlock, ImageBlock, ColumnsBlock} from './classes/blocks'


const text = `<a href="https://www.kikocosmetics.com/it-it/" target="_blank">Kiko Milano</a>
      – бренд декоративної косметики №1 в Італії,
      Продукти бренду виготовлені з безпечної сертифікованої сировини і до того ж не тестуються на тваринах.
      У колекціях Kiko можна знайти не тільки декоративну косметику,
      а й продукти для догляду за шкірою, лаки для нігтів,
      пензлі для макіяжу та інші аксесуари за доступною ціною.
      В асортименті Kiko є сотні кольорів і текстур для сміливих експериментів з макіяжем.`

export const model = [
    new TitleBlock('Косметика', {
        tag: 'h2',
        styles: {
            background: 'crimson',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem'
        }
    }),
    new TextBlock(text, {
        styles: {
            background: 'white',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }),
    new ColumnsBlock(
        [
            'Догляд для обличчя',
            'Захист та гігієна',
            'Макіяж',
            'Догляд за тілом'
        ],
        {
            styles: {
                background: 'green',
                padding: '2rem',
                color: '#fff',
                'font-weight': 'bold'
            }
        }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'це картинка'
    })
]