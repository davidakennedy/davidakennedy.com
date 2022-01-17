module.exports = function () {
  return {
    eleventyComputed: {
      eleventyNavigation: {
        parent: (data) => {
          if (data.title === "Just Call Me DK") {
            return false;
          } else {
            return "Just Call Me DK";
          }
        },
        key: (data) => {
          return data.title;
        },
        title: (data) => {
          if (data.title === "Just Call Me DK") {
            return "Home";
          }
        },
      },
    },
  };
};
