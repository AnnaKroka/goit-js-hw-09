const a=document.querySelector(".feedback-form");let t={email:"",message:""};const m=e=>{const o=e.target.name,r=e.target.value;t[o]=r,localStorage.setItem("feedback-form-state",JSON.stringify(t))},n=e=>{e.preventDefault(),e.target.reset(),localStorage.removeItem("feedback-form-state")};a.addEventListener("input",m);a.addEventListener("submit",n);
//# sourceMappingURL=2-form-DvD38g09.js.map
