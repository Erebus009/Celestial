export const getComments = async () => {
    return [
      {
        id: "1",
        body: "what a great photo!",
        username: "Jack",
        userId: "1",
        parentId: null,
        createdAt: "2021-12-04T23:00:33.010+02:00",
      },
      {
        id: "2",
        body: "Nice perspective and composition.",
        username: "John",
        userId: "2",
        parentId: null,
        createdAt: "2021-12-04T23:00:33.010+02:00",
      },
      {
        id: "3",
        body: "Beautiful!",
        username: "Anna",
        userId: "2",
        parentId: "1",
        createdAt: "2021-12-04T23:00:33.010+02:00",
      },
      {
        id: "4",
        body: "Instant Fav",
        username: "Melanie",
        userId: "2",
        parentId: "2",
        createdAt: "2021-12-06T23:00:33.010+02:00",
      },
    ];
  };
  
  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: "1",
      username: "John",
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };