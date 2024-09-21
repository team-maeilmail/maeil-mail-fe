import { CategoryEN } from '@/types';
import BASE_URL from './baseUrl';
import API_ROUTES from './routes';

export const postSubscribe = async ({
  email,
  category,
  code,
}: {
  email: string;
  category: CategoryEN;
  code: number;
}) => {
  const response = await fetch(`${BASE_URL}${API_ROUTES.post_subscribe}`, {
    method: 'POST',
    body: JSON.stringify({
      email,
      category,
      code,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('에러~');
  }
};

interface PostNewQuestionOptions {
  title: string;
  category: CategoryEN;
  content: string;
}

export const postNewQuestion = async ({ title, category, content }: PostNewQuestionOptions) => {
  const response = await fetch(`${BASE_URL}${API_ROUTES.post_new_question}`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      category,
      content,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('에러~');
  }
};

export const getDetailQuestion = async ({ id }: { id: string }) => {
  const response = await fetch(`${BASE_URL}${API_ROUTES.question}/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('에러 발생!');
  }

  const data = await response.json();

  return data;
};

interface GetQuestionByCategoryOptions {
  category: CategoryEN;
}

export const getQuestionByCategory = async ({ category }: GetQuestionByCategoryOptions) => {
  const response = await fetch(`${BASE_URL}${API_ROUTES.question}?category=${category}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('에러 발생!');
  }

  const data = await response.json();

  return data;
};
