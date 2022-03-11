import http from "../setup/http-common";

const getBooks = (pageSize=30) => {
    return http.get(`https://www.anapioficeandfire.com/api/books?pageSize=${pageSize}`);
  };


export   {
    getBooks
};
