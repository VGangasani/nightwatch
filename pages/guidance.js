
var GuidancePage = {

  header_search_input: "input[name='search-box']",
  search_send_string: "",
  search_result_page: "[class='container page']",
  search_result_click: "#root > div > main > div > div.container.page > div > div:nth-child(2) > div > div > ul > li > a",

  guidance_type: "//p[text()='guidance']",
  guidance_title: "//h1[text()]",
  guidance_summary: "p[class='summary']",

  /* Information panel */
  guidance_detailed_container: "[class='details-container']",
  guidance_created_date: "#root > div > main > div > div.container.page > div.top-section > div:nth-child(2) > div > span > time", //"//time[text()]",
  guidance_published_date: "//h5[text()='Published']",
  guidance_reviewed_date: "//h5[text()='Reviewed']",
  guidance_version: "//h5[text()='Version']",
  guidance_written_for: "//h5[text()='Written For']",

  /* Primary Image */
  guidance_primary_image: "[class='image']>img",
  guidance_primary_image_caption: "[class='caption-image']",
  guidance_in_this_guide: "//h5[text()='In this guide:']",

  /* Social panel */
  guidance_socials: "ul.socials",
  guidance_pdf: "//a[text()='PDF']",
  guidance_share: "//a[text()='Share']",
  guidance_print: "//a[text()='Print']",

  /* Accordion panel */
  guidance_accordion_section: "[name='section_1']", // unique value if accordion avaialble
  guidance_accordion: "[class='accordion']",
  guidance_accordion_header: "[class='accordion-header']",
  guidance_accordion_expanded_panel: "[class='accordion-panel']",




  /* Download panel */
  guidance_download_panel: "[class='downloads']",
  guidance_download_media: "[class='downloads']>div",
  guidance_download_img: "",
  guidance_download_title: "",
  guidance_download_details: "",
  guidance_download_body: "",


  /* Topics panel */
  guidance_topics_panel: "[class='topics']",
  guidance_topics_text: "//h2[text()='Topics']",
  guidance_topics_tagged: "[class='topics'] > ul > li",
  guidance_topics_model_window: "[class='ReactModal__Content ReactModal__Content--after-open']",


  /* Also see panel */
  guidance_also_see_panel: "[class='similarArticles']>div",
  guidance_also_see_text: "//h2[text()='Also see']",
  guidance_also_see_media: "[class='similarArticles']>div",
  guidance_also_see_img: "",
  guidance_also_see_title: "",
  guidance_also_see_details: "",
  guidance_also_see_body: "",

  /* Tagged terms */
  guidance_tagged_term_toggle_media: "//*[@onclick='{this.toggleModal}']", //"[class='article-term']", 
  guidance_tagged_term_title: "[class='modal-title']",
  guidance_sliding_model_other_terms_used_in: "[id=Other-terms-used-in]",


  /**Information Panel 'i' */
  guidance_information_panel_i: "img[id='helptext']",
  guidance_sliding_model: "//div[@class='modal fadeInRight animated']",
  guidance_sliding_model_content: "div[class='modal-content']",
  guidance_sliding_model_close: "div[class='close']",  //a[class='close-modal']
  




};





module.exports = GuidancePage;




//button(contains(., 'press me') type of xpath

// send some simple text to an input
// sendKeys = function (browser) {
//   browser.setValue('input[type=text]', 'nightwatch');
// };
// //
// // send some text to an input and hit enter.
// sendKeys_enter = function (browser) {
//   browser.setValue('input[type=text]', ['nightwatch', browser.Keys.ENTER]);
// };