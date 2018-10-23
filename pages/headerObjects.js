
/**
 * Header Objects
 */
var headerPage = {
ncsc_welcome_message: "//h1[text()='Welcome to the National Cyber Security Centre']",   //"body", // "main *> h1",     
header_ncsc: "#ncsc-header",
header_logo: "#ncsc-header > nav.navbar.navbar-expand-md.navbar-dark.bg-color.bottom-border.fixed-top > div.container.justify-content-center.top-nav > div.collapse.navbar-collapse > div > img",
header_links_main: "#proposition-menu",
header_links: "[id='proposition-links']>li",
header_links_cisp_mediacentre_signin: "#headerlinks", //"[class='right-nav header-links']",
header_search_button:  "#ncsc-header > nav.navbar.navbar-expand-md.navbar-dark.bg-color.bottom-border.fixed-top > div.container.justify-content-center.top-nav > div.collapse.navbar-collapse > button > a > svg", //"#ncsc-header .btn.white-circle > a",

/**
 * Mobile view Objects
 */
mobile_header_logo: "#ncsc-header > nav.navbar.navbar-expand-md.navbar-dark.bg-color.bottom-border.fixed-top > div.container.justify-content-center.top-nav > div.navbar-toggler-container > div > div:nth-child(1) > img",
mobile_header_search_button: "#ncsc-header > nav.navbar.navbar-expand-md.navbar-dark.bg-color.bottom-border.fixed-top > div.container.justify-content-center.top-nav > div.navbar-toggler-container > div > div:nth-child(2) > div > button.btn.white-circle > a > svg > path",
mobile_header_menu_bars: "[class='navbar-toggler-icon']",

};

  module.exports = headerPage;
  
 
  
  