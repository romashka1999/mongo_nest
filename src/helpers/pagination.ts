type PaginationOutput = { offset: number, limit: number}

export const paginate = (page: number, pageSize: number): PaginationOutput => {
    const offset = page * pageSize;
    const limit =  pageSize;
    return {
        offset, //start index point data fetching
        limit,  //limit data
    };
};