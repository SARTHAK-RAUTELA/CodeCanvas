(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "TT-144";
    /* all Pure helper functions */
    function waitForElement(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }
    var thumbtechservices = `
  <div class="thumbtechservices">
  <h2 class="bmheading">Popular services near you.</h2>
  <div class="bm-item">
  <li><a href="https://www.thumbtack.com/instant-results/?zip_code=90066&keyword_pk=102906936611670860&project_pk=517046450169815067"><img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT+-+144+%7C+HP+Hero+Redesign/Sparkle_Icon_%C2%B7_Medium.png"> <p>House <br>Cleaning</p></a></li>
  <li><a href="https://www.thumbtack.com/instant-results/?zip_code=90066&keyword_pk=102906936628587357&project_pk=516161021990002698"><img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT+-+144+%7C+HP+Hero+Redesign/DIY-Effort_Icon_%C2%B7_Medium.png"> <p>Handyman <br> <span>j</span></p></a></li>
  <li><a href="https://www.thumbtack.com/instant-results/?zip_code=90066&keyword_pk=367799061344665605&project_pk=517046561932238849"><img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT+-+144+%7C+HP+Hero+Redesign/Energy_Icon_%C2%B7_Medium.png"> <p>Electrical and <br> Wiring Repair</p></a></li>
  <li><a href="https://www.thumbtack.com/instant-results/?zip_code=90066&keyword_pk=108249668856752917&project_pk=517046758073319441"><img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT+-+144+%7C+HP+Hero+Redesign/Brush_Icon_%C2%B7_Medium-1.png"> <p>Interior<br> Painting</p></a></li>
  <li><a href="https://www.thumbtack.com/instant-results/?zip_code=90066&keyword_pk=228629991346899932&project_pk=517046785496023060"><img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT+-+144+%7C+HP+Hero+Redesign/Trash_Icon_%C2%B7_Medium.png"> <p>Junk <br> Removal</p></a></li>
  <li><a href="https://www.thumbtack.com/instant-results/?zip_code=90066&keyword_pk=367799060310671361&project_pk=517046805709824017"><img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT+-+144+%7C+HP+Hero+Redesign/Dolly_Icon_%C2%B7_Medium.png"> <p>Local Moving<br>(Under 50 miles)</p></a></li>
  <li class="bmhideservice"><a href="https://www.thumbtack.com/instant-results/?zip_code=90066&keyword_pk=367799053227180037&project_pk=517046842712686592"><img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT+-+144+%7C+HP+Hero+Redesign/Repair-Support_Icon_%C2%B7_Medium.png"> <p>Appliance Repair or Maintenance</p></a></li>
  <li class="bmhideservice"><a href="https://www.thumbtack.com/instant-results/?zip_code=90066&keyword_pk=367799059811311616&project_pk=517046868953260048"><img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT+-+144+%7C+HP+Hero+Redesign/Preview-Carousel_Icon_%C2%B7_Medium.png"> <p>Floor Installation or Replacement</p></a></li>
  </div>
  </div>
  `;
    var reviews = `
  <div class="reviewsection desktop">
  <p> Trusted by +4.5M people <span> • </span>4.9/5 <span><img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT+-+144+%7C+HP+Hero+Redesign/Star-Filled_Icon_%C2%B7_Small.png"></span> with over 300k reviews on the App Store</p>
  </div>
  `;
    var mobilereviews = `
  <div class="reviewsection mobile">
  <p> Trusted by +4.5M people <span>4.9/5 <img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/TT+-+144+%7C+HP+Hero+Redesign/Star-Filled_Icon_%C2%B7_Small.png">with over 300k reviews on the App Store</span></p>
  </div>
  `;
    var imagesforappsection = ` <img src="https://production-next-images-cdn.thumbtack.com/i/511992410826965002/width/400.png">`;
    /* Variation Init */
    function init() {
      document.querySelector("body").classList.add(variation_name);
      var textValuesToCheck = ['Popular services in '];
      var elementsToModify = document.querySelectorAll('[class*="Type_title"]');
      elementsToModify.forEach((element) => {
        var fullTextContent = element.textContent.trim();
        if (textValuesToCheck.some(value => fullTextContent.startsWith(value))) {
          var parentElement = element.closest('.bg-white');
          if (parentElement) {
            parentElement.classList.add('bmhidesection');
          }
        }
      });
      if (document.querySelector('.bmhidesection [class*="Type_title5"]')) {
        if (!document.querySelector(".thumbtechservices")) {
          document.querySelector('.bmhidesection [class*="Type_title5"]').insertAdjacentHTML('afterend', thumbtechservices);
        }
      } else {
        var rootSiblingElement = document.querySelector('[data-testid="root"] + div');
        if (rootSiblingElement) {
          if (!document.querySelector(".thumbtechservices")) {
            rootSiblingElement.insertAdjacentHTML('afterend', thumbtechservices);
          }
        } else {
          var customerHeaderSiblingElement = document.querySelector('[class*="composable-customer-header"] + div');
          if (customerHeaderSiblingElement) {
            if (!document.querySelector(".thumbtechservices")) {
              customerHeaderSiblingElement.insertAdjacentHTML('afterend', thumbtechservices);
            }
          }
        }
      }
      if (!document.querySelector(".reviewsection.desktop")) {
        document.querySelector('#uniqueId4 ~ [class*="search-bar_zipCodeError"]').insertAdjacentHTML('afterend', reviews);
      }
      if (!document.querySelector('.reviewsection.mobile')) {
        document.querySelector('#uniqueId4 ~ [class*="search-bar_zipCodeError"]').insertAdjacentHTML('afterend', mobilereviews);
      }

      // Putting new heading

      // var heroElement = document.querySelector('html body [class*="homepage-hero_heavy"]');

      // if (heroElement) {

      //   heroElement.innerHTML = 'Home <span class="highlight">improvement,</span><br> made easy.';

      // }
      document.querySelector('html body [class*="homepage-hero_heavy"]').innerHTML =
        'Home <span class="highlight">improvement,</span><br> made easy.';


      function wrapDivs() {
        // Select the starting div with class bmhidesection
        var startDiv = document.querySelector('.bmhidesection');
        if (!startDiv) return; // Exit if starting div is not found
        // Select the next sibling divs after startDiv until we wrap 4 divs
        var siblingDivs = [];
        var currentDiv = startDiv.nextElementSibling;
        for (var i = 0; i < 2; i++) {
          if (currentDiv && currentDiv.tagName === 'DIV' && !currentDiv.classList.contains('wrapped-divs')) {
            siblingDivs.push(currentDiv);
            currentDiv = currentDiv.nextElementSibling;
          } else {
            break; // Exit loop if not enough valid sibling divs found
          }
        }
        // Create a new parent div
        var newParentDiv = document.createElement('div');
        newParentDiv.className = 'wrapped-divs'; // Assign a class to the new parent div for styling purposes
        // Append the selected divs to the new parent div
        siblingDivs.forEach(function (div) {
          newParentDiv.appendChild(div);
        });
        // Insert the new parent div after startDiv
        startDiv.parentNode.insertBefore(newParentDiv, startDiv.nextSibling);
        // Check if the .wrapped-divs element is empty, then remove it
        var wrappedDiv = document.querySelector('.wrapped-divs');
        if (wrappedDiv && !wrappedDiv.hasChildNodes()) {
          wrappedDiv.parentNode.removeChild(wrappedDiv);
        }
      }
      waitForElement(".bmhidesection", function () {
        wrapDivs()
      }, 50, 15000);
    }
    /* Initialise variation */
    function thumbtackTest144(list, observer) {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === "mark" && entry.name === "afterHydrate") {
          observer.disconnect();
          clearInterval(test144Interval);
          waitForElement("body", init, 50, 15000);
          window.isHydrated = true;
        }
      });
    }
    if (!window.isHydrated) {
      var test144Interval = setInterval(function () {
        waitForElement("body", init, 50, 15000);
      }, 50);
      setTimeout(function () {
        clearInterval(test144Interval);
      }, 3000);
      const observer = new PerformanceObserver(thumbtackTest144);
      observer.observe({ entryTypes: ["mark"] });
    } else {
      waitForElement("body", init, 50, 15000);
    }
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();