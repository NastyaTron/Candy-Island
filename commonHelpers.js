/* empty css                      */import{S as l,N as a,P as c}from"./assets/vendor-25e36fe5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();(()=>{const o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),links:document.querySelectorAll(".nav-link")};o.openModalBtn.addEventListener("click",i),o.closeModalBtn.addEventListener("click",i),o.links.forEach(n=>{n&&n.addEventListener("click",r)});function r(){o.modal.classList.add("is-hidden")}function i(){o.modal.classList.toggle("is-hidden")}})();new l(".swiper",{modules:[a,c],pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1200:{slidesPerView:3}}});
//# sourceMappingURL=commonHelpers.js.map
