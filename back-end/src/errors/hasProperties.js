function hasProperties(properties) {
    return function (req, res, next) {
      const { data = {} } = req.body;
      // console.log(req.body.data)
      try {
        properties.forEach((property) => {
          if (!data[property]) {
            // console.log(data)
            console.log("rejection in errors/hasProperties.js")
            const error = new Error(`A '${property}' property is required.`);
            error.status = 400;
            throw error;
          }
        });
        next();
      } catch (error) {
        next(error);
      }
    };
  }
  
  module.exports = hasProperties;