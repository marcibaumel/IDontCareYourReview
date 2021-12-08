/**TODO:
* 
*   1- Find all review tag
*   2- Set hide the tags
*   3- Creat a html pop up to show the review points
*
*/

const imdbPointClass = "RatingBarButtonBase__ContentWrap-sc-15v8ssr-0 jQXoLQ rating-bar__base-button"
const imdbPointId = "hero-rating-bar__aggregate-rating";

const x = browser.find_element_by_css_selector('[data-testid="hero-title-block__title"]')

const title = document.getElementsByClassName("RatingBarButtonBase__Header-sc-15v8ssr-1 bufoWn");

title[0].innerHTML = "Helloooo"

x.innerHTML = "HELLLLOOO"

document.getElementById(imdbPointId).style.visibility = 'hidden';

