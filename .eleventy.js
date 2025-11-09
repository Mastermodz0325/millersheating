module.exports = function(eleventyConfig) {
  // Copy static assets straight through
  eleventyConfig.addPassthroughCopy({"assets": "assets"});
  eleventyConfig.addPassthroughCopy({"static": "static"}); // for CMS uploads
  // 👇 This line makes /admin available on the live site
  eleventyConfig.addPassthroughCopy({"admin": "admin"});

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
