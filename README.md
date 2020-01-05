# Яндекс ШРИ. Задание 1. Реализация дизайн-системы

### Подготовка к работе
1. Установите Node (используется версия [v10.18.0](https://nodejs.org/en/blog/release/v10.18.0/))
2. Установите зависимости проекта:

    ```sh
    $ npm install
    ```

### Как запустить

В данном режиме Gulp слушает `./src/` каталог и производит повторную сборку проекта при любом изменении в CSS или JS файлах.

Выполните команду:

```sh
$ npm run start [-- --dest={path-to-build-folder}]
```

где dest — аргумент, позволяющий переопределить путь к каталогу build. Значение по-умолчанию: `./build/`.
Полезно использовать в режиме разработки, если в качестве пути указать `shri-2020-task-1/stub/build/`.

### Как собрать

Выполните команду gulp:

```sh
$ npm run build [-- --dest={path-to-build-folder}]
```

### Используемые зависимости
1. [gulp](https://www.npmjs.com/package/gulp) — Каждый компонент дизайн-системы находится в соответствующем ему каталоге.
Это помогает независимо разрабатывать компоненты дизайн-системы, улучшает читабельность кода, его становится легче поддерживать и тд.
Поскольку задание предполагает на выходе только два файла (script.js и style.css), где будет содержаться результат работы,
то для автоматизации сборки бандла требуется  соответствующий инструмент. К примеру Gulp.
2. [gulp-concat](https://www.npmjs.com/package/gulp-concat) — Для конкатенации нескольких файлов в один.
3. [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) — Для минификации CSS файлов.
4. [gulp-uglify-es](https://www.npmjs.com/package/gulp-uglify-es) — Для минификации JS файлов.
5. [stylelint](https://www.npmjs.com/package/stylelint) — Линтинг CSS кода.
6. [stylelint-config-standard](https://www.npmjs.com/package/stylelint-config-standard) — Набор правил для Stylelint.
7. [eslint](https://www.npmjs.com/package/eslint) — Линтинг JS кода.
8. [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) — Набор правил для ESLint.
9. [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) — Зависимость,
которую необходимо установить для работы **eslint-config-airbnb-base**.
10. [husky](https://www.npmjs.com/package/husky) — Настройка git хуков.
Позволяет автоматически запустить все линтеры перед выполнением команды `git commit`.
Это помогает соблюдать чистоту кода и не пропускать ошибки в репозиторий проекта.
Более того, если запускать линтеры с ключом --fix то они попытаются исправить все найденные ошибки автоматически.
11. [lint-staged](https://www.npmjs.com/package/lint-staged) — Дополнение к **husky**.
Отвечает за запуск необходимых линтеров с указанием паттерна по которому будет определяться какой линтер для какого файла запускать.
12. [yargs](https://www.npmjs.com/package/yargs) — Удобное извлечение аргументов из CLI.
Используется при получении --dest аргумента в gulpfile.js
13. [gulp-sass](https://www.npmjs.com/package/gulp-sass) — Компиляция SCSS файлов в CSS.
SASS используется для того, чтобы сократить количество CSS кода, улучшить его читабельность и упростить дальнейшую поддержку
(К примеру, в записи некоторых селекторов по модификатору часто прослеживается определенный паттерн,
используя который можно свести запись к миксине и запустить ее в цикле для ряда значений).
14. [node-sass](https://www.npmjs.com/package/node-sass) — Зависимость,
которую необходимо установить для работы **gulp-sass**.
15. [stylelint-scss](https://www.npmjs.com/package/stylelint-scss) — Плагин для Stylelint,
добавляющий поддержку SASS синтаксиса.

