function clearWhiteSpace(obj) {
  function recurse(obj) {
    for (const key in obj) {
      let value = obj[key];
      if (value != undefined) {
        if (value && typeof value === "object") {
          recurse(value, key);
        } else {
          if (typeof value === "string") {
            value = value.trim();
            obj[key] = value;
          }
        }
      }
    }
  }
  recurse(obj);
}

const formatQuery = (data) => {
  let query = { ...data };
  delete query.page;

  if (query.city === "all") {
    delete query.city;
  }

  if (query.city) {
    query = { ...query, location: { city: query.city } };
    delete query.city;
  }

  return query;
};

module.exports = {
  clearWhiteSpace,
  formatQuery,
};
