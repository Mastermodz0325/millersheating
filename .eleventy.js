// .eleventy.js
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Copy static assets straight through to _site
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "static": "static" }); // for CMS uploads
  eleventyConfig.addPassthroughCopy({ "admin": "admin" });   // makes /admin work

  // Nunjucks "date" filter (fixes Netlify error: "filter not found: date")
  eleventyConfig.addFilter("date", (value, fmt = "yyyy-LL-dd") => {
    try {
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
