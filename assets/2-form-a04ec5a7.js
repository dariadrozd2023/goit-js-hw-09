const l=document.querySelectorAll(".feedback-form label"),r=[];l.forEach(t=>{const e=t.querySelector("input, textarea");e&&(e.addEventListener("input",c),r.push(e)),t.addEventListener("submit",o=>{o.preventDefault();let a=!0;if(r.forEach(n=>{n.value.trim()===""&&(a=!1)}),!a){alert("Всі поля форми повинні бути заповнені");return}localStorage.removeItem(feedbackFormState),t.reset()})});function c(t){const e={email:document.querySelector('[name="email"]').value,message:document.querySelector('[name="message"]').value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}
//# sourceMappingURL=2-form-a04ec5a7.js.map
