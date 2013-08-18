({
    block: 'page',
    title: 'Руслан Исмагилов',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index', ie: true },
        { elem: 'meta', attrs: { name: 'description', content: '' }}
    ],
    content:[
        {
            block: 'b-header',
            content: [

            ]
        },
        {
            block: 'b-content',
            content: [
                {
                    block: 'b-greetings', content: [
                        {elem: 'title', tag: 'h1', content: 'Привет всем!'},
                        {elem: 'content', tag: 'p', content: 'На этой странице я попытаюсь ответить на все Ваши вопросы. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, b'}
                    ]
                },
                {
                    block: 'b-interview', items: [
                        {
                            q: 'Вопрос 1. Год рождения.', 
                            a: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, b'
                        }, 
                        {
                            q: 'Вопрос 2. Город, в котором вы живёте.', 
                            a: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, b'
                        }, 
                        {
                            q: 'Вопрос 3. Вуз, факультет, специальность, кафедра.', 
                            a: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, b'
                        }, 
                        {
                            q: 'Вопрос 4. Год окончания вуза.', 
                            a: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, b'
                        }, 
                        {
                            q: 'Вопрос 5. Уровень владения английским языком.', 
                            a: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, b'
                        }, 
                        {
                            q: 'Вопрос 6. Чего вы ожидаете от участия в Школе?', 
                            a: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, b'
                        }, 
                        {
                            q: 'Вопрос 7. ОТкуда Вы о нас узнали?', 
                            a: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, b'
                        }, 
                        {
                            q: 'Вопрос 8. Сколько времени вы были бы готовы уделять стажировке или работе в Яндексе?', 
                            a: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, b'
                        }, 
                        {
                            q: 'Вопрос 9. Расскажите о вашем опыте разработки. Нам будет интересно всё — как серьезный интерфейс, так и просто домашняя страничка.', 
                            a: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, b'
                        }, 
                        {
                            q: 'Вопрос 10. Если вы где-нибудь работали, расскажите, какие у вас были должностные обязанности и был ли опыт работы в команде.', 
                            a: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, b'
                        }, 
                        {
                            q: 'Вопрос 11. Перечислите, какими программными продуктами вы пользуетесь в своей работе — от редактора до специализированных утилит (Intellij Idea, Node.js, Uglify.js, GNU Make). Для каждого инструмента укажите, какие задачи вы с помощью него решаете и почему выбрали именно его.', 
                            a: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, b'
                        }, 
                        {
                            q: 'Вопрос 12. Пользуетесь ли вы командной строкой? Какими командами вы пользуетесь и какие задачи вы решаете с их помощью? С какими программами вы преимущественно или полностью взаимодействуете через интерфейс командной строки?', 
                            a: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, b'
                        }, 
                        {
                            q: 'Вопрос 13. Напишите на JavaScript функцию, которая выводит список всех чисел, которые равны сумме факториалов своих цифр.', 
                            a: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, b'
                        }, 
                        {
                            q: 'Вопрос 14. Межгалактический кораблик.', 
                            a: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, b'
                        }
                    ]
                }
            ]
        },
        {
            block: 'b-footer',
            content: [
                {elem: 'content', tag: 'p', content: '© Руслан Исмагилов.'}
            ]
        },
        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_index.js' }
    ]
})
