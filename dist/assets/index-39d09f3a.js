(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function c(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=c(r);fetch(r.href,n)}})();const l=document.querySelector(".modal-develop"),de=document.querySelector(".delivery__edit"),ie=document.querySelector(".delivery-info__edit"),ae=l.querySelector(".modal__close-icon"),ue=l.querySelector(".button-select"),H=l.querySelector(".method"),_=l.querySelector(".addresses-point-block"),p=l.querySelector(".addresses-courier-block"),J=document.querySelector(".point__title"),Q=document.querySelector(".point__address"),me=document.querySelector(".delivery-info__title"),ye=document.querySelector(".delivery-info__address");function I(){X(),l.classList.add("modal-develop__show-modal"),document.body.style.overflowY="hidden";const t=l.querySelectorAll(".method__item");let e="Пункт выдачи";for(let o=0;o<t.length;o++){const r=t[o].querySelector(".method__text"),n=t[o].querySelector(".method__input"),s=r.getAttribute("data-method");J.textContent.trim()===s&&(n.checked=!0,e=s)}let c;if(e==="Пункт выдачи"){c=_.querySelectorAll(".address__label");let o=c[0].getAttribute("for"),r=document.getElementById(o);r.checked=!0}else c=p.querySelectorAll(".address__label");for(let o=0;o<c.length;o++){const r=c[o].textContent.trim();if(Q.textContent.trim()===r){let n=c[o].getAttribute("for"),s=document.getElementById(n);s.checked=!0}}}function B(){l.classList.remove("modal-develop__show-modal"),document.body.style.overflowY="scroll"}function _e(){const e=l.querySelector(".address__input:checked + .address__info").querySelector(".address__label").textContent.trim(),c=l.querySelector(".method__input:checked + .method__text").textContent;Q.textContent=e,J.textContent=c==="Курьером"?"Курьером":"Пункт выдачи",console.log(e),ye.textContent=e,me.textContent=c==="Курьером"?"Доставка курьером":"Доставка в пункт выдачи"}const F=(t,e)=>{const c=t.getAttribute("data-address");if(e==="courier"){const o=p.querySelector(`.address[data-address="${c}"]`);o.parentNode.removeChild(o)}else{const o=_.querySelector(`.address[data-address="${c}"]`);o.parentNode.removeChild(o)}},X=()=>{H.querySelectorAll(".method__input")[0].checked?(_.classList.remove("addresses-block--hidden"),p.classList.add("addresses-block--hidden")):(p.classList.remove("addresses-block--hidden"),_.classList.add("addresses-block--hidden"))},pe=()=>{H.addEventListener("change",()=>{X()}),de.addEventListener("click",I),ie.addEventListener("click",I),ae.addEventListener("click",B),ue.addEventListener("click",()=>{_e(),B()}),_.addEventListener("click",t=>{t.target.getAttribute("class")==="address__delete-svg"&&F(t.target,"point")}),p.addEventListener("click",t=>{t.target.getAttribute("class")==="address__delete-svg"&&F(t.target,"courier")})},u=document.querySelector(".modal-payment"),fe=document.querySelector(".payment__edit"),be=document.querySelector(".payment-by-card__edit"),Se=u.querySelector(".modal__close-icon"),qe=u.querySelector(".button-select"),ee=document.querySelector(".payment__card-number"),h=u.querySelectorAll(".card__number");function M(){u.classList.add("modal-payment__show-modal"),document.body.style.overflowY="hidden";for(let t=0;t<h.length;t++)if(ee.textContent.trim()===h[t].textContent.trim()){let e=h[t].getAttribute("for"),c=document.getElementById(e);c.checked=!0}}function w(){u.classList.remove("modal-payment__show-modal"),document.body.style.overflowY="scroll"}function ge(){const t=document.querySelector(".payment__card > img"),e=u.querySelector(".card__radio-btn:checked + .card__number").textContent.trim(),c=u.querySelector(".card__radio-btn:checked").id,o=document.querySelector(".payment-by-card__card-icon > img"),r=document.querySelector(".payment-by-card__card-number");ee.textContent=e,t.src=`./images/icons/cards-icons/${c}.svg`,console.log(o,`./images/icons/cards-icons/${c}.svg`),r.textContent=e,o.src=`./images/icons/cards-icons/${c}.svg`}const he=()=>{fe.addEventListener("click",M),be.addEventListener("click",M),Se.addEventListener("click",w),qe.addEventListener("click",function(){ge(),w()})},k=["товар","товара","товаров"],g=/[0-9]/,te=/^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/,i=t=>Number(t.replace(/[^\d.]/ig,"")),N=(t,e)=>{let c=[2,0,1,1,1,2];return e[t%100>4&&t%100<20?2:c[t%10<5?t%10:5]]},D=t=>t.toString().replace(/\B(?=(^.\d{3})+(?!\d))/g," "),d=document.querySelector("form"),O=document.querySelector(".form__label--name"),Ce=document.querySelector(".form__label--name > .form__field"),V=d.querySelector(".form__label--surname"),ve=d.querySelector(".form__label--surname > .form__field"),v=document.querySelector(".form__label--email"),oe=document.querySelector(".form__label--email > .form__field"),T=d.querySelector(".form__label--tel"),ke=d.querySelector(".form__label--tel > .form__field"),Ne=(t,e)=>{const c=t.querySelector(".form__field-error"),o=t.querySelector(".form__field-name");g.test(e.value)?(c.style.opacity=1,e.style.borderColor="rgba(245, 81, 35, 1)"):(c.style.opacity=0,e.style.borderColor="rgba(0, 0, 0, 0.2)"),e.value.length>0?o.style.opacity=1:o.style.opacity=0},xe=(t,e)=>{const c=t.querySelector(".form__field-error"),o=t.querySelector(".form__field-name");let r=e.value.replace(/[a-zA-Z\.&^%$_=?><!@#*]/,""),n=/(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g,s=r.replace(n,"+7 ($2) $3-$4-$5");!n.test(r)&&r.length===0?(console.log(r),c.style.opacity=0,e.style.borderColor="rgba(0, 0, 0, 0.2)"):(c.style.opacity=1,e.style.borderColor="rgba(245, 81, 35, 1)"),r.length>0?o.style.opacity=1:o.style.opacity=0,e.value=s},Le=(t,e)=>{const c=t.querySelector(".form__field-error"),o=t.querySelector(".form__field-name");g.test(e.value)?(c.style.opacity=1,e.style.borderColor="rgba(245, 81, 35, 1)"):(c.style.opacity=0,e.style.borderColor="rgba(0, 0, 0, 0.2)"),e.value.length>0?o.style.opacity=1:o.style.opacity=0},ce=(t,e)=>{const c=t.querySelector(".form__field-error"),o=t.querySelector(".form__field-name");te.test(e.value)?(c.style.opacity=0,e.style.borderColor="rgba(0, 0, 0, 0.2)"):(c.style.opacity=1,e.style.borderColor="rgba(245, 81, 35, 1)",c.textContent="Проверьте адрес электронной почты"),e.value.length===0?o.style.opacity=0:o.style.opacity=1},Ae=t=>{t.preventDefault();const e=d.querySelector(".form__label--name > .form__field").value,c=d.querySelector(".form__label--surname > .form__field").value,o=d.querySelector(".form__label--email > .form__field").value;d.querySelector(".form__label--tel > .form__field").value,ce(v,oe);let r=!g.test(e),n=!g.test(c),s=te.test(o);alert(r&&n&&s?"Заказ успешно создан!":"Форма заполнена неверно!")},Pe=()=>{O.addEventListener("input",()=>Le(O,Ce)),V.addEventListener("input",()=>Ne(V,ve)),v.addEventListener("input",()=>ce(v,oe)),T.addEventListener("input",()=>xe(T,ke)),d.addEventListener("submit",Ae)},b=document.querySelector(".products__icon"),z=document.querySelector(".products__list"),C=document.querySelector(".products__hide-info"),Z=document.querySelector(".products__checkbox"),Y=document.querySelector(".products__select-all"),Ee=document.querySelector(".total__product-count"),$e=document.querySelector(".total__price"),S=document.querySelector(".stock__icon"),R=document.querySelector(".stock__list"),W=()=>{const t=i(Ee.textContent);b.classList.contains("closed-list-icon")?(b.classList.remove("closed-list-icon"),z.style.display="none",C.style.display="block",C.textContent=`${t} ${N(t,k)} · ${$e.textContent}`,Z.style.display="none",Y.style.display="none"):(b.classList.add("closed-list-icon"),z.style.display="block",C.style.display="none",Z.style.display="block",Y.style.display="block")},K=()=>{S.classList.contains("closed-list-icon")?(S.classList.remove("closed-list-icon"),R.style.display="none"):(S.classList.add("closed-list-icon"),R.style.display="block")},Ie=()=>{W(),K(),b.addEventListener("click",W),S.addEventListener("click",K)},re=()=>{const t=document.querySelector(".nav__item--basket"),e=document.querySelectorAll(".product").length;t.dataset.count=`${e}`,e===0&&t.classList.remove("&::after")},x=document.getElementsByClassName("products")[0],f=x.getElementsByClassName("product"),Be=x.querySelector(".products__list"),L=x.querySelector(".checkbox-select-all"),Fe=document.querySelector(".stock__list"),q=document.getElementsByClassName("stock__item"),A=document.querySelector(".payment-write-off"),U=A.querySelector(".payment-write-off__description"),Me=A.querySelector(".checkbox__input"),j=document.querySelector(".order-button"),y=()=>{const t=document.querySelector(".total__price"),e=document.querySelector(".total__init-ptice"),c=document.querySelector(".total__item-discount"),o=document.querySelector(".total__product-count");let r=0,n=0,s=0,a=0;f.length===0&&(t.textContent="0 сом",e.textContent="0 сом",c.textContent="0 сом");for(let m of f){const se=m.querySelector(".checkbox__input"),E=m.querySelector(".price__total").textContent,$=m.querySelector(".price__initial-sum").textContent,le=m.querySelector(".count__sum").textContent;se.checked&&(r+=i(E),n+=i($),s+=i($)-i(E),a+=i(le))}t.textContent=`${r} сом`,e.textContent=`${n} сом`,c.textContent=`- ${s} сом`,o.textContent=`${a} ${N(a,k)}`},ne=t=>{const c=document.querySelector(".products").querySelector(`.product[data-product="${t}"]`),o=c.querySelector(".count__sum").textContent,r=c.querySelector(".price__initial-sum"),n=r.getAttribute("data-price"),s=c.querySelector(".price__total"),a=s.getAttribute("data-price");r.textContent=D((Number(o)*Number(n)).toFixed(2)),s.textContent=D((Number(o)*Number(a)).toFixed(2)),y()},we=()=>{for(let t of f){const e=t.querySelector(".checkbox__input");L.checked?e.checked=!0:e.checked=!1}y()},De=()=>{for(let t of f)t.checked||(L.checked=!1)},Oe=t=>{const e=t.getAttribute("data-product");for(let c of f)c.getAttribute("data-product")===e&&(c.remove(),re())},G=t=>{console.log(t),t.style.stroke==="rgb(203, 17, 171)"?t.style.stroke:t.style.stroke="rgb(203, 17, 171)"},Ve=t=>{const e=t.getAttribute("data-increment"),o=document.querySelector(".products").querySelector(`.product[data-product="${e}"]`),r=o.querySelector(".count__sum");if(o.querySelector(".count__remainder")){const n=o.querySelector(".count__remainder"),s=i(n.textContent);Number(r.textContent)<s&&(r.textContent=Number(r.textContent)+1),t.disabled=Number(r.textContent)===s}else r.textContent=Number(r.textContent)+1;ne(e),P()},Te=t=>{const e=t.getAttribute("data-decrement"),o=document.querySelector(".products").querySelector(`.product[data-product="${e}"]`),r=o.querySelector(".count__sum");let n=Number(r.textContent);if(n>1?(r.textContent=n-1,n=n-1):(o.parentNode.removeChild(o),re()),o.querySelector(".count__remainder")){const s=o.querySelector(".count__remainder"),a=i(s.textContent),m=o.querySelector(".count__increment");m.disabled=!(a>=Number(r.textContent))}ne(e),P()},ze=t=>{const e=t.getAttribute("data-missing-product");for(let c of q)c.getAttribute("data-missing-product")===e&&c.remove()},Ze=()=>{const t=document.querySelector(".out-of-stock"),e=document.querySelector(".stock__title");e.textContent=`Отсутствуют · ${q.length} ${N(q.length,k)}`,q.length===0&&(t.style.display="none")},P=()=>{if(!A.querySelector(".checkbox__input").checked)j.textContent="Заказать",U.style.display="block";else{let e=document.getElementsByClassName("total__price")[0].textContent;console.log(e),j.textContent=`Оплатить ${e}`,U.style.display="none"}},Ye=()=>{y(),L.addEventListener("click",we),Be.addEventListener("click",t=>{const e=t.target;e.getAttribute("class"),e.classList.contains("action__delete-product")&&(Oe(t.target),y()),(e.classList.contains("checkbox__span")||e.classList.contains("checkbox__input"))&&(De(),y()),e.classList.contains("action__add-favorite")&&G(e),e.classList.contains("count__increment")&&Ve(e),e.classList.contains("count__decrement")&&Te(e)}),Fe.addEventListener("click",t=>{const e=t.target;console.log(e),e.classList.contains("action__delete-product")&&(ze(t.target),Ze()),e.classList.contains("action__add-favorite")&&G(e)}),Me.addEventListener("click",P)};document.addEventListener("DOMContentLoaded",function(){pe(),he(),Pe(),Ie(),Ye()});
