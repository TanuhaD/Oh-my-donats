!function(){var e,o,t,n,c,l;e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),n=document.querySelector(".site-nav__icon"),c=document.querySelector(".header"),l=function(){var t="true"===o.getAttribute("aria-expanded")||!1;if(o.setAttribute("aria-expanded",!t),n.classList.toggle("open-mode"),c.classList.toggle("header--lightgrey-color"),e.classList.toggle("is-open"),t)document.body.style.overflow="visible";else{document.body.style.overflow="hidden";var l=document.querySelector(".js-menu-container");document.querySelectorAll(".modal-nav__link").forEach((function(e){e.addEventListener("click",(function(){n.classList.remove("open-mode"),c.classList.remove("header--lightgrey-color"),l.classList.remove("is-open"),document.body.style.overflow="visible"}))}))}bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)},o.addEventListener("click",l),t.addEventListener("click",l),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(t){t.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))}();
//# sourceMappingURL=index.764ea107.js.map
