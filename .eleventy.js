// .eleventy.js
module.exports = function (eleventyConfig) {
  // Copy your existing static assets straight through
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "static": "static" });

  // ✅ Copy the /admin folder so /admin loads on the live site
  eleventyConfig.addPassthroughCopy({ "admin": "admin" });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
