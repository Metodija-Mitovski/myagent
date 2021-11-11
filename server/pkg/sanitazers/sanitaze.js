function clearWhiteSpace(obj) {
  // const res = {};
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

module.exports = {
  clearWhiteSpace,
};
