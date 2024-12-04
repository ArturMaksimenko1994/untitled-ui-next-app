// /lib
//   /api           # Функции для работы с API
//   /utils         # Общие утилиты
//   /hooks         # Пользовательские React хуки
//   /constants     # Константы и перечисления
//   /types         # Типы TypeScript
//   /services      # Сервисы для работы с данными

export interface Post {
    id: string;
    slug: string;
    title: string;
    description: string;
    imageSrc: string;
    author: string;
    link: string;
    createdAt: string;
    tags?: string[];
}