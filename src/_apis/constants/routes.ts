const API_ROUTES = {
  subscribe: '/subscribe',
  verify_email: '/subscribe/verify/send',
  mailFrequency: '/subscribe/email-frequency',
  myQuestions: '/subscribe-question',
  myWeeklyQuestions: '/subscribe-question/weekly',
  question: '/question',
  post_new_question: '/admin/question',
  subscriberCount: '/statistics/subscribe',
} as const;

export const pathGenerator = {
  myQuestions: (email: string, page: number) =>
    `${API_ROUTES.myQuestions}?email=${email}&page=${page}&size=8`,
  myMailFrequency: (email: string) => `${API_ROUTES.mailFrequency}?email=${email}`,
  myWeeklyQuestions: (
    email: string,
    category: string,
    period: {
      year: number;
      month: number;
      week: number;
    },
  ) =>
    `${API_ROUTES.myWeeklyQuestions}?email=${email}&category=${category}&year=${period.year}&month=${period.month}&week=${period.week}`,
};

export default API_ROUTES;
