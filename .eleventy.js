// .eleventy.js
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Copy static assets THROUGH to _site
  eleventyConfig.addPassthroughCopy({"assets": "assets"});
  eleventyConfig.addPassthroughCopy({"static": "static"});
  eleventyConfig.addPassthroughCopy({"admin": "admin"}); // <-- makes /admin work

  // Safe "date" filter so Nunjucks can format dates if you use it in layouts
  eleventyConfig.addFilter("date", (value, fmt = "yyyy-LL-dd") => {
    try {
      // Accept Date or string
      const d = value instanceof Date ? value : new Date(value);
      return DateTime.fromJSDate(d).toFormat(fmt);
    } catch {
      return value;
    }
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};

