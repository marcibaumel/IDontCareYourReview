/**TODO:
* 
*   1- Find all review tag
*   2- Set hide the tags
*   3- Creat a html pop up to show the review points
*
*/


let elements = document.querySelectorAll('[data-test-id=UserReviews]');

for (let element of elements) {
  //element.style.display = "none";
  element.innerHTML= "<img src=\"imgs\shut-up-arnold-schwarzenegger.gif\" width=\"400px\" height=\"150px\">";
}

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

document.getElementsByClassName('RatingBarButtonBase__ContentWrap-sc-15v8ssr-0 jQXoLQ rating-bar__base-button')[0].style.visibility = 'hidden';
//document.getElementsByClassName('ipc-page-section ipc-page-section--base celwidget')[0].style.visibility = 'hidden';
//document.getElementsByClassName('UserReviewsHeader__Header-k61aee-0 egCnbs')[0].style.visibility = 'hidden';
//document.getElementsByClassName('styles__MetaDataContainer-sc-12uhu9s-0 cgqHBf')[0].style.visibility = 'hidden';
//document.getElementsByClassName('ipc-inline-list ReviewContent__StyledInlineList-vlmc3o-0 hyrmRe baseAlt')[0].style.visibility = 'hidden';

//for-ba kell
document.getElementsByClassName('ipc-rating-star ipc-rating-star--base ipc-rating-star--imdb')[0].style.visibility = 'hidden';


