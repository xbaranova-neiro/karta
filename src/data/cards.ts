import type { PromptCard } from '../types';

export const PROMPT_CARDS: PromptCard[] = [
            {
                id: 1,
                emoji: "🚀",
                title: "Лендинг для продукта",
                prompt: "Создай одностраничный лендинг для моего продукта или услуги. Тёмная тема, градиенты фиолетовый-розовый, блоки: герой с заголовком и CTA-кнопкой «Записаться», 3 преимущества с иконками, отзывы клиентов, финальный блок с формой подписки. Адаптивный дизайн, современные CSS-анимации при скролле. Выдай результат как готовый HTML-файл, который можно сразу скачать и открыть в браузере. Без внешних зависимостей.",
                preview: `<div style="text-align:center;padding:10px 0 6px">
                    <div style="background:linear-gradient(135deg,#7c3aed,#ec4899);border-radius:6px;padding:14px 10px;margin-bottom:8px">
                        <div style="color:#fff;font-size:11px;font-weight:700">Твой продукт</div>
                        <div style="color:rgba(255,255,255,.7);font-size:8px;margin:4px 0">Запишись и получи бонус</div>
                        <div style="background:#fff;color:#7c3aed;font-size:8px;font-weight:700;padding:4px 12px;border-radius:10px;display:inline-block">Записаться</div>
                    </div>
                    <div style="display:flex;gap:6px">
                        <div style="flex:1;background:rgba(124,58,237,.15);border-radius:5px;padding:8px 4px"><div style="font-size:12px">⚡</div><div style="font-size:7px;color:#a78bfa">Быстро</div></div>
                        <div style="flex:1;background:rgba(124,58,237,.15);border-radius:5px;padding:8px 4px"><div style="font-size:12px">🎯</div><div style="font-size:7px;color:#a78bfa">Просто</div></div>
                        <div style="flex:1;background:rgba(124,58,237,.15);border-radius:5px;padding:8px 4px"><div style="font-size:12px">💰</div><div style="font-size:7px;color:#a78bfa">Результат</div></div>
                    </div>
                </div>`
            },
            {
                id: 2,
                emoji: "🤖",
                title: "Чат-бот интерфейс",
                prompt: "Создай красивый интерфейс чата с AI-ботом. Тёмная тема, сообщения пузырьками (пользователь справа — фиолетовый, бот слева — серый), поле ввода внизу с кнопкой отправки, эффект «бот печатает...» с анимацией трёх точек, автоскролл к новым сообщениям. Бот отвечает случайными умными фразами. Выдай готовый HTML-файл для скачивания.",
                preview: `<div style="padding:8px 0 4px">
                    <div style="display:flex;gap:6px;margin-bottom:6px"><div style="background:#374151;border-radius:8px 8px 8px 2px;padding:6px 10px;font-size:8px;color:#d1d5db;max-width:70%">Привет! Чем могу помочь? 🤖</div></div>
                    <div style="display:flex;gap:6px;margin-bottom:6px;justify-content:flex-end"><div style="background:#7c3aed;border-radius:8px 8px 2px 8px;padding:6px 10px;font-size:8px;color:#fff;max-width:70%">Создай мне сайт!</div></div>
                    <div style="display:flex;gap:6px;margin-bottom:8px"><div style="background:#374151;border-radius:8px 8px 8px 2px;padding:6px 10px;font-size:8px;color:#d1d5db;max-width:70%">Уже делаю ✨ <span style="animation:pulse 1s infinite">...</span></div></div>
                    <div style="display:flex;gap:6px"><div style="flex:1;background:#1f2937;border-radius:8px;padding:6px 10px;font-size:8px;color:#6b7280">Написать сообщение...</div><div style="background:#7c3aed;border-radius:8px;padding:6px 8px;font-size:8px;color:#fff">➤</div></div>
                </div>`
            },
            {
                id: 3,
                emoji: "📱",
                title: "Калькулятор стоимости",
                prompt: "Создай интерактивный калькулятор стоимости услуг. Слайдеры: количество клиентов в месяц (1-50), средний чек за услугу (1000-100000₽), расходы в месяц (5000-200000₽). Автоматический расчёт: доход в месяц, чистая прибыль, доход за год. Красивый дизайн с градиентами, анимированные цифры при изменении. Выдай готовый HTML-файл для скачивания.",
                preview: `<div style="padding:8px 0 4px">
                    <div style="margin-bottom:8px"><div style="font-size:7px;color:#a78bfa;margin-bottom:3px">Клиентов в месяц: 15</div><div style="background:#1f2937;border-radius:4px;height:6px"><div style="background:linear-gradient(90deg,#7c3aed,#ec4899);width:30%;height:100%;border-radius:4px"></div></div></div>
                    <div style="margin-bottom:8px"><div style="font-size:7px;color:#a78bfa;margin-bottom:3px">Средний чек: 5 000₽</div><div style="background:#1f2937;border-radius:4px;height:6px"><div style="background:linear-gradient(90deg,#7c3aed,#ec4899);width:25%;height:100%;border-radius:4px"></div></div></div>
                    <div style="background:linear-gradient(135deg,#7c3aed,#ec4899);border-radius:8px;padding:10px;text-align:center;margin-top:6px"><div style="color:rgba(255,255,255,.7);font-size:7px">Чистая прибыль в месяц</div><div style="color:#fff;font-size:14px;font-weight:700">55 000 ₽</div></div>
                </div>`
            },
            {
                id: 4,
                emoji: "🎮",
                title: "Мини-игра на JS",
                prompt: "Создай браузерную мини-игру: ловим падающие монетки корзиной. Управление мышкой или тачем. Монетки падают сверху с разной скоростью, есть золотые (x2 очков) и обычные. Счётчик очков, таймер 60 секунд, экран результата с кнопкой «Заново». Красивая графика на CSS (без картинок), анимации. Выдай готовый HTML-файл для скачивания.",
                preview: `<div style="padding:8px 0 4px;text-align:center">
                    <div style="display:flex;justify-content:space-between;margin-bottom:8px"><div style="font-size:8px;color:#fbbf24;font-weight:700">⭐ 1250</div><div style="font-size:8px;color:#ef4444;font-weight:700">⏱ 0:42</div></div>
                    <div style="position:relative;height:70px">
                        <div style="position:absolute;top:5px;left:20%;font-size:16px">🪙</div>
                        <div style="position:absolute;top:20px;left:55%;font-size:18px;filter:drop-shadow(0 0 4px gold)">💰</div>
                        <div style="position:absolute;top:35px;left:35%;font-size:16px">🪙</div>
                        <div style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);font-size:22px">🧺</div>
                    </div>
                </div>`
            },
            {
                id: 5,
                emoji: "✅",
                title: "Таск-трекер",
                prompt: "Создай красивый таск-трекер (to-do приложение). Добавление задач, отметка выполненных (зачёркивание с анимацией), удаление свайпом, фильтры: все/активные/выполненные, счётчик оставшихся задач, сохранение в localStorage. Дизайн: glassmorphism, тёмная тема, плавные анимации. Выдай готовый HTML-файл для скачивания.",
                preview: `<div style="padding:8px 0 4px">
                    <div style="display:flex;align-items:center;gap:8px;background:rgba(255,255,255,.05);border-radius:6px;padding:7px 10px;margin-bottom:5px"><div style="width:14px;height:14px;border-radius:50%;border:2px solid #22c55e;display:flex;align-items:center;justify-content:center;font-size:8px;color:#22c55e">✓</div><div style="font-size:8px;color:#6b7280;text-decoration:line-through">Изучить kodakode</div></div>
                    <div style="display:flex;align-items:center;gap:8px;background:rgba(255,255,255,.05);border-radius:6px;padding:7px 10px;margin-bottom:5px"><div style="width:14px;height:14px;border-radius:50%;border:2px solid #7c3aed"></div><div style="font-size:8px;color:#e5e7eb">Сделать лендинг</div></div>
                    <div style="display:flex;align-items:center;gap:8px;background:rgba(255,255,255,.05);border-radius:6px;padding:7px 10px"><div style="width:14px;height:14px;border-radius:50%;border:2px solid #7c3aed"></div><div style="font-size:8px;color:#e5e7eb">Запустить бота</div></div>
                </div>`
            },
            {
                id: 6,
                emoji: "🔗",
                title: "Страница ссылок",
                prompt: "Создай красивую страницу ссылок (аналог Linktree). Аватарка-заглушка (инициалы в кружке), имя, короткое описание, 8 кнопок-ссылок с иконками (Telegram, Instagram, YouTube, сайт, портфолио, курс, подкаст, блог). Тёмная тема, градиенты, кнопки с hover-анимацией, адаптив под мобилку. Выдай готовый HTML-файл для скачивания.",
                preview: `<div style="padding:10px 0 4px;text-align:center">
                    <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#06b6d4,#8b5cf6);margin:0 auto 6px;font-size:14px;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700">АИ</div>
                    <div style="font-size:9px;color:#fff;font-weight:600;margin-bottom:2px">Анна Иванова</div>
                    <div style="font-size:7px;color:#9ca3af;margin-bottom:8px">Обучаю AI-навыкам</div>
                    <div style="background:rgba(6,182,212,.15);border:1px solid rgba(6,182,212,.3);border-radius:8px;padding:5px;margin-bottom:4px;font-size:7px;color:#22d3ee">📱 Telegram</div>
                    <div style="background:rgba(139,92,246,.15);border:1px solid rgba(139,92,246,.3);border-radius:8px;padding:5px;margin-bottom:4px;font-size:7px;color:#a78bfa">🎓 Мой курс</div>
                    <div style="background:rgba(16,185,129,.15);border:1px solid rgba(16,185,129,.3);border-radius:8px;padding:5px;font-size:7px;color:#34d399">🌐 Сайт</div>
                </div>`
            },
            {
                id: 7,
                emoji: "⏱️",
                title: "Pomodoro-таймер",
                prompt: "Создай Pomodoro-таймер: 25 минут работы, 5 минут отдых. Круговой прогресс-бар с анимацией, звуковой сигнал в конце (Web Audio API, без файлов), счётчик завершённых помидорок, после 4 помидорок — длинный перерыв 15 минут. Кнопки старт/пауза/сброс. Минималистичный дизайн, тёмная тема. Выдай готовый HTML-файл для скачивания.",
                preview: `<div style="padding:12px 0 4px;text-align:center">
                    <div style="width:80px;height:80px;border-radius:50%;border:4px solid #1f2937;border-top-color:#7c3aed;border-right-color:#7c3aed;margin:0 auto 8px;display:flex;align-items:center;justify-content:center;transform:rotate(45deg)"><div style="transform:rotate(-45deg);color:#fff;font-size:16px;font-weight:700">18:32</div></div>
                    <div style="display:flex;gap:6px;justify-content:center"><div style="background:#7c3aed;border-radius:6px;padding:4px 12px;font-size:8px;color:#fff;font-weight:600">Пауза</div><div style="background:#1f2937;border-radius:6px;padding:4px 12px;font-size:8px;color:#9ca3af">Сброс</div></div>
                    <div style="margin-top:6px;font-size:7px;color:#6b7280">🍅🍅🍅 ○</div>
                </div>`
            },
            {
                id: 8,
                emoji: "📊",
                title: "Трекер привычек",
                prompt: "Создай красивый трекер привычек на неделю. Можно добавлять свои привычки, отмечать галочкой выполнение по дням (сетка 7 дней), прогресс в процентах за неделю для каждой привычки, общий прогресс сверху. Сохранение в localStorage. Тёмная тема, приятные анимации при отметке, адаптив. Выдай готовый HTML-файл для скачивания.",
                preview: `<div style="padding:8px 0 4px">
                    <div style="background:linear-gradient(135deg,rgba(6,182,212,.15),rgba(139,92,246,.15));border-radius:8px;padding:8px;margin-bottom:6px;text-align:center"><div style="font-size:7px;color:#9ca3af">Общий прогресс за неделю</div><div style="font-size:14px;color:#22d3ee;font-weight:700">72%</div></div>
                    <div style="display:flex;align-items:center;gap:6px;margin-bottom:5px">
                        <div style="font-size:7px;color:#d1d5db;width:50px">💧 Вода</div>
                        <div style="display:flex;gap:2px">
                            <div style="width:10px;height:10px;border-radius:3px;background:#22d3ee"></div>
                            <div style="width:10px;height:10px;border-radius:3px;background:#22d3ee"></div>
                            <div style="width:10px;height:10px;border-radius:3px;background:#22d3ee"></div>
                            <div style="width:10px;height:10px;border-radius:3px;background:#22d3ee"></div>
                            <div style="width:10px;height:10px;border-radius:3px;background:#22d3ee"></div>
                            <div style="width:10px;height:10px;border-radius:3px;background:rgba(255,255,255,.1)"></div>
                            <div style="width:10px;height:10px;border-radius:3px;background:rgba(255,255,255,.1)"></div>
                        </div>
                    </div>
                    <div style="display:flex;align-items:center;gap:6px">
                        <div style="font-size:7px;color:#d1d5db;width:50px">🏃 Спорт</div>
                        <div style="display:flex;gap:2px">
                            <div style="width:10px;height:10px;border-radius:3px;background:#a78bfa"></div>
                            <div style="width:10px;height:10px;border-radius:3px;background:#a78bfa"></div>
                            <div style="width:10px;height:10px;border-radius:3px;background:#a78bfa"></div>
                            <div style="width:10px;height:10px;border-radius:3px;background:rgba(255,255,255,.1)"></div>
                            <div style="width:10px;height:10px;border-radius:3px;background:rgba(255,255,255,.1)"></div>
                            <div style="width:10px;height:10px;border-radius:3px;background:rgba(255,255,255,.1)"></div>
                            <div style="width:10px;height:10px;border-radius:3px;background:rgba(255,255,255,.1)"></div>
                        </div>
                    </div>
                </div>`
            },
            {
                id: 9,
                emoji: "💬",
                title: "Отзывы-карусель",
                prompt: "Создай секцию отзывов для сайта в формате карусели. Карточки с фото-заглушкой (инициалы в цветном кружке), имя, текст отзыва, звёздочки рейтинга. Автопрокрутка + свайп на мобилке + стрелки. Плавные CSS-переходы, адаптивный дизайн, 6 отзывов от довольных клиентов о сервисе. Выдай готовый HTML-файл для скачивания.",
                preview: `<div style="padding:8px 0 4px;display:flex;gap:6px;overflow:hidden">
                    <div style="flex-shrink:0;width:48%;background:rgba(255,255,255,.05);border-radius:8px;padding:8px;text-align:center">
                        <div style="width:24px;height:24px;border-radius:50%;background:#7c3aed;margin:0 auto 4px;font-size:9px;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700">АК</div>
                        <div style="font-size:9px;color:#fbbf24;margin-bottom:2px">★★★★★</div>
                        <div style="font-size:7px;color:#d1d5db">AI — это магия!</div>
                    </div>
                    <div style="flex-shrink:0;width:48%;background:rgba(255,255,255,.05);border-radius:8px;padding:8px;text-align:center">
                        <div style="width:24px;height:24px;border-radius:50%;background:#ec4899;margin:0 auto 4px;font-size:9px;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700">МС</div>
                        <div style="font-size:9px;color:#fbbf24;margin-bottom:2px">★★★★★</div>
                        <div style="font-size:7px;color:#d1d5db">Сделала сайт за час</div>
                    </div>
                </div>`
            },
            {
                id: 10,
                emoji: "🧩",
                title: "Квиз-опросник",
                prompt: "Создай красивый квиз из 5 вопросов с вариантами ответов для подбора услуги или продукта (например, «Какой тариф тебе подходит?»). Пошаговый формат, прогресс-бар сверху, анимация перехода между вопросами, в конце — результат с рекомендацией и кнопкой «Узнать больше». Дизайн: градиенты, крупные кнопки, мобильная адаптация. Выдай готовый HTML-файл для скачивания.",
                preview: `<div style="padding:8px 0 4px">
                    <div style="background:#1f2937;border-radius:4px;height:6px;margin-bottom:10px"><div style="background:linear-gradient(90deg,#7c3aed,#ec4899);width:60%;height:100%;border-radius:4px"></div></div>
                    <div style="font-size:9px;color:#e5e7eb;margin-bottom:8px;font-weight:600">Вопрос 3 из 5</div>
                    <div style="font-size:8px;color:#d1d5db;margin-bottom:8px">Что хочешь создавать?</div>
                    <div style="background:rgba(124,58,237,.2);border:1px solid rgba(124,58,237,.4);border-radius:6px;padding:6px 10px;font-size:8px;color:#e5e7eb;margin-bottom:4px">🌐 Сайты и лендинги</div>
                    <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:6px;padding:6px 10px;font-size:8px;color:#9ca3af;margin-bottom:4px">🤖 Чат-боты</div>
                    <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:6px;padding:6px 10px;font-size:8px;color:#9ca3af">🎮 Игры и приложения</div>
                </div>`
            },
            {
                id: 11,
                emoji: "👤",
                title: "Страница «Обо мне»",
                prompt: "Создай красивую персональную страницу «Обо мне». Большое фото-заглушка (инициалы в градиентном кружке), имя, короткое bio, секция «Чем я занимаюсь» с 3 карточками-направлениями, секция «Мои достижения» с цифрами (анимация счётчика), кнопки соцсетей внизу. Тёмная тема, современный минималистичный дизайн, плавные анимации при скролле. Выдай готовый HTML-файл для скачивания.",
                preview: `<div style="padding:10px 0 4px;text-align:center">
                    <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#06b6d4,#8b5cf6);margin:0 auto 6px;font-size:16px;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700">МК</div>
                    <div style="font-size:10px;color:#fff;font-weight:700;margin-bottom:2px">Мария Козлова</div>
                    <div style="font-size:7px;color:#9ca3af;margin-bottom:8px">Помогаю бизнесу расти с AI</div>
                    <div style="display:flex;gap:4px">
                        <div style="flex:1;background:rgba(6,182,212,.1);border-radius:6px;padding:6px 2px;text-align:center"><div style="font-size:11px;color:#22d3ee;font-weight:700">150+</div><div style="font-size:6px;color:#9ca3af">клиентов</div></div>
                        <div style="flex:1;background:rgba(139,92,246,.1);border-radius:6px;padding:6px 2px;text-align:center"><div style="font-size:11px;color:#a78bfa;font-weight:700">5 лет</div><div style="font-size:6px;color:#9ca3af">опыта</div></div>
                        <div style="flex:1;background:rgba(16,185,129,.1);border-radius:6px;padding:6px 2px;text-align:center"><div style="font-size:11px;color:#34d399;font-weight:700">20+</div><div style="font-size:6px;color:#9ca3af">проектов</div></div>
                    </div>
                </div>`
            },
            {
                id: 12,
                emoji: "💰",
                title: "Прайс-таблица",
                prompt: "Создай секцию с тарифными планами для любого бизнеса: Старт, Про, Бизнес. Карточки с ценой, списком фич (галочки/крестики), CTA-кнопка «Выбрать». Средний тариф выделен как «Популярный» (больше, яркий бордер, бейдж). Переключатель месяц/год со скидкой. Hover-анимации, адаптив, градиенты фиолетово-розовые. Выдай готовый HTML-файл для скачивания.",
                preview: `<div style="padding:8px 0 4px;display:flex;gap:5px">
                    <div style="flex:1;background:rgba(255,255,255,.05);border-radius:6px;padding:6px;text-align:center"><div style="font-size:7px;color:#9ca3af">Старт</div><div style="font-size:10px;color:#fff;font-weight:700">990₽</div><div style="font-size:6px;color:#6b7280;margin:3px 0">✓ 1 проект<br>✓ Базовый</div></div>
                    <div style="flex:1;background:rgba(124,58,237,.2);border:1px solid #7c3aed;border-radius:6px;padding:6px;text-align:center;transform:scale(1.05)"><div style="font-size:6px;background:#7c3aed;color:#fff;border-radius:3px;padding:1px 4px;display:inline-block;margin-bottom:2px">ХИТ</div><div style="font-size:7px;color:#a78bfa">Про</div><div style="font-size:10px;color:#fff;font-weight:700">2490₽</div><div style="font-size:6px;color:#6b7280;margin:3px 0">✓ 10 проектов<br>✓ Все фичи</div></div>
                    <div style="flex:1;background:rgba(255,255,255,.05);border-radius:6px;padding:6px;text-align:center"><div style="font-size:7px;color:#9ca3af">Бизнес</div><div style="font-size:10px;color:#fff;font-weight:700">5990₽</div><div style="font-size:6px;color:#6b7280;margin:3px 0">✓ Безлимит<br>✓ Поддержка</div></div>
                </div>`
            }
        ];

export const SPECIAL_CARD: PromptCard = {
            id: 13,
            emoji: "👑",
            title: "Секретный Мега-промпт",
            prompt: "Ты — мой персональный kodakode-ассистент. Я буду описывать идеи на простом языке, а ты создаёшь полноценный код. Правила: 1) Всегда выдавай готовый HTML-файл для скачивания, без внешних зависимостей, 2) Современный дизайн с тёмной темой и градиентами, 3) Мобильная адаптация, 4) CSS-анимации и микроинтеракции, 5) Комментарии на русском. Начнём: создай мне сервис для генерации бизнес-идей — пользователь выбирает нишу, бюджет и навыки, а приложение выдаёт 3 персональные идеи с планом действий на неделю.",
            special: true,
            preview: `<div style="padding:8px 0 4px;text-align:center">
                <div style="font-size:10px;color:#fbbf24;margin-bottom:6px;font-weight:700">✨ kodakode-ассистент ✨</div>
                <div style="background:rgba(251,191,36,.1);border:1px solid rgba(251,191,36,.3);border-radius:8px;padding:8px;text-align:left">
                    <div style="font-size:7px;color:#fbbf24;margin-bottom:4px">Ты описываешь:</div>
                    <div style="font-size:8px;color:#fde68a;margin-bottom:6px">«Хочу сервис бизнес-идей»</div>
                    <div style="font-size:7px;color:#fbbf24;margin-bottom:4px">AI создаёт:</div>
                    <div style="font-size:8px;color:#fde68a">Готовый проект с дизайном 🚀</div>
                </div>
            </div>`
        };
