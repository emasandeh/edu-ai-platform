async function askAI() {
  const q = document.getElementById("question").value;
  const result = document.getElementById("result");

  if (!q) {
    result.innerHTML = "اكتب سؤال";
    return;
  }

  const user = getUser();

  if (user.used >= user.limit && user.plan === "free") {
    result.innerHTML = "🚫 انتهى الحد اليومي. ترقية مطلوبة";
    return;
  }

  result.innerHTML = "⏳ جارٍ الإجابة...";

  const answer = await askAI(q);

  user.used++;
  saveUser(user);

  result.innerHTML = "🤖 " + answer;
}
