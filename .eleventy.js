module.exports = function (eleventyConfig) {
  // Copy essential folders through to the final build
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "static": "static" }); // optional but safe

  return {
    dir: {
      input: ".",        // your site uses root-level HTML files
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["html", "md", "njk"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};

