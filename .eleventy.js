module.exports = function(eleventyConfig) {
  // copy through folders that aren’t templates
  eleventyConfig.addPassthroughCopy({"assets": "assets"});
  eleventyConfig.addPassthroughCopy({"static": "static"});   // for uploads
  eleventyConfig.addPassthroughCopy("admin");                 // <-- this fixes /admin 404

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
