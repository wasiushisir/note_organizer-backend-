exports.paginationHelpers = (data) => {
  const page = Number(data.page || 1);
  const limit = Number(data.limit || 0);
  const skip = (page - 1) * limit;

  return {
    page,
    limit,
    skip,
  };
};
