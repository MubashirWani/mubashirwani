document.addEventListener("DOMContentLoaded", function () {
  const coll = document.querySelectorAll(".collapsible");
  coll.forEach(btn => {
    btn.addEventListener("click", function () {
      let content = this.nextElementSibling;
      while (content && !content.classList.contains("content")) {
        content = content.nextElementSibling;
      }
      if (!content) return;

      this.classList.toggle("active");
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});
