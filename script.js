function copyCode(button) {
  const code = button.parentElement.querySelector("code").innerText;

  navigator.clipboard.writeText(code).then(() => {
    button.innerText = "Copied!";
    setTimeout(() => button.innerText = "Copy", 1500);
  });
}
